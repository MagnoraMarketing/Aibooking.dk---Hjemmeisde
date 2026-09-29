# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Marketing website for Aibooking.dk. React 18 + TypeScript + Vite SPA, styled with Tailwind CSS, deployed on Vercel. Danish is the primary language; English is available via `react-i18next` (see `src/i18n`).

## Routing

There is no router library. `src/App.tsx` maps URL paths to page components manually via `window.history.pushState` and a `popstate` listener. When adding a page:

1. Add the page component under `src/pages`
2. Add its path to `pathMap` and `pageMap` in `src/App.tsx`, and to `PAGE_PATHS` in `src/utils/pagePaths.ts`
3. Add the route to `routeMap` in `scripts/generate-sitemap.js` so it appears in `public/sitemap.xml`

Internal links must be real `<a href>` elements so crawlers can follow them: use `<PageLink page="…" onClick={() => onNavigate('…')}>` (`src/components/PageLink.tsx`), never a `<button>` that calls `onNavigate`. Render-time code must not touch `window`/`document` (use `currentPathname()` from `src/utils/currentPath.ts`), because pages are also rendered at build time.

## Prerendering and IndexNow

`npm run build` prerenders every URL in the sitemap to static HTML (`src/entry-server.tsx` + `scripts/prerender.js`), with that page's title, meta description, canonical, hreflang and content, so crawlers that don't run JavaScript see real pages. `vercel.json` `cleanUrls` serves `dist/funktioner.html` at `/funktioner`. The script warns about pages without an `<h1>`, under 300 words, or with a meta description over 160 characters — keep descriptions at 155 characters or less.

On Vercel production builds it also submits pages whose content changed since the live site (compared via `/indexnow-manifest.json`) to IndexNow, using the key file in `public/`, and sets sitemap `<lastmod>` to the date each page last changed.

URLs are Danish and SEO-optimized (e.g. `/funktioner`, `/brancher`, `/kontakt`) — keep that convention for new top-level pages.

## Blog content

Blog posts and categories are static data in `src/content/blog.ts` (no database). `BlogPage`, `BlogPostPage`, and `BlogCategoryPage` read from it via the exported helpers (`getPublishedPosts`, `getPostBySlug`, `getPostsByCategory`, `getRelatedPosts`). To add a post, add an entry to the `blogPosts` array and update `scripts/generate-sitemap.js`'s `BlogPostPage.tsx` route list.

## Contact form

The industry contact form (`src/components/industries/ContactForm.tsx`) POSTs to `api/contact.ts`, a Vercel serverless function that sends an email via Resend. Only `RESEND_API_KEY` must be set as a Vercel environment variable — `CONTACT_EMAIL_TO` and `CONTACT_EMAIL_FROM` are optional and fall back to sensible defaults (see `.env.example`).

## No backend database

Content is static and the contact form is a serverless email function — do not introduce a database or third-party backend dependency without discussing it first.

## Public-facing documentation

`README.md` is a product presentation for customers: describe features and benefits only. Do not name underlying technology vendors (voice, telephony, AI or hosting providers) in the README or other public docs. Internal SEO notes live in `docs/`.

## Commands

```bash
npm run dev         # local dev server
npm run typecheck    # tsc --noEmit
npm run lint          # eslint
npm run build         # generates sitemap.xml, then vite build
```
