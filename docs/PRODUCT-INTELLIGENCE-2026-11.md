# Product intelligence and organic growth plan — November 2026

Internal note. Phase 1–4 of the organic growth mission: what the product can actually do (from the backend code), where the public site says something different, and what to build next. The current SEO baseline and the 30/60/90-day measurement plan are in [SEO-AUDIT-2026-10.md](SEO-AUDIT-2026-10.md) and still apply.

## 0. Method and limits

- **Backend inspected read-only** from the backend repository (shallow clone of the default branch, 4 Nov 2026): routes, `lib/*`, the 51 database migrations and the widget script. Nothing in the backend, the app, the database or any integration was changed.
- **"Verified" means verified in code**: the tool, route and data flow exist and are wired up. I did not log in to the app or place real calls. Anything below marked *code-verified* should get one manual end-to-end test before it is used in a headline or a paid ad.
- **No Search Console, GA4, Ahrefs or keyword-volume access** in this session. Keywords below are chosen from search intent and product fit only. **No search volumes or difficulty scores are given, because none were measured.** Confirm them in GSC or a keyword tool before you prioritise.
- **No new competitor crawl.** The competitor findings in SEO-AUDIT-2026-10 §2 and §8 (retellai.com/da, JesperAI, telefonpasser.dk, snakk.ai, Intavia and others) are the latest available.
- **No real app screenshots** were taken. Doing that needs a login and a demo tenant with fictional data (see §11).

## 1. Frontend/backend boundary

| Area | Where | SEO treatment |
|---|---|---|
| Public marketing site | This repo → www.aibooking.dk (Vite SPA, prerendered, Vercel) | **Only SEO target** |
| Authenticated app | Backend repo → app.aibooking.dk (`/dashboard/*`, `/admin/*`, `/login`, `/signup`, `/accept-invite`, `/widget/[publicId]/preview`) | Already `noindex, follow` via `robots` metadata in `app/layout.tsx` **and** an `X-Robots-Tag: noindex, follow` header on every path (`next.config.mjs`). `/dashboard` and `/admin` redirect to `/login` without a session (middleware). The old Vercel host 301s to app.aibooking.dk. **Nothing to change.** |
| APIs, webhooks, widget.js | app.aibooking.dk `/api/*`, `/widget.js` | Covered by the same noindex header. Not linked from the sitemap. |
| Login/signup links on the public site | `src/utils/backend.ts`: `SIGNUP_URL` = app.aibooking.dk/signup, `LOGIN_URL` = /dashboard, `APP_URL` = /login?app=1 | Correct and unchanged. `public/robots.txt` doesn't block the app host, and it shouldn't, because a block would hide the noindex. |

**Login and indexing separation audit: no problems found.** The public sitemap only has marketing URLs, and app pages are kept out of the index by noindex, not by robots.txt, so crawlers can still read the directive.

## 2. Feature inventory (code-verified unless stated)

| # | Feature | What it does | Where (backend) | Status | Marketed publicly? |
|---|---|---|---|---|---|
| 1 | Agent types | Each agent is a **website widget** or a **phone agent** (`widgets.agent_type`) | migration 0036 | Implemented | Yes |
| 2 | Website widget | Embeddable script with **text chat**, **dictation** and **real-time voice** modes; chat history kept per visitor; clickable links rendered safely | `public/widget.js`, `/api/widget/*` | Implemented | Yes (/widget) |
| 3 | Inbound phone agent | Buy a number in the dashboard, or bring your own number (BYO); customers forward their existing number | `/api/customer/phone-numbers/{search,purchase,byo}`, `lib/phone-numbers` | Implemented | Yes |
| 4 | Agent languages | da, en, es, fr, pt, de, **one language per agent** | `lib/i18n/locales.ts`, `widgets.language` | Implemented | Partly. **Swedish and Norwegian are not supported** |
| 5 | Voices | Male/female voice templates set by the platform team | voice-assistant configuration module, admin voice models | Implemented | Partly |
| 6 | Knowledge base | Sources from **text, URL and PDF**; ingestion priced per 1,000 characters | `lib/knowledge-base` | Implemented | Yes |
| 7 | AI prompt drafting | "Generate prompt" helper that writes the agent's instructions | `/api/customer/widgets/[id]/generate-prompt` | Implemented | No |
| 8 | Calendar booking | `check_availability`, `create_booking`, `get_event_types`, `get_booking`, **`reschedule_booking`, `cancel_booking`** (looked up and verified before any change) | booking-tools module, `lib/calendar` | Implemented | Yes |
| 9 | Calendars | **Google Calendar, Outlook/Microsoft 365, Cal.com** (OAuth). Google invites are sent to the attendee (`sendUpdates=all`) | `lib/calendar/{google,outlook,calcom}.ts` | Implemented | Yes, **plus systems that are not supported** (§3) |
| 10 | Shopify | 4 live read-only tools: product search, product details, store policies (shipping/refund/terms/privacy), order status by order number. Same tools for widget **and** phone agents. Tools enabled per granted scope | `lib/shopify/*` | Implemented | Partly → **new /shopify page** |
| 11 | Uber Direct | Delivery quote → explicit yes → create delivery → status → cancel. Pickup is always the business address | `lib/uber-direct` | Implemented | Yes (/integrationer) |
| 12 | Just Eat (courier delivery) | Quote → yes → create → status (no cancel; the caller is passed to the business) | `lib/just-eat` | Implemented | Yes (/integrationer) |
| 13 | Conversation history | Conversations with messages, transcripts and **recordings** for widget and calls; call dashboard with activity | `/api/customer/conversations/*`, `/call-dashboard/*` | Implemented | Yes |
| 14 | Usage and billing | Packages Starter 999 kr / 150 min, Professional, Enterprise; setup fee = monthly price; auto-recharge; customer billing portal | `lib/billing`, `lib/credits` | Implemented, **matches the public prices** | Yes |
| 15 | Free trial | 7 days, 10 minutes by default (admin-configurable); trial follow-up emails | `lib/billing/trial.ts`, `lib/email/trial-followups.ts` | Implemented, matches the site | Yes |
| 16 | Customer app (PWA) | Dashboard installable on the phone; app QR | `/app-qr`, `manifest.ts`, `sw.js` | Implemented | Yes (/app) |
| 17 | Dashboard UI languages | 6 languages | `lib/i18n` | Implemented | No |
| 18 | Outbound campaigns and manual dialer | Lead lists, campaigns, call windows, dialer | `lib/outbound`, `/dashboard/outbound`, `/dashboard/dialer` | **Built, but switched off for customers** (`OUTBOUND_ENABLED = false`, `DIALER_ENABLED = false`) | **Yes, as if available in every package** |
| 19 | Outbound add-on (separate app) | Sales dialer sold as an add-on: 1,000 min/500 kr or 2,000 min/800 kr per month, 7-day/10-min trial; opens a separate app | `lib/billing` (outbound add-on) | Implemented as a **separate paid add-on** | Not as an add-on |
| 20 | Analytics and Agency pages | "Coming soon" placeholders | `/dashboard/analytics`, `/dashboard/agency` | **Not available** | The site mentions "booking statistics" and "trends" |
| 21 | SMS | **No SMS sending anywhere in the backend.** The only SMS mentions are a comment and marketing text in the dashboard dictionary | — | **Not supported** | **Yes, on about 18 pages** (§3) |
| 22 | Call transfer to a human | Customer agents get **no transfer tool**; the template's transfer is deliberately stripped. Only end-call. | voice-assistant configuration module (template tools are not copied to customer agents) | **Not supported** | **Yes** (§3) |
| 23 | CRM / accounting integrations | No HubSpot, Salesforce, Pipedrive, e-conomic, Dinero, Calendly, EasyPractice, Novax or CalDAV code | — | **Not supported** (Apple/CalDAV can only be reached indirectly through Cal.com's own connectors) | **Yes** |
| 24 | Partner/demo tenants | "Samarbejde" customer type, not billed; first one is a Valencia pizzeria with a website voice widget | migration 0049, 0050 | Implemented | No. **Possible case study, only with the partner's consent** |

## 3. Public claims the backend does not support (highest-priority risk)

The mission rule is "do not market planned or incomplete functionality". These claims are on the live site today. The files are the Danish ones; each has de/en/es/fr equivalents.

| Claim | Reality | Files (da) | Recommended action |
|---|---|---|---|
| SMS confirmations, SMS reminders, "100 free SMS", "SMS sent to both" | No SMS in the product | da.json, contact, craftsman, demo, ecommerce, features, healthcare, inboundOutbound, industries, integrations, salon, trial, widget, shared/blogCta, faq.ts, blogPosts/{automation,receptionist,voice,webshop} | Replace with what exists: **calendar invitation/confirmation by email** (Google/Outlook/Cal.com) and the booking in the calendar. Or ship SMS first |
| "Transfers to you/a colleague", "only important calls are transferred" | No live transfer. (Call *forwarding to* the AI number is real; transfer *from* the AI to a human is not.) | da.json, features, inboundOutbound, office, salon, widget, faq.ts, blogPosts/{automation,receptionist,voice}; blog post `ai-receptionist-viderestilling-til-menneske` | Reword to "the conversation, recording and transcript are in the dashboard so you can call back", or add a transfer tool in the backend first |
| "All packages include inbound **and outbound** calls" and outbound use cases presented as standard | Outbound is switched off in the app; outbound is a separate paid add-on in its own app | da.json, about, contact, features, inboundOutbound, integrations, trial, widget, shared/clinicDashboard, faq.ts, 4 blog files | Present outbound as an **add-on** with its own price, or remove it until the flag is on |
| Calendar/system lists per industry: EasyPractice, Novax, Dinero, e-conomic, Calendly, Apple Calendar, "other systems via CalDAV/iCal" | Only Google, Outlook/M365 and Cal.com | da.json (`industryIntegrations`), integrationsPage, faq.ts | Show the three real calendars. Mention Apple/CalDAV only as "via Cal.com" if tested |
| "HubSpot, Salesforce, Pipedrive" | No CRM integration | integrationsPage | Remove, or label clearly as "on request / planned" |
| Webshop "handles reorders" (*genbestillinger*), "SMS shipping updates" | Shopify access is read-only; no SMS | ecommercePage, blogPosts/webshop | Remove (the new /shopify page states the real scope) |
| "Over 500 Danish clinics", "up to 60/65/67 % fewer no-shows" | Unverifiable (already open in SEO-AUDIT-2026-10 §6.1) | demo, features, healthcare, industries, integrations | Remove unless documented |
| "Booking statistics", "trends" in the dashboard | Analytics is a "coming soon" placeholder | ecommerce, healthcare (main cards) | Reword to what exists: conversations, recordings, transcripts, bookings, usage |

**Why this matters for SEO, not just legal:** inaccurate feature claims undercut E-E-A-T and conversion (a trial user looking for the SMS setting doesn't find it), and the EU AI Act / Danish Marketing Practices Act both penalise misleading claims. **I did not rewrite these pages.** It touches promises on about 20 pages × 5 languages, and you may have SMS or transfer on the roadmap. Decide per row (fix copy vs. ship the feature) and the copy changes are a mechanical next round.

## 4. Shopify assessment and strategy

**What works (code-verified):** product search in the customer's own words, including size/colour matching per variant (`requested_options`, `matches_request`); full product details with collections; real product URLs only (never constructed; no link when the product isn't online); shipping/refund/terms/privacy policies live from Shopify; order status by order number with fulfilment status, carrier, tracking number/URL and expected/actual delivery. The same tools are on widget and phone agents. On the phone, URLs are never read aloud. Shopify connection by OAuth or an Admin API token; tools are enabled only for granted scopes; reconnect is prompted when the token is revoked.

**Privacy design (a selling point):** the order tool returns no name, email, address, line items, prices or payment; nothing from the order is stored; a lookup only happens with a customer-supplied order number. *Caveat:* there is no second verification factor, so anyone with an order number gets that order's shipping status. That is acceptable for status only. Keep the page wording ("only status, shipping and delivery").

**What does not exist:** cart, checkout, draft orders, payment, discount codes, order edits/cancellations/refunds, customer-account lookup, back-in-stock alerts, SMS/email sending of tracking links. "Do you have a cheaper alternative?" works only as a second search, not as a recommendation engine.

**Strategy:**
- Widget channel → `/shopify` (done) targeting "Shopify AI", "Shopify chatbot", "AI kundeservice Shopify". `/webshop` stays the platform-neutral "AI til webshop" page and links to /shopify.
- Phone channel → the same page, section 2; next, a blog post "AI-telefon til webshop: hvad kunderne ringer om" (order status, size, returns) linking to /shopify.
- Cluster: /shopify (hub) ← existing `shopify-ai-automatisering`, `shopify-integration-ai-voice-indgaaende-opkald` and `widget-til-webshop` (all three should be checked for the reorder/SMS claims, §3) + new posts in §10.
- Possible product work that would unlock content (for the backend team, not done here): cart permalink/draft-order link in chat, SMS of the tracking link, customer verification by email + order number.

## 5. Food ordering feasibility

| Step | Supported today? | How |
|---|---|---|
| Menu questions, allergens, opening hours | **Yes** | Knowledge base (upload the menu as a PDF or URL) |
| Table reservation | **Yes** | Calendar booking (Cal.com event types / Google / Outlook) |
| Delivery booking (courier) | **Yes** | Uber Direct and Just Eat courier tools: quote, confirm, book, track (Uber also cancels) |
| Taking the food order itself (items, toppings, variants, quantity, price total) | **No structured support.** The agent can talk through the order, but there is no order object, menu price calculation or hand-off to a POS/kitchen system | — |
| Payment | **No** | — |
| Sending the order to the restaurant's system / printer | **No** | — |
| Shopify-based menu as product catalogue | Partly: product search and prices work for a restaurant that keeps its menu in Shopify, but there is no cart/checkout | Shopify tools |

**Conclusion:** do **not** publish "AI takes your takeaway orders and payment" pages yet. Pages that are accurate today: **"AI-telefon til restaurant: bordbestilling, menu-spørgsmål og levering med bud"** (`/restaurant`) and a blog post on courier delivery booked by AI. "AI food ordering" and "AI takeaway ordering" pages should wait for an order + payment + POS hand-off feature. The Valencia pizzeria partner widget is the obvious case study once consent is given.

## 6. AI voice widget and inbound phone: positioning

- **Widget vs. phone, in one sentence:** the widget answers people *on your website* (they type or talk in the browser); the phone agent answers people *who call your number* (you forward the line). They can share the same knowledge base, calendar and Shopify/delivery integrations, but each is its own agent.
- Widget strengths to market more: three modes (chat, dictation, real-time voice), clickable product/tracking links, history that survives a page reload, knowledge base from URL/PDF, booking.
- Inbound strengths to market more: bring your own number or buy one in the dashboard, forwarding rules (all calls / after hours / when busy), recordings and transcripts, six languages, reschedule and cancel with verification.
- Do not use "transfers to a human" or "SMS" as selling points until they exist (§3).

## 7. Feature → page → keyword matrix

Keywords are intent-based picks; no volumes were measured (§0).

| Verified capability | Page (status) | Primary keyword (da) | Secondary / long tail |
|---|---|---|---|
| Shopify product/stock/policy/order lookups | /shopify (**new**) | shopify ai | shopify chatbot, ai kundeservice shopify, chatbot til shopify dansk |
| Order status by order number | /shopify § capabilities; blog (new) | ai ordrestatus webshop | "hvor er min pakke" chatbot |
| Widget chat + voice | /widget (exists) | ai chatbot til hjemmeside | voice widget, ai assistent hjemmeside |
| Inbound phone agent | /ind-og-udgaaende-opkald (exists) | ai telefonpasning | ai-telefonpasser, ai telefonsvarer |
| Reschedule/cancel booking | /funktioner, /integrationer (exist); blog (new) | ai booking ombooking | aflys tid automatisk |
| Google/Outlook/Cal.com | /integrationer (exists, fix §3) | ai booking google kalender | outlook kalender ai, cal.com ai |
| Knowledge base from URL/PDF | /funktioner (exists); blog (new) | ai vidensbase | træn ai på egen hjemmeside |
| Courier delivery Uber Direct/Just Eat | /integrationer (exists); /restaurant (proposed) | ai bestil levering | uber direct danmark, just eat bud levering |
| Table booking + menu Q&A | /restaurant (proposed) | ai telefon restaurant | bordbestilling telefon ai, ai til pizzeria |
| Six agent languages | /funktioner; blog (new) | flersproget ai receptionist | ai telefon engelsk tysk |
| Recordings and transcripts | /app (exists) | optagelse af opkald ai | samtaleudskrift |
| Outbound add-on | /ind-og-udgaaende-opkald (fix §3) | ai udgående opkald | ai salgsopkald |

## 8. Information architecture (recommended)

Keep the current structure; add pages only where a verified capability or a distinct search intent justifies them.

- Products: `/widget` · `/ind-og-udgaaende-opkald` · `/app` · `/funktioner` · `/integrationer`
- Commerce: `/webshop` (platform-neutral) → **`/shopify`** (new)
- Industries: `/brancher` → `/klinik` · `/haandvaerker` · `/frisoer` · `/kontor` · `/webshop` · *proposed:* `/restaurant`, `/autovaerksted`, `/ejendomsmaegler`, `/fysioterapeut` (only with a distinct workflow; see SEO-AUDIT-2026-10 §2 on doorway pages)
- Conversion: `/proeveperiode` · `/demo` · `/kontakt` → app.aibooking.dk/signup
- Content: `/blog` with the five clusters; add a **restaurant & delivery** cluster when /restaurant exists

Navigation: /shopify sits in the Industries menu next to E-commerce and in the footer. No new top-level menu.

## 9. International SEO roadmap

- Site languages: da, en, de, es, fr with hreflang and `x-default` = en (unchanged). /shopify ships in all five.
- **Swedish and Norwegian: don't build pages yet.** The agents can't speak sv or no today (§2 #4), so sv/no pages would market something a Swedish or Norwegian customer can't use. Revisit when the backend adds those locales; the URL scheme `/sv/…`, `/no/…` fits the existing `buildLocalizedPath`.
- Portuguese is supported by the agents but has no site version (it was removed earlier). Add it only with native pt-PT copy and a market reason.

## 10. Content opportunities (100)

**P1** = verified capability plus clear commercial intent. All keywords are unmeasured (§0). Before writing, check that no existing post already covers the same intent (CLAUDE.md).

**Shopify and webshop (1–20):** 1 /shopify landing page (**done**) · 2 AI-telefon til webshop: de 5 opkald kunderne ringer om (P1) · 3 "Hvor er min pakke?" – automatisk ordrestatus med AI (P1) · 4 Shopify chatbot på dansk: opsætning trin for trin (P1; merge into `shopify-ai-automatisering` if it overlaps) · 5 Lagerstatus og varianter i chatten (P1) · 6 Fragt- og returspørgsmål besvaret ud fra dine politikker · 7 Shopify AI og GDPR: hvad AI'en må se (P1) · 8 Produktlinks i chatten: hvorfor AI'en aldrig må gætte en URL · 9 AI-kundeservice uden for åbningstid i webshoppen · 10 Shopify Admin API-nøgle vs. app-godkendelse · 11 Flersproget Shopify-butik med én agent pr. marked · 12 Webshop med fysisk butik: bud-levering via AI · 13 Sammenligning: Shopify Inbox vs. AI-assistent med opslag · 14 AI-assistent til tøjbutik (størrelser) · 15 AI-assistent til elektronik-webshop (specifikationer) · 16 Møbel-webshop: levering og mål · 17 Sportsbutik: varianter og lager · 18 Case: dansk Shopify-butik (needs a real customer) · 19 Hvad AI-assistenten ikke gør (kurv, betaling) – og hvorfor · 20 Måling: support-henvendelser før/efter

**Restaurant and food (21–35):** 21 /restaurant landing page: table booking, menu questions, courier (P1) · 22 AI-telefon til pizzeria (P1) · 23 Bordbestilling over telefonen med AI (P1) · 24 Allergener og menu i AI'ens vidensbase · 25 Bud-levering bestilt af AI: Uber Direct og Just Eat (P1) · 26 Restaurantens telefon i myldretiden · 27 Café og bageri: forudbestilling via booking · 28 Catering: forespørgsler og møder · 29 Sushi og takeaway: spørgsmål før bestilling · 30 Food truck: hvor er vi i dag (knowledge base) · 31 Case: pizzeria i Valencia (consent needed; es market) · 32 What isn't possible yet: full AI ordering with payment (honest explainer, builds trust) · 33 Restaurant-widget på hjemmesiden · 34 Menukort som PDF i AI'en · 35 Åbningstider og helligdage

**Widget (36–50):** 36 Chat, diktering eller tale: tre måder at bruge widgetten · 37 Voice-widget vs. chatbot · 38 Widget på WordPress · 39 Widget på Wix/Squarespace · 40 Widget på Shopify-tema (→ /shopify) · 41 Træn AI'en på din hjemmeside (URL-vidensbase) (P1) · 42 Booking direkte i widgetten · 43 Leadindsamling via widget · 44 Widget til ejendomsmægler · 45 Widget til tandlæge · 46 Widget til advokat · 47 Widget-tilgængelighed og mikrofonadgang · 48 Chat-historik og privatliv · 49 Widget-pris pr. minut forklaret · 50 Widget vs. kontaktformular (exists, refresh)

**Inbound phone (51–68):** 51 Viderestilling: alle opkald, efter lukketid eller ved optaget (P1) · 52 Behold dit nummer eller køb et nyt (P1) · 53 Optagelse og udskrift af opkald (P1) · 54 Ombooking og aflysning via telefon med verifikation (P1) · 55 AI-telefon på engelsk/tysk (P1) · 56 AI-stemme: mand eller kvinde · 57 AI-telefon til autoværksted · 58 Til fysioterapeut · 59 Til kiropraktor · 60 Til ejendomsadministration · 61 Til låsesmed · 62 Til VVS/el (refresh existing) · 63 Til rengøringsfirma · 64 Til dyrlæge · 65 Til hotel/B&B · 66 Til køreskole · 67 Til revisor (refresh existing) · 68 Ubesvarede opkald: hvad koster de (exists, refresh)

**Booking and calendars (69–80):** 69 AI-booking med Google Kalender (P1) · 70 Med Outlook/Microsoft 365 (P1) · 71 Med Cal.com (P1) · 72 Begivenhedstyper og varighed · 73 Dobbeltbooking: sådan undgås det · 74 Tidszoner og åbningstider · 75 Bekræftelse på e-mail via kalenderinvitation · 76 Flere medarbejdere, flere kalendere · 77 No-shows: hvad virker (without unverified %) · 78 Online booking vs. telefonbooking · 79 Booking uden for åbningstid · 80 Aflysningspolitik og AI

**Trust, law and GEO (81–92):** 81 AI-forordningen art. 50 for receptionister (refresh) · 82 GDPR og optagelser · 83 Databehandleraftale: hvad du skal bede om · 84 Hvor gemmes data · 85 Sådan præsenterer AI'en sig · 86 "Hvad er Aibooking?" fact page for AI search (P1, GEO) · 87 Glossary: AI receptionist, voice agent, widget, knowledge base · 88 Comparison: Aibooking vs. human answering service (exists) · 89 Comparison vs. AI receptionist competitors (feature table; facts only) · 90 Pricing explained with worked examples (exists, refresh) · 91 Trial: what you can test in 7 days · 92 Limitations page: what the AI doesn't do (builds trust)

**International and other (93–100):** 93 en: Shopify AI phone agent · 94 de: KI-Telefonassistent für Arztpraxen · 95 es: IA para restaurantes (Valencia case) · 96 fr: standard téléphonique IA pour artisans · 97 en: AI receptionist for dental clinics · 98 Outbound add-on page (once positioned, §3) · 99 Partner/agency programme (when the Agency page leaves "coming soon") · 100 Integration request page (collects demand for CRM/SMS)

**"20 Danish articles and 10 landing pages":** not written in this round. Each must exist in five languages written natively (CLAUDE.md), which is about 150 documents. Several would also have to repeat or contradict the §3 claims until those are settled. Suggested order once §3 is decided: landing pages #21 (/restaurant), then the industry pages in §8. Articles: 2, 3, 7, 22, 23, 25, 41, 51, 52, 53, 54, 55, 69, 70, 71, 86, 92, 5, 24, 36.

## 11. Screenshots and visual assets

- No new screenshots this round (it needs a login). Existing assets: real app screenshots on /app, markup mocks of the dashboard (`ShopifyIntegrationMock`, `DashboardShowcase`), widget images in `public/`.
- To do with app access: create a **demo tenant with a fictional business and a test Shopify store**, then capture: the Webshop tab connected, a widget conversation with a product link, the call list with recording and transcript, the booking tab, the knowledge-base sources. Blur emails, phone numbers and tokens. Export as WebP ≤150 KB with descriptive file names and alt text.
- Diagrams to build (as SVG/markup, labelled as diagrams, not screenshots): widget vs. phone flow, Shopify lookup flow, courier delivery flow.

## 12. GEO (AI search) and conversion

- GEO: keep `public/llms.txt` factual (now includes /shopify with its explicit read-only scope). Add a short "What Aibooking is / does / doesn't do" fact page (#86) and keep FAQ answers self-contained. LLM answers quote limitation statements as readily as features, so the §3 fixes matter here too.
- Conversion: the journey works (landing page → trial → app.aibooking.dk/signup). The /shopify page uses "Create a free account" as the primary CTA (signup) and "Book a walkthrough" as the secondary (contact). The biggest conversion risk is a trial user not finding a promised feature (SMS, transfer, outbound, CRM), which is §3 again.

## 13. Implementation log (this round)

- **New page `/shopify`** (+ `/en`, `/de`, `/es`, `/fr`): `src/pages/ShopifyPage.tsx`, `src/i18n/locales/pages/shopifyPage.*.json`, `shopifyFAQs` in `src/content/faq.ts` (FAQPage schema), BreadcrumbList schema, wired into `App.tsx`, `pagePaths.ts`, `types/navigation.ts`, `FeaturesPage.tsx` (local page-type union), `i18n/config.ts`, `scripts/generate-sitemap.js` (priority 0.8). Every capability on the page maps to a backend tool; the page lists what the integration does **not** do.
- Internal links to /shopify: Industries menu, footer, `/webshop` (new callout) and the Shopify section on `/widget`. `public/llms.txt` entry.
- Checks: `npm run typecheck` ✓, `npm run lint` ✓, `npm run build` ✓ (265 pages prerendered, no warnings for the new URLs). Prerendered HTML per language: 1 H1, self-canonical, 6 hreflang links, description 147–153 characters, title 50–55 characters, about 1,650–2,000 words. Playwright at 390 px and 1280 px: no horizontal overflow (an overflow caused by the dashboard mock in a grid was found and fixed with `min-w-0`).
- **Not deployed.** The changes ship when the PR is merged and Vercel builds production; IndexNow then submits the new URLs automatically.

## 14. Decisions needed from you

1. §3, row by row: fix the copy, or ship the feature (SMS, transfer to a human, outbound in packages, the calendar/CRM list, reorders, the unverified numbers).
2. Consent for the Valencia pizzeria as a case study (enables #31 and strengthens /restaurant).
3. A demo tenant + test Shopify store for real screenshots (§11).
4. GSC/GA4 access, or an export, so the next round can prioritise §10 on real impressions rather than intent alone.
