# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Marketing website for Aibooking.dk. React 18 + TypeScript + Vite SPA, styled with Tailwind CSS, deployed on Vercel. Danish is the primary language; English is available via `react-i18next` (see `src/i18n`).

## Routing

There is no router library. `src/App.tsx` maps URL paths to page components manually via `window.history.pushState` and a `popstate` listener. When adding a page:

1. Add the page component under `src/pages`
2. Add its path to `pathMap` and `pageMap` in `src/App.tsx`
3. Add the route to `routeMap` in `scripts/generate-sitemap.js` so it appears in `public/sitemap.xml`

URLs are Danish and SEO-optimized (e.g. `/funktioner`, `/brancher`, `/kontakt`) — keep that convention for new top-level pages.

## Blog content

Blog posts and categories are static data in `src/content/blog.ts` (no database). `BlogPage`, `BlogPostPage`, and `BlogCategoryPage` read from it via the exported helpers (`getPublishedPosts`, `getPostBySlug`, `getPostsByCategory`, `getRelatedPosts`). To add a post, add an entry to the `blogPosts` array and update `scripts/generate-sitemap.js`'s `BlogPostPage.tsx` route list.

## Contact form

The industry contact form (`src/components/industries/ContactForm.tsx`) POSTs to `api/contact.ts`, a Vercel serverless function that sends an email via Resend. It requires `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, and `CONTACT_EMAIL_FROM` set as Vercel environment variables (see `.env.example`).

## No backend database

This project previously used Supabase (Bolt-generated) for blog content and contact form storage. That has been removed in favor of static content + a Vercel serverless email function — do not reintroduce a Supabase dependency without discussing it first.

## Commands

```bash
npm run dev         # local dev server
npm run typecheck    # tsc --noEmit
npm run lint          # eslint
npm run build         # generates sitemap.xml, then vite build
```
