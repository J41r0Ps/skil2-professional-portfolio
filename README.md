# 🚀 Jairo Nacurena — 3D Professional Portfolio & Web API

Welcome to my personal portfolio repository! Developed as part of the **Skills Integration Lab 2 (SKIL2)** at Thomas More University, this project serves as my digital business card. It goes beyond a standard website by offering an interactive **3D Web Experience** that showcases my technical evolution, proudly presenting my real-world projects across Software Development, Data Science, Artificial Intelligence, and DevOps.

🌍 **Live Website:** [View Portfolio on Azure](https://jairo-portfolio-frontend-eqcaa5gwdyavc4fq.westeurope-01.azurewebsites.net/)
💼 **LinkedIn:** [Connect with me](https://www.linkedin.com/in/jairo-nacurena/)

## ✨ Key Features

* **Interactive 3D Experience:** An orbitable 3D laptop rendered with React Three Fiber / Three.js, lazy-loaded so it never blocks the first paint.
* **Design System:** A consistent "quiet tech" visual language — Space Grotesk / Geist / Geist Mono typography, a single sage accent, numbered section headers, film grain, and cursor-tracked 3D-tilt spotlight cards.
* **Modern Motion:** Scroll progress bar, masked headline reveals, parallax hero, staggered scroll-triggered entrances — all GPU-composited (transform/opacity only) and disabled automatically for users who prefer reduced motion.
* **Native Dark/Light Mode:** Theme toggle persisted to localStorage with system-preference detection, built natively with Tailwind CSS.
* **Multilingual Support (i18n):** Fully accessible in **English, Dutch, Spanish, and French** to connect with a broader, international professional network.
* **Performance-first:** WebP images and compressed GLTF textures (~40 MB ➜ ~2 MB), code-split three.js bundle, async font loading, lazy images.
* **Agent & SEO ready:** Valid `robots.txt`, an [`llms.txt`](frontend/public/llms.txt) for AI crawlers, Open Graph metadata, and semantic, accessible markup (focus rings, ARIA labels, keyboard navigation).
* **Automated DevOps:** Fully containerized with Docker (multi-stage build → nginx with CSP/HSTS security headers) and continuously deployed to Microsoft Azure via GitHub Actions CI/CD.
* **Full-Stack Architecture (Phase 2):** A robust backend built with ASP.NET Core (.NET 8) serving dynamic data — the contact form ships when this lands.

## 🛠️ Tech Stack Overview

* **Frontend (UI/UX & 3D):** React 19, Vite, Tailwind CSS, React Three Fiber (Three.js), Framer Motion, React-i18next.
* **Backend & API (Phase 2):** ASP.NET Core Web API (C#)
* **Database:** Containerized SQL Database
* **Infrastructure & DevOps:** Docker, GitHub Actions, Microsoft Azure App Service

## 🧑‍💻 Development

```bash
cd frontend
npm install
npm run dev              # dev server with HMR
npm run lint             # ESLint (CI enforces zero errors)
npm run build            # production bundle in dist/
npm run preview          # serve the production build locally
npm run optimize:images  # compress new screenshots/photos to WebP (sharp)
```

> **Auditing performance?** Run Lighthouse against `npm run preview` (or the live site) in an incognito window — the dev server is unminified and untree-shaken by design, so its scores are meaningless.

## 📂 Repository Structure

This repository follows a monorepo structure to keep the full-stack ecosystem unified and easily maintainable:

* `/.github/workflows` — CI/CD pipeline: lint + build check ➜ Docker image ➜ Azure webhook deploy.
* `/frontend` — React Single Page Application:
  * `src/components` — page sections plus reusable motion pieces (`ScrollProgress`, `SpotlightCard`, `SectionHeader`).
  * `src/components/canvas` — the lazy-loaded three.js scene.
  * `src/constants` — content data (services, tech, experience, projects) referencing i18n keys.
  * `src/locales` — translations (en / nl / es / fr). Every user-facing string lives here.
  * `src/hoc/SectionWrapper` — section shell: anchor id, spacing, scroll-triggered stagger.
  * `scripts/optimize-images.mjs` — asset compression utility.
* `/backend` — ASP.NET Core Web API handling data persistence and business logic (Upcoming Phase).

---
*Developed by Jairo Nacurena — APP/AI Specialization, IT Factory, Thomas More University.*
