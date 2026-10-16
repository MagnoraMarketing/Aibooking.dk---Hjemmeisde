import type { BlogPost } from '../blog';

// AI on the website: the AI widget pillar guide, other ways to use AI on a
// website, and the widget vs. contact form comparison.

const UPDATED = '2026-10-16';

const CTA_WIDGET_DA = `<div class="blog-cta"><strong>Sæt en AI-widget på din hjemmeside</strong><p>Én kodestump, og AI'en svarer og booker på din side — på dansk, med tale eller tekst. Prøv gratis i 7 dage.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/widget">Se AI widget</a></div></div>`;
const CTA_WIDGET_EN = `<div class="blog-cta"><strong>Put an AI widget on your website</strong><p>One code snippet, and the AI answers and books on your site — in Danish, by voice or text. Try free for 7 days.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/widget">See AI widget</a></div></div>`;

export const widgetPosts: BlogPost[] = [
  {
    id: 'ai-widget-hjemmeside-komplet-guide',
    slug: 'ai-widget-hjemmeside-komplet-guide',
    categorySlug: 'ai-widget',
    title_en: 'AI Widget for Your Website: The Complete Guide (2026)',
    title_da: 'AI widget til hjemmeside: Den komplette guide (2026)',
    excerpt_en: 'What an AI chat and voice widget is, what it can do for a small business, how to install and configure it well, and a checklist for choosing the right one.',
    excerpt_da: 'Hvad en AI chat- og talewidget er, hvad den kan gøre for en mindre virksomhed, hvordan du installerer og sætter den rigtigt op, og en tjekliste til at vælge den rigtige.',
    content_da: `
      <p>En <strong>AI widget</strong> er en lille boble på din hjemmeside, hvor besøgende kan skrive eller tale med en AI, der kender din virksomhed. I modsætning til en klassisk chatbot med faste knapper forstår den almindeligt sprog, svarer ud fra din egen information og kan udføre handlinger — fx booke en tid direkte i din kalender.</p>
      <div class="blog-toc"><strong>I denne guide</strong><ol><li><a href="#hvad">Hvad kan en AI widget?</a></li><li><a href="#fordele">Fordele for mindre virksomheder</a></li><li><a href="#installation">Installation</a></li><li><a href="#opsaetning">Bedste praksis for opsætning</a></li><li><a href="#vaelg">Sådan vælger du den rigtige</a></li></ol></div>
      <h2 id="hvad">Hvad kan en AI widget?</h2>
      <ul>
        <li><strong>Svare med det samme</strong> på spørgsmål om ydelser, priser, åbningstider og levering.</li>
        <li><strong>Tale og tekst:</strong> den besøgende vælger selv at skrive eller tale.</li>
        <li><strong>Booke og ombooke</strong> i Google Kalender, Outlook og andre kalendere — uden dobbeltbookinger.</li>
        <li><strong>Indhente leads og tilbudsforespørgsler</strong> med de oplysninger, du skal bruge, og sætte et opfølgende møde i kalenderen.</li>
        <li><strong>Hjælpe i webshops</strong> med lager, ordrer og produktspørgsmål. Se <a href="/blog/widget-til-webshop">widget til webshop</a>.</li>
        <li><strong>Tale flere sprog</strong>: dansk først, men også engelsk og andre sprog, hvis den besøgende skifter.</li>
      </ul>
      <h2 id="fordele">Fordele for mindre virksomheder</h2>
      <ol>
        <li><strong>Åben døgnet rundt</strong> — mange besøgende kigger om aftenen og i weekenden.</li>
        <li><strong>Færre gengangerspørgsmål</strong> i telefonen og indbakken.</li>
        <li><strong>Bedre leads:</strong> widgeten spørger ind, så du får hele behovet i stedet for "ring mig op".</li>
        <li><strong>Hurtigere booking</strong> end en kontaktformular. Se <a href="/blog/ai-widget-vs-kontaktformular">AI widget vs. kontaktformular</a>.</li>
        <li><strong>Indsigt:</strong> samtalerne viser, hvad besøgende faktisk leder efter — og hvad der mangler på siden.</li>
      </ol>
      <h2 id="installation">Installation</h2>
      <p>Du får en kort JavaScript-kodestump, som indsættes på hjemmesiden én gang. Den virker på WordPress, Shopify, WooCommerce, Wix, Squarespace, Magento og egne løsninger. På de fleste platforme kræver det ingen udvikler. Selve widgeten indlæses asynkront, så den ikke gør siden langsommere at vise.</p>
      ${CTA_WIDGET_DA}
      <h2 id="opsaetning">Bedste praksis for opsætning</h2>
      <ul>
        <li><strong>Start med de ti vigtigste spørgsmål</strong> og jeres svar. Udvid ud fra de samtaler, der kommer.</li>
        <li><strong>Skriv en åbningsbesked</strong>, der siger, hvad den kan hjælpe med — og at det er en AI-assistent.</li>
        <li><strong>Placering:</strong> nederst i højre hjørne er standard. Lad den ikke springe op med lyd eller dække indhold på mobil.</li>
        <li><strong>Kun nødvendige oplysninger:</strong> spørg om navn og kontakt, når bookingen kræver det — ikke før.</li>
        <li><strong>Grænser:</strong> bestem, hvad den ikke må svare på, og hvornår den skal tilbyde at en medarbejder kontakter kunden.</li>
        <li><strong>Samme viden som telefonen:</strong> bruger du også en <a href="/blog/ai-reception-virtuel-receptionist">AI-receptionist</a>, så lad dem dele viden, så svarene er ens.</li>
        <li><strong>Læs samtalerne</strong> den første uge og ret hullerne.</li>
      </ul>
      <h2 id="vaelg">Sådan vælger du den rigtige AI widget</h2>
      <div class="blog-table"><table><thead><tr><th>Spørgsmål</th><th>Hvorfor det betyder noget</th></tr></thead><tbody>
        <tr><td>Kan den booke direkte i min kalender?</td><td>Ellers er det bare en kontaktformular med ekstra trin.</td></tr>
        <tr><td>Kan den tale — ikke kun skrive?</td><td>Mange foretrækker at tale, især på mobil.</td></tr>
        <tr><td>Hvor godt forstår den dansk?</td><td>Test med dine kunders formuleringer.</td></tr>
        <tr><td>Svarer den kun ud fra min information?</td><td>Den må ikke opfinde priser eller løfter.</td></tr>
        <tr><td>Hvor behandles data, og er der databehandleraftale?</td><td>GDPR og AI-forordningen. Se <a href="/blog/ai-widget-gdpr-danske-virksomheder">guiden</a>.</td></tr>
        <tr><td>Hvordan påvirker den sidens hastighed?</td><td>Den skal indlæses asynkront.</td></tr>
        <tr><td>Hvad koster den, og er der binding?</td><td>Hos os 999 kr./md. inkl. 150 minutters tale, og 7 dage gratis.</td></tr>
      </tbody></table></div>
      <p>Vil du se flere måder at bruge AI på hjemmesiden, så læs <a href="/blog/ai-til-hjemmeside">AI til hjemmeside: 7 måder</a>. Se produktet på <a href="/widget">AI widget</a>.</p>
    `,
    content_en: `
      <p>An <strong>AI widget</strong> is a small bubble on your website where visitors can type or talk to an AI that knows your business. Unlike a classic chatbot with fixed buttons, it understands everyday language, answers from your own information and can take actions — such as booking an appointment straight into your calendar.</p>
      <div class="blog-toc"><strong>In this guide</strong><ol><li><a href="#hvad">What can an AI widget do?</a></li><li><a href="#fordele">Benefits for small businesses</a></li><li><a href="#installation">Installation</a></li><li><a href="#opsaetning">Best practice for setup</a></li><li><a href="#vaelg">How to choose the right one</a></li></ol></div>
      <h2 id="hvad">What can an AI widget do?</h2>
      <ul>
        <li><strong>Answer immediately</strong> about services, prices, opening hours and delivery.</li>
        <li><strong>Voice and text:</strong> the visitor chooses to type or talk.</li>
        <li><strong>Book and reschedule</strong> in Google Calendar, Outlook and other calendars — without double bookings.</li>
        <li><strong>Collect leads and quote requests</strong> with the details you need, and put a follow-up meeting in the calendar.</li>
        <li><strong>Help in webshops</strong> with stock, orders and product questions. See <a href="/blog/widget-til-webshop">widget for webshops</a>.</li>
        <li><strong>Speak several languages</strong>: Danish first, but also English and other languages if the visitor switches.</li>
      </ul>
      <h2 id="fordele">Benefits for small businesses</h2>
      <ol>
        <li><strong>Open around the clock</strong> — many visitors browse in the evening and at weekends.</li>
        <li><strong>Fewer recurring questions</strong> on the phone and in the inbox.</li>
        <li><strong>Better leads:</strong> the widget asks follow-up questions, so you get the whole need instead of "call me back".</li>
        <li><strong>Faster booking</strong> than a contact form. See <a href="/blog/ai-widget-vs-kontaktformular">AI widget vs. contact form</a>.</li>
        <li><strong>Insight:</strong> conversations show what visitors are actually looking for — and what is missing on the site.</li>
      </ol>
      <h2 id="installation">Installation</h2>
      <p>You get a short JavaScript snippet that is added to the website once. It works on WordPress, Shopify, WooCommerce, Wix, Squarespace, Magento and custom sites. On most platforms no developer is needed. The widget loads asynchronously, so it doesn't slow down how quickly the page appears.</p>
      ${CTA_WIDGET_EN}
      <h2 id="opsaetning">Best practice for setup</h2>
      <ul>
        <li><strong>Start with the ten most important questions</strong> and your answers. Expand based on the conversations that come in.</li>
        <li><strong>Write an opening message</strong> that says what it can help with — and that it is an AI assistant.</li>
        <li><strong>Placement:</strong> bottom right is standard. Don't let it pop up with sound or cover content on mobile.</li>
        <li><strong>Only necessary details:</strong> ask for name and contact when the booking needs it — not before.</li>
        <li><strong>Limits:</strong> decide what it must not answer, and when it should offer that a member of staff contacts the customer.</li>
        <li><strong>Same knowledge as the phone:</strong> if you also use an <a href="/blog/ai-reception-virtuel-receptionist">AI receptionist</a>, let them share knowledge so the answers match.</li>
        <li><strong>Read the conversations</strong> in the first week and fix the gaps.</li>
      </ul>
      <h2 id="vaelg">How to choose the right AI widget</h2>
      <div class="blog-table"><table><thead><tr><th>Question</th><th>Why it matters</th></tr></thead><tbody>
        <tr><td>Can it book directly in my calendar?</td><td>Otherwise it is just a contact form with extra steps.</td></tr>
        <tr><td>Can it talk — not just type?</td><td>Many prefer to talk, especially on mobile.</td></tr>
        <tr><td>How well does it understand Danish?</td><td>Test with your customers' phrasing.</td></tr>
        <tr><td>Does it only answer from my information?</td><td>It must not invent prices or promises.</td></tr>
        <tr><td>Where is data processed, and is there a data processing agreement?</td><td>GDPR and the AI Act. See <a href="/blog/ai-widget-gdpr-danske-virksomheder">the guide</a>.</td></tr>
        <tr><td>How does it affect page speed?</td><td>It should load asynchronously.</td></tr>
        <tr><td>What does it cost, and is there a commitment?</td><td>With us DKK 999/month incl. 150 minutes of voice, and 7 days free.</td></tr>
      </tbody></table></div>
      <p>For more ways to use AI on your website, read <a href="/blog/ai-til-hjemmeside">AI for your website: 7 ways</a>. See the product on <a href="/widget">AI widget</a>.</p>
    `,
    meta_title_en: 'AI Widget for Your Website: Complete Guide 2026 | AIBooking.dk',
    meta_title_da: 'AI widget til hjemmeside: komplet guide 2026 | AIBooking.dk',
    meta_description_en: 'What an AI chat and voice widget can do, benefits for small businesses, installation, setup best practice and a checklist for choosing one.',
    meta_description_da: 'Hvad en AI chat- og talewidget kan, fordele for mindre virksomheder, installation, bedste praksis for opsætning og en tjekliste til valget.',
    keywords: ['ai widget', 'ai widget til hjemmeside', 'ai voice widget', 'ai chatbot dansk', 'booking widget', 'vælg ai widget'],
    image_url: '/blog/covers/ai-widget-hjemmeside-komplet-guide.svg',
    published: true,
    published_at: '2026-09-22',
    updated_at: UPDATED,
    related: ['ai-widget-vs-kontaktformular', 'ai-til-hjemmeside', 'widget-til-webshop'],
    faq: [
      {
        question_da: 'Virker AI-widgeten på min platform?',
        answer_da: 'Den virker på WordPress, Shopify, WooCommerce, Wix, Squarespace, Magento og egne løsninger via en kort kodestump.',
        question_en: 'Does the AI widget work on my platform?',
        answer_en: 'It works on WordPress, Shopify, WooCommerce, Wix, Squarespace, Magento and custom sites via a short code snippet.',
      },
      {
        question_da: 'Hvad koster en AI widget?',
        answer_da: 'Hos Aibooking.dk 999 kr. om måneden inkl. 150 minutters taletid, og de første 7 dage er gratis.',
        question_en: 'What does an AI widget cost?',
        answer_en: 'At Aibooking.dk DKK 999 per month incl. 150 minutes of talk time, and the first 7 days are free.',
      },
      {
        question_da: 'Gør widgeten min hjemmeside langsommere?',
        answer_da: 'Den indlæses asynkront, så den ikke forsinker visningen af siden.',
        question_en: 'Does the widget slow down my website?',
        answer_en: 'It loads asynchronously, so it doesn’t delay how quickly the page is displayed.',
      },
    ],
  },
  {
    id: 'ai-til-hjemmeside',
    slug: 'ai-til-hjemmeside',
    categorySlug: 'ai-widget',
    title_en: 'AI for Your Website: 7 Practical Ways to Put AI to Work',
    title_da: 'AI til hjemmeside: 7 praktiske måder at sætte AI i arbejde',
    excerpt_en: 'From answering visitors to qualifying leads, booking, product help, multilingual support and learning what visitors look for. Seven uses, what each takes, and what to avoid.',
    excerpt_da: 'Fra at svare besøgende til at kvalificere leads, booke, hjælpe med produkter, tale flere sprog og lære, hvad besøgende leder efter. Syv måder, hvad hver kræver, og hvad du skal undgå.',
    content_da: `
      <p>"AI til hjemmeside" kan betyde meget forskelligt: en chatbot, AI-skrevne tekster, søgning eller automatisk booking. Her er syv konkrete anvendelser for en mindre virksomhed — sorteret efter, hvor hurtigt de typisk giver værdi.</p>
      <h2>1. Svar på besøgendes spørgsmål med det samme</h2>
      <p>En AI-assistent, der svarer ud fra din egen information om priser, ydelser og åbningstider. Kræver: et vidensdokument med jeres svar. Undgå: at lade den svare på noget, den ikke har information om.</p>
      <h2>2. Book tider direkte</h2>
      <p>Den største gevinst for virksomheder med aftaler: besøgende booker i kalenderen uden at skulle ringe eller vente på en mail. Kræver: kalenderintegration. Se <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatisk booking med AI</a>.</p>
      <h2>3. Kvalificer leads og tilbudsforespørgsler</h2>
      <p>I stedet for en formular med fem felter stiller AI'en de spørgsmål, du ville stille — og sætter et opfølgende møde i kalenderen. Du får hele behovet, før du ringer. Se <a href="/blog/ai-widget-vs-kontaktformular">AI widget vs. kontaktformular</a>.</p>
      <h2>4. Lad besøgende tale i stedet for at skrive</h2>
      <p>En talewidget giver samme oplevelse som en telefonsamtale, direkte på siden. Det er især nyttigt på mobil og for besøgende, der ikke gider skrive lange beskeder.</p>
      ${CTA_WIDGET_DA}
      <h2>5. Hjælp kunder i webshoppen</h2>
      <p>Lagerstatus, størrelser, levering og "hvor er min pakke?" — besvaret ud fra live data, når AI'en er forbundet til butikken. Se <a href="/blog/shopify-ai-automatisering">automatisering af Shopify med AI</a>.</p>
      <h2>6. Betjen besøgende på flere sprog</h2>
      <p>Har du internationale kunder, kan AI'en skifte til engelsk eller andre sprog, når den besøgende gør. Det er billigere end at oversætte hele hjemmesiden — men erstatter ikke oversatte sider til SEO.</p>
      <h2>7. Lær hvad dine besøgende leder efter</h2>
      <p>Samtalerne er en guldgrube: de viser, hvilke spørgsmål din hjemmeside ikke besvarer. Brug dem til at forbedre tekster og FAQ — det er godt for både konvertering og SEO.</p>
      <h2>Hvad med AI-skrevne tekster?</h2>
      <p>Mange bruger også AI til at skrive tekster til hjemmesiden. Det kan spare tid, men Google belønner indhold, der er nyttigt og originalt — ikke masseproduceret tekst. Brug AI som hjælp, og lad indholdet bygge på jeres egen viden og erfaring.</p>
      <p>Den mest komplette introduktion til den første og vigtigste anvendelse finder du i <a href="/blog/ai-widget-hjemmeside-komplet-guide">AI widget til hjemmeside: den komplette guide</a>.</p>
    `,
    content_en: `
      <p>"AI for your website" can mean very different things: a chatbot, AI-written copy, search or automatic booking. Here are seven concrete uses for a small business — sorted by how quickly they typically add value.</p>
      <h2>1. Answer visitors' questions immediately</h2>
      <p>An AI assistant that answers from your own information on prices, services and opening hours. Requires: a knowledge document with your answers. Avoid: letting it answer things it has no information about.</p>
      <h2>2. Book appointments directly</h2>
      <p>The biggest gain for businesses with appointments: visitors book in the calendar without calling or waiting for an email. Requires: calendar integration. See <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatic booking with AI</a>.</p>
      <h2>3. Qualify leads and quote requests</h2>
      <p>Instead of a form with five fields, the AI asks the questions you would ask — and puts a follow-up meeting in the calendar. You get the whole need before you call. See <a href="/blog/ai-widget-vs-kontaktformular">AI widget vs. contact form</a>.</p>
      <h2>4. Let visitors talk instead of typing</h2>
      <p>A voice widget gives the same experience as a phone call, right on the page. It is especially useful on mobile and for visitors who don't want to type long messages.</p>
      ${CTA_WIDGET_EN}
      <h2>5. Help customers in the webshop</h2>
      <p>Stock, sizes, delivery and "where is my parcel?" — answered from live data when the AI is connected to the store. See <a href="/blog/shopify-ai-automatisering">Shopify automation with AI</a>.</p>
      <h2>6. Serve visitors in several languages</h2>
      <p>If you have international customers, the AI can switch to English or other languages when the visitor does. That is cheaper than translating the whole website — but does not replace translated pages for SEO.</p>
      <h2>7. Learn what your visitors are looking for</h2>
      <p>The conversations are a goldmine: they show which questions your website doesn't answer. Use them to improve copy and FAQs — good for both conversion and SEO.</p>
      <h2>What about AI-written copy?</h2>
      <p>Many also use AI to write website copy. It can save time, but Google rewards content that is helpful and original — not mass-produced text. Use AI as a helper, and base the content on your own knowledge and experience.</p>
      <p>The most complete introduction to the first and most important use is in <a href="/blog/ai-widget-hjemmeside-komplet-guide">AI widget for your website: the complete guide</a>.</p>
    `,
    meta_title_en: 'AI for Your Website: 7 Practical Ways | AIBooking.dk',
    meta_title_da: 'AI til hjemmeside: 7 praktiske måder | AIBooking.dk',
    meta_description_en: 'Seven practical ways to use AI on a business website — answering, booking, lead qualification, voice, webshop help, languages and insight.',
    meta_description_da: 'Syv praktiske måder at bruge AI på en virksomheds hjemmeside — svar, booking, leadkvalificering, tale, webshop, sprog og indsigt.',
    keywords: ['ai til hjemmeside', 'ai på hjemmesiden', 'ai hjemmeside', 'ai chatbot hjemmeside', 'ai booking hjemmeside'],
    image_url: '/blog/covers/ai-til-hjemmeside.svg',
    published: true,
    published_at: '2026-09-20',
    updated_at: UPDATED,
    related: ['ai-widget-hjemmeside-komplet-guide', 'ai-widget-vs-kontaktformular', 'shopify-ai-automatisering'],
    faq: [
      {
        question_da: 'Hvad er den mest nyttige brug af AI på en hjemmeside?',
        answer_da: 'For virksomheder med aftaler er det typisk en AI-widget, der svarer på spørgsmål og booker direkte i kalenderen.',
        question_en: 'What is the most useful use of AI on a website?',
        answer_en: 'For businesses with appointments it is typically an AI widget that answers questions and books directly in the calendar.',
      },
    ],
  },
  {
    id: 'ai-widget-vs-kontaktformular',
    slug: 'ai-widget-vs-kontaktformular',
    categorySlug: 'ai-widget',
    title_en: 'AI Widget vs. Contact Form: Why Visitors Leave — and What Converts Better',
    title_da: 'AI widget vs. kontaktformular: hvorfor besøgende forsvinder — og hvad der konverterer bedst',
    excerpt_en: 'A contact form asks the visitor to wait. An AI widget answers now. Where each one fits, why slow replies lose customers, and how to test the difference on your own site.',
    excerpt_da: 'En kontaktformular beder den besøgende om at vente. En AI widget svarer nu. Hvor hver passer bedst, hvorfor langsomme svar koster kunder, og hvordan du tester forskellen på din egen side.',
    content_da: `
      <p>Kontaktformularen har været standard på hjemmesider i årtier. Den er nem at sætte op og koster ingenting. Men den har en indbygget svaghed: den beder den besøgende om at <em>vente</em> — og en besøgende, der sammenligner tre udbydere, venter sjældent.</p>
      <h2>Hvorfor besøgende forsvinder</h2>
      <ul>
        <li><strong>Ventetiden:</strong> "Vi svarer inden for 24 timer" betyder, at kunden fortsætter med at lede.</li>
        <li><strong>Usikkerheden:</strong> kunden ved ikke, om de har skrevet det rigtige, eller om nogen læser det.</li>
        <li><strong>Frem og tilbage:</strong> det første svar er ofte et spørgsmål ("hvornår passer det?"), og så går der en dag mere.</li>
        <li><strong>Tidspunktet:</strong> mange henvendelser kommer om aftenen, hvor ingen svarer.</li>
      </ul>
      <h2>Sammenligningen</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Kontaktformular</th><th>AI widget</th></tr></thead><tbody>
        <tr><td>Svartid</td><td>Timer til dage</td><td>Sekunder</td></tr>
        <tr><td>Booking</td><td>Kræver opfølgning</td><td>Direkte i kalenderen</td></tr>
        <tr><td>Kvalitet af henvendelsen</td><td>Det, kunden selv skriver</td><td>AI'en spørger ind</td></tr>
        <tr><td>Uden for åbningstid</td><td>Venter til næste dag</td><td>Svarer med det samme</td></tr>
        <tr><td>Pris</td><td>Gratis</td><td>Abonnement</td></tr>
        <tr><td>Bedst til</td><td>Sager, der alligevel kræver et menneske</td><td>Booking, spørgsmål og leads</td></tr>
      </tbody></table></div>
      <h2>Skal formularen så væk?</h2>
      <p>Nej. Nogle henvendelser kræver alligevel et menneske — fx større tilbud eller klager — og nogle besøgende foretrækker at skrive en besked. Den bedste løsning er ofte begge dele: AI-widgeten svarer og booker med det samme, og formularen er der for dem, der vil sende en besked.</p>
      ${CTA_WIDGET_DA}
      <h2>Test forskellen på din egen side</h2>
      <ol>
        <li>Mål antal henvendelser og bookinger fra formularen i en måned.</li>
        <li>Tilføj AI-widgeten og mål det samme i den næste måned.</li>
        <li>Se også, <em>hvornår</em> henvendelserne kommer — mange vil komme uden for åbningstid.</li>
        <li>Læs samtalerne: hvilke spørgsmål stillede de besøgende, som siden ikke besvarede?</li>
      </ol>
      <p>Sæsonudsving kan påvirke tallene, så sammenlign gerne med samme periode sidste år. Læs mere om opsætning i <a href="/blog/ai-widget-hjemmeside-komplet-guide">AI widget til hjemmeside: den komplette guide</a>.</p>
    `,
    content_en: `
      <p>The contact form has been standard on websites for decades. It is easy to set up and costs nothing. But it has a built-in weakness: it asks the visitor to <em>wait</em> — and a visitor comparing three providers rarely waits.</p>
      <h2>Why visitors leave</h2>
      <ul>
        <li><strong>The wait:</strong> "We reply within 24 hours" means the customer keeps looking.</li>
        <li><strong>Uncertainty:</strong> the customer doesn't know if they wrote the right thing, or if anyone reads it.</li>
        <li><strong>Back and forth:</strong> the first reply is often a question ("when suits you?"), and another day passes.</li>
        <li><strong>Timing:</strong> many enquiries arrive in the evening, when nobody answers.</li>
      </ul>
      <h2>The comparison</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Contact form</th><th>AI widget</th></tr></thead><tbody>
        <tr><td>Response time</td><td>Hours to days</td><td>Seconds</td></tr>
        <tr><td>Booking</td><td>Needs follow-up</td><td>Directly in the calendar</td></tr>
        <tr><td>Quality of the enquiry</td><td>Whatever the customer writes</td><td>The AI asks follow-up questions</td></tr>
        <tr><td>After hours</td><td>Waits until the next day</td><td>Answers immediately</td></tr>
        <tr><td>Price</td><td>Free</td><td>Subscription</td></tr>
        <tr><td>Best for</td><td>Cases that need a person anyway</td><td>Booking, questions and leads</td></tr>
      </tbody></table></div>
      <h2>So should the form go?</h2>
      <p>No. Some enquiries need a person anyway — such as larger quotes or complaints — and some visitors prefer to write a message. The best solution is often both: the AI widget answers and books immediately, and the form is there for those who want to send a message.</p>
      ${CTA_WIDGET_EN}
      <h2>Test the difference on your own site</h2>
      <ol>
        <li>Measure enquiries and bookings from the form for a month.</li>
        <li>Add the AI widget and measure the same the following month.</li>
        <li>Look at <em>when</em> enquiries come in — many will arrive after hours.</li>
        <li>Read the conversations: which questions did visitors ask that the site didn't answer?</li>
      </ol>
      <p>Seasonal swings can affect the numbers, so compare with the same period last year if you can. Read more about setup in <a href="/blog/ai-widget-hjemmeside-komplet-guide">AI widget for your website: the complete guide</a>.</p>
    `,
    meta_title_en: 'AI Widget vs. Contact Form: What Converts Better? | AIBooking.dk',
    meta_title_da: 'AI widget vs. kontaktformular: hvad konverterer bedst? | AIBooking.dk',
    meta_description_en: 'Why slow form replies lose customers, how an AI widget compares on response time, booking and lead quality, and how to test it on your site.',
    meta_description_da: 'Hvorfor langsomme svar på formularer koster kunder, hvordan en AI widget klarer sig på svartid, booking og leadkvalitet, og hvordan du tester det.',
    keywords: ['ai widget vs kontaktformular', 'kontaktformular', 'konvertering hjemmeside', 'miste kunder hjemmeside', 'ai widget konvertering'],
    image_url: '/blog/covers/ai-widget-vs-kontaktformular.svg',
    published: true,
    published_at: '2026-05-06',
    updated_at: UPDATED,
    related: ['ai-widget-hjemmeside-komplet-guide', 'ai-til-hjemmeside', 'roi-ai-automatisering-virksomheder'],
    faq: [
      {
        question_da: 'Skal jeg fjerne min kontaktformular, når jeg har en AI widget?',
        answer_da: 'Nej, behold den gerne. AI-widgeten tager booking og spørgsmål med det samme, og formularen er der for dem, der hellere vil sende en besked.',
        question_en: 'Should I remove my contact form when I have an AI widget?',
        answer_en: 'No, feel free to keep it. The AI widget handles bookings and questions immediately, and the form is there for those who prefer to send a message.',
      },
    ],
  },
];
