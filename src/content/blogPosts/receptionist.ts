import type { BlogPost } from '../blog';

// AI receptionist cluster: what it is, what it costs, how it compares with a
// human answering service, when to hand over to a person, and who it suits.

const UPDATED = '2026-10-16';

const CTA_TRIAL_DA = `<div class="blog-cta"><strong>Prøv en AI-receptionist på dit eget nummer</strong><p>Opret en gratis konto, viderestil dit nummer, og lad AI'en tage rigtige opkald i 7 dage. Intet betalingskort.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/demo">Book en demo</a></div></div>`;
const CTA_TRIAL_EN = `<div class="blog-cta"><strong>Try an AI receptionist on your own number</strong><p>Create a free account, forward your number and let the AI take real calls for 7 days. No credit card.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/demo">Book a demo</a></div></div>`;

export const receptionistPosts: BlogPost[] = [
  {
    id: 'ai-reception-virtuel-receptionist',
    slug: 'ai-reception-virtuel-receptionist',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'What Is an AI Receptionist? How a Virtual Receptionist Works',
    title_da: 'Hvad er en AI-receptionist? Sådan fungerer en virtuel receptionist',
    excerpt_en: 'An AI receptionist answers your phone, understands why the customer is calling and books, answers or hands over. Here is what happens during a call, step by step — and where its limits are.',
    excerpt_da: 'En AI-receptionist tager telefonen, forstår hvorfor kunden ringer, og booker, svarer eller stiller videre. Her er hvad der sker under et opkald, trin for trin — og hvor grænserne går.',
    content_da: `
      <p>En <strong>AI-receptionist</strong> er et stykke software, der tager telefonen på vegne af din virksomhed og fører en almindelig samtale med den, der ringer. Den forstår, hvad kunden siger, finder ud af hvorfor de ringer, og gør noget ved det: booker en tid, svarer på et spørgsmål, tager en besked eller stiller videre til en kollega. Den samme AI kan også sidde på hjemmesiden som en chat- eller talewidget.</p>
      <p>Den adskiller sig fra en klassisk telefonmenu ("tryk 1 for booking") ved, at kunden bare taler. Og den adskiller sig fra en telefonsvarer ved, at sagen bliver løst under opkaldet i stedet for næste morgen.</p>
      <div class="blog-toc"><strong>I denne guide</strong><ol><li><a href="#trin">Hvad sker der under et opkald?</a></li><li><a href="#kan">Hvad kan en AI-receptionist klare?</a></li><li><a href="#kan-ikke">Hvad skal den ikke klare?</a></li><li><a href="#opsaetning">Hvad kræver opsætningen?</a></li><li><a href="#vurdering">Er det relevant for dig?</a></li></ol></div>
      <h2 id="trin">Hvad sker der under et opkald?</h2>
      <p>Et typisk opkald hos en fysioterapeut kl. 19:40 ser sådan ud:</p>
      <ol>
        <li><strong>Opkaldet viderestilles.</strong> Klinikken har valgt, at opkald uden for åbningstid sendes videre til AI'en. Kunden ringer til det sædvanlige nummer og mærker ingen forskel på nummeret.</li>
        <li><strong>AI'en præsenterer sig.</strong> "Du taler med klinikkens digitale assistent — hvad kan jeg hjælpe med?" Det er både ærligt og et krav i EU, at folk ved, de taler med en AI.</li>
        <li><strong>Den forstår ærindet.</strong> Kunden fortæller med egne ord, at ryggen har låst sig, og at hun gerne vil have en tid i denne uge. AI'en omsætter talen til tekst, forstår at det er en booking og stiller de spørgsmål, klinikken har bedt om: ny eller eksisterende patient, og hvor akut det er.</li>
        <li><strong>Den slår op i kalenderen.</strong> AI'en ser kun de tider, der reelt er ledige, og foreslår to af dem.</li>
        <li><strong>Den booker og bekræfter.</strong> Tiden skrives direkte i kalenderen, og kunden får en SMS med tid og adresse.</li>
        <li><strong>Du får et referat.</strong> Opkaldet ligger i dashboardet med optagelse, transskription og et kort resumé, så personalet næste morgen kan se, hvad der er aftalt.</li>
      </ol>
      <p>Hele forløbet tager typisk et til to minutter. Ville kunden i stedet have talt med sin faste behandler om en genoptræningsplan, ville AI'en have taget en besked med navn, nummer og ærinde — fordi klinikken har besluttet, at den slags ikke skal afgøres af en AI.</p>
      <h2 id="kan">Hvad kan en AI-receptionist klare?</h2>
      <ul>
        <li><strong>Booking, ombooking og aflysning</strong> i Google Kalender, Outlook eller dit branchesystem.</li>
        <li><strong>Gengangerspørgsmål</strong> om åbningstider, priser, adresse, parkering, ydelser og leveringstider — ud fra den viden, du har givet den.</li>
        <li><strong>Kvalificering</strong>: den stiller de spørgsmål, din virksomhed skal bruge for at handle på henvendelsen (adresse og opgavetype hos en håndværker, ordrenummer hos en webshop).</li>
        <li><strong>Mange opkald på én gang</strong>: ti samtidige opkald bliver besvaret samtidig, så ingen ender i kø.</li>
        <li><strong>Udgående opkald</strong> med påmindelser, bekræftelser og opfølgning. Læs mere om <a href="/blog/inbound-outbound-forskel">forskellen på indgående og udgående AI-opkald</a>.</li>
        <li><strong>Dokumentation</strong>: optagelse, transskription og referat af hver samtale.</li>
      </ul>
      <h2 id="kan-ikke">Hvad skal den ikke klare?</h2>
      <p>En god AI-receptionist kender sine grænser — og det gør du også, når du sætter den op. Klager, akutte sager med risiko for skade, prisforhandling, sundhedsfaglige vurderinger og alt, hvor kunden udtrykkeligt beder om et menneske, bør stilles videre eller ende som en besked. Vi har samlet reglerne i guiden om <a href="/blog/ai-receptionist-viderestilling-til-menneske">hvornår et opkald skal viderestilles til et menneske</a>.</p>
      <p>Den kan heller ikke svare på noget, den ikke har fået at vide. Spørger en kunde om en pris, du aldrig har oplyst, skal svaret være "det vender vi tilbage på" — ikke et gæt. Det er en del af opsætningen at bestemme, hvad AI'en må love.</p>
      ${CTA_TRIAL_DA}
      <h2 id="opsaetning">Hvad kræver opsætningen?</h2>
      <ol>
        <li><strong>Viderestilling af dit nummer.</strong> Du beholder dit nummer og vælger, hvornår AI'en tager over: altid, uden for åbningstid, når linjen er optaget, eller efter et antal ring.</li>
        <li><strong>Viden om din forretning.</strong> Ydelser, priser, åbningstider, de spørgsmål kunderne faktisk stiller — og hvad AI'en ikke må svare på.</li>
        <li><strong>Kalenderforbindelse</strong>, så den kun booker i ledige tider.</li>
        <li><strong>Regler for viderestilling</strong>: hvem skal have hvilke opkald, og hvornår.</li>
        <li><strong>Test.</strong> Ring selv ind med de ti mest almindelige henvendelser og et par svære, før kunderne gør det.</li>
      </ol>
      <p>Hos Aibooking.dk tager det typisk under en uge fra første samtale til en AI-stemme, der tager rigtige opkald. Se trin for trin i <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">guiden til at komme i gang</a>.</p>
      <h2 id="vurdering">Er en AI-receptionist relevant for dig?</h2>
      <p>Den giver mest værdi, når mindst ét af tre forhold gælder: I misser opkald, fordi ingen kan nå telefonen (håndværkere på en opgave, behandlere midt i en behandling); en stor del af opkaldene er de samme spørgsmål igen og igen; eller kunderne ringer uden for åbningstid. Har I kun få opkald om ugen, som alle kræver en specialist, er gevinsten mindre.</p>
      <p>Vil du vide, hvad det koster, så læs <a href="/blog/hvad-koster-en-ai-receptionist">hvad en AI-receptionist koster i Danmark</a>. Overvejer du en traditionel telefonpasningsservice, så se <a href="/blog/ai-receptionist-vs-telefonpasning">sammenligningen af AI og menneskelig telefonpasning</a>. Og vil du høre, hvordan det lyder, så lyt til <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">et rigtigt eksempel på en dansk AI-receptionist</a>.</p>
    `,
    content_en: `
      <p>An <strong>AI receptionist</strong> is software that answers the phone on behalf of your business and holds an ordinary conversation with the caller. It understands what the customer says, works out why they are calling and acts on it: books an appointment, answers a question, takes a message or transfers the call to a colleague. The same AI can also sit on your website as a chat or voice widget.</p>
      <p>It differs from a classic phone menu ("press 1 for bookings") because the caller simply talks. And it differs from voicemail because the matter is solved during the call instead of the next morning.</p>
      <div class="blog-toc"><strong>In this guide</strong><ol><li><a href="#trin">What happens during a call?</a></li><li><a href="#kan">What can an AI receptionist handle?</a></li><li><a href="#kan-ikke">What should it not handle?</a></li><li><a href="#opsaetning">What does setup involve?</a></li><li><a href="#vurdering">Is it relevant for you?</a></li></ol></div>
      <h2 id="trin">What happens during a call?</h2>
      <p>A typical call to a physiotherapy clinic at 7:40 pm looks like this:</p>
      <ol>
        <li><strong>The call is forwarded.</strong> The clinic has chosen to send after-hours calls to the AI. The patient dials the usual number and notices no difference.</li>
        <li><strong>The AI introduces itself.</strong> "You are speaking with the clinic's digital assistant — how can I help?" That is honest, and in the EU people must be told they are talking to an AI.</li>
        <li><strong>It understands the request.</strong> The patient explains in her own words that her back has locked and she wants an appointment this week. The AI turns speech into text, recognises a booking and asks the questions the clinic has defined: new or existing patient, and how urgent it is.</li>
        <li><strong>It checks the calendar.</strong> The AI only sees slots that are genuinely free and offers two of them.</li>
        <li><strong>It books and confirms.</strong> The appointment is written straight into the calendar and the patient receives a text message with time and address.</li>
        <li><strong>You get a summary.</strong> The call appears in the dashboard with recording, transcript and a short summary, so staff can see what was agreed the next morning.</li>
      </ol>
      <p>The whole flow usually takes one to two minutes. Had the patient wanted to discuss a rehabilitation plan with her therapist, the AI would have taken a message with name, number and reason — because the clinic decided that kind of question is not for an AI to settle.</p>
      <h2 id="kan">What can an AI receptionist handle?</h2>
      <ul>
        <li><strong>Booking, rescheduling and cancellations</strong> in Google Calendar, Outlook or your industry system.</li>
        <li><strong>Recurring questions</strong> about opening hours, prices, address, parking, services and delivery times — based on what you have told it.</li>
        <li><strong>Qualification</strong>: it asks the questions your business needs to act (address and type of job for a tradesperson, order number for a webshop).</li>
        <li><strong>Many calls at once</strong>: ten simultaneous calls are answered simultaneously, so nobody waits in a queue.</li>
        <li><strong>Outbound calls</strong> with reminders, confirmations and follow-up. Read about <a href="/blog/inbound-outbound-forskel">the difference between inbound and outbound AI calls</a>.</li>
        <li><strong>Documentation</strong>: recording, transcript and summary of every conversation.</li>
      </ul>
      <h2 id="kan-ikke">What should it not handle?</h2>
      <p>A good AI receptionist knows its limits — and so do you when you configure it. Complaints, urgent situations with risk of damage, price negotiation, clinical assessments and anything where the caller explicitly asks for a person should be transferred or end as a message. We collected the rules in the guide on <a href="/blog/ai-receptionist-viderestilling-til-menneske">when a call should be transferred to a human</a>.</p>
      <p>It also cannot answer what it has not been told. If a customer asks for a price you never provided, the answer should be "we will get back to you" — not a guess. Deciding what the AI may promise is part of the setup.</p>
      ${CTA_TRIAL_EN}
      <h2 id="opsaetning">What does setup involve?</h2>
      <ol>
        <li><strong>Forwarding your number.</strong> You keep your number and choose when the AI takes over: always, outside opening hours, when the line is busy, or after a number of rings.</li>
        <li><strong>Knowledge about your business.</strong> Services, prices, opening hours, the questions customers actually ask — and what the AI must not answer.</li>
        <li><strong>A calendar connection</strong>, so it only books free slots.</li>
        <li><strong>Transfer rules</strong>: who should get which calls, and when.</li>
        <li><strong>Testing.</strong> Call in yourself with the ten most common requests and a few hard ones before customers do.</li>
      </ol>
      <p>At Aibooking.dk it typically takes less than a week from the first conversation to an AI voice taking real calls. See the steps in the <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">getting-started guide</a>.</p>
      <h2 id="vurdering">Is an AI receptionist relevant for you?</h2>
      <p>It adds the most value when at least one of three things is true: you miss calls because nobody can reach the phone (tradespeople on a job, therapists mid-treatment); a large share of calls are the same questions again and again; or customers call outside opening hours. If you only get a few calls a week that all need a specialist, the gain is smaller.</p>
      <p>To see what it costs, read <a href="/blog/hvad-koster-en-ai-receptionist">what an AI receptionist costs in Denmark</a>. Considering a traditional answering service? See the <a href="/blog/ai-receptionist-vs-telefonpasning">comparison of AI and human phone answering</a>. And to hear what it sounds like, listen to <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">a real example of a Danish AI receptionist</a>.</p>
    `,
    meta_title_en: 'What Is an AI Receptionist? How It Works | AIBooking.dk',
    meta_title_da: 'Hvad er en AI-receptionist? Sådan fungerer den | AIBooking.dk',
    meta_description_en: 'What an AI receptionist is, what happens during a call step by step, what it can and should not handle, and what setup involves.',
    meta_description_da: 'Hvad en AI-receptionist er, hvad der sker under et opkald trin for trin, hvad den kan og ikke skal klare, og hvad opsætningen kræver.',
    keywords: ['ai-receptionist', 'hvad er en ai-receptionist', 'virtuel receptionist', 'ai reception', 'digital receptionist'],
    image_url: '/blog/covers/ai-reception-virtuel-receptionist.svg',
    published: true,
    published_at: '2026-09-19',
    updated_at: UPDATED,
    audioDemo: 'bottom',
    related: ['hvad-koster-en-ai-receptionist', 'ai-receptionist-vs-telefonpasning', 'ai-receptionist-viderestilling-til-menneske'],
    faq: [
      {
        question_da: 'Skal en AI-receptionist sige, at den er en AI?',
        answer_da: 'Ja. Efter EU’s AI-forordning skal personer informeres om, at de interagerer med et AI-system, medmindre det er åbenlyst. Det nemmeste er, at velkomsten siger "digital assistent" eller "AI-assistent".',
        question_en: 'Does an AI receptionist have to say it is an AI?',
        answer_en: 'Yes. Under the EU AI Act, people must be informed that they are interacting with an AI system unless it is obvious. The simplest way is a greeting that says "digital assistant" or "AI assistant".',
      },
      {
        question_da: 'Kan jeg beholde mit telefonnummer?',
        answer_da: 'Ja. Du viderestiller dit eksisterende nummer og vælger selv, om AI’en tager alle opkald, kun uden for åbningstid eller kun når linjen er optaget.',
        question_en: 'Can I keep my phone number?',
        answer_en: 'Yes. You forward your existing number and choose whether the AI takes all calls, only after hours, or only when the line is busy.',
      },
      {
        question_da: 'Hvad er forskellen på en AI-receptionist og en telefonmenu?',
        answer_da: 'En telefonmenu sorterer opkald med tastetryk. En AI-receptionist fører en samtale, forstår ærindet med kundens egne ord og løser det — fx ved at booke direkte i kalenderen.',
        question_en: 'What is the difference between an AI receptionist and a phone menu?',
        answer_en: 'A phone menu sorts calls with key presses. An AI receptionist holds a conversation, understands the request in the caller’s own words and resolves it — for example by booking straight into the calendar.',
      },
    ],
    sources: [
      { title: 'Forordning (EU) 2024/1689 om kunstig intelligens (AI-forordningen), artikel 50', publisher: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj', date: '2024-07-12' },
    ],
  },
  {
    id: 'hvad-koster-en-ai-receptionist',
    slug: 'hvad-koster-en-ai-receptionist',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'What Does an AI Receptionist Cost in Denmark? Prices and Calculation (2026)',
    title_da: 'Hvad koster en AI-receptionist i Danmark? Priser og regnestykke (2026)',
    excerpt_en: 'An AI receptionist is usually priced as a monthly plan with included talk time. Here is what drives the price, what our plans cost, and how to calculate whether it pays off for your business.',
    excerpt_da: 'En AI-receptionist prissættes typisk som et månedligt abonnement med inkluderet taletid. Her er hvad der driver prisen, hvad vores pakker koster, og hvordan du regner ud, om det kan betale sig.',
    content_da: `
      <p>Prisen på en AI-receptionist afhænger mindre af "AI'en" og mere af, hvor mange minutter den taler, hvor meget den skal kunne, og hvor meget hjælp du vil have til opsætningen. Her gennemgår vi prismodellerne på markedet, vores egne priser og et regnestykke, du kan lave med dine egne tal.</p>
      <h2>De tre måder AI-receptionister prissættes på</h2>
      <ul>
        <li><strong>Abonnement med inkluderet taletid.</strong> En fast månedspris med et antal minutter. Forudsigeligt, og den mest almindelige model for små og mellemstore virksomheder.</li>
        <li><strong>Betaling pr. minut.</strong> Du betaler kun for det, der bruges. Billigt ved få opkald, men svært at budgettere i travle perioder.</li>
        <li><strong>Fast pris pr. måned uden minutloft</strong>, ofte kombineret med en større opstartsbetaling og længere binding. Typisk hos løsninger, der sælges som et skræddersyet projekt.</li>
      </ul>
      <p>Uanset model bør du spørge: Hvad koster minutter ud over pakken? Er der binding? Hvad koster opsætningen? Og er SMS, optagelse og kalenderintegration med i prisen eller tilkøb?</p>
      <h2>Hvad koster Aibooking.dk?</h2>
      <p>Vores priser er offentlige (oktober 2026). Alle pakker indeholder både indgående og udgående opkald, kalenderintegration, SMS og optagelse.</p>
      <div class="blog-table"><table><thead><tr><th>Pakke</th><th>Pris pr. måned</th><th>Inkluderet taletid</th><th>Pris pr. inkluderet minut</th></tr></thead><tbody>
        <tr><td>Demo (prøveperiode)</td><td>Gratis i 7 dage</td><td>10 minutter</td><td>–</td></tr>
        <tr><td>Starter</td><td>999 kr.</td><td>150 minutter</td><td>ca. 6,66 kr.</td></tr>
        <tr><td>Professional</td><td>2.499 kr.</td><td>600 minutter</td><td>ca. 4,17 kr.</td></tr>
        <tr><td>Enterprise</td><td>5.999 kr.</td><td>2.000 minutter</td><td>ca. 3,00 kr.</td></tr>
      </tbody></table></div>
      <p>Opsætning og onboarding er et <strong>valgfrit</strong> engangskøb til samme pris som den valgte pakke (fx 999 kr. for Starter) inkl. en times opfølgende support. Du kan også sætte det op selv. Ad hoc-opgaver koster 695 kr. i timen for prompting/træning og 1.100 kr. i timen for udvikling. Se de aktuelle priser på <a href="/ind-og-udgaaende-opkald#priser">siden om AI-telefonpasning</a>.</p>
      <h2>Hvor mange minutter har du brug for?</h2>
      <p>Tag antallet af opkald, AI'en skal tage om måneden, og gang med den gennemsnitlige samtalelængde. En booking tager typisk et til tre minutter.</p>
      <ul>
        <li><strong>Lille klinik:</strong> 60 opkald uden for åbningstid × 2 minutter = 120 minutter → Starter.</li>
        <li><strong>Håndværker med fire montører:</strong> 200 opkald × 2,5 minutter = 500 minutter → Professional.</li>
        <li><strong>Webshop i højsæson:</strong> 700 opkald × 2 minutter = 1.400 minutter → Enterprise.</li>
      </ul>
      <p>Prøveperiodens dashboard viser den reelle gennemsnitlige samtalelængde for jeres opkald, så I ikke skal gætte.</p>
      ${CTA_TRIAL_DA}
      <h2>Regnestykket: kan det betale sig?</h2>
      <p>Sammenlign ikke kun med lønnen til en receptionist. Det rigtige regnestykke har tre dele:</p>
      <ol>
        <li><strong>Tid, der frigøres.</strong> Hvor mange minutter om dagen bruger I på at tage telefonen, finde tider og ringe tilbage? Gang med timeprisen for dem, der i dag gør det.</li>
        <li><strong>Opkald, der i dag går tabt.</strong> Hvor mange opkald ender på telefonsvareren eller bliver aldrig ringet tilbage? Gang med andelen, der ville være blevet til en kunde, og værdien af en kunde.</li>
        <li><strong>Udeblivelser.</strong> Hvis påmindelsesopkald får bare én kunde om ugen til at melde afbud i tide, kan tiden gives til en anden.</li>
      </ol>
      <p><strong>Eksempel med tænkte tal:</strong> En frisør misser 15 opkald om ugen under klipninger. Hvis hvert femte var blevet til en booking til 450 kr., er det 3 bookinger × 450 kr. × 4 uger = 5.400 kr. om måneden i omsætning, der i dag går til konkurrenten. Mod det står Starter til 999 kr. Brug dine egne tal — vi har en mere detaljeret model i <a href="/blog/roi-ai-automatisering-virksomheder">guiden til ROI af AI-automatisering</a>.</p>
      <h2>Hvad med en menneskelig receptionist eller telefonpasning?</h2>
      <p>En fastansat receptionist koster løn, pension, ferie og afløsning ved sygdom, og kan tage ét opkald ad gangen i åbningstiden. En telefonpasningsservice tager typisk betaling pr. opkald eller pr. minut og tager som regel en besked i stedet for at booke. Det betyder ikke, at AI altid er bedre — en receptionist gør meget mere end at tage telefonen. Se den fulde sammenligning i <a href="/blog/ai-receptionist-vs-telefonpasning">AI-receptionist vs. traditionel telefonpasning</a>.</p>
      <h2>Skjulte omkostninger, du bør spørge til</h2>
      <ul>
        <li>Pris for minutter ud over pakken og om pakken fornyes automatisk.</li>
        <li>Opstartsgebyr og binding.</li>
        <li>Om SMS-bekræftelser, optagelse og transskription er med.</li>
        <li>Om integration til dit branchesystem koster ekstra.</li>
        <li>Om du kan opsige og få dine data udleveret og slettet.</li>
      </ul>
    `,
    content_en: `
      <p>The price of an AI receptionist depends less on "the AI" and more on how many minutes it talks, how much it has to do, and how much help you want with setup. Below we cover the pricing models on the market, our own prices and a calculation you can run with your own numbers.</p>
      <h2>The three ways AI receptionists are priced</h2>
      <ul>
        <li><strong>Subscription with included talk time.</strong> A fixed monthly price with a number of minutes. Predictable, and the most common model for small and medium-sized businesses.</li>
        <li><strong>Pay per minute.</strong> You only pay for what is used. Cheap with few calls, but hard to budget in busy periods.</li>
        <li><strong>Fixed monthly price without a minute cap</strong>, often combined with a larger setup fee and a longer commitment. Typical for solutions sold as a bespoke project.</li>
      </ul>
      <p>Whatever the model, ask: What do minutes beyond the plan cost? Is there a commitment period? What does setup cost? And are text messages, recordings and calendar integration included or extras?</p>
      <h2>What does Aibooking.dk cost?</h2>
      <p>Our prices are public (October 2026). All plans include inbound and outbound calls, calendar integration, text messages and recording.</p>
      <div class="blog-table"><table><thead><tr><th>Plan</th><th>Price per month</th><th>Included talk time</th><th>Price per included minute</th></tr></thead><tbody>
        <tr><td>Demo (trial)</td><td>Free for 7 days</td><td>10 minutes</td><td>–</td></tr>
        <tr><td>Starter</td><td>DKK 999</td><td>150 minutes</td><td>approx. DKK 6.66</td></tr>
        <tr><td>Professional</td><td>DKK 2,499</td><td>600 minutes</td><td>approx. DKK 4.17</td></tr>
        <tr><td>Enterprise</td><td>DKK 5,999</td><td>2,000 minutes</td><td>approx. DKK 3.00</td></tr>
      </tbody></table></div>
      <p>Setup and onboarding is an <strong>optional</strong> one-time purchase priced the same as the chosen plan (e.g. DKK 999 for Starter), including one hour of follow-up support. You can also set it up yourself. Ad hoc work costs DKK 695 per hour for prompting/training and DKK 1,100 per hour for development. See current prices on the <a href="/ind-og-udgaaende-opkald#priser">AI phone answering page</a>.</p>
      <h2>How many minutes do you need?</h2>
      <p>Take the number of calls the AI should handle per month and multiply by the average call length. A booking usually takes one to three minutes.</p>
      <ul>
        <li><strong>Small clinic:</strong> 60 after-hours calls × 2 minutes = 120 minutes → Starter.</li>
        <li><strong>Tradesperson with four fitters:</strong> 200 calls × 2.5 minutes = 500 minutes → Professional.</li>
        <li><strong>Webshop in peak season:</strong> 700 calls × 2 minutes = 1,400 minutes → Enterprise.</li>
      </ul>
      <p>The trial dashboard shows the real average call length for your calls, so you do not have to guess.</p>
      ${CTA_TRIAL_EN}
      <h2>The calculation: does it pay off?</h2>
      <p>Do not only compare with a receptionist's salary. The right calculation has three parts:</p>
      <ol>
        <li><strong>Time freed up.</strong> How many minutes a day do you spend answering the phone, finding slots and calling back? Multiply by the hourly cost of the people doing it today.</li>
        <li><strong>Calls lost today.</strong> How many calls end in voicemail or are never returned? Multiply by the share that would have become a customer and the value of a customer.</li>
        <li><strong>No-shows.</strong> If reminder calls get just one customer a week to cancel in time, the slot can go to someone else.</li>
      </ol>
      <p><strong>Example with illustrative numbers:</strong> A hairdresser misses 15 calls a week during haircuts. If one in five would have become a DKK 450 booking, that is 3 bookings × DKK 450 × 4 weeks = DKK 5,400 a month in revenue that currently goes to a competitor. Against that stands Starter at DKK 999. Use your own numbers — there is a more detailed model in the <a href="/blog/roi-ai-automatisering-virksomheder">guide to the ROI of AI automation</a>.</p>
      <h2>What about a human receptionist or answering service?</h2>
      <p>A permanent receptionist costs salary, pension, holidays and cover for sickness, and can take one call at a time during opening hours. An answering service typically charges per call or per minute and usually takes a message rather than booking. That does not mean AI is always better — a receptionist does much more than answer the phone. See the full comparison in <a href="/blog/ai-receptionist-vs-telefonpasning">AI receptionist vs. traditional answering service</a>.</p>
      <h2>Hidden costs to ask about</h2>
      <ul>
        <li>The price of minutes beyond the plan and whether the plan renews automatically.</li>
        <li>Setup fees and commitment periods.</li>
        <li>Whether text confirmations, recording and transcription are included.</li>
        <li>Whether integration with your industry system costs extra.</li>
        <li>Whether you can cancel and have your data exported and deleted.</li>
      </ul>
    `,
    meta_title_en: 'What Does an AI Receptionist Cost? Prices 2026 | AIBooking.dk',
    meta_title_da: 'Hvad koster en AI-receptionist? Priser 2026 | AIBooking.dk',
    meta_description_en: 'Pricing models for AI receptionists, our public prices per plan and minute, how many minutes you need, and a calculation to see if it pays off.',
    meta_description_da: 'Prismodeller for AI-receptionister, vores priser pr. pakke og minut, hvor mange minutter du skal bruge, og et regnestykke for, om det betaler sig.',
    keywords: ['hvad koster en ai-receptionist', 'ai-receptionist pris', 'ai telefonpasning pris', 'pris ai telefonassistent'],
    image_url: '/blog/covers/hvad-koster-en-ai-receptionist.svg',
    published: true,
    published_at: '2026-10-16',
    related: ['ai-receptionist-vs-telefonpasning', 'roi-ai-automatisering-virksomheder', 'ai-reception-virtuel-receptionist'],
    faq: [
      {
        question_da: 'Hvad koster en AI-receptionist om måneden?',
        answer_da: 'Hos Aibooking.dk fra 999 kr. om måneden for 150 minutters taletid (Starter). Professional koster 2.499 kr. for 600 minutter og Enterprise 5.999 kr. for 2.000 minutter. De første 7 dage er gratis.',
        question_en: 'How much does an AI receptionist cost per month?',
        answer_en: 'At Aibooking.dk from DKK 999 per month for 150 minutes of talk time (Starter). Professional costs DKK 2,499 for 600 minutes and Enterprise DKK 5,999 for 2,000 minutes. The first 7 days are free.',
      },
      {
        question_da: 'Er opsætning inkluderet i prisen?',
        answer_da: 'Opsætning er valgfri. Du kan gøre det selv gratis, eller tilkøbe opsætning og onboarding som en engangsbetaling til samme pris som pakken, inkl. en times opfølgende support.',
        question_en: 'Is setup included in the price?',
        answer_en: 'Setup is optional. You can do it yourself for free, or buy setup and onboarding as a one-time payment priced the same as the plan, including one hour of follow-up support.',
      },
      {
        question_da: 'Koster det ekstra, når mange ringer på samme tid?',
        answer_da: 'Nej. Du betaler for den taletid, der bruges, ikke for kapacitet. Ti samtidige opkald koster det samme som ti opkald efter hinanden.',
        question_en: 'Does it cost extra when many people call at once?',
        answer_en: 'No. You pay for the talk time used, not for capacity. Ten simultaneous calls cost the same as ten calls one after another.',
      },
    ],
  },
  {
    id: 'ai-receptionist-vs-telefonpasning',
    slug: 'ai-receptionist-vs-telefonpasning',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI Receptionist vs. Traditional Answering Service and Voicemail',
    title_da: 'AI-receptionist vs. traditionel telefonpasning og telefonsvarer',
    excerpt_en: 'Voicemail, an answering service, a receptionist or an AI? An honest comparison of what each option solves, what it costs and when a human is still the better choice.',
    excerpt_da: 'Telefonsvarer, telefonpasningsservice, receptionist eller AI? En ærlig sammenligning af, hvad hver løsning løser, hvad den koster, og hvornår et menneske stadig er det bedste valg.',
    content_da: `
      <p>Når telefonen ringer, og ingen kan tage den, har en dansk virksomhed i dag fire muligheder: en telefonsvarer, en telefonpasningsservice med mennesker, en (ekstra) receptionist — eller en AI-receptionist. De løser ikke det samme problem, så det rigtige valg afhænger af, hvad dine opkald handler om.</p>
      <h2>Sammenligningen på ét blik</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Telefonsvarer</th><th>Telefonpasning (menneske)</th><th>Receptionist</th><th>AI-receptionist</th></tr></thead><tbody>
        <tr><td>Løser sagen under opkaldet</td><td>Nej</td><td>Sjældent — tager typisk en besked</td><td>Ja</td><td>Ja, inden for de regler du sætter</td></tr>
        <tr><td>Booker i din kalender</td><td>Nej</td><td>Kun hvis de har adgang</td><td>Ja</td><td>Ja, direkte</td></tr>
        <tr><td>Åbningstid</td><td>Altid</td><td>Afhænger af aftalen</td><td>Arbejdstid</td><td>Døgnet rundt</td></tr>
        <tr><td>Samtidige opkald</td><td>–</td><td>Afhænger af bemanding</td><td>Ét ad gangen</td><td>Mange på én gang</td></tr>
        <tr><td>Kender din forretning</td><td>Nej</td><td>Overfladisk, ud fra et manuskript</td><td>Ja, i dybden</td><td>Ud fra den viden, du giver den</td></tr>
        <tr><td>Empati og skøn i svære sager</td><td>Nej</td><td>Ja</td><td>Ja</td><td>Begrænset — bør stille videre</td></tr>
        <tr><td>Dokumentation</td><td>Lydbesked</td><td>Notat</td><td>Varierer</td><td>Optagelse, transskription og referat</td></tr>
        <tr><td>Typisk prismodel</td><td>Gratis</td><td>Pr. opkald/minut + grundgebyr</td><td>Løn og afløsning</td><td>Abonnement med taletid</td></tr>
      </tbody></table></div>
      <h2>Telefonsvareren: gratis, men dyr</h2>
      <p>Telefonsvareren koster intet, men mange kunder lægger på uden at indtale en besked og ringer i stedet til den næste på listen. Og dem, der lægger en besked, skal ringes op — ofte flere gange, før man får fat i dem. Telefonsvareren flytter arbejdet til senere; den fjerner det ikke.</p>
      <h2>Telefonpasning med mennesker: venlig, men ofte kun en besked</h2>
      <p>En telefonpasningsservice giver et menneske i røret, hvilket mange kunder sætter pris på. Til gengæld kender medarbejderen sjældent din virksomhed i dybden, og resultatet er som regel en besked, du stadig skal ringe tilbage på. Prisen afhænger typisk af antal opkald eller minutter, så travle perioder bliver dyrere.</p>
      <h2>Receptionisten: mest fleksibel, men én ad gangen</h2>
      <p>En dygtig receptionist kan langt mere end at tage telefonen: tage imod kunder i døren, løse uforudsete problemer og bruge skøn. Men hun kan kun tage ét opkald ad gangen, holder fri og er syg en gang imellem. Mange virksomheder bruger derfor AI som <strong>aflastning</strong> af receptionen — til spidsbelastning, frokostpausen og aftener — ikke som erstatning.</p>
      <h2>AI-receptionisten: løser sagen, men kun inden for rammerne</h2>
      <p>En AI-receptionist tager hvert opkald på sekunder, også når fem ringer på én gang, og den kan booke direkte i kalenderen. Svaghederne er lige så vigtige at kende: den ved kun det, du har fortalt den; den skal ikke afgøre klager eller vurderinger; og nogle kunder vil altid hellere tale med et menneske. Derfor skal den sættes op med klare <a href="/blog/ai-receptionist-viderestilling-til-menneske">regler for viderestilling</a>, og den skal præsentere sig som en AI.</p>
      ${CTA_TRIAL_DA}
      <h2>Hvad passer til hvem?</h2>
      <ul>
        <li><strong>Få opkald, alle komplekse</strong> (fx en advokat med faste klienter): en receptionist eller telefonpasning, der tager en besked, er ofte nok.</li>
        <li><strong>Mange opkald om booking og gengangerspørgsmål</strong> (klinik, salon, værksted): en AI-receptionist giver mest, gerne kombineret med personalet i åbningstiden.</li>
        <li><strong>Opkald, mens du arbejder</strong> (<a href="/blog/ai-telefonassistent-haandvaerker">håndværkere</a>): AI'en fanger opgaven, og akutte opkald kan stilles om til din mobil.</li>
        <li><strong>Højsæson og spidsbelastning</strong> (webshop, sæsonfag): AI'en tager toppen, så kunderne ikke står i kø.</li>
      </ul>
      <h2>Kombinationen er ofte bedst</h2>
      <p>Det mest almindelige setup er ikke "AI i stedet for mennesker", men "AI når mennesker ikke kan": AI'en tager opkald uden for åbningstid, når linjen er optaget, og når receptionen holder pause — og stiller videre med et referat, når et menneske skal overtage. Se <a href="/blog/hvad-koster-en-ai-receptionist">hvad en AI-receptionist koster</a>, eller læs <a href="/blog/ai-reception-virtuel-receptionist">hvordan en AI-receptionist fungerer</a>.</p>
    `,
    content_en: `
      <p>When the phone rings and nobody can answer, a Danish business today has four options: voicemail, a human answering service, an (extra) receptionist — or an AI receptionist. They do not solve the same problem, so the right choice depends on what your calls are about.</p>
      <h2>The comparison at a glance</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Voicemail</th><th>Answering service (human)</th><th>Receptionist</th><th>AI receptionist</th></tr></thead><tbody>
        <tr><td>Solves the matter during the call</td><td>No</td><td>Rarely — usually takes a message</td><td>Yes</td><td>Yes, within the rules you set</td></tr>
        <tr><td>Books in your calendar</td><td>No</td><td>Only with access</td><td>Yes</td><td>Yes, directly</td></tr>
        <tr><td>Hours</td><td>Always</td><td>Depends on the agreement</td><td>Working hours</td><td>Around the clock</td></tr>
        <tr><td>Simultaneous calls</td><td>–</td><td>Depends on staffing</td><td>One at a time</td><td>Many at once</td></tr>
        <tr><td>Knows your business</td><td>No</td><td>Superficially, from a script</td><td>Yes, in depth</td><td>From the knowledge you give it</td></tr>
        <tr><td>Empathy and judgement in hard cases</td><td>No</td><td>Yes</td><td>Yes</td><td>Limited — should transfer</td></tr>
        <tr><td>Documentation</td><td>Audio message</td><td>Note</td><td>Varies</td><td>Recording, transcript and summary</td></tr>
        <tr><td>Typical pricing</td><td>Free</td><td>Per call/minute + base fee</td><td>Salary and cover</td><td>Subscription with talk time</td></tr>
      </tbody></table></div>
      <h2>Voicemail: free, but expensive</h2>
      <p>Voicemail costs nothing, but many customers hang up without leaving a message and call the next business on the list instead. Those who do leave one have to be called back — often several times before you reach them. Voicemail moves the work to later; it does not remove it.</p>
      <h2>Human answering service: friendly, but often just a message</h2>
      <p>An answering service puts a person on the line, which many customers appreciate. However, the agent rarely knows your business in depth, and the result is usually a message you still have to return. Pricing typically depends on the number of calls or minutes, so busy periods cost more.</p>
      <h2>The receptionist: most flexible, but one at a time</h2>
      <p>A skilled receptionist does far more than answer the phone: welcoming visitors, solving unexpected problems and using judgement. But she can only take one call at a time, takes holidays and is sometimes ill. Many businesses therefore use AI to <strong>support</strong> reception — at peak times, over lunch and in the evenings — not to replace it.</p>
      <h2>The AI receptionist: solves the matter, but only within its limits</h2>
      <p>An AI receptionist answers every call within seconds, even when five people call at once, and can book straight into the calendar. Its weaknesses are just as important to know: it only knows what you have told it; it should not settle complaints or assessments; and some customers will always prefer a person. It therefore needs clear <a href="/blog/ai-receptionist-viderestilling-til-menneske">transfer rules</a>, and it must introduce itself as an AI.</p>
      ${CTA_TRIAL_EN}
      <h2>What suits whom?</h2>
      <ul>
        <li><strong>Few calls, all complex</strong> (e.g. a lawyer with regular clients): a receptionist or an answering service that takes messages is often enough.</li>
        <li><strong>Many calls about bookings and recurring questions</strong> (clinic, salon, garage): an AI receptionist adds the most, ideally combined with staff during opening hours.</li>
        <li><strong>Calls while you work</strong> (<a href="/blog/ai-telefonassistent-haandvaerker">tradespeople</a>): the AI captures the job, and urgent calls can be transferred to your mobile.</li>
        <li><strong>Peak season</strong> (webshops, seasonal trades): the AI takes the peak so customers do not queue.</li>
      </ul>
      <h2>The combination is often best</h2>
      <p>The most common setup is not "AI instead of people" but "AI when people can't": the AI takes calls after hours, when the line is busy and when reception is on a break — and transfers with a summary when a person should take over. See <a href="/blog/hvad-koster-en-ai-receptionist">what an AI receptionist costs</a>, or read <a href="/blog/ai-reception-virtuel-receptionist">how an AI receptionist works</a>.</p>
    `,
    meta_title_en: 'AI Receptionist vs. Answering Service & Voicemail | AIBooking.dk',
    meta_title_da: 'AI-receptionist vs. telefonpasning og telefonsvarer | AIBooking.dk',
    meta_description_en: 'Voicemail, answering service, receptionist or AI? An honest comparison of what each solves, how it is priced and when a human is still best.',
    meta_description_da: 'Telefonsvarer, telefonpasning, receptionist eller AI? En ærlig sammenligning af hvad hver løser, prismodel og hvornår et menneske stadig er bedst.',
    keywords: ['ai-receptionist vs telefonpasning', 'telefonpasningsservice', 'telefonsvarer', 'ai telefonpasning', 'receptionist alternativ'],
    image_url: '/blog/covers/ai-receptionist-vs-telefonpasning.svg',
    published: true,
    published_at: '2026-10-16',
    related: ['hvad-koster-en-ai-receptionist', 'ai-receptionist-viderestilling-til-menneske', 'ai-telefonpasning-dansk-ai-receptionist'],
    faq: [
      {
        question_da: 'Er en AI-receptionist billigere end telefonpasning?',
        answer_da: 'Ofte, fordi den prissættes som et abonnement med taletid i stedet for pr. opkald, og fordi den kan booke i stedet for kun at tage en besked. Men regn det ud med dine egne opkaldstal.',
        question_en: 'Is an AI receptionist cheaper than an answering service?',
        answer_en: 'Often, because it is priced as a subscription with talk time rather than per call, and because it can book instead of only taking a message. But run the numbers with your own call volume.',
      },
      {
        question_da: 'Kan en AI-receptionist erstatte en receptionist?',
        answer_da: 'Den kan tage en stor del af telefonarbejdet, men de fleste bruger den som aflastning — uden for åbningstid, ved optaget og i spidsbelastning — mens mennesker tager de svære samtaler.',
        question_en: 'Can an AI receptionist replace a receptionist?',
        answer_en: 'It can take a large part of the phone work, but most businesses use it as support — after hours, when busy and at peak times — while people handle the difficult conversations.',
      },
    ],
  },
  {
    id: 'ai-receptionist-viderestilling-til-menneske',
    slug: 'ai-receptionist-viderestilling-til-menneske',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'When Should an AI Receptionist Transfer the Call to a Human?',
    title_da: 'Hvornår skal en AI-receptionist viderestille til et menneske?',
    excerpt_en: 'The difference between a good and a bad AI receptionist is often the handover. Seven situations where a person should take over, how to set up the rules, and what the customer should experience.',
    excerpt_da: 'Forskellen på en god og en dårlig AI-receptionist ligger ofte i overdragelsen. Syv situationer hvor et menneske skal tage over, hvordan du sætter reglerne op, og hvad kunden skal opleve.',
    content_da: `
      <p>Den hurtigste måde at gøre kunder sure på er en AI, der ikke vil slippe dem. Den næsthurtigste er en AI, der stiller alt videre, så den ikke løser noget. En god AI-receptionist ligger imellem: den klarer det forudsigelige selv og sender resten videre — med kontekst, så kunden ikke skal starte forfra.</p>
      <h2>Syv situationer, hvor et menneske skal tage over</h2>
      <ol>
        <li><strong>Kunden beder om det.</strong> "Jeg vil gerne tale med en medarbejder" skal altid respekteres. Det er den vigtigste regel.</li>
        <li><strong>Akutte sager med risiko.</strong> Vandskade, gaslugt, en patient med alvorlige symptomer. AI'en skal genkende det og stille om til en vagttelefon — eller ved fare for liv henvise til 112.</li>
        <li><strong>Klager og utilfredse kunder.</strong> En klage skal mødes med empati og ofte en beslutning om kompensation. Det er menneskers arbejde.</li>
        <li><strong>Forhandling og tilbud.</strong> Rabatter, særlige aftaler og tilbud, der kræver en vurdering.</li>
        <li><strong>Faglige vurderinger.</strong> Sundhedsfaglige råd, juridiske spørgsmål, tekniske diagnoser.</li>
        <li><strong>AI'en er i tvivl.</strong> Hvis den ikke forstår ærindet efter to forsøg, eller spørgsmålet ligger uden for det, den har fået at vide, skal den ikke gætte.</li>
        <li><strong>Kendte VIP-kunder eller faste samarbejdspartnere</strong>, hvis du hellere selv vil tage dem.</li>
      </ol>
      <h2>Tre måder at overdrage på</h2>
      <ul>
        <li><strong>Direkte viderestilling</strong> til en kollega eller en vagttelefon, mens kunden er i røret. Bedst til akutte sager.</li>
        <li><strong>Struktureret besked</strong> med navn, nummer, ærinde og hvor hurtigt der skal ringes tilbage. Bedst uden for åbningstid.</li>
        <li><strong>Booking af en opringning</strong> i en medarbejders kalender, så kunden ved præcis, hvornår de bliver ringet op.</li>
      </ul>
      <p>Uanset metode skal medarbejderen have et referat af samtalen. Hos Aibooking.dk ligger optagelse, transskription og resumé i dashboardet, og beskeden kan sendes på SMS eller email.</p>
      ${CTA_TRIAL_DA}
      <h2>Sådan formulerer du reglerne</h2>
      <p>Skriv reglerne, som du ville forklare dem for en ny medarbejder på første dag. Konkret er bedre end generelt:</p>
      <div class="blog-callout"><strong>Eksempel fra en VVS-virksomhed:</strong> "Hvis kunden har vand på gulvet lige nu eller lugter gas, så stil om til vagttelefonen. Hvis det er et langsomt dryp, så book en almindelig tid. Spørger kunden om pris på en ny installation, så tag en besked til Lars. Lov aldrig en fast pris."</div>
      <p>Test derefter reglerne ved selv at ringe ind som en sur kunde, en akut kunde og en kunde, der taler utydeligt. Læs transskriptionerne den første uge, og justér.</p>
      <h2>Hvad med travle perioder?</h2>
      <p>Viderestilling til et menneske hjælper ikke, hvis mennesket også er optaget. Derfor bør reglen for spidsbelastning være en anden: AI'en tager opkaldet selv, løser det, den kan, og booker en opringning til resten. Fordi en AI kan tage mange opkald på én gang, opstår der ingen telefonkø — det er netop i travle perioder, den gør den største forskel. Læs mere i <a href="/blog/sma-virksomheder-telefon-tid-penge">AI-receptionist til små og mellemstore virksomheder</a>.</p>
      <h2>Hvad skal kunden opleve?</h2>
      <ul>
        <li>At AI'en siger, hvad der sker: "Jeg stiller dig videre til vagthavende nu" eller "Jeg sørger for, at Lars ringer dig op i morgen før kl. 10."</li>
        <li>At de ikke skal gentage sig selv, når de taler med mennesket.</li>
        <li>At løftet holdes. En besked, ingen ringer tilbage på, er værre end en telefonsvarer.</li>
      </ul>
      <p>Se, hvordan overdragelse passer ind i resten af opkaldet, i <a href="/blog/ai-reception-virtuel-receptionist">hvad er en AI-receptionist?</a></p>
    `,
    content_en: `
      <p>The quickest way to annoy customers is an AI that won't let them go. The second quickest is an AI that transfers everything, so it solves nothing. A good AI receptionist sits in between: it handles the predictable itself and passes on the rest — with context, so the customer does not have to start over.</p>
      <h2>Seven situations where a person should take over</h2>
      <ol>
        <li><strong>The customer asks for it.</strong> "I'd like to talk to a member of staff" must always be respected. It is the most important rule.</li>
        <li><strong>Urgent cases with risk.</strong> Water damage, a smell of gas, a patient with serious symptoms. The AI must recognise it and transfer to an on-call line — or, if life is at risk, refer to the emergency number 112.</li>
        <li><strong>Complaints and unhappy customers.</strong> A complaint needs empathy and often a decision about compensation. That is people's work.</li>
        <li><strong>Negotiation and quotes.</strong> Discounts, special deals and quotes that require judgement.</li>
        <li><strong>Professional assessments.</strong> Clinical advice, legal questions, technical diagnoses.</li>
        <li><strong>The AI is unsure.</strong> If it does not understand the request after two attempts, or the question is outside what it has been told, it must not guess.</li>
        <li><strong>Known VIP customers or regular partners</strong>, if you would rather take them yourself.</li>
      </ol>
      <h2>Three ways to hand over</h2>
      <ul>
        <li><strong>Direct transfer</strong> to a colleague or an on-call line while the customer is on the phone. Best for urgent cases.</li>
        <li><strong>Structured message</strong> with name, number, reason and how quickly to call back. Best after hours.</li>
        <li><strong>Booking a callback</strong> in a staff member's calendar, so the customer knows exactly when they will be called.</li>
      </ul>
      <p>Whatever the method, the staff member needs a summary of the conversation. At Aibooking.dk the recording, transcript and summary are in the dashboard, and the message can be sent by text or email.</p>
      ${CTA_TRIAL_EN}
      <h2>How to write the rules</h2>
      <p>Write the rules the way you would explain them to a new employee on day one. Specific beats general:</p>
      <div class="blog-callout"><strong>Example from a plumbing business:</strong> "If the customer has water on the floor right now or smells gas, transfer to the on-call line. If it is a slow drip, book a regular appointment. If the customer asks for a price on a new installation, take a message for Lars. Never promise a fixed price."</div>
      <p>Then test the rules by calling in yourself as an angry customer, an urgent customer and a customer who speaks unclearly. Read the transcripts during the first week and adjust.</p>
      <h2>What about busy periods?</h2>
      <p>Transferring to a person does not help if that person is also busy. The rule for peak times should therefore be different: the AI takes the call itself, solves what it can and books a callback for the rest. Because an AI can take many calls at once, there is no phone queue — busy periods are exactly where it makes the biggest difference. Read more in <a href="/blog/sma-virksomheder-telefon-tid-penge">AI receptionist for small and medium-sized businesses</a>.</p>
      <h2>What should the customer experience?</h2>
      <ul>
        <li>That the AI says what is happening: "I'm transferring you to the on-call technician now" or "I'll make sure Lars calls you back before 10 am tomorrow."</li>
        <li>That they do not have to repeat themselves when they talk to the person.</li>
        <li>That the promise is kept. A message nobody returns is worse than voicemail.</li>
      </ul>
      <p>See how handover fits into the rest of the call in <a href="/blog/ai-reception-virtuel-receptionist">what is an AI receptionist?</a></p>
    `,
    meta_title_en: 'When Should an AI Receptionist Transfer to a Human? | AIBooking.dk',
    meta_title_da: 'Hvornår skal AI-receptionisten stille videre? | AIBooking.dk',
    meta_description_en: 'Seven situations where an AI receptionist should hand over to a person, three ways to transfer, and how to write rules that work in busy periods.',
    meta_description_da: 'Syv situationer hvor en AI-receptionist skal stille videre til et menneske, tre måder at overdrage på, og regler der også virker i travle perioder.',
    keywords: ['ai-receptionist viderestilling', 'viderestille opkald', 'menneskelig overtagelse', 'ai telefonassistent regler', 'eskalering'],
    image_url: '/blog/covers/ai-receptionist-viderestilling-til-menneske.svg',
    published: true,
    published_at: '2026-10-16',
    related: ['ai-reception-virtuel-receptionist', 'sma-virksomheder-telefon-tid-penge', 'ai-receptionist-vs-telefonpasning'],
    faq: [
      {
        question_da: 'Kan kunden altid bede om at tale med et menneske?',
        answer_da: 'Det bør de kunne, og det skal være en fast regel i opsætningen. AI’en stiller enten direkte videre eller tager en besked med et klart tidspunkt for, hvornår der ringes tilbage.',
        question_en: 'Can the customer always ask to speak to a person?',
        answer_en: 'They should be able to, and it should be a fixed rule in the setup. The AI either transfers directly or takes a message with a clear time for the callback.',
      },
      {
        question_da: 'Hvad sker der, hvis ingen kan tage det viderestillede opkald?',
        answer_da: 'Så bør AI’en tage en struktureret besked eller booke en opringning i kalenderen, så kunden ikke ender på en telefonsvarer.',
        question_en: 'What happens if nobody can take the transferred call?',
        answer_en: 'The AI should then take a structured message or book a callback in the calendar, so the customer does not end up in voicemail.',
      },
    ],
  },
  {
    id: 'sma-virksomheder-telefon-tid-penge',
    slug: 'sma-virksomheder-telefon-tid-penge',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI Receptionist for Small and Medium-Sized Businesses: Busy Periods, Time and Money',
    title_da: 'AI-receptionist til små og mellemstore virksomheder: travle perioder, tid og penge',
    excerpt_en: 'In a small business the phone is answered by whoever is free — which is often nobody. How an AI receptionist absorbs peaks, protects focus time and lets you grow without hiring for the phone.',
    excerpt_da: 'I en lille virksomhed tages telefonen af den, der er ledig — og det er ofte ingen. Sådan tager en AI-receptionist toppene, beskytter fokustiden og lader dig vokse uden at ansætte til telefonen.',
    content_da: `
      <p>I en virksomhed med 2–20 ansatte er der sjældent en, hvis job det er at tage telefonen. Den tages af den, der er nærmest — midt i en behandling, et regnskab eller en installation. Resultatet er kendt: afbrudte opgaver, opkald der ikke bliver taget, og kunder der ringer til konkurrenten.</p>
      <h2>Problemet er ikke antallet af opkald, men timingen</h2>
      <p>De fleste små virksomheder har ikke for mange opkald i alt. De har for mange på de forkerte tidspunkter: mandag morgen, i frokostpausen, lige efter en kampagne, eller når det første frostvejr rammer. Det er de toppe, der koster kunder.</p>
      <ul>
        <li><strong>Mandag kl. 8–10:</strong> alle, der har haft et problem i weekenden, ringer på én gang.</li>
        <li><strong>Frokost og sidst på dagen:</strong> ingen sidder ved telefonen.</li>
        <li><strong>Sæsontoppe:</strong> dækskift, sommerferie, julehandel, influenzasæson.</li>
      </ul>
      <h2>Sådan håndterer en AI-receptionist travle perioder</h2>
      <p>En AI-receptionist har ingen telefonkø. Ringer fem kunder samtidig, bliver alle fem besvaret på andet ring. Den løser de opkald, der kan løses — booking, ombooking, gengangerspørgsmål — og for resten tager den en struktureret besked eller booker en opringning. Hos Aibooking.dk betaler du for den taletid, der bruges, ikke for kapacitet, så en travl mandag koster ikke ekstra i abonnement.</p>
      <p>Du kan vælge at lade AI'en tage alle opkald, eller kun når linjen er optaget, så dit team stadig tager telefonen, når de kan — og AI'en fanger resten.</p>
      <h2>Den skjulte pris: afbrydelser</h2>
      <p>Et telefonopkald koster mere end de to minutter, det varer. Det tager tid at komme tilbage i en opgave, man er blevet revet ud af. For en revisor, en tandlæge eller en tømrer er det fokustid, der går tabt. Ved at lade AI'en tage telefonen i bestemte tidsrum — fx hele formiddagen — kan teamet arbejde uforstyrret og ringe tilbage på de beskeder, der kræver det, samlet.</p>
      ${CTA_TRIAL_DA}
      <h2>Vækst uden at ansætte til telefonen</h2>
      <p>Mange små virksomheder når et punkt, hvor telefonen bliver argumentet for at ansætte. En AI-receptionist kan udskyde eller fjerne den ansættelse, fordi den tager mængden af forudsigelige opkald, mens de ansatte tager de samtaler, der kræver dem. Det skalerer også den anden vej: åbner du en afdeling mere, kan den samme AI tage opkald for begge.</p>
      <h2>Fire tegn på, at det er tid</h2>
      <ol>
        <li>Du ringer tilbage på mere end fem ubesvarede opkald om dagen.</li>
        <li>Kunderne siger "jeg har prøvet at ringe flere gange".</li>
        <li>Du eller dine ansatte bliver afbrudt midt i arbejde, der kræver koncentration.</li>
        <li>Mere end halvdelen af opkaldene handler om booking eller de samme spørgsmål.</li>
      </ol>
      <h2>Hvad koster det for en lille virksomhed?</h2>
      <p>Starter-pakken koster 999 kr. om måneden med 150 minutters taletid, og du kan prøve gratis i 7 dage. Se hvordan du regner ud, hvor mange minutter du skal bruge, i <a href="/blog/hvad-koster-en-ai-receptionist">hvad koster en AI-receptionist?</a> — og hvad du får tilbage i <a href="/blog/roi-ai-automatisering-virksomheder">guiden til ROI</a>.</p>
      <p>Arbejder du i en bestemt branche, så se vores guides til <a href="/blog/ai-telefonassistent-haandvaerker">håndværkere</a>, <a href="/blog/totalloesning-klinik">klinikker og saloner</a> og <a href="/blog/ai-telefonassistent-kontor-administration">kontorer</a>.</p>
    `,
    content_en: `
      <p>In a business with 2–20 employees, it is rarely anyone's job to answer the phone. Whoever is closest picks it up — in the middle of a treatment, a set of accounts or an installation. The result is familiar: interrupted tasks, unanswered calls and customers who call a competitor.</p>
      <h2>The problem is not the number of calls, but the timing</h2>
      <p>Most small businesses do not have too many calls overall. They have too many at the wrong times: Monday morning, over lunch, right after a campaign, or when the first frost arrives. Those peaks are what cost customers.</p>
      <ul>
        <li><strong>Monday 8–10 am:</strong> everyone who had a problem over the weekend calls at once.</li>
        <li><strong>Lunch and late afternoon:</strong> nobody is by the phone.</li>
        <li><strong>Seasonal peaks:</strong> tyre changes, summer holidays, Christmas shopping, flu season.</li>
      </ul>
      <h2>How an AI receptionist handles busy periods</h2>
      <p>An AI receptionist has no phone queue. If five customers call at once, all five are answered on the second ring. It solves the calls that can be solved — booking, rescheduling, recurring questions — and for the rest it takes a structured message or books a callback. At Aibooking.dk you pay for the talk time used, not for capacity, so a busy Monday does not cost extra in subscription.</p>
      <p>You can let the AI take all calls, or only when the line is busy, so your team still answers when they can — and the AI catches the rest.</p>
      <h2>The hidden cost: interruptions</h2>
      <p>A phone call costs more than the two minutes it lasts. It takes time to get back into a task you were pulled out of. For an accountant, a dentist or a carpenter, that is lost focus time. By letting the AI take the phone at set times — say all morning — the team can work undisturbed and return the messages that need it in one batch.</p>
      ${CTA_TRIAL_EN}
      <h2>Growth without hiring for the phone</h2>
      <p>Many small businesses reach a point where the phone becomes the reason to hire. An AI receptionist can postpone or remove that hire, because it takes the volume of predictable calls while employees take the conversations that need them. It also scales the other way: open another branch, and the same AI can answer for both.</p>
      <h2>Four signs it is time</h2>
      <ol>
        <li>You return more than five missed calls a day.</li>
        <li>Customers say "I've tried calling several times".</li>
        <li>You or your staff are interrupted in work that requires concentration.</li>
        <li>More than half the calls are about bookings or the same questions.</li>
      </ol>
      <h2>What does it cost for a small business?</h2>
      <p>The Starter plan costs DKK 999 per month with 150 minutes of talk time, and you can try it free for 7 days. See how to work out how many minutes you need in <a href="/blog/hvad-koster-en-ai-receptionist">what does an AI receptionist cost?</a> — and what you get back in the <a href="/blog/roi-ai-automatisering-virksomheder">ROI guide</a>.</p>
      <p>Working in a specific industry? See our guides for <a href="/blog/ai-telefonassistent-haandvaerker">tradespeople</a>, <a href="/blog/totalloesning-klinik">clinics and salons</a> and <a href="/blog/ai-telefonassistent-kontor-administration">offices</a>.</p>
    `,
    meta_title_en: 'AI Receptionist for SMEs: Busy Periods & Time | AIBooking.dk',
    meta_title_da: 'AI-receptionist til SMV: travle perioder og tid | AIBooking.dk',
    meta_description_en: 'How an AI receptionist absorbs call peaks, protects focus time and lets small businesses grow without hiring someone for the phone.',
    meta_description_da: 'Sådan tager en AI-receptionist toppene i opkald, beskytter fokustiden og lader små virksomheder vokse uden at ansætte til telefonen.',
    keywords: ['ai-receptionist smv', 'ai til små virksomheder', 'travle perioder telefon', 'telefonkø', 'mindre virksomheder ai'],
    image_url: '/blog/covers/sma-virksomheder-telefon-tid-penge.svg',
    published: true,
    published_at: '2026-05-03',
    updated_at: UPDATED,
    related: ['hvad-koster-en-ai-receptionist', 'ai-receptionist-viderestilling-til-menneske', 'roi-ai-automatisering-virksomheder'],
    faq: [
      {
        question_da: 'Hvor mange opkald kan en AI-receptionist tage på én gang?',
        answer_da: 'Hos Aibooking.dk er der ingen fast øvre grænse for samtidige opkald. Ringer ti på samme tid, bliver alle ti besvaret med det samme.',
        question_en: 'How many calls can an AI receptionist take at once?',
        answer_en: 'At Aibooking.dk there is no fixed upper limit on simultaneous calls. If ten people call at the same time, all ten are answered immediately.',
      },
      {
        question_da: 'Kan mine ansatte stadig tage telefonen selv?',
        answer_da: 'Ja. Du kan sætte viderestillingen op, så AI’en kun tager opkaldet, når linjen er optaget eller ikke bliver taget inden for et antal ring.',
        question_en: 'Can my staff still answer the phone themselves?',
        answer_en: 'Yes. You can set up forwarding so the AI only takes the call when the line is busy or not answered within a number of rings.',
      },
    ],
  },
  {
    id: 'ai-telefonpasning-dansk-ai-receptionist',
    slug: 'ai-telefonpasning-dansk-ai-receptionist',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI Phone Answering: What to Require from a Danish AI Receptionist',
    title_da: 'AI-telefonpasning: Det skal du kræve af en dansk AI-receptionist',
    excerpt_en: 'AI phone answering only works if it works in Danish — with Danish names, addresses, dialects and rules. Nine requirements to put to any provider before you forward your number.',
    excerpt_da: 'AI-telefonpasning virker kun, hvis den virker på dansk — med danske navne, adresser, dialekter og regler. Ni krav du bør stille til enhver udbyder, før du viderestiller dit nummer.',
    content_da: `
      <p><strong>AI-telefonpasning</strong> betyder, at en AI tager dine opkald i stedet for en telefonsvarer eller en ekstern telefonpasningsservice. Teknologien er blevet god nok til at føre naturlige samtaler — men kvaliteten på dansk svinger stadig meget. Her er de ni krav, vi selv ville stille, hvis vi skulle vælge en løsning.</p>
      <h2>1. Den skal forstå dansk, som danskere taler</h2>
      <p>Ikke oplæsningsdansk, men det kunderne faktisk siger: halve sætninger, "øh", jysk og sønderjysk, gadenavne som "Søndergade" og navne som "Signe Kjærsgaard". Bed om at ringe til en demolinje og test med dine egne kunders typiske formuleringer. Læs mere om, <a href="/blog/ai-telefonassistent-dansk-sprog">hvordan dansk talegenkendelse fungerer</a>.</p>
      <h2>2. Stemmen skal lyde naturlig — og ærlig</h2>
      <p>En god dansk AI-stemme har rolig rytme og naturlige pauser. Den skal også præsentere sig som en digital assistent; det er både kunderne og EU's AI-forordning, der forventer det. <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">Hør et rigtigt eksempel og de seks ting, du skal lytte efter</a>.</p>
      <h2>3. Den skal kunne booke, ikke bare tage beskeder</h2>
      <p>Spørg, om den skriver direkte i din kalender (Google Kalender, Outlook eller dit branchesystem), og om den kun ser ledige tider. Ellers har du købt en dyr telefonsvarer.</p>
      <h2>4. Du skal kunne beholde dit nummer</h2>
      <p>Viderestilling skal kunne styres: alle opkald, kun uden for åbningstid, kun ved optaget eller efter et antal ring.</p>
      <h2>5. Den skal kende sine grænser</h2>
      <p>Spørg, hvordan den håndterer klager, akutte sager og kunder, der beder om et menneske. Se vores <a href="/blog/ai-receptionist-viderestilling-til-menneske">guide til viderestilling</a>.</p>
      ${CTA_TRIAL_DA}
      <h2>6. Ingen telefonkø</h2>
      <p>Den skal kunne tage flere opkald på én gang. Spørg, om samtidige opkald koster ekstra.</p>
      <h2>7. Fuld dokumentation</h2>
      <p>Optagelse, transskription og et kort referat af hvert opkald, så du kan se, hvad der blev lovet, og forbedre opsætningen.</p>
      <h2>8. Data i EU og en databehandleraftale</h2>
      <p>Opkald indeholder personoplysninger. Kræv databehandling i EU, krypteret opbevaring, klare sletteregler og en databehandleraftale. Se <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR og AI-forordningen for AI-receptionister</a>.</p>
      <h2>9. Gennemsigtige priser og en prøveperiode</h2>
      <p>Du skal kunne se prisen pr. måned og pr. minut, og du skal kunne prøve den på rigtige opkald, før du binder dig. Se <a href="/blog/hvad-koster-en-ai-receptionist">hvad en AI-receptionist koster</a>.</p>
      <h2>Sådan opfylder Aibooking.dk kravene</h2>
      <ul>
        <li>Dansk samtale med forståelse af dialekter og afbrydelser, og en velkomst du selv formulerer.</li>
        <li>Booking i Google Kalender, Outlook og gængse branchesystemer — kun i ledige tider.</li>
        <li>Du beholder dit nummer og vælger, hvornår AI'en tager over.</li>
        <li>Ubegrænset samtidige opkald; du betaler for taletid.</li>
        <li>Optagelse, transskription og referat i dashboardet.</li>
        <li>Data behandles i EU med krypteret opbevaring, sletteregler og databehandleraftale.</li>
        <li>Offentlige priser fra 999 kr./md. og 7 dages gratis prøveperiode.</li>
      </ul>
      <p>Vil du forstå selve teknologien bag, så læs <a href="/blog/hvad-er-en-ai-voice-agent">hvad er en AI voice agent?</a></p>
    `,
    content_en: `
      <p><strong>AI phone answering</strong> means an AI takes your calls instead of voicemail or an external answering service. The technology is now good enough to hold natural conversations — but quality in Danish still varies a lot. Here are the nine requirements we would set ourselves if we were choosing a solution.</p>
      <h2>1. It must understand Danish as Danes speak it</h2>
      <p>Not textbook Danish, but what customers actually say: half sentences, "um", regional dialects, street names like "Søndergade" and names like "Signe Kjærsgaard". Ask to call a demo line and test with your own customers' typical phrasing. Read more about <a href="/blog/ai-telefonassistent-dansk-sprog">how Danish speech recognition works</a>.</p>
      <h2>2. The voice must sound natural — and honest</h2>
      <p>A good Danish AI voice has a calm rhythm and natural pauses. It should also introduce itself as a digital assistant; both customers and the EU AI Act expect that. <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">Hear a real example and the six things to listen for</a>.</p>
      <h2>3. It must book, not just take messages</h2>
      <p>Ask whether it writes directly into your calendar (Google Calendar, Outlook or your industry system) and only sees free slots. Otherwise you have bought expensive voicemail.</p>
      <h2>4. You must be able to keep your number</h2>
      <p>Forwarding should be controllable: all calls, only after hours, only when busy or after a number of rings.</p>
      <h2>5. It must know its limits</h2>
      <p>Ask how it handles complaints, urgent cases and customers who ask for a person. See our <a href="/blog/ai-receptionist-viderestilling-til-menneske">guide to transfers</a>.</p>
      ${CTA_TRIAL_EN}
      <h2>6. No phone queue</h2>
      <p>It must handle several calls at once. Ask whether simultaneous calls cost extra.</p>
      <h2>7. Full documentation</h2>
      <p>Recording, transcript and a short summary of every call, so you can see what was promised and improve the setup.</p>
      <h2>8. Data in the EU and a data processing agreement</h2>
      <p>Calls contain personal data. Require processing in the EU, encrypted storage, clear deletion rules and a data processing agreement. See <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR and the AI Act for AI receptionists</a>.</p>
      <h2>9. Transparent prices and a trial</h2>
      <p>You should be able to see the price per month and per minute, and try it on real calls before you commit. See <a href="/blog/hvad-koster-en-ai-receptionist">what an AI receptionist costs</a>.</p>
      <h2>How Aibooking.dk meets the requirements</h2>
      <ul>
        <li>Danish conversation that handles dialects and interruptions, with a greeting you write yourself.</li>
        <li>Booking in Google Calendar, Outlook and common industry systems — only in free slots.</li>
        <li>You keep your number and choose when the AI takes over.</li>
        <li>Unlimited simultaneous calls; you pay for talk time.</li>
        <li>Recording, transcript and summary in the dashboard.</li>
        <li>Data processed in the EU with encrypted storage, deletion rules and a data processing agreement.</li>
        <li>Public prices from DKK 999/month and a 7-day free trial.</li>
      </ul>
      <p>To understand the technology behind it, read <a href="/blog/hvad-er-en-ai-voice-agent">what is an AI voice agent?</a></p>
    `,
    meta_title_en: 'AI Phone Answering: 9 Requirements for a Danish AI | AIBooking.dk',
    meta_title_da: 'AI-telefonpasning: 9 krav til en dansk AI-receptionist | AIBooking.dk',
    meta_description_en: 'Nine requirements to put to any AI phone answering provider: Danish speech, booking, keeping your number, transfers, EU data and transparent prices.',
    meta_description_da: 'Ni krav til udbydere af AI-telefonpasning: dansk tale, booking, behold dit nummer, viderestilling, data i EU og gennemsigtige priser.',
    keywords: ['ai-telefonpasning', 'ai telefonpasning', 'dansk ai-receptionist', 'ai receptionist dansk', 'telefonpasning'],
    image_url: '/blog/covers/ai-telefonpasning-dansk-ai-receptionist.svg',
    published: true,
    published_at: '2026-09-23',
    updated_at: UPDATED,
    related: ['ai-reception-virtuel-receptionist', 'hvordan-lyder-en-dansk-ai-receptionist', 'hvad-koster-en-ai-receptionist'],
    faq: [
      {
        question_da: 'Hvad er AI-telefonpasning?',
        answer_da: 'AI-telefonpasning betyder, at en AI-receptionist tager dine opkald, når du ikke selv kan — den svarer på spørgsmål, booker i kalenderen og stiller videre, når et menneske skal overtage.',
        question_en: 'What is AI phone answering?',
        answer_en: 'AI phone answering means an AI receptionist takes your calls when you can’t — it answers questions, books in the calendar and transfers when a person should take over.',
      },
      {
        question_da: 'Forstår AI’en dialekter?',
        answer_da: 'Moderne talegenkendelse forstår de fleste danske dialekter og uformel tale godt. Test altid med en demolinje, før du vælger en løsning.',
        question_en: 'Does the AI understand dialects?',
        answer_en: 'Modern speech recognition handles most Danish dialects and informal speech well. Always test with a demo line before choosing a solution.',
      },
    ],
  },
  {
    id: 'ai-telefonassistent-haandvaerker',
    slug: 'ai-telefonassistent-haandvaerker',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI Phone Assistant for Tradespeople: Capture Every Job While You Work',
    title_da: 'AI-telefonassistent til håndværkere: Fang hver opgave, mens du arbejder',
    excerpt_en: 'A plumber under a sink cannot answer the phone. How an AI phone assistant sorts urgent from routine, collects address and job details, books inspections and leaves quotes to you.',
    excerpt_da: 'En VVS’er under en vask kan ikke tage telefonen. Sådan skelner en AI-telefonassistent akut fra almindeligt, samler adresse og opgavedetaljer, booker besigtigelser og overlader tilbuddet til dig.',
    content_da: `
      <p>For en håndværker er telefonen salgsafdelingen. Men den ringer, når du står på en stige, har hænderne i en installation eller kører mellem to kunder. Kunden med det utætte rør venter ikke — hun ringer til den næste VVS'er på listen. En AI-telefonassistent tager opkaldet, finder ud af hvad det drejer sig om, og sørger for, at opgaven havner hos dig.</p>
      <h2>Hvad AI'en skal spørge om</h2>
      <p>Den største værdi er ikke, at nogen tager telefonen, men at du får de rigtige oplysninger første gang. Sæt AI'en op til at spørge om det, du selv ville spørge om:</p>
      <ul>
        <li><strong>Adresse</strong> og om det er privat eller erhverv.</li>
        <li><strong>Opgavetype</strong>: reparation, ny installation, service, tilbud.</li>
        <li><strong>Hastegrad</strong>: er der vand på gulvet, strøm der er gået, en dør der ikke kan låses?</li>
        <li><strong>Adgang</strong>: nøgle, kode til opgangen, hund i haven — det, montøren skal vide ved døren.</li>
        <li><strong>Hvornår kunden er hjemme</strong>.</li>
      </ul>
      <h2>Akut eller almindeligt?</h2>
      <p>Den vigtigste regel for en håndværker er sorteringen. Et eksempel: "Er der vand på gulvet lige nu, så stil om til vagttelefonen. Er det et langsomt dryp, så book en almindelig tid." Det beskytter både kunden og din aften. Se flere eksempler i <a href="/blog/ai-receptionist-viderestilling-til-menneske">guiden til viderestilling</a>.</p>
      <h2>Booking af besigtigelse og service</h2>
      <p>AI'en kan booke direkte i den rigtige montørs kalender — kun i ledige tider og med den tid, opgavetypen kræver. Kunden får en SMS-bekræftelse, og dagen før kan AI'en <a href="/blog/outbound-ai-opkald-paamindelser">ringe og bekræfte besøget</a>, så du ikke kører forgæves.</p>
      <h2>Priser og tilbud: hvad må AI'en sige?</h2>
      <p>Lad være med at lade AI'en love faste priser på opgaver, der skal ses først. Giv den i stedet det, du normalt siger: din kørselspris eller timepris, hvad prisen afhænger af, og at et tilbud kræver en besigtigelse. Så får kunden et ærligt svar, og du bevarer kontrollen over tilbuddet.</p>
      ${CTA_TRIAL_DA}
      <h2>Et opkald kl. 20:41</h2>
      <p>På <a href="/ind-og-udgaaende-opkald">vores side om ind- og udgående opkald</a> kan du se et helt opkald til en VVS-virksomhed halvanden time efter lukketid: AI'en spørger, om der er vand på gulvet, vælger en almindelig tid frem for et akut udkald, booker næste morgen kl. 08:30 og sender en SMS. Opkaldet tager lidt over et minut, og sagen ligger klar til montøren.</p>
      <h2>Hvad det ændrer i hverdagen</h2>
      <ul>
        <li>Du ringer ikke tilbage på ubesvarede opkald om aftenen.</li>
        <li>Opgaver kommer ind med adresse og beskrivelse i stedet for "ring mig op".</li>
        <li>Færre forgæves kørsler, fordi besøg bekræftes dagen før.</li>
        <li>Du kan se alle henvendelser i dashboardet og prioritere morgendagen.</li>
      </ul>
      <p>Læs mere på <a href="/haandvaerker">AI til håndværkere</a>, eller se <a href="/blog/hvad-koster-en-ai-receptionist">hvad det koster</a>. En malermester med få, store opgaver har brug for noget andet end en VVS'er med mange små — tal med os om din opsætning på <a href="/demo">en gratis demo</a>.</p>
    `,
    content_en: `
      <p>For a tradesperson the phone is the sales department. But it rings while you are on a ladder, have your hands in an installation or are driving between customers. The customer with the leaking pipe won't wait — she calls the next plumber on the list. An AI phone assistant takes the call, works out what it is about, and makes sure the job ends up with you.</p>
      <h2>What the AI should ask</h2>
      <p>The biggest value is not that someone answers, but that you get the right information the first time. Set the AI up to ask what you would ask:</p>
      <ul>
        <li><strong>Address</strong> and whether it is private or commercial.</li>
        <li><strong>Type of job</strong>: repair, new installation, service, quote.</li>
        <li><strong>Urgency</strong>: is there water on the floor, power out, a door that won't lock?</li>
        <li><strong>Access</strong>: key, door code, a dog in the garden — what the fitter needs to know at the door.</li>
        <li><strong>When the customer is home</strong>.</li>
      </ul>
      <h2>Urgent or routine?</h2>
      <p>The most important rule for a tradesperson is triage. For example: "If there is water on the floor right now, transfer to the on-call line. If it is a slow drip, book a regular appointment." That protects both the customer and your evening. See more examples in the <a href="/blog/ai-receptionist-viderestilling-til-menneske">transfer guide</a>.</p>
      <h2>Booking inspections and service</h2>
      <p>The AI can book directly in the right fitter's calendar — only in free slots and with the time the job type needs. The customer gets a text confirmation, and the day before the AI can <a href="/blog/outbound-ai-opkald-paamindelser">call to confirm the visit</a>, so you don't drive out for nothing.</p>
      <h2>Prices and quotes: what may the AI say?</h2>
      <p>Don't let the AI promise fixed prices on jobs that need to be seen first. Give it what you normally say instead: your call-out or hourly rate, what the price depends on, and that a quote requires an inspection. The customer gets an honest answer and you stay in control of the quote.</p>
      ${CTA_TRIAL_EN}
      <h2>A call at 8:41 pm</h2>
      <p>On <a href="/ind-og-udgaaende-opkald">our inbound and outbound calls page</a> you can see a full call to a plumbing business an hour and a half after closing: the AI asks whether there is water on the floor, chooses a regular appointment over an emergency call-out, books 8:30 the next morning and sends a text. The call takes just over a minute, and the job is ready for the fitter.</p>
      <h2>What it changes day to day</h2>
      <ul>
        <li>You don't return missed calls in the evening.</li>
        <li>Jobs come in with address and description instead of "call me back".</li>
        <li>Fewer wasted trips, because visits are confirmed the day before.</li>
        <li>You can see every enquiry in the dashboard and plan tomorrow.</li>
      </ul>
      <p>Read more on <a href="/haandvaerker">AI for tradespeople</a>, or see <a href="/blog/hvad-koster-en-ai-receptionist">what it costs</a>. A master painter with few large jobs needs something different from a plumber with many small ones — talk to us about your setup in <a href="/demo">a free demo</a>.</p>
    `,
    meta_title_en: 'AI Phone Assistant for Tradespeople | AIBooking.dk',
    meta_title_da: 'AI-telefonassistent til håndværkere | AIBooking.dk',
    meta_description_en: 'How an AI phone assistant sorts urgent from routine calls, collects address and job details, books inspections and leaves quotes to you.',
    meta_description_da: 'Sådan skelner en AI-telefonassistent akut fra almindeligt, samler adresse og opgavedetaljer, booker besigtigelser og overlader tilbud til dig.',
    keywords: ['ai telefonassistent håndværker', 'ai-receptionist håndværker', 'telefonpasning håndværker', 'vvs telefonpasning', 'håndværker opkald'],
    image_url: '/blog/covers/ai-telefonassistent-haandvaerker.svg',
    published: true,
    published_at: '2026-05-17',
    updated_at: UPDATED,
    audioDemo: 'bottom',
    related: ['ai-receptionist-viderestilling-til-menneske', 'outbound-ai-opkald-paamindelser', 'hvad-koster-en-ai-receptionist'],
    faq: [
      {
        question_da: 'Kan AI’en stille akutte opkald om til min mobil?',
        answer_da: 'Ja. Du bestemmer, hvad der er akut, og AI’en stiller de opkald direkte om til din mobil eller en vagttelefon.',
        question_en: 'Can the AI transfer urgent calls to my mobile?',
        answer_en: 'Yes. You decide what counts as urgent, and the AI transfers those calls directly to your mobile or an on-call line.',
      },
      {
        question_da: 'Giver AI’en kunderne priser?',
        answer_da: 'Kun dem, du selv har givet den, fx kørsels- eller timepris. Tilbud på opgaver, der skal ses først, overlader den til dig.',
        question_en: 'Does the AI give customers prices?',
        answer_en: 'Only the ones you have given it, such as call-out or hourly rates. Quotes for jobs that need to be seen first are left to you.',
      },
    ],
  },
  {
    id: 'ai-telefonassistent-kontor-administration',
    slug: 'ai-telefonassistent-kontor-administration',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI Phone Assistant for Offices and Professional Services: Fewer Interruptions',
    title_da: 'AI-telefonassistent til kontor og rådgivning: færre afbrydelser, mere fokus',
    excerpt_en: 'Accountants, lawyers, estate agents and consultants live off focus time and client trust. How an AI phone assistant receives client calls, routes them, books meetings and protects deep work.',
    excerpt_da: 'Revisorer, advokater, ejendomsmæglere og rådgivere lever af fokustid og klienternes tillid. Sådan modtager en AI-telefonassistent klientopkald, fordeler dem, booker møder og beskytter fordybelsen.',
    content_da: `
      <p>På et kontor er telefonen sjældent det, der skaber værdien — men den afbryder det, der gør. En revisor midt i en årsrapport, en advokat midt i et udkast eller en mægler midt i en fremvisning skal ikke rejse sig for at fortælle, at kontoret lukker kl. 16. En AI-telefonassistent tager imod opkaldet professionelt og sørger for, at det rigtige havner hos den rigtige.</p>
      <h2>Typiske opkald på et kontor — og hvem der skal have dem</h2>
      <div class="blog-table"><table><thead><tr><th>Opkald</th><th>Hvad AI'en gør</th></tr></thead><tbody>
        <tr><td>"Hvornår har I åbent / hvor parkerer jeg?"</td><td>Svarer selv</td></tr>
        <tr><td>Ny kunde, der vil høre om en ydelse</td><td>Afklarer behovet og booker et indledende møde</td></tr>
        <tr><td>Eksisterende klient, der vil tale med sin rådgiver</td><td>Stiller videre, hvis rådgiveren er ledig, ellers besked eller booket opringning</td></tr>
        <tr><td>"Har I modtaget mine bilag?"</td><td>Tager en struktureret besked til den ansvarlige</td></tr>
        <tr><td>Flytning eller aflysning af et møde</td><td>Ombooker i kalenderen og bekræfter på SMS/email</td></tr>
        <tr><td>Fortrolige eller juridiske spørgsmål</td><td>Svarer ikke på indholdet — stiller videre eller tager besked</td></tr>
      </tbody></table></div>
      <h2>Beskyt fokustiden</h2>
      <p>Mange kontorer vælger at lade AI'en tage alle opkald i faste tidsrum, fx 9–12, mens medarbejderne arbejder uforstyrret. Beskederne samles og kan besvares samlet. Det giver færre afbrydelser og bedre service, fordi klienten altid får et svar — og ved, hvornår der bliver ringet tilbage.</p>
      <h2>Professionel førstekontakt</h2>
      <p>På et kontor er tonen vigtig. Velkomsten, formuleringerne og hvad AI'en må sige, bestemmer du selv, og du godkender ordlyden, før den går i luften. AI'en præsenterer sig som kontorets digitale assistent og kan tage samtalen på dansk eller engelsk.</p>
      ${CTA_TRIAL_DA}
      <h2>Fortrolighed og GDPR</h2>
      <p>Klientopkald kan indeholde fortrolige oplysninger. Sæt AI'en op til ikke at bede om mere end nødvendigt (navn, nummer, ærinde) og til aldrig at udlevere oplysninger om en sag. Kræv data i EU, databehandleraftale og klare sletteregler. Læs <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR og AI-forordningen for AI-receptionister</a>.</p>
      <h2>Mødebooking uden mailkorrespondance</h2>
      <p>Den største tidsrøver på mange kontorer er ikke opkaldet, men de fem mails for at finde et mødetidspunkt. AI'en kender rådgivernes ledige tider og kan booke det indledende møde, mens kunden er i røret — med Teams- eller Zoom-link, hvis kalenderen er sat op til det. Dagen før kan den <a href="/blog/outbound-ai-opkald-paamindelser">ringe og bekræfte</a>.</p>
      <p>Se mere på <a href="/kontor">AI til kontor og administration</a>, eller læs hvordan AI'en <a href="/blog/ai-receptionist-viderestilling-til-menneske">ved, hvornår den skal stille videre</a>.</p>
    `,
    content_en: `
      <p>In an office the phone rarely creates the value — but it interrupts the work that does. An accountant in the middle of annual accounts, a lawyer drafting or an estate agent at a viewing should not stop to tell a caller that the office closes at 4 pm. An AI phone assistant receives the call professionally and makes sure the right matter reaches the right person.</p>
      <h2>Typical office calls — and who should get them</h2>
      <div class="blog-table"><table><thead><tr><th>Call</th><th>What the AI does</th></tr></thead><tbody>
        <tr><td>"When are you open / where do I park?"</td><td>Answers itself</td></tr>
        <tr><td>New client asking about a service</td><td>Clarifies the need and books an introductory meeting</td></tr>
        <tr><td>Existing client wanting their adviser</td><td>Transfers if the adviser is free, otherwise a message or booked callback</td></tr>
        <tr><td>"Have you received my documents?"</td><td>Takes a structured message for the person responsible</td></tr>
        <tr><td>Moving or cancelling a meeting</td><td>Reschedules in the calendar and confirms by text/email</td></tr>
        <tr><td>Confidential or legal questions</td><td>Does not discuss the content — transfers or takes a message</td></tr>
      </tbody></table></div>
      <h2>Protect focus time</h2>
      <p>Many offices let the AI take all calls during set hours, e.g. 9–12, while staff work undisturbed. Messages are collected and can be answered in one go. That means fewer interruptions and better service, because the client always gets an answer — and knows when they will be called back.</p>
      <h2>Professional first contact</h2>
      <p>In an office the tone matters. You decide the greeting, the phrasing and what the AI may say, and you approve the wording before it goes live. The AI introduces itself as the office's digital assistant and can hold the conversation in Danish or English.</p>
      ${CTA_TRIAL_EN}
      <h2>Confidentiality and GDPR</h2>
      <p>Client calls can contain confidential information. Set the AI up to ask for no more than necessary (name, number, reason) and never to disclose information about a case. Require data in the EU, a data processing agreement and clear deletion rules. Read <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR and the AI Act for AI receptionists</a>.</p>
      <h2>Meeting booking without email ping-pong</h2>
      <p>The biggest time sink in many offices is not the call, but the five emails needed to find a meeting time. The AI knows the advisers' free slots and can book the introductory meeting while the client is on the line — with a Teams or Zoom link if the calendar is set up for it. The day before it can <a href="/blog/outbound-ai-opkald-paamindelser">call to confirm</a>.</p>
      <p>See more on <a href="/kontor">AI for offices and administration</a>, or read how the AI <a href="/blog/ai-receptionist-viderestilling-til-menneske">knows when to transfer</a>.</p>
    `,
    meta_title_en: 'AI Phone Assistant for Offices & Advisers | AIBooking.dk',
    meta_title_da: 'AI-telefonassistent til kontor og rådgivning | AIBooking.dk',
    meta_description_en: 'How an AI phone assistant receives client calls, routes them, books meetings and protects focus time for accountants, lawyers and advisers.',
    meta_description_da: 'Sådan modtager en AI-telefonassistent klientopkald, fordeler dem, booker møder og beskytter fokustiden for revisorer, advokater og rådgivere.',
    keywords: ['ai telefonassistent kontor', 'telefonpasning kontor', 'ai receptionist revisor', 'mødebooking ai', 'kontor administration ai'],
    image_url: '/blog/covers/ai-telefonassistent-kontor-administration.svg',
    published: true,
    published_at: '2026-04-12',
    updated_at: UPDATED,
    related: ['ai-receptionist-viderestilling-til-menneske', 'ai-widget-gdpr-danske-virksomheder', 'sma-virksomheder-telefon-tid-penge'],
    faq: [
      {
        question_da: 'Kan AI’en tage samtalen på engelsk?',
        answer_da: 'Ja. AI’en kan føre samtalen på dansk og engelsk, så internationale klienter også får en professionel modtagelse.',
        question_en: 'Can the AI hold the conversation in English?',
        answer_en: 'Yes. The AI can talk in Danish and English, so international clients also get a professional reception.',
      },
      {
        question_da: 'Udleverer AI’en oplysninger om klienters sager?',
        answer_da: 'Den bør sættes op til aldrig at gøre det. Den tager imod ærindet og stiller videre eller tager en besked til den ansvarlige.',
        question_en: 'Does the AI disclose information about clients’ cases?',
        answer_en: 'It should be configured never to do so. It takes the request and transfers it or takes a message for the person responsible.',
      },
    ],
  },
];
