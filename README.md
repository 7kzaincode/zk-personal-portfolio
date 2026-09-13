<div align="center">

# Zain Khan — Personal Portfolio

An editorial, single-page portfolio for a computer engineering student building at the intersection of software, robotics, and physical systems.

[![React](https://img.shields.io/badge/React-19-20232a?logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)](https://vite.dev/)

[About](#about-the-site) · [Run locally](#run-locally) · [Customize](#customization) · [Project structure](#project-structure)

</div>

## About the site

This repository contains the source for my personal portfolio. The design takes a quiet, typography-first approach: a sticky index, a focused reading column, restrained color, and just enough motion to make the page feel alive.

The site highlights:

- my current and previous engineering experience;
- selected projects across AI, developer tools, spatial computing, and iOS;
- direct links to my GitHub, LinkedIn, résumé, email, and X profile;
- responsive navigation with active-section tracking; and
- reduced-motion support for visitors who prefer fewer animations.

## Built with

| Layer | Technology |
| --- | --- |
| UI | React 19 + TypeScript |
| Build tooling | Vite 6 |
| Styling | Tailwind CSS via CDN + scoped CSS |
| Typography | Newsreader + Inter |
| Deployment output | Static files in `dist/` |

The portfolio has no backend, database, or required environment variables.

## Run locally

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (included with Node.js)

### Setup

```bash
git clone https://github.com/7kzaincode/zk-personal-portfolio.git
cd zk-personal-portfolio
npm install
npm run dev
```

Vite serves the site at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run preview
```

`npm run build` creates an optimized static build in `dist/`. The preview command serves that build locally so you can check it before deploying.

## Customization

The current portfolio keeps its content close to the UI, so the main edits are easy to find:

- Update the bio and section copy in [`App.tsx`](./App.tsx).
- Edit experience, projects, and social links in [`constants.ts`](./constants.ts).
- Replace project artwork in [`images/`](./images/).
- Replace the résumé in [`public/`](./public/) and update its path in `SOCIAL_LINKS`.
- Adjust fonts, colors, global animation, or metadata in [`index.html`](./index.html).

When adding a project, follow the `DetailedProject` shape in `constants.ts`: give it a stable `id`, title, short description, rationale, technology tags, destination link, and image.

## Project structure

```text
.
├── App.tsx              # Active single-page layout and section navigation
├── constants.ts         # Experience, project, and social-link content
├── components/          # Playground, animation modules, and earlier UI components
├── images/              # Project and gallery artwork
├── public/              # Files copied directly into the production build
├── index.html           # Document metadata, fonts, Tailwind config, global CSS
├── index.tsx            # React entry point
├── types.ts             # Shared TypeScript models
└── vite.config.ts       # Vite development and build configuration
```

## Design notes

- **Editorial hierarchy:** Newsreader handles long-form content while Inter labels navigation, dates, and tags.
- **Deliberate restraint:** A cream background, warm orange accent, and narrow content measure keep the work readable.
- **Responsive by default:** The sidebar becomes a compact horizontal index on smaller screens.
- **Motion with an escape hatch:** Reveal effects are disabled through `prefers-reduced-motion`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Create the production build |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Check source and test types without scanning generated builds |
| `npm run test:animation-math` | Check throw velocity and hold-to-drop behavior |
| `npm run test:animations` | Exercise desktop, mobile, mouse, keyboard, touch, and reduced motion in Chromium |

## Ball interaction

The ball follows the About links, uses the email word as a catapult, and settles into a draggable toy. Catch it at any point; flick to throw or hold still before release to drop it. Focus the ball and use the arrow keys or Space to bounce it. **Replay ball** returns to About and restarts the sequence.

The **robots** link opens its original Ultimate Robot Knock-out Legend page. There is no robot animation. Reduced-motion preferences hide the ball.

`components/PortfolioPlayground.tsx` owns lifecycle and input; `components/animation/ball.ts` owns the ball. Email contact uses the visible font bounds rather than the line-height box. No animation framework or physics dependency is required.

The tests require Node 22.14+ and the local dev server on port 3000. If Chromium is missing, run `npx playwright install --only-shell chromium` once. Browser screenshots and videos are saved under the ignored `test-results/animations/` directory. Run the math tests and browser tests after changing ball motion or pointer input.

## Contact

Built by **Zain Khan**.

[GitHub](https://github.com/7kzaincode) · [LinkedIn](https://www.linkedin.com/in/zainkkhan/) · [Email](mailto:kn.zain@hotmail.com) · [X](https://x.com/sevenkzain)
