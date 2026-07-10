# Dinesh Johnson – Software Engineer Portfolio

![Portfolio Preview](./src/assets/profile.jpg)

> A lightning-fast, premium Bento-grid portfolio built with React, Vite, and custom CSS. Designed to showcase full-stack Java expertise through a calm, modern, and highly polished user experience.

## 🚀 Live Demo
**[View the Live Portfolio](https://dinesh-johnson.github.io/my-portfolio)**

---

## 🏗️ Architecture & Technical Decisions

This portfolio was explicitly designed to prioritize **performance, typography, and visual restraint**. Rather than relying on heavy component libraries, the entire UI system was built from scratch using custom CSS variables and CSS Grid.

### Why React & Vite?
As a Single Page Application (SPA), server-side rendering (SSR) via Next.js was deemed architectural overkill. Vite provides a lightning-fast HMR developer experience and compiles down to highly optimized, static vanilla JavaScript, CSS, and HTML perfectly suited for GitHub Pages deployment.

### 🎨 The "Nordic Slate" Design System
The visual identity takes inspiration from premium developer tools like Linear, Raycast, and Vercel. 
- **Palette**: Deep matte blues (`#0B1120`, `#182433`) instead of harsh blacks.
- **Typography**: Strictly controlled hierarchy using Inter, with tight letter-spacing (`-0.02em`) for headings to convey confidence and premium polish.
- **Micro-Interactions**: Ambient box-shadows and mathematically consistent `-4px` hover states over a strict `250ms` easing curve. No neon glows, no distracting glassmorphism.

---

## 🛠️ Core Stack

- **Framework**: React 18
- **Bundler**: Vite
- **Styling**: Vanilla CSS (Custom Properties + CSS Grid)
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Bootstrap Icons
- **Form Handling**: Web3Forms API
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 💡 Key Features

1. **Bento Grid Layout**: A highly responsive, modular grid system that scales flawlessly from 4K desktop monitors down to mobile devices without breaking the visual hierarchy.
2. **Serverless Contact Form**: Implemented `Web3Forms` to handle form submissions without requiring a dedicated backend or complex email server setup.
3. **SEO Optimized**: Fully configured `<meta>` tags and semantic HTML for robust search engine indexing.

---

## 👨‍💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dinesh-Johnson/my-portfolio.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Deploy to GitHub pages:**
   ```bash
   npm run deploy
   ```

---

*Designed and engineered by [Dinesh Johnson](https://github.com/Dinesh-Johnson).*
