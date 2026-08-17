// Static blog content — replaces the Supabase-backed blog_posts / blog_categories tables.
// To publish a new post: add an entry to `blogPosts` below (and a category to
// `blogCategories` if needed). No database or migration required.

export interface BlogCategory {
  slug: string;
  name_en: string;
  name_da: string;
  description_en: string;
  description_da: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  categorySlug: string;
  title_en: string;
  title_da: string;
  excerpt_en: string;
  excerpt_da: string;
  content_en: string;
  content_da: string;
  meta_title_en: string;
  meta_title_da: string;
  meta_description_en: string;
  meta_description_da: string;
  keywords: string[];
  image_url: string;
  published: boolean;
  published_at: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: 'ai-widget',
    name_en: 'AI Widget',
    name_da: 'AI Widget',
    description_en: 'Guides and insights on embedding an AI chat and voice widget on your website.',
    description_da: 'Guides og indsigter om at indlejre en AI chat- og talewidget på din hjemmeside.',
  },
  {
    slug: 'ai-inbound-outbound',
    name_en: 'AI Inbound & Outbound',
    name_da: 'AI Ind- og Udgående Opkald',
    description_en: 'How AI phone assistants handle incoming and outgoing calls for your business.',
    description_da: 'Hvordan AI-telefonassistenter håndterer indgående og udgående opkald for din virksomhed.',
  },
  {
    slug: 'ai-total-solution',
    name_en: 'AI Total Solution',
    name_da: 'AI Totalløsning',
    description_en: 'Complete AI automation across widget, phone and booking in one platform.',
    description_da: 'Komplet AI-automatisering på tværs af widget, telefon og booking i én platform.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'hvordan-ai-widgets-transformerer-kundeservice',
    slug: 'hvordan-ai-widgets-transformerer-kundeservice',
    categorySlug: 'ai-widget',
    title_en: 'How AI Widgets Are Transforming Customer Service',
    title_da: 'Hvordan AI-widgets transformerer kundeservice',
    excerpt_en: 'A chat and voice widget on your website can greet, qualify and book visitors around the clock. Here is what changes when AI takes the first conversation.',
    excerpt_da: 'En chat- og talewidget på din hjemmeside kan tage imod, kvalificere og booke besøgende døgnet rundt. Her er, hvad der ændrer sig, når AI tager den første samtale.',
    content_en: `
      <p>Most website visitors who want to book a service or ask a question don't land during opening hours. They browse in the evening, on a lunch break, or the moment a problem shows up. Traditionally that means a contact form and a wait for a reply the next business day — and a real chance the visitor books somewhere else in the meantime.</p>
      <p>An AI widget changes that first moment. Instead of a static form, visitors get a conversation: the widget answers common questions, understands what the visitor actually needs, and can check availability and book an appointment directly, without a human having to be online.</p>
      <h2>What an AI widget actually does</h2>
      <ul>
        <li><strong>Answers instantly.</strong> No "we'll get back to you within 24 hours" — the visitor gets a relevant answer immediately, in natural language.</li>
        <li><strong>Qualifies the request.</strong> The widget asks the right follow-up questions so your team receives complete, useful information instead of a one-line message.</li>
        <li><strong>Books directly into your calendar.</strong> When it's connected to your booking system, the widget can offer real available times and confirm the appointment on the spot.</li>
        <li><strong>Works in the visitor's language.</strong> A widget built for the Danish market should feel natural in Danish, with English available for international visitors.</li>
      </ul>
      <h2>Why this matters more than it used to</h2>
      <p>Customer expectations have shifted: people compare the experience of contacting a small business to the experience of using any modern app. An instant, competent reply on the website is quickly becoming the baseline, not a bonus. Businesses that only offer a contact form are, in practice, asking visitors to wait — and waiting is exactly what a visitor comparing several providers won't do.</p>
      <p>The widget doesn't replace your team; it removes the bottleneck at the very first step of contact, so your team spends time on the conversations that actually need a person, not on repeating opening hours and prices.</p>
      <h2>Where it fits best</h2>
      <p>Clinics use it to handle booking requests and common pre-visit questions outside opening hours. Craftsmen use it to capture job requests with the right details (address, type of task, urgency) before a callback. Webshops use it to answer order and product questions without pulling staff away from fulfilment. In every case, the pattern is the same: the widget handles the predictable, high-volume part of the conversation, and hands off to a human exactly when it should.</p>
    `,
    content_da: `
      <p>De fleste besøgende, der vil booke en tid eller stille et spørgsmål, lander ikke på hjemmesiden i åbningstiden. De browser om aftenen, i frokostpausen, eller lige når et problem opstår. Traditionelt betyder det en kontaktformular og en ventetid til næste hverdag — og en reel risiko for, at de booker et andet sted i mellemtiden.</p>
      <p>En AI-widget ændrer det første møde. I stedet for en statisk formular får den besøgende en samtale: widgeten svarer på almindelige spørgsmål, forstår hvad den besøgende faktisk har brug for, og kan tjekke ledige tider og booke direkte, uden at et menneske behøver at være online.</p>
      <h2>Hvad en AI-widget faktisk gør</h2>
      <ul>
        <li><strong>Svarer med det samme.</strong> Ikke "vi vender tilbage inden for 24 timer" — den besøgende får et relevant svar med det samme, i naturligt sprog.</li>
        <li><strong>Kvalificerer henvendelsen.</strong> Widgeten stiller de rigtige opfølgende spørgsmål, så dit team modtager komplet, brugbar information i stedet for en kort besked.</li>
        <li><strong>Booker direkte i kalenderen.</strong> Når den er forbundet til dit bookingsystem, kan widgeten tilbyde reelt ledige tider og bekræfte aftalen med det samme.</li>
        <li><strong>Virker på den besøgendes sprog.</strong> En widget bygget til det danske marked skal føles naturlig på dansk, med engelsk til internationale besøgende.</li>
      </ul>
      <h2>Hvorfor det betyder mere end tidligere</h2>
      <p>Kundernes forventninger har ændret sig: folk sammenligner oplevelsen af at kontakte en lille virksomhed med oplevelsen af at bruge en hvilken som helst moderne app. Et hurtigt, kompetent svar på hjemmesiden er ved at blive standarden, ikke en bonus. Virksomheder, der kun tilbyder en kontaktformular, beder i praksis den besøgende om at vente — og det er præcis det, en besøgende, der sammenligner flere udbydere, ikke gør.</p>
      <p>Widgeten erstatter ikke dit team; den fjerner flaskehalsen i selve det første kontaktpunkt, så dit team bruger tiden på de samtaler, der reelt kræver et menneske, i stedet for at gentage åbningstider og priser.</p>
      <h2>Hvor det passer bedst</h2>
      <p>Klinikker bruger det til at håndtere bookingforespørgsler og almindelige spørgsmål forud for besøget uden for åbningstiden. Håndværkere bruger det til at fange opgaveforespørgsler med de rigtige detaljer (adresse, opgavetype, hastegrad) inden en opringning. Webshops bruger det til at besvare ordre- og produktspørgsmål uden at trække medarbejdere væk fra pakning og forsendelse. I alle tilfælde er mønsteret det samme: widgeten håndterer den forudsigelige, volumentunge del af samtalen og sender videre til et menneske præcis når det giver mening.</p>
    `,
    meta_title_en: 'How AI Widgets Are Transforming Customer Service | AIBooking.dk',
    meta_title_da: 'Hvordan AI-widgets transformerer kundeservice | AIBooking.dk',
    meta_description_en: 'See how an AI chat and voice widget answers, qualifies and books website visitors around the clock, and where it fits best for clinics, craftsmen and webshops.',
    meta_description_da: 'Se hvordan en AI chat- og talewidget svarer, kvalificerer og booker besøgende på hjemmesiden døgnet rundt, og hvor det passer bedst for klinikker, håndværkere og webshops.',
    keywords: ['ai widget', 'kundeservice', 'automatisering', 'booking widget', 'chatbot'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-04-16',
  },
  {
    id: 'ai-widget-integration-bedste-praksis',
    slug: 'ai-widget-integration-bedste-praksis',
    categorySlug: 'ai-widget',
    title_en: 'AI Widget Integration Best Practices',
    title_da: 'Bedste praksis for AI-widget integration',
    excerpt_en: 'Getting an AI widget onto your site is the easy part. Getting it to actually convert takes a few deliberate choices — here is what to get right.',
    excerpt_da: 'At få en AI-widget på din hjemmeside er det nemme. At få den til reelt at konvertere kræver et par bevidste valg — her er, hvad du skal have styr på.',
    content_en: `
      <p>Adding a widget to a site takes minutes; making it genuinely useful takes a bit more thought. The difference between a widget visitors ignore and one that quietly books appointments all day usually comes down to a handful of setup decisions.</p>
      <h2>1. Give it real context, not just a greeting</h2>
      <p>A widget that only knows how to say hello isn't a receptionist, it's decoration. It should know your services, opening hours, prices where relevant, and the questions your team gets asked most often — the same information a new employee would need on their first day.</p>
      <h2>2. Connect it to your actual calendar</h2>
      <p>The biggest jump in usefulness happens when the widget can see real availability and book directly, instead of just collecting a message and a preferred date. That's the difference between "we'll call you back" and "you're booked for Thursday at 10am" — the second one closes the loop before the visitor has a chance to look elsewhere.</p>
      <h2>3. Decide what the widget should never do</h2>
      <p>Good integration is as much about boundaries as capability. Define clearly what gets handed off to a human — complex complaints, anything involving payment disputes, or requests outside your services — and make the handoff smooth rather than a dead end.</p>
      <h2>4. Match tone to your business</h2>
      <p>A clinic and a webshop shouldn't sound the same. The widget's tone, formality and pace should match how your team actually talks to customers, in Danish or English depending on who's asking.</p>
      <h2>5. Review real conversations regularly</h2>
      <p>The fastest way to improve a widget is to read what people actually ask it. Recurring questions it struggles with are a signal to add that information; recurring requests outside its scope are a signal to adjust what it's allowed to handle.</p>
      <h2>6. Place it where the intent already is</h2>
      <p>A widget buried at the bottom of a long page gets far less use than one visible on booking, pricing and contact pages — the pages people visit specifically because they're ready to act.</p>
    `,
    content_da: `
      <p>At tilføje en widget til en hjemmeside tager minutter; at gøre den reelt brugbar kræver lidt mere omtanke. Forskellen på en widget, besøgende ignorerer, og en, der stille og roligt booker aftaler hele dagen, handler som regel om en håndfuld opsætningsvalg.</p>
      <h2>1. Giv den reel kontekst, ikke kun en velkomsthilsen</h2>
      <p>En widget, der kun kan sige goddag, er ikke en receptionist, det er dekoration. Den skal kende dine ydelser, åbningstider, priser hvor det er relevant, og de spørgsmål dit team oftest får — samme information som en ny medarbejder ville have brug for på første arbejdsdag.</p>
      <h2>2. Forbind den til din faktiske kalender</h2>
      <p>Det største spring i brugbarhed sker, når widgeten kan se reel ledig tid og booke direkte, i stedet for blot at samle en besked og en ønsket dato op. Det er forskellen på "vi ringer tilbage" og "du er booket til torsdag kl. 10" — den anden lukker sløjfen, før den besøgende når at kigge sig om andre steder.</p>
      <h2>3. Beslut hvad widgeten aldrig skal gøre</h2>
      <p>God integration handler lige så meget om grænser som om evner. Definér tydeligt, hvad der skal sendes videre til et menneske — komplekse klager, alt med betalingstvister, eller forespørgsler uden for dine ydelser — og gør overdragelsen glidende frem for en blindgyde.</p>
      <h2>4. Match tonen til din virksomhed</h2>
      <p>En klinik og en webshop skal ikke lyde ens. Widgetens tone, formalitet og tempo skal matche, hvordan dit team faktisk taler med kunder, på dansk eller engelsk afhængigt af hvem der spørger.</p>
      <h2>5. Gennemgå rigtige samtaler jævnligt</h2>
      <p>Den hurtigste måde at forbedre en widget på er at læse, hvad folk faktisk spørger den om. Tilbagevendende spørgsmål, den har svært ved, er et signal om at tilføje den information; tilbagevendende forespørgsler uden for dens område er et signal om at justere, hvad den må håndtere.</p>
      <h2>6. Placér den, hvor hensigten allerede er</h2>
      <p>En widget gemt nederst på en lang side bliver brugt langt mindre end en, der er synlig på booking-, pris- og kontaktsider — de sider folk besøger netop fordi de er klar til at handle.</p>
    `,
    meta_title_en: 'AI Widget Integration Best Practices | AIBooking.dk',
    meta_title_da: 'Bedste praksis for AI-widget integration | AIBooking.dk',
    meta_description_en: 'Six practical choices that determine whether a website AI widget actually converts visitors: context, calendar integration, boundaries, tone, review and placement.',
    meta_description_da: 'Seks praktiske valg, der afgør om en AI-widget på hjemmesiden reelt konverterer besøgende: kontekst, kalenderintegration, grænser, tone, gennemgang og placering.',
    keywords: ['ai widget', 'integration', 'bedste praksis', 'konvertering', 'booking'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-04-10',
  },
  {
    id: 'ai-telefonassistent-fremtidens-kundeservice',
    slug: 'ai-telefonassistent-fremtidens-kundeservice',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI Phone Assistants: The Future of Customer Service',
    title_da: 'AI-telefonassistent: Fremtidens kundeservice',
    excerpt_en: 'The phone is still where most bookings and urgent requests happen — and it is the hardest channel to staff around the clock. Here is what an AI phone assistant changes.',
    excerpt_da: 'Telefonen er stadig der, hvor de fleste bookinger og akutte henvendelser sker — og det er den sværeste kanal at bemande døgnet rundt. Her er, hvad en AI-telefonassistent ændrer.',
    content_en: `
      <p>For many small and medium-sized businesses, the phone is still the primary booking channel — and the one that's hardest to staff consistently. A missed call during a busy moment, after hours, or during a lunch break isn't a small thing: for a caller who needs an appointment now, an unanswered phone often just means they call the next business on the list.</p>
      <h2>Two directions, one system</h2>
      <p>An AI phone assistant handles both directions of a business's call flow:</p>
      <ul>
        <li><strong>Inbound</strong> — answering incoming calls, understanding the reason for the call, checking availability, booking or rescheduling appointments, and answering routine questions, all without hold music or a voicemail box.</li>
        <li><strong>Outbound</strong> — calling to confirm appointments, follow up on missed bookings, or remind customers ahead of a visit, so that reminders happen consistently instead of depending on someone remembering to make the calls.</li>
      </ul>
      <h2>Why voice is different from a widget</h2>
      <p>Not every customer wants to type. Older customers, people driving, or anyone dealing with something urgent will pick up the phone before they open a website. A phone assistant meets them exactly where they already are, in a natural spoken conversation, in Danish.</p>
      <h2>What "handled well" looks like</h2>
      <p>A good AI phone assistant doesn't try to sound like it's pretending to be human — it tries to be efficient and pleasant to talk to. It confirms details back to the caller, handles interruptions and follow-up questions naturally, and knows when a request is outside what it should decide on its own, transferring the call to a person rather than getting stuck in a loop.</p>
      <h2>Where the time savings actually come from</h2>
      <p>The value isn't just "calls get answered." It's that every call that used to interrupt a staff member mid-task — a rescheduling request, a "what are your opening hours" question, a reminder call — now happens without pulling anyone away from the customer standing in front of them. The phone stops competing with the rest of the day's work.</p>
    `,
    content_da: `
      <p>For mange små og mellemstore virksomheder er telefonen stadig den primære bookingkanal — og den, der er sværest at bemande konsekvent. Et ubesvaret opkald i en travl stund, uden for åbningstid, eller i frokostpausen er ikke en bagatel: for en, der har brug for en tid nu, betyder et ubesvaret opkald ofte bare, at de ringer til den næste virksomhed på listen.</p>
      <h2>To retninger, ét system</h2>
      <p>En AI-telefonassistent håndterer begge retninger af en virksomheds opkaldsflow:</p>
      <ul>
        <li><strong>Indgående</strong> — besvarer opkald, forstår årsagen til opkaldet, tjekker ledig tid, booker eller flytter aftaler og svarer på rutinespørgsmål, alt sammen uden ventemusik eller telefonsvarer.</li>
        <li><strong>Udgående</strong> — ringer for at bekræfte aftaler, følger op på udeblevne bookinger, eller minder kunder om et kommende besøg, så påmindelser sker konsekvent i stedet for at afhænge af, at nogen husker at ringe.</li>
      </ul>
      <h2>Hvorfor telefon er anderledes end en widget</h2>
      <p>Ikke alle kunder vil skrive. Ældre kunder, folk der kører bil, eller alle der står med noget akut, griber telefonen før de åbner en hjemmeside. En telefonassistent møder dem præcis der, hvor de allerede er, i en naturlig talt samtale på dansk.</p>
      <h2>Hvad "håndteret godt" ser ud som</h2>
      <p>En god AI-telefonassistent prøver ikke at lyde som om den foregiver at være et menneske — den prøver at være effektiv og behagelig at tale med. Den bekræfter detaljer over for den, der ringer, håndterer afbrydelser og opfølgende spørgsmål naturligt, og ved hvornår en forespørgsel ligger uden for, hvad den selv skal afgøre, og stiller opkaldet videre til et menneske i stedet for at gå i ring.</p>
      <h2>Hvor tidsbesparelsen faktisk kommer fra</h2>
      <p>Værdien er ikke kun, at "opkald bliver besvaret". Det er, at hvert opkald, der tidligere afbrød en medarbejder midt i en opgave — en ombookingsanmodning, et "hvad er jeres åbningstider"-spørgsmål, en påmindelsesopringning — nu sker uden at trække nogen væk fra den kunde, der står foran dem. Telefonen holder op med at konkurrere med resten af dagens arbejde.</p>
    `,
    meta_title_en: 'AI Phone Assistants: The Future of Customer Service | AIBooking.dk',
    meta_title_da: 'AI-telefonassistent: Fremtidens kundeservice | AIBooking.dk',
    meta_description_en: 'How an AI phone assistant handles inbound calls and outbound reminders in Danish, and why voice still matters alongside a website widget.',
    meta_description_da: 'Hvordan en AI-telefonassistent håndterer indgående opkald og udgående påmindelser på dansk, og hvorfor telefon stadig betyder noget ved siden af en widget på hjemmesiden.',
    keywords: ['ai telefonassistent', 'inbound', 'outbound', 'telefon booking', 'kundeservice'],
    image_url: '/ai-voice-widget.webp',
    published: true,
    published_at: '2026-04-05',
  },
  {
    id: 'komplet-ai-automatisering-widget-telefon-booking',
    slug: 'komplet-ai-automatisering-widget-telefon-booking',
    categorySlug: 'ai-total-solution',
    title_en: 'Complete AI Automation: Widget, Phone & Booking',
    title_da: 'Komplet AI-automatisering: Widget, telefon og booking',
    excerpt_en: 'A website widget and a phone assistant are each useful alone. Connected to the same calendar and customer history, they become one consistent front desk.',
    excerpt_da: 'En widget på hjemmesiden og en telefonassistent er hver især nyttige alene. Forbundet til samme kalender og kundehistorik bliver de til én sammenhængende reception.',
    content_en: `
      <p>Most businesses that automate customer contact start with one channel — usually the website widget or the phone — and treat the other as a separate problem. That works, but it leaves a gap: a customer who chats on the website in the evening and calls the next morning has to start over, because the two channels don't know about each other.</p>
      <h2>What "total solution" actually means</h2>
      <p>A complete setup connects the website widget, the phone assistant, and follow-up messaging (SMS and email) to the same underlying calendar and customer record. In practice that means:</p>
      <ul>
        <li>A booking started in the widget can be confirmed, changed or cancelled by phone, and vice versa, without the customer repeating themselves.</li>
        <li>The system remembers previous contact, so a returning customer isn't treated as a stranger on every channel.</li>
        <li>Confirmations and reminders go out automatically after a booking, regardless of which channel it was made through.</li>
        <li>One dashboard shows every call, chat and booking, instead of three disconnected inboxes.</li>
      </ul>
      <h2>Why this beats a patchwork of tools</h2>
      <p>Bolting together a separate chatbot, a separate call-answering service and a separate reminder tool usually creates more admin, not less — someone still has to keep the calendars in sync and reconcile what each tool captured. A single connected system removes that reconciliation work entirely, because there's only one source of truth for availability and customer history.</p>
      <h2>Rolling it out without disruption</h2>
      <p>The practical path is usually to connect the existing booking calendar first, add the phone assistant to handle inbound and outbound calls, then add the website widget once the calendar integration is proven. Each step keeps working on its own, so the business never has a moment where nothing is answering.</p>
    `,
    content_da: `
      <p>De fleste virksomheder, der automatiserer kundekontakt, starter med én kanal — som regel widgeten på hjemmesiden eller telefonen — og behandler den anden som et separat problem. Det virker, men det efterlader et hul: en kunde, der chatter på hjemmesiden om aftenen og ringer næste morgen, skal starte forfra, fordi de to kanaler ikke kender til hinanden.</p>
      <h2>Hvad "totalløsning" faktisk betyder</h2>
      <p>En komplet opsætning forbinder widgeten på hjemmesiden, telefonassistenten og opfølgende beskeder (SMS og email) til den samme underliggende kalender og kundejournal. I praksis betyder det:</p>
      <ul>
        <li>En booking startet i widgeten kan bekræftes, ændres eller aflyses over telefonen, og omvendt, uden at kunden skal gentage sig selv.</li>
        <li>Systemet husker tidligere kontakt, så en tilbagevendende kunde ikke behandles som en fremmed på hver kanal.</li>
        <li>Bekræftelser og påmindelser sendes automatisk efter en booking, uanset hvilken kanal den blev lavet gennem.</li>
        <li>Ét dashboard viser alle opkald, chats og bookinger i stedet for tre adskilte indbakker.</li>
      </ul>
      <h2>Hvorfor det er bedre end et lappeværk af værktøjer</h2>
      <p>At sætte en separat chatbot, en separat opkaldstjeneste og et separat påmindelsesværktøj sammen skaber som regel mere administration, ikke mindre — nogen skal stadig holde kalenderne synkroniseret og afstemme, hvad hvert værktøj har fanget op. Ét sammenhængende system fjerner det afstemningsarbejde helt, fordi der kun er én sandhed for ledig tid og kundehistorik.</p>
      <h2>At rulle det ud uden forstyrrelser</h2>
      <p>Den praktiske vej er som regel at forbinde den eksisterende bookingkalender først, tilføje telefonassistenten til at håndtere indgående og udgående opkald, og derefter tilføje widgeten på hjemmesiden, når kalenderintegrationen er bevist. Hvert trin bliver ved med at fungere for sig selv, så virksomheden aldrig har et øjeblik, hvor intet svarer.</p>
    `,
    meta_title_en: 'Complete AI Automation: Widget, Phone & Booking | AIBooking.dk',
    meta_title_da: 'Komplet AI-automatisering: Widget, telefon og booking | AIBooking.dk',
    meta_description_en: 'Why connecting the website widget, phone assistant and booking calendar into one system beats running separate tools for each channel.',
    meta_description_da: 'Hvorfor det at forbinde widget, telefonassistent og bookingkalender i ét system er bedre end at køre separate værktøjer til hver kanal.',
    keywords: ['ai automatisering', 'totalløsning', 'booking', 'widget', 'telefonassistent'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-03-28',
  },
  {
    id: 'roi-ai-automatisering-virksomheder',
    slug: 'roi-ai-automatisering-virksomheder',
    categorySlug: 'ai-total-solution',
    title_en: 'The ROI of AI Automation for Businesses',
    title_da: 'ROI af AI-automatisering for virksomheder',
    excerpt_en: 'Before rolling out AI automation, it helps to know exactly what to measure. Here is a practical way to think about the return, not just the cost.',
    excerpt_da: 'Før du ruller AI-automatisering ud, hjælper det at vide præcis, hvad du skal måle på. Her er en praktisk måde at tænke på afkastet, ikke kun omkostningen.',
    content_en: `
      <p>"Will this pay for itself?" is the right question to ask before automating reception and booking — and it's answerable, as long as you look at the right numbers rather than a vague sense of "efficiency."</p>
      <h2>Start with what a missed contact actually costs</h2>
      <p>Every unanswered call or unread evening message is a booking that either doesn't happen or happens with a competitor instead. The clearest way to think about ROI isn't "hours saved" in the abstract — it's the value of the bookings that would otherwise have been lost, plus the staff time that's freed up from repetitive admin.</p>
      <h2>Where the return typically shows up</h2>
      <ul>
        <li><strong>Fewer missed bookings.</strong> Calls and messages outside opening hours get answered instead of going to voicemail or an unread inbox.</li>
        <li><strong>Fewer no-shows.</strong> Consistent automatic reminders reduce the number of appointments customers simply forget.</li>
        <li><strong>Less time on repetitive questions.</strong> Staff stop re-answering "what are your opening hours" and "how much does it cost" dozens of times a week.</li>
        <li><strong>Faster response times.</strong> An instant reply keeps a comparison-shopping customer from booking elsewhere while they wait.</li>
      </ul>
      <h2>What to actually track</h2>
      <p>Before switching anything on, note your current numbers: how many calls go unanswered in a typical week, how many bookings are made outside opening hours (a rough proxy for demand you're currently missing), and your no-show rate. After automation is running, the same three numbers tell you plainly whether it's working — no guesswork required.</p>
      <h2>The honest caveat</h2>
      <p>Automation pays off fastest for businesses where booking volume and call volume are already meaningful — a quiet, low-traffic business will see a smaller effect than a busy clinic or service company. The right first step is usually to look at how many contacts you're currently missing, and size the expectation accordingly.</p>
    `,
    content_da: `
      <p>"Betaler det her sig selv?" er det rigtige spørgsmål at stille, før du automatiserer reception og booking — og det kan besvares, så længe du kigger på de rigtige tal frem for en vag fornemmelse af "effektivitet".</p>
      <h2>Start med, hvad en tabt henvendelse faktisk koster</h2>
      <p>Hvert ubesvaret opkald eller ulæst aftenbesked er en booking, der enten ikke sker, eller sker hos en konkurrent i stedet. Den klareste måde at tænke på ROI er ikke "sparede timer" i det abstrakte — det er værdien af de bookinger, der ellers ville være gået tabt, plus den medarbejdertid, der frigøres fra gentagen administration.</p>
      <h2>Hvor afkastet typisk viser sig</h2>
      <ul>
        <li><strong>Færre tabte bookinger.</strong> Opkald og beskeder uden for åbningstid bliver besvaret i stedet for at gå til telefonsvarer eller en ulæst indbakke.</li>
        <li><strong>Færre udeblivelser.</strong> Konsekvente automatiske påmindelser reducerer antallet af aftaler, kunder simpelthen glemmer.</li>
        <li><strong>Mindre tid på gentagne spørgsmål.</strong> Medarbejdere stopper med at svare på "hvad er jeres åbningstider" og "hvad koster det" adskillige gange om ugen.</li>
        <li><strong>Hurtigere svartid.</strong> Et øjeblikkeligt svar forhindrer, at en kunde, der sammenligner udbydere, booker et andet sted, mens de venter.</li>
      </ul>
      <h2>Hvad du faktisk skal måle</h2>
      <p>Før du tænder for noget, så noter dine nuværende tal: hvor mange opkald går ubesvarede i en typisk uge, hvor mange bookinger sker uden for åbningstid (en grov indikator for efterspørgsel, du i øjeblikket går glip af), og din andel af udeblivelser. Når automatiseringen kører, fortæller de samme tre tal dig tydeligt, om det virker — uden gætværk.</p>
      <h2>Den ærlige forbehold</h2>
      <p>Automatisering betaler sig hurtigst for virksomheder, hvor booking- og opkaldsvolumen allerede er markant — en stille virksomhed med lav trafik vil se en mindre effekt end en travl klinik eller servicevirksomhed. Det rigtige første skridt er som regel at se på, hvor mange henvendelser du i øjeblikket går glip af, og tilpasse forventningen derefter.</p>
    `,
    meta_title_en: 'The ROI of AI Automation for Businesses | AIBooking.dk',
    meta_title_da: 'ROI af AI-automatisering for virksomheder | AIBooking.dk',
    meta_description_en: 'A practical framework for measuring the return on AI reception and booking automation: what it costs to miss a contact, and what to track before and after.',
    meta_description_da: 'En praktisk model til at måle afkastet af AI-reception og bookingautomatisering: hvad det koster at gå glip af en henvendelse, og hvad du skal måle på før og efter.',
    keywords: ['roi', 'ai automatisering', 'virksomheder', 'booking', 'effektivitet'],
    image_url: '/ai-widget-website.webp',
    published: true,
    published_at: '2026-03-20',
  },
];

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.published);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getPublishedPosts().filter((post) => post.categorySlug === categorySlug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getPublishedPosts()
    .filter((p) => p.categorySlug === post.categorySlug && p.id !== post.id)
    .slice(0, limit);
}
