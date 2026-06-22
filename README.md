# Forbes Middle East News App - Nuxt 3 (SSR)

A production-grade, highly-performant, and accessibility-compliant news application replicating the Forbes Middle East aesthetic, built with Nuxt 3, TypeScript, and Tailwind CSS. The application connects to a server-side JSON API, featuring dynamic page titles, JSON-LD Schema structured data, dynamic hydration-safe theme persistence, skeletons, and elegant hover animations.

---

## Features

- **Nuxt 3 SSR Engine**: Rapid page load times, fully optimized for search crawlers.
- **Server-Side Data Hydration**: Mock database serving client endpoints dynamically via `/server/api/*` routes.
- **Responsive Web Design**: Perfectly responsive layouts shifting gracefully across mobile, tablet, and desktop breakpoints.
- **Dynamic SEO & Social Meta**: Employs `useSeoMeta()` and generates custom schema tags `application/ld+json` (NewsArticle context) dynamically.
- **Accessibility (a11y)**: Fully semantic HTML5 markers, ARIA roles, focus state highlights, and complete keyboard nav.
- **Dark Mode**: Persisted user theme preference synchronized with `localStorage` and system defaults.
- **Micro-Animations**: Hover animations on card images, sliding navigation drawer transitions, and pulse skeletons.

---

## Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm (v10.x or later)

### Installation Steps

1. Navigate to the project directory:
   ```bash
   cd C:\Users\HP\.gemini\antigravity-ide\scratch\forbes-nuxt
   ```
2. Install the node modules:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.
4. Compile the production bundles:
   ```bash
   npm run build
   ```
5. Preview the built application:
   ```bash
   npm run preview
   ```

---
### Live Preview
- link: https://forbes-design.vercel.app/


## Project Structure

```
/forbes-nuxt
├── app/                    # Nuxt 4/3 Compatibility Source directory
│   ├── assets/
│   │   └── css/
│   │       └── main.css    # Global stylesheet, Google webfonts, Tailwind layers
│   ├── components/         # Reusable layouts, cards & interactive widgets
│   │   ├── card/           # NewsCard.vue, NewsCardSkeleton.vue, ArticleSkeleton.vue
│   │   ├── layout/         # Header.vue, Navbar.vue, Footer.vue
│   │   └── widget/         # NewsletterForm, Search controls
│   ├── composables/        # Shared logic wrappers (useTheme.ts, useArticles.ts)
│   ├── layouts/            # Base default page wrap
│   │   └── default.vue
│   ├── pages/              # Dynamic router views (index.vue, article/[slug].vue)
│   └── types/              # Unified TypeScript definitions (index.ts)
├── server/                 # Nuxt server engine
│   ├── api/
│   │   ├── articles/
│   │   │   └── [slug].ts   # API: /api/articles/[slug] (details + related articles)
│   │   ├── articles.ts     # API: /api/articles (list, search, categories)
│   │   └── categories.ts   # API: /api/categories (list)
│   └── utils/
│       └── mockDb.ts       # Central static mock database matching Figma designs
├── nuxt.config.ts          # Nuxt module registration, custom transitions
├── tailwind.config.ts      # Custom theme system, breakpoints, shadows & typography
└── tsconfig.json           # Compiler rules
```

---

## Architectural Decisions

1. **Server-Side API Routes (`/server/api/`)**: Isolates the data store from client execution. By serving data from endpoints, the application simulates enterprise databases, supports query params (search, category filtering), and enables instant SSR rendering.
2. **Dynamic JSON-LD Injection**: Promotes rich google search results. The article page automatically appends custom script nodes detailing author profile, headlines, images, and publisher details dynamically on the server.
3. **Layout Isolation**: Splitting structurally recurring components (`Header`, `Navbar`, `Footer`) into `layouts/default.vue` makes core pages lightweight and isolated.
4. **Transition Timing**: Transition speed configured at `300ms` for color changes and `250ms` for page transitions to maximize responsive user feel without introducing layout jank.

---

## Performance Optimizations

- **Nuxt Image (`<NuxtImg>`)**: Automatically outputs optimized responsive sizes with lazy-loading configurations.
- **Route Code Splitting**: Built-in dynamic imports ensure chunks are fetched only when navigation paths are visited.
- **Google Font Preconnecting**: Injected preload and preconnect links in `nuxt.config.ts` prevent render-blocking typography lags.
- **Server API Aggregation**: The detailed endpoint `/api/articles/[slug]` returns *both* the targeted article details and its *similar articles* in a single HTTP cycle, cutting down client-side network roundtrips.

---

## Accessibility & SEO Features

- **ARIA labels**: Placed on search drawers, menus, social icon anchors, and toggle utilities to ensure clear announcement on screen readers.
- **Semantic HTML5**: Elements like `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>` are used to outline structure.
- **Focus Rings**: Standardised high-contrast border outlines are bound to critical interactive buttons and navigation links.
- **Color Contrast**: Complies with WCAG AA guidelines in both light and dark modes.
- **Dynamic SEO Head Tags**: Automatic titles, description tags, and social Open Graph/Twitter card attributes match page content dynamically.
- **Structured Schema Markup**: Rich metadata tags injected on the server side make content easily understandable by search crawlers.
