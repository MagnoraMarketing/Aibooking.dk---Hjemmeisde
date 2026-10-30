# SEO-audit og konkurrentanalyse — oktober 2026

Intern note. Mål: gøre Aibooking.dk til den mest relevante, troværdige og teknisk sunde danske side om AI-receptionist, AI voice agents, AI-telefoni, automatisk booking og AI-kundeservice, med JesperAI.com og Intavia.ai som benchmarks. Ingen placering kan garanteres. Alle forbedringer skal måles over tid (afsnit 5).

## 0. Datagrundlag og begrænsninger

- **Konkurrentsiderne kunne ikke hentes direkte** fra arbejdsmiljøet: både jesperai.com og intavia.ai var blokeret af netværket. Analysen bygger på søgemaskineresultater (titler, URL'er og uddrag), hentet 16. oktober 2026. Konkurrenternes metadata, overskriftsstruktur, strukturerede data og interne links er derfor **ikke** verificeret.
- **Der var ingen adgang** til Google Search Console, Bing Webmaster Tools, Ahrefs eller andre SEO-værktøjer. Afsnittene nedenfor nævner derfor ingen placeringer, søgevolumener eller backlinks — hverken for os eller for konkurrenterne.
- **Intavia er en britisk, engelsksproget løsning** (priser i GBP, cases fra UK). Søgeresultaterne viser ingen dansk version, så Intavia konkurrerer næppe på danske søgninger. Den er medtaget som benchmark for informationsarkitektur (capabilities-, use case- og pricing-sider).

## 1. Prioriteret audit

| # | Fund | Konsekvens | Status |
|---|------|------------|--------|
| 1 | 44 blogindlæg, de fleste 190–300 ord, ca. 20 med overlappende søgeintention (fx tre indlæg om "tid er penge", tre om Shopify, tre om at miste kunder) | Tyndt indhold og kannibalisering | **Løst:** 20 indlæg er lagt sammen til stærkere artikler med 301-redirects; 29 indlæg tilbage med 313–1.480 ord (ekskl. FAQ) |
| 2 | 30 af 44 indlæg havde ingen interne links | Svag emnestruktur og dårlig link-equity | **Løst:** alle indlæg linker nu til relaterede guides og produktsider |
| 3 | Ingen produkt- eller branchesider linkede til blogindlæg | Guides fik kun links fra /blog | **Løst:** blokken `RelatedGuides` er tilføjet på forsiden, Funktioner, AI-telefonpasning, Widget, Webshop, Klinik, Håndværker, Kontor og Integrationer |
| 4 | Den samme generiske FAQ ("Hvad handler bloggen om?") og FAQPage-schema på alle indlæg og kategorisider | Duplikeret structured data, ingen værdi | **Løst:** FAQ og FAQPage-schema er nu specifikke for hvert indlæg; den generiske FAQ står kun på /blog |
| 5 | `dateModified` var altid lig `datePublished` | Opdateringer var usynlige for søgemaskinerne | **Løst:** nyt felt `updated_at` styrer dateModified, den viste dato og sitemap-lastmod |
| 6 | `og:image` og `BlogPosting.image` pegede på SVG | Facebook, LinkedIn og X viser ikke SVG-forhåndsvisninger | **Løst:** JPEG i 1200×675 genereres pr. cover; prerender advarer, hvis billedet mangler |
| 7 | Indhold lovede, at "mange kunder opdager ikke, at det er en AI" | I strid med AI-forordningens art. 50 (gælder fra 2.8.2026) og skader troværdigheden | **Løst:** al blogtekst anbefaler nu, at AI'en præsenterer sig som digital assistent |
| 8 | Manglende emner: pris, AI vs. telefonpasning, viderestilling til menneske, hvad er en AI voice agent, teknologi 2026 | Konkurrenterne dækker pris og sammenligning | **Løst:** fem nye artikler |
| 9 | Ingen kontrol af døde interne links eller redirects | Risiko for soft 404 og redirect-kæder | **Løst:** prerender advarer om links til sider uden for sitemap; generate-sitemap fejler, hvis en redirect peger på et upubliceret indlæg |
| 10 | Uverificerede påstande: "Over 500 danske klinikker…" og "Reducér no-shows med op til 67%" (integrationssiden), "80% lavere omkostning end en receptionist" (AI-telefonpasning), "Opsætning på under 15 minutter" (mod "under en uge" andre steder) | Ved ikke-dokumenterbare tal: risiko for vildledning, svagere E-E-A-T | **Åben — kræver jeres beslutning** (se afsnit 6) |
| 11 | Én klient-JS-bundle på ca. 1,6 MB (459 KB gzip) med alle sider og sprog | Belaster LCP/INP på mobil | **Åben** (afsnit 6) |
| 12 | Bloggens forfatter er "Organization" | Svagere E-E-A-T end en navngiven ekspert | **Åben** (afsnit 6) |

Allerede på plads før denne runde (beholdt): prerender af alle sitemap-URL'er, canonical og hreflang (da/en for blog, 5 sprog for sider), robots.txt med én fælles gruppe, IndexNow ved ændret indhold, noindex på ukendte stier, Organization- og WebSite-schema, BreadcrumbList på indlæg og verificering via meta-tag for GSC og Bing.

## 2. Konkurrentmatrix

Kolonnerne følger briefen. "Forventet SEO-værdi" er et kvalitativt skøn (høj/mellem/lav) uden volumendata (se afsnit 0).

| Emne / søgeintention | Konkurrentens side | AIbookings side | Manglende indhold/funktion | Anbefalet forbedring | Forventet SEO-værdi | Prioritet / indsats |
|---|---|---|---|---|---|---|
| Hvad er en AI-receptionist? | JesperAI: /blog/hvad-er-en-ai-receptionist | /blog/ai-reception-virtuel-receptionist (omskrevet) | Før: 240 ord uden opkaldsforløb | Opkald trin for trin, hvad den kan og ikke kan, opsætning, FAQ — **udført** | Høj | P1 / udført |
| Hvad koster en AI-receptionist? | JesperAI: /blog/hvad-koster-en-receptionist-loen (lønsammenligning); Intavia: /pricing og /ai-receptionist-pricing | /blog/hvad-koster-en-ai-receptionist (ny) | Ingen prisartikel | Offentlige priser pr. pakke og minut, minutberegning, regnestykke uden opdigtede tal — **udført** | Høj (kommerciel intention) | P1 / udført |
| AI vs. telefonpasningsservice / telefonsvarer | JesperAI: /blog/ai-telefonassistent-vs-telefonpasningsservice | /blog/ai-receptionist-vs-telefonpasning (ny; erstatter ai-telefon-vs-telefonsvarer) | Kun telefonsvarer-sammenligning | Firevejs-sammenligning inkl. hvornår et menneske er bedst — **udført** | Høj | P1 / udført |
| Viderestilling til et menneske / travle perioder | Ikke fundet hos konkurrenterne | /blog/ai-receptionist-viderestilling-til-menneske (ny) og /blog/sma-virksomheder-telefon-tid-penge | — | Konkrete regler, eksempler og spidsbelastning — **udført** | Mellem (differentiering, tillid) | P1 / udført |
| Hvad er en AI voice agent? / realtids-AI | Ikke fundet | /blog/hvad-er-en-ai-voice-agent og /blog/nyeste-ai-teknologi-2026 (nye) | — | Teknisk forklaring med kilder — **udført** | Mellem–høj (informativ, linkværdig) | P1 / udført |
| Dansk tale og AI-stemmer | Ikke fundet | /blog/ai-telefonassistent-dansk-sprog (omskrevet) og /blog/hvordan-lyder-en-dansk-ai-receptionist | — | CoRal-kilde, testmetode — **udført** | Mellem | P2 / udført |
| Lovlighed, GDPR og AI-oplysning | JesperAI: blogindlæg om lovlighed, GDPR og telemarketingregler | /blog/ai-widget-gdpr-danske-virksomheder (udvidet) og /blog/inbound-outbound-forskel | Før: kun GDPR for widget | AI-forordningens art. 50, Datatilsynets vejledning om optagelse, markedsføringslovens § 10 — **udført** | Mellem–høj (tillid) | P1 / udført |
| Uden for åbningstid / indgående opkald | Intavia: /capabilities/after-hours-call-answering | /blog/ai-indgaaende-opkald (sammenlagt med to andre) | — | Fire viderestillingsopsætninger og måling — **udført** | Høj | P1 / udført |
| Sundhed / klinik | Intavia: /use-cases/healthcare | /klinik og /blog/totalloesning-klinik (klinik og salon) | Salon manglede | Klinik og salon samlet, helbredsdata — **udført** | Mellem | P2 / udført |
| Branchesider (autoværksted, maler, låsesmed, frisør, ejendomsmægler, taxa m.fl.) | JesperAI: mange /blog/ai-telefonpasning-<branche>-2026 | /klinik, /haandvaerker, /kontor, /webshop og blogindlæg for håndværker, klinik/salon og kontor | Ingen sider for de øvrige brancher | Lav **kun** brancheindhold, hvor I har rigtige kunder eller en tydeligt anderledes arbejdsgang. Undgå doorway-sider med udskiftet branchenavn | Mellem (long tail) | P2 / mellem pr. side |
| Webshop / Shopify | Ikke fundet hos konkurrenterne | /webshop og tre webshop-indlæg (konsolideret fra seks) | — | Styrk med cases fra rigtige butikker | Mellem | P2 / udført (cases åbne) |
| Demo og prøveperiode | JesperAI: /book (30 min discovery call), implementering på 1–6 uger | /demo, /proeveperiode, demolinje, lydeksempel og to opkaldsforløb ord for ord | — | Fremhæv "under en uge" og den gratis prøveperiode som fordel | Konvertering | — |
| Tillidssignaler | JesperAI: EU-hosting, GDPR, adresse i København; Intavia: profiler på G2 og Capterra (0 anmeldelser på G2) | Data i EU og DPA nævnes; uverificerede tal (afsnit 1, #10) | Rigtige cases og anmeldelser | Verificér eller fjern tal; tilføj 2–3 navngivne cases med tilladelse; tilføj først Review-schema, når anmeldelserne er synlige | Høj (E-E-A-T, konvertering) | P1 / afhænger af jer |

## 3. Ny indholdsarkitektur

29 indlæg i fem filer under `src/content/blogPosts/`:

- **AI-receptionist** (`receptionist.ts`): pillar /ai-reception-virtuel-receptionist → pris, vs. telefonpasning, viderestilling, SMV, AI-telefonpasning (krav), håndværker, kontor.
- **AI voice og telefoni** (`voice.ts`): nyeste-ai-teknologi-2026, hvad-er-en-ai-voice-agent, dansk tale, lydeksempel, indgående, ind- vs. udgående, påmindelser, GDPR/AI-forordningen.
- **AI-booking og automatisering** (`automation.ts`): automatisk booking (kalender, ændringer og aflysninger), ROI, kom i gang, klinik og salon, AI kundeservice, AI medarbejder, AI i Danmark.
- **Widget** (`widget.ts`): komplet guide (pillar), AI til hjemmeside, widget vs. kontaktformular.
- **Webshop** (`webshop.ts`): AI til webshop (telefon og chat med Shopify), widget til webshop, Shopify AI.

Sammenlægninger (301 i `vercel.json`, spejlet i `blogRedirects` i `src/content/blog.ts`), også for præfikserne /en, /pt, /fr og /es:

| Gammel URL | Ny URL |
|---|---|
| /blog/ai-telefon-vs-telefonsvarer | /blog/ai-receptionist-vs-telefonpasning |
| /blog/mindre-virksomhed-stor-virkning-ai, /blog/automatisering-uden-flere-medarbejdere | /blog/sma-virksomheder-telefon-tid-penge |
| /blog/aldrig-mere-ubesvaret-opkald, /blog/ai-telefonassistent-fremtidens-kundeservice | /blog/ai-indgaaende-opkald |
| /blog/ai-telefonassistent-klinik-udeblivelser | /blog/outbound-ai-opkald-paamindelser |
| /blog/hoer-ai-telefonassistent-booke-haandvaerker | /blog/hvordan-lyder-en-dansk-ai-receptionist |
| /blog/aldrig-mist-en-kunde-igen, /blog/kundeoplevelse-ai-automatisering | /blog/komplet-ai-automatisering-widget-telefon-booking |
| /blog/frigoer-tid-er-penge, /blog/ai-widget-spar-tid-spar-penge | /blog/roi-ai-automatisering-virksomheder |
| /blog/ai-widget-klinik-book-tid-udenfor-aabningstid | /blog/totalloesning-klinik |
| /blog/hvordan-ai-widgets-transformerer-kundeservice | /blog/ai-kundeservice |
| /blog/ai-widget-integration-bedste-praksis, /blog/vaelg-den-rigtige-ai-widget, /blog/fordele-ai-widget-mindre-virksomheder | /blog/ai-widget-hjemmeside-komplet-guide |
| /blog/miste-kunde-langsom-hjemmeside | /blog/ai-widget-vs-kontaktformular |
| /blog/ai-widget-webshop-konvertering-dognet-rundt, /blog/totalloesning-webshop | /blog/widget-til-webshop |
| /blog/ai-widget-til-shopify | /blog/shopify-ai-automatisering |

## 4. Tekniske ændringer i denne runde

- `BlogPost` har fået felterne `updated_at`, `faq`, `sources` og `related`. BlogPostPage viser FAQ, FAQPage-schema og kildeliste pr. indlæg. `dateModified` og den viste dato bruger `updated_at`.
- `vercel.json`: 40 permanente redirects.
- `scripts/generate-sitemap.js` læser indlæg fra `src/content/blogPosts/`, bruger `updated_at` som lastmod og stopper buildet ved ugyldige redirects.
- `scripts/prerender.js` advarer om interne links til URL'er uden for sitemap og om manglende og:image.
- `scripts/render-blog-cover-images.mjs` laver JPEG-versioner af SVG-covers til og:image.
- `RelatedGuides` linker fra produkt- og branchesider til guides.
- `public/llms.txt` er opdateret med de nye guides og fire kategorier. Kategorinavnene er omdøbt til "AI-receptionist & telefoni" og "AI-booking & automatisering" (slugs uændret).

## 5. Måleplan: baseline og 30/60/90 dage

**Baseline (dag 0, tages i GSC, før/når ændringerne går live):**

1. GSC → Ydelse → eksportér 3 måneder pr. side og pr. forespørgsel (filter: land = Danmark).
2. GSC → Sider: antal indekserede sider og årsager til ikke-indekserede.
3. GSC → Core Web Vitals (mobil og desktop), og PageSpeed Insights for /, /ind-og-udgaaende-opkald, /widget og /blog/nyeste-ai-teknologi-2026.
4. Bing Webmaster Tools → Search Performance og Site Scan.
5. GA4: sørg for, at disse er sat op som key events: klik på "Opret gratis konto" (signup-link), demobooking, `tel:`-klik og afsendt kontaktformular. Notér organiske key events pr. landingsside.

**Søgeord, der følges (Danmark, manuelt i inkognito eller i et rank-tracking-værktøj):** ai-receptionist · hvad koster en ai-receptionist · ai telefonpasning · ai telefonassistent · ai voice agent · virtuel receptionist · ai til indgående opkald · telefonpasning ai pris · automatisk booking ai · ai kundeservice · ai widget til hjemmeside · ai til webshop · shopify ai · ai-forordningen chatbot · dansk ai-stemme. For hvert ord noteres AIbookings, JesperAI's og Intavias placering og rangerende URL — kun fra et værktøj eller en manuel søgning, aldrig gættet.

**Efter 30 dage:** redirects indekseret (de gamle URL'er er forsvundet fra GSC's sider), nye indlæg indekseret, impressions på nye forespørgsler, ingen nye fejl i GSC.
**Efter 60 dage:** udvikling i klik og gennemsnitlig placering for pillar-siderne; CTR på titler (justér titler med lav CTR).
**Efter 90 dage:** organiske key events pr. landingsside, sammenligning med baseline, og prioritering af næste runde (fx brancheindhold, hvor der er efterspørgsel).

## 6. Resterende opgaver (kræver jeres input eller adgang)

1. **Verificér eller fjern** "Over 500 danske klinikker", "op til 67 % færre no-shows", "80 % lavere omkostning" og "opsætning på under 15 minutter" (findes i i18n-filerne for integrations- og inboundOutbound-siderne).
2. **Lydeksemplet:** titlen "Eksempel med booking – Håndværker / klinik" og teksten i `BookingAudioDemo` bør passe til den nye produktdemo. Optagelsen har lange pauser (op til ca. 30 sek. ved 2:58–3:28), som kan klippes ned.
3. **Cases og anmeldelser** fra rigtige kunder (med samtykke). Først når de er synlige på siden, må der tilføjes Review- eller aggregateRating-schema.
4. **Navngiven forfatter** (fx stifter eller produktansvarlig) med en kort profilside, og sæt `author` til Person på indlæggene.
5. **Core Web Vitals:** del klient-bundlen op (lazy-load sider og sprogfiler) — kræver test af hydrering mod det prerenderede HTML.
6. **GSC og Bing:** indsend sitemap igen, brug URL-inspektion på de fem nye indlæg, og overvåg rapporten "Side med omdirigering" for de 20 gamle URL'er.
7. **Branchesider** ud fra konkurrentmatrixen — kun hvor der er rigtig efterspørgsel og rigtige cases.
8. **Kør måleplanen** (afsnit 5) og opdatér dette dokument efter 30, 60 og 90 dage.

## 7. Søgeordsplan pr. sprog (29. oktober 2026)

Titler, meta-beskrivelser, H1 og brødkrummer på de 15 hovedsider er skrevet om, så hvert sprog bruger de udtryk, folk faktisk søger på i det land, i stedet for oversatte danske udtryk. Valget bygger på sprogkendskab og konkurrenternes ordvalg — **ikke** på søgevolumendata (samme begrænsning som afsnit 0). Verificér med GSC-forespørgsler efter 30 dage, og justér titler med lav CTR.

| Side | da | en | es | fr | pt (pt-PT) |
|---|---|---|---|---|---|
| Forside | AI-receptionist, AI-telefonpasning, AI-telefonsvarer | AI receptionist, AI answering service | recepcionista virtual con IA, asistente telefónico con IA | réceptionniste IA, standard téléphonique IA | rececionista virtual com IA, atendimento telefónico com IA |
| /ind-og-udgaaende-opkald | AI-telefonpasning, AI-telefonsvarer | AI answering service, AI phone agent | asistente telefónico con IA, agente de voz | standard téléphonique IA, agent vocal IA | atendimento telefónico com IA, agente de voz |
| /widget | AI-chatbot til hjemmeside, voice-widget | AI chatbot for websites | chatbot con IA para web | chatbot IA pour site web | chatbot com IA para sites |
| /webshop | AI-kundeservice, chatbot til webshop | AI customer service, chatbot for Shopify | atención al cliente con IA | service client IA | apoio ao cliente com IA |
| /klinik | AI-receptionist til klinik og tandlæge | AI receptionist for clinics, dentists | recepcionista virtual para clínicas | secrétariat médical IA | rececionista virtual para clínicas |
| /haandvaerker | AI-telefonpasning til håndværkere | AI answering service for tradespeople | atención telefónica con IA para profesionales | secrétariat téléphonique IA pour artisans | atendimento telefónico com IA para profissionais |
| /kontor | AI-receptionist til kontor, advokat, revisor | AI receptionist for law firms, accountants | recepcionista virtual para despachos | standard téléphonique IA pour cabinets | rececionista virtual para escritórios |
| /integrationer | AI-booking, Google Kalender, Outlook | AI booking, Google Calendar | reservas con IA | prise de RDV IA, Google Agenda | marcações com IA |

Øvrige ændringer i samme runde:

- **"Chatbot" manglede helt** i synlig tekst og titler, selv om "AI chatbot til hjemmeside" og tilsvarende er blandt de mest søgte udtryk på alle fem sprog. Widget-, webshop-, funktions-, integrations- og branchesiderne bruger det nu.
- **H1 med søgeord:** forsiden, AI-telefonpasning (før det engelske produktnavn "Inbound-Outbound AI Voice" på alle sprog), widget, webshop, klinik, håndværker, kontor, funktioner, brancher og blog. Produktnavnet står stadig som badge.
- **Ankertekst:** footer-linket til /ind-og-udgaaende-opkald og brødkrummen (BreadcrumbList) hedder nu "AI-telefonpasning" (og tilsvarende på hvert sprog) i stedet for produktnavnet.
- **Titellængde:** alle titler er højst ca. 60 tegn inkl. " | Aibooking.dk" (før op til 90 på es/fr/pt), så søgeordet ikke bliver skåret af. Dobbelt brandnavn er fjernet fra "Om os", og "AIBooking.dk" er rettet til "Aibooking.dk" på bloggen for es/fr/pt.
- **Uverificerede tal fjernet fra es/fr/pt-meta-beskrivelser** ("60 % færre udeblivelser", "45 % flere opgaver", "320 % ROI", "35 % mere produktivitet"), så de matcher da/en. Tallene står stadig i brødteksten på es/fr/pt — samme åbne beslutning som afsnit 6, punkt 1.
- **pt-PT-stavning:** "Recepcionista" (brasiliansk) er rettet til "Rececionista" i titler og beskrivelser, så det matcher `og:locale` pt_PT. "Artesãos" (kunsthåndværkere) er erstattet af "profissionais"/"canalizadores".

## 8. Runde 30. oktober 2026: app-side, frisør/salon og "AI-telefonpasser"

Søgninger efter "ai telefonpasser", "ai booking system danmark", "ai receptionist dansk virksomhed", "AI telefonpasning håndværker pris" og "AI receptionist tandlæge klinik frisør" (amerikansk søgeindeks, ikke Google.dk; samme begrænsning som afsnit 0) viste:

- **"AI-telefonpasser" stod ingen steder på sitet**, og resultaterne er tynde: ingen dansk side, der målretter netop det udtryk. Det er det nemmeste sted at vinde. Tilføjet som brødtekst og FAQ på /ind-og-udgaaende-opkald og i teksten på /haandvaerker, /frisoer og /app. Eksisterende titler og URL'er er uændrede.
- **"AI-booking"** er dækket på 17 sider, og domænet matcher ordet. Forsiden har fået et FAQ-svar: "Hvad er AI-booking, og hvordan virker det?".
- **Konkurrenter på dansk:** retellai.com/da (programmatiske sider pr. branche, fx tandklinik og håndværkere), snakk.ai (norsk), JesperAI, telefonpasser.dk (menneskelig service), InstantCall og SIMBA. Brancheopdelte landingssider er normen.
- **Frisør/salon manglede** som branche, selv om forsidens dashboard-eksempel er en frisør, og bookingtunge brancher passer bedst til AI-booking. Ny side **/frisoer** med eget scenarie, dagsforløb, salontyper, FAQ og kalendere. Siden har ingen udokumenterede tal (jf. afsnit 6, punkt 1).
- **Ny side /app** med rigtige skærmbilleder af kundeappen (computer og mobil, taget med en fiktiv frisørsalon), vejledning til hjemmeskærm og FAQ. Der linkes til den fra app-sektionen (`AppQrSection`, på 16 sider), footeren og /frisoer.

Begge nye sider findes på alle 5 sprog og ligger i sitemap, `PAGE_PATHS` og llms.txt. Næste kandidater til branchesider, hvis GSC viser efterspørgsel: autoværksted, fysioterapeut/kiropraktor (i dag under /klinik), ejendomsmægler og restaurant.
