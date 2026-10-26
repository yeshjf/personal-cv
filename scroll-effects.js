// Reveal each CV section as it enters the viewport. Content stays visible
// when JavaScript, IntersectionObserver, or motion effects are unavailable.
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const selector = [
    ".site-header .brand",
    ".site-header .site-nav",
    ".hero-copy",
    ".profile-frame",
    ".section-label",
    ".section-heading",
    ".about-card",
    ".education-card",
    ".skills-panel",
    ".project-card",
    ".achievement-card",
    ".contact-inner > *",
    ".site-footer > *"
  ].join(", ");
  const elements = [...document.querySelectorAll(selector)];

  elements.forEach(element => {
    const siblings = [...element.parentElement.children];
    const delay = Math.min(siblings.indexOf(element), 2) * 90;
    element.style.setProperty("--reveal-delay", delay + "ms");
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.01 });

  elements.forEach(element => observer.observe(element));
  document.documentElement.classList.add("motion-ready");

  reducedMotion.addEventListener("change", event => {
    if (!event.matches) return;
    observer.disconnect();
    document.documentElement.classList.remove("motion-ready");
  }, { once: true });
})();
