# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 (Pages Router) portfolio/agency website for SMEW, deployed to GitHub Pages. The site is a static export with client-side interactivity, using Bootstrap for UI components, Firebase for backend services (contact forms), and various jQuery plugins for animations.

## Build & Development Commands

```bash
# Development
npm run dev              # Start dev server at localhost:3000
npm run clean            # Clear Next.js cache

# Production
npm run build            # Build for production
npm run export           # Export static site to ./out directory
npm start                # Start production server (not used for GitHub Pages)

# Deployment
npm run deploy           # Full deploy: clean out/, build, export, deploy to gh-pages

# Code Quality
npm run lint             # Run ESLint
```

## Architecture

### Static Export Configuration
- `next.config.js`: Configured with `assetPrefix: './'` for GitHub Pages
- `trailingSlash: false` to avoid redirect issues
- GitHub Actions workflow (`.github/workflows/nextjs.yml`) handles automatic deployment to GitHub Pages on push to main
- Sitemap generation via `next-sitemap` with base URL https://smew.tech

### Pages Structure (Pages Router)
- **`src/pages/_app.tsx`**: Global layout wrapper, initializes AOS animations, loads Bootstrap/jQuery scripts, includes Header/Footer on all pages
- **`src/pages/_document.tsx`**: Custom HTML document structure
- **Main pages**: `index.tsx` (home), `about.tsx`, `services.tsx`, `projects.tsx`, `contact.tsx`

### Components Organization
- **`src/components/`**: Reusable React components
  - `Header.tsx` / `Footer.tsx` / `NavBar.tsx`: Layout components
  - `AboutUs.tsx`, `Testimonial.tsx`, `Offer.tsx`: Section components
  - `ContactForm.tsx`: Firebase-integrated contact form
  - `banners/`: Page-specific banner components (HomeBanner, ServiceBanner, etc.)
  - `FirebaseConfig.tsx`: Firebase initialization using environment variables
  - `FloatingButtons.tsx`: Floating action buttons including language switcher

### Internationalization (i18n)
- **`src/contexts/LanguageContext.tsx`**: React context providing language state and `t()` translation function
- **`src/locales/`**: Translation JSON files (`en.json`, `vi.json`)
- Languages: English (`en`) and Vietnamese (`vi`)
- Language preference persisted to localStorage
- Usage in components: `const { t, language, setLanguage } = useLanguage();` then `t('key.path')`

### Styling
- Bootstrap 5.3.1 as base framework
- Custom CSS in `src/styles/`:
  - `style.css`: Main styles
  - `custom-style.css`: Additional customizations
  - `responsive.css`: Media queries
  - `special-classes.css`: Utility classes
- Owl Carousel CSS for carousels/sliders

### JavaScript Dependencies
- **Next.js Scripts**: Loaded in `_app.tsx` with strategy control
- **jQuery plugins**: Bootstrap, Owl Carousel, custom carousel logic, counter animations, video players
- **AOS (Animate On Scroll)**: Initialized in `_app.tsx` with 1000ms duration
- Scripts in `public/js/`: All vanilla JS/jQuery, loaded via Next.js `<Script>` component

### Firebase Integration
Environment variables required (prefix with `NEXT_PUBLIC_`):
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

Used for contact form submissions via Firestore.

## Important Patterns

### Static Asset Paths
All asset paths use relative `./` prefix (e.g., `./images/logo.png`, `./js/custom.js`) due to GitHub Pages deployment. Do not use absolute paths starting with `/`.

### Script Loading Strategy
- jQuery and Bootstrap must load `beforeInteractive` to ensure DOM manipulation works
- Other scripts can use default or lazy loading
- Order matters: jQuery → Bootstrap → plugins → custom scripts

### Styling Approach
- Mix of Bootstrap classes and custom CSS
- Avoid Tailwind despite it being in dependencies (legacy, not actively used)
- Use Bootstrap grid system (`container`, `row`, `col-*`)

### Data Fetching
This is a static site with no `getStaticProps` or `getServerSideProps`. All content is hardcoded in components or comes from client-side Firebase calls.

## Testing & Debugging

Since there are no test files in the repo:
- Manual testing via `npm run dev`
- Check build output with `npm run build`
- Test static export with `npm run export` and serve the `out/` directory locally
- Verify GitHub Actions deployment in `.github/workflows/nextjs.yml`

## Common Tasks

**Adding a new page:**
1. Create `src/pages/pagename.tsx`
2. Add navigation link in `src/components/NavBar.tsx`
3. Create banner component in `src/components/banners/PagenameBanner.tsx` if needed

**Updating styles:**
- Global changes: `src/styles/style.css` or `custom-style.css`
- Responsive: `src/styles/responsive.css`
- Component-specific: Use CSS classes in component files or add to `custom-style.css`

**Modifying Firebase config:**
- Update `src/components/FirebaseConfig.tsx`
- Ensure environment variables are set in deployment environment (GitHub Secrets for Actions)

**Adding/updating translations:**
1. Add keys to both `src/locales/en.json` and `src/locales/vi.json`
2. Use nested keys with dot notation (e.g., `"nav": { "home": "Home" }` accessed as `t('nav.home')`)
3. Import and use the hook: `import { useLanguage } from '../contexts/LanguageContext';`

**Deploying:**
- Push to `main` branch triggers automatic deployment via GitHub Actions
- Manual deploy: `npm run deploy` (uses gh-pages branch)
