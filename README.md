# Aibooking.dk

Marketing website for Aibooking.dk — a React + TypeScript SPA built with Vite and Tailwind CSS, deployed on [Vercel](https://vercel.com).

## Tech stack

- **React 18 + TypeScript + Vite** — SPA with manual client-side routing (`src/App.tsx`), no router library
- **Tailwind CSS** for styling
- **react-i18next** for Danish/English content
- **Static blog content** in `src/content/blog.ts` — no database
- **Vercel serverless function** (`api/contact.ts`) for the industry contact form, sending email via [Resend](https://resend.com)

There is no backend database. Content that used to live in Supabase (blog posts/categories, contact form submissions) has been moved to static TypeScript content and a serverless email endpoint, respectively.

## Development

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build      # generates sitemap.xml, then builds for production
npm run typecheck   # tsc --noEmit
npm run lint         # eslint
npm run preview      # preview the production build locally
```

## Environment variables

Copy `.env.example` to `.env` and fill in the values used by the contact form API route (`api/contact.ts`):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key for [Resend](https://resend.com), used to send contact form notifications |
| `CONTACT_EMAIL_TO` | Address that receives contact form submissions |
| `CONTACT_EMAIL_FROM` | Verified sender address/domain in Resend |

These are server-side only (no `VITE_` prefix) — set them in the Vercel project's Environment Variables settings, not in client code.

## Editing blog content

Blog posts and categories live in `src/content/blog.ts` — add or edit entries in the `blogPosts` / `blogCategories` arrays directly, no database or migration needed. The current entries are placeholders; replace `content_da` / `content_en` (HTML strings) with real article content before publishing.

## Deployment

The site deploys on [Vercel](https://vercel.com):

1. Import this repository into a Vercel project (framework preset: Vite, auto-detected)
2. Set the environment variables listed above in the Vercel project settings
3. Push to the connected branch — Vercel builds and deploys automatically

`vercel.json` rewrites all non-`/api` routes to `index.html` so the SPA's client-side routing works on direct page loads and refreshes.

## Maintained with Claude Code

This project is developed and maintained using [Claude Code](https://claude.com/claude-code). See `CLAUDE.md` for project-specific context.
