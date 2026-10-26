# Mary Rose Alliones — Personal CV

A responsive personal CV website presenting my profile, education, skills, selected projects, achievements, certifications, and contact links.

- **Student:** Mary Rose Alliones
- **Program:** 4th Year, Bachelor of Science in Information Technology (BSIT 4G)
- **School:** Davao del Norte State College, Panabo City
- **Course:** IT 415 – Application Development and Emerging Technologies
- **Live website:** [personal-cv-sepia.vercel.app](https://personal-cv-sepia.vercel.app/)

## Technologies used

- Semantic HTML5
- CSS3, including Grid, Flexbox, responsive layouts, and reduced-motion support
- Vanilla JavaScript with IntersectionObserver for scroll entrance effects
- Google Fonts with local font fallbacks
- Git and GitHub for version control
- Vercel for hosting

The site does not need a build step or JavaScript framework. Content remains visible when JavaScript or scroll animations are unavailable.

## Project structure

~~~text
.
├── index.html       # CV content and navigation
├── styles.css       # Design system and responsive styles
├── scroll-effects.js # Scroll entrance effects
├── images/          # Profile, project, and certificate images
└── README.md        # Project documentation
~~~

## Run locally

Open index.html in a browser. Keep it beside styles.css and the images folder so the styles and pictures load. A local server such as VS Code Live Server also works.

## Accessibility and usability

The page includes a skip link, semantic sections and headings, keyboard-visible focus styles, descriptive image text, responsive navigation, and reduced-motion support. Sections reveal once as they enter the viewport; the effects are disabled when reduced motion is preferred. Award and certificate previews open their full-size images.

## Deployment

The public site is available at [https://personal-cv-sepia.vercel.app/](https://personal-cv-sepia.vercel.app/). This repository contains the static source to deploy from its root directory; Vercel needs no framework preset or build command.
