// Danish article text for the posts in src/content/blogPosts/widget.ts, keyed by slug.
// Loaded only on blog post pages (see ../index.ts); the rest of each post stays in the cluster file.

const CTA_WIDGET_DA = `<div class="blog-cta"><strong>Sæt en AI-widget på din hjemmeside</strong><p>Én kodestump, og AI'en svarer og booker på din side — på dansk, med tale eller tekst. Prøv gratis i 7 dage.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/widget">Se AI widget</a></div></div>`;

export default {
  'ai-widget-hjemmeside-komplet-guide': `
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
  'ai-til-hjemmeside': `
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
  'ai-widget-vs-kontaktformular': `
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
} satisfies Record<string, string>;
