# Mateo Falco — Portfolio

Personal portfolio website for Mateo Falco, Junior Developer from Montevideo, Uruguay. Built to present professional background, experience, and contact information to potential employers and collaborators.

---

## 1. Project Overview

This is a single-page portfolio website. Its purpose is simple: give anyone who lands on it a clear, honest picture of who Mateo Falco is, what he has done, and how to reach him.

The site has three sections:
- **Hero** — first impression, name, role, and contact CTA
- **About** — background, experience, education, languages, and personal section
- **Contact** — email (with copy to clipboard), GitHub, LinkedIn, and CV download

There is no login, no CMS, no database, and no backend. It is a pure static site that runs entirely in the browser after being built and deployed.

---

## 2. Tech Stack

### Next.js 16 (App Router)
The React framework used to structure and build the project. Next.js was chosen because it handles routing, server/client component separation, metadata, image optimization, and deployment to Vercel out of the box — with zero configuration needed. The App Router (introduced in Next.js 13) provides a cleaner file-based routing system using the `/app` directory.

### React 19
The UI library that all components are built with. Next.js is built on top of React, so this is a natural dependency. React's component model allows the UI to be split into reusable, isolated pieces (Hero, About, Contact, etc.).

### TypeScript 5
All files use TypeScript (`.tsx`). TypeScript adds static type checking on top of JavaScript, catching errors at compile time rather than runtime. For a project like this it also improves editor autocomplete and makes props and interfaces explicit.

### Tailwind CSS 4
A utility-first CSS framework. Instead of writing separate CSS files, styles are applied directly in JSX via class names (`className="flex items-center gap-4"`). This keeps styling co-located with markup and eliminates unused CSS in the final build. Tailwind 4 is configured via PostCSS and imported directly in `globals.css` with `@import "tailwindcss"`.

### Framer Motion 12
The animation library. Used for entrance animations in the Hero section (elements fading and sliding in on load) and scroll-triggered fade-in animations throughout the rest of the page via the `FadeIn` component. Framer Motion integrates directly with React and handles animation state, easing, and timing declaratively.

### lucide-react
A clean, consistent icon library for React. Used in the Contact section for the copy icon, check icon, external link icons, and the CV download icon. Chosen for its minimal style that matches the design system.

### Node.js
The JavaScript runtime that powers the development server (`npm run dev`) and the build process (`npm run build`). Not used at runtime — once the site is built and deployed, Node.js is no longer involved for visitors.

---

## 3. Architecture

### Frontend only — no backend, no database

This portfolio has no server-side logic, no API routes, no authentication, and no database. All content is hardcoded directly into the React components. This is intentional: a personal portfolio does not need dynamic data. Keeping it static means:

- Zero infrastructure to manage
- Instant global delivery via CDN
- No security surface area
- Free hosting on Vercel

### How Next.js App Router works here

The App Router uses the `/app` directory as the root. The `layout.tsx` file wraps every page with shared structure (fonts, metadata, analytics). The `page.tsx` file defines the single route (`/`) and renders all sections in order.

Because there is only one page, Next.js generates a single HTML file at build time. This is called **static site generation (SSG)** — the output is plain HTML, CSS, and JavaScript files that can be served from any CDN without a server.

### Server components vs client components

Next.js App Router defaults to **server components** — components that render on the server at build time and send plain HTML to the browser. This is great for performance because no JavaScript is sent for components that don't need interactivity.

Components that require browser APIs or React state must be marked with `"use client"` at the top of the file. In this project:

| Component | Type | Reason |
|---|---|---|
| `layout.tsx` | Server | Static wrapper, no interactivity |
| `page.tsx` | Server | Just composes other components |
| `Nav.tsx` | Client | Uses `useState` and `useEffect` for scroll detection |
| `Hero.tsx` | Client | Uses Framer Motion animations |
| `About.tsx` | Client | Uses Framer Motion via `FadeIn` |
| `Contact.tsx` | Client | Uses `useState` for clipboard copy feedback |
| `FadeIn.tsx` | Client | Uses `useRef` and `useInView` from Framer Motion |

---

## 4. Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, analytics wrapper
│   ├── page.tsx          # Single page: composes all sections
│   └── globals.css       # Global styles, Tailwind import, CSS variables
│
├── components/
│   ├── Nav.tsx           # Fixed top navigation bar
│   ├── Hero.tsx          # Full-viewport hero section
│   ├── About.tsx         # About section with cards
│   ├── Contact.tsx       # Contact section
│   └── FadeIn.tsx        # Reusable scroll-triggered animation wrapper
│
├── public/
│   ├── MyPhoto.PNG                # Profile photo used in Hero section
│   ├── Resume Mateo Falco.pdf     # CV file linked in Contact section
│   └── favicon.ico                # Browser tab icon
│
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

### `/app`

- **`layout.tsx`** — The root layout. Loads the Geist Sans and Geist Mono fonts from Google Fonts, sets the HTML `lang` attribute, defines all `<head>` metadata (title, description, Open Graph, Twitter card, robots), and wraps children with the Vercel Analytics component.
- **`page.tsx`** — The only page in the app. Imports and renders `Nav`, `Hero`, `About`, and `Contact` in order inside a `<main>` element.
- **`globals.css`** — Imports Tailwind CSS, defines CSS custom properties (`--background`, `--foreground`), sets `scroll-behavior: smooth`, and configures scrollbar styling.

### `/components`

See [Section 5](#5-components) for detailed descriptions of each component.

### `/public`

Files in `/public` are served at the root URL. For example, `public/MyPhoto.PNG` is accessible at `/MyPhoto.PNG` in the browser. Next.js does not process these files — they are copied as-is into the build output.

---

## 5. Components

### `Nav.tsx`

The fixed navigation bar at the top of the page. It:
- Stays fixed (`position: fixed`) at all times as the user scrolls
- Listens to the `scroll` event via `useEffect` and adds a frosted-glass background (`bg-white/90 backdrop-blur-xl`) once the user scrolls past 32px
- Renders three links: **Home** (`#`), **About** (`#about`), **Contact** (`#contact`)
- Animates in on page load with a subtle slide-down using Framer Motion

### `Hero.tsx`

The first section the visitor sees. Full viewport height (`min-height: 100vh`). It contains:
- A circular profile photo on the left (loaded via Next.js `<Image>` for automatic optimization)
- Name, role/location, headline, description, and a "Contact me" CTA button on the right
- All elements animate in sequentially using Framer Motion's `initial`/`animate` with staggered `delay` values

### `About.tsx`

A content-rich section with three parts:
- **Part 1** — Centered text block: "ABOUT ME" label, large headline, paragraph, GitHub and LinkedIn links
- **Row 1** — Three equal cards side by side: Experience, Education, Languages
- **Row 2** — One full-width card: Beyond the Screen

Each part is wrapped in `<FadeIn>` with a small staggered delay so they animate in as the user scrolls down.

### `Contact.tsx`

The final section. Contains a centered title, subtitle, and a single white card with:
- **Email row** with a copy-to-clipboard button (managed via `useState` — shows a checkmark for 2 seconds after copying)
- **GitHub and LinkedIn** buttons side by side
- **View / Download CV** button that opens the PDF in a new tab

All external links use `target="_blank" rel="noopener noreferrer"` for security.

### `FadeIn.tsx`

A reusable animation wrapper component. It uses Framer Motion's `useInView` hook to detect when the wrapped element enters the viewport, then transitions it from `opacity: 0, y: 20` to `opacity: 1, y: 0`.

Props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Content to animate |
| `delay` | `number` | `0` | Animation delay in seconds |
| `className` | `string` | `""` | Optional CSS classes |
| `direction` | `"up" \| "left" \| "none"` | `"up"` | Direction of entrance |

The `once: true` option on `useInView` ensures the animation only runs once — it won't replay if the user scrolls back up.

---

## 6. Styling System

### Tailwind CSS

Tailwind is used for layout utilities (`flex`, `grid`, `items-center`, `gap-*`), responsive breakpoints (`sm:text-2xl`), hover states (`hover:opacity-50`, `hover:bg-gray-50`), and transitions (`transition-opacity duration-200`).

For precise values not covered by Tailwind's default scale — exact colors, pixel sizes, font sizes, border-radius — inline `style` props are used. This keeps the design pixel-accurate without needing to extend the Tailwind config.

### Color Palette

| Role | Value | Usage |
|---|---|---|
| Background | `#f8f9fa` | All sections |
| Primary text | `#0f0f0f` | Headings, labels, buttons |
| Accent / blue | `#1d4ed8` | Role line in Hero, card labels in About |
| Secondary text | `#64748b` | Body paragraphs, card content |
| Muted text | `#94a3b8` | Small uppercase labels in Contact |
| Card background | `#ffffff` | All cards in About and Contact |
| Card border | `#e2e8f0` | All card borders, dividers |

### Typography

The project uses **Geist Sans** (a clean geometric sans-serif by Vercel) as the primary font, loaded via `next/font/google` in `layout.tsx`. This approach loads fonts at build time and injects them as CSS variables, avoiding layout shift and external font requests at runtime.

Font sizes use `clamp()` for responsive scaling on key headings (e.g., `clamp(3rem, 7vw, 5.5rem)`), so they scale smoothly between mobile and desktop without breakpoint-specific overrides.

### Spacing

Sections use `140px` top and bottom padding. Cards use `48px` internal padding. The main container is capped at `1100px` for the About section and `640px` for the Contact section, both centered with `margin: 0 auto`.

---

## 7. Animations

### Hero entrance animations

Each element in the Hero section uses Framer Motion's `motion` components with explicit `initial`, `animate`, and `transition` props. Elements start invisible and slightly offset (`opacity: 0, y: 20`) and animate to their final position with staggered delays (0.1s, 0.2s, 0.32s, etc.), creating a cascading reveal effect on page load.

The easing curve used throughout is `[0.21, 0.47, 0.32, 0.98]` — a custom cubic bezier that starts fast and settles smoothly.

### Scroll-triggered animations

The `FadeIn` component uses Framer Motion's `useInView` hook with a `-80px` root margin. This means the animation triggers 80px before the element fully enters the viewport, so it feels natural rather than delayed.

```tsx
const isInView = useInView(ref, { once: true, margin: "-80px" });
```

When `isInView` becomes `true`, Framer Motion transitions the element from its initial hidden state to `opacity: 1, y: 0, x: 0` over 500ms. The `once: true` flag prevents re-animation on scroll back.

---

## 8. Deployment

### Running locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`. The dev server supports hot module replacement — changes to any file are reflected instantly in the browser without a full reload.

```bash
# Build for production
npm run build

# Preview the production build locally
npm start
```

### Deploying to Vercel

This project is deployed on [Vercel](https://vercel.com), the hosting platform built by the creators of Next.js.

The deployment works as follows:

1. The GitHub repository is connected to a Vercel project
2. Every time a commit is pushed to the `main` branch, Vercel automatically:
   - Pulls the latest code
   - Runs `npm run build` to generate the static output
   - Deploys the result to its global CDN
3. The live site updates within ~30 seconds of pushing

Vercel also runs `@vercel/analytics` (already wired up in `layout.tsx`) to provide basic page view statistics from the Vercel dashboard — no setup needed.

### Environment

No environment variables are required. There are no API keys, secrets, or external services to configure.

---

## 9. How to Make Changes

### Editing content

All content is hardcoded in the component files. To change text, photos, or links:

| What to change | Where |
|---|---|
| Name, role, headline, description | `components/Hero.tsx` |
| About text, experience, education, languages | `components/About.tsx` |
| Email, GitHub URL, LinkedIn URL | `components/Contact.tsx` |
| Page title and SEO metadata | `app/layout.tsx` |
| Profile photo | Replace `public/MyPhoto.PNG` (keep the exact filename) |
| CV file | Replace `public/Resume Mateo Falco.pdf` (keep the exact filename) |

### Pushing changes to update the live site

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "update about section"

# Push to main — Vercel deploys automatically
git push origin main
```

That's it. Vercel detects the push, rebuilds the site, and the live URL is updated within about 30 seconds.
