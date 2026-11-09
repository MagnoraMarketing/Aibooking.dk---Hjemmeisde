// Danish article text for the posts in src/content/blogPosts/automation.ts, keyed by slug.
// Loaded only on blog post pages (see ../index.ts); the rest of each post stays in the cluster file.

const CTA_TRIAL_DA = `<div class="blog-cta"><strong>Lad AI'en booke for dig</strong><p>Forbind kalenderen, viderestil dit nummer, og se bookingerne komme ind i 7 dage — gratis og uden betalingskort.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/demo">Book en demo</a></div></div>`;

export default {
  'komplet-ai-automatisering-widget-telefon-booking': `
      <p>En booking er sjældent kun én handling. Kunden ringer eller skriver, I finder en tid, I bekræfter, I minder om den, kunden flytter den, og nogen skal fylde hullet. <strong>Automatisk booking med AI</strong> betyder, at hele den kæde kan klares uden at en medarbejder rører den — på tværs af telefon, hjemmeside og SMS.</p>
      <h2>Bookingens livscyklus — og hvad AI'en gør</h2>
      <div class="blog-table"><table><thead><tr><th>Trin</th><th>Manuelt i dag</th><th>Med AI</th></tr></thead><tbody>
        <tr><td>Henvendelse</td><td>Telefon, mail, kontaktformular</td><td>AI'en svarer på telefon og i widgeten med det samme</td></tr>
        <tr><td>Find en tid</td><td>Slå op i kalenderen, foreslå tider</td><td>Ser kun reelt ledige tider og foreslår to-tre</td></tr>
        <tr><td>Registrering</td><td>Taste navn, nummer, ydelse ind</td><td>Skrives direkte i kalenderen</td></tr>
        <tr><td>Bekræftelse</td><td>Send mail eller SMS</td><td>SMS/email sendes automatisk</td></tr>
        <tr><td>Påmindelse</td><td>Huske at ringe/skrive</td><td>SMS og evt. opkald dagen før</td></tr>
        <tr><td>Ombooking og aflysning</td><td>Nyt opkald, ny runde</td><td>Kunden ringer eller skriver; AI'en flytter tiden</td></tr>
        <tr><td>Hul i kalenderen</td><td>Ofte tom</td><td>Kan tilbydes næste kunde på ventelisten</td></tr>
      </tbody></table></div>
      <h2>Kalenderintegration: det skal virke</h2>
      <p>AI-booking står og falder med integrationen. Den skal læse og skrive i den kalender, I allerede bruger — Google Kalender, Outlook/Microsoft 365 eller et branchesystem — så I ikke har to kalendere at holde styr på.</p>
      <ul>
        <li><strong>Ingen dobbeltbookinger:</strong> AI'en tjekker ledighed i det øjeblik, den booker, ikke kun da den foreslog tiden.</li>
        <li><strong>Varighed pr. ydelse:</strong> en konsultation er 30 minutter, en behandling 60. AI'en skal vide det.</li>
        <li><strong>Ressourcer:</strong> den rigtige behandler, montør eller lokale.</li>
        <li><strong>Buffer og transport:</strong> tid mellem aftaler, eller køretid for håndværkere.</li>
        <li><strong>Regler:</strong> fx "nye kunder kun om formiddagen" eller "akutte tider holdes fri til kl. 10".</li>
      </ul>
      <h2>Ændringer og aflysninger</h2>
      <p>Det er her, mest tid går tabt manuelt. Med AI kan kunden ringe eller skrive "jeg kan ikke på torsdag", og AI'en finder aftalen, tilbyder en ny tid og opdaterer kalenderen. Du kan bestemme regler som "aflysning senere end 24 timer før noteres som sen aflysning", og AI'en kan fortælle kunden om jeres afbudsregler. Kombineret med <a href="/blog/outbound-ai-opkald-paamindelser">påmindelsesopkald dagen før</a> fanger I afbud, mens der stadig er tid til at give tiden til en anden.</p>
      ${CTA_TRIAL_DA}
      <h2>Én booking-motor, flere kanaler</h2>
      <p>Kunder vælger selv, hvordan de henvender sig. Nogle ringer, andre klikker på hjemmesiden, og mange gør begge dele. Når den samme AI står bag <a href="/ai-receptionist">telefonen</a> og <a href="/widget">widgeten på hjemmesiden</a>, får kunden de samme svar og de samme ledige tider — og I ser alle bookinger og samtaler ét sted i dashboardet.</p>
      <h2>Hvor meget administration forsvinder?</h2>
      <p>Tæl selv i en uge: hvor mange minutter bruges på at tage imod bookinger, flytte tider, sende bekræftelser og ringe efter udeblivelser? For mange små virksomheder er det en til to timer om dagen. Se hvordan du regner det om til kroner i <a href="/blog/roi-ai-automatisering-virksomheder">guiden til ROI af AI-automatisering</a>.</p>
      <h2>Brancheeksempler</h2>
      <ul>
        <li><strong>Klinikker og saloner:</strong> booking, ombooking og påmindelser; se <a href="/blog/totalloesning-klinik">AI-booking til klinikker og saloner</a>.</li>
        <li><strong>Håndværkere:</strong> besigtigelser og servicebesøg i den rigtige montørs kalender; se <a href="/blog/ai-telefonassistent-haandvaerker">AI til håndværkere</a>.</li>
        <li><strong>Kontorer:</strong> indledende møder med Teams- eller Zoom-link; se <a href="/blog/ai-telefonassistent-kontor-administration">AI til kontor</a>.</li>
        <li><strong>Webshops:</strong> rådgivning, prøvning eller afhentning; se <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI til webshop</a>.</li>
      </ul>
      <p>Se hvilke systemer der kan forbindes på <a href="/integrationer">integrationer</a>.</p>
    `,
  'roi-ai-automatisering-virksomheder': `
      <p>Mange artikler om AI lover "op til 80 % besparelse" uden at vise regnestykket. Det gør vi ikke. I stedet får du en model med fire poster, som du kan regne igennem med dine egne tal på et kvarter. Er resultatet negativt, er AI ikke en god investering for dig lige nu — og det er også et brugbart svar.</p>
      <h2>Post 1: Tid, der frigøres</h2>
      <p>Tæl i en almindelig uge, hvor mange minutter der går med at tage telefonen, svare på de samme spørgsmål, finde tider og sende bekræftelser.</p>
      <div class="blog-callout"><strong>Formel:</strong> minutter pr. uge ÷ 60 × timepris for den, der gør det i dag × 4,3 uger = værdi pr. måned</div>
      <p>Brug den reelle timepris inklusive pension og feriepenge. Tæl kun den tid, AI'en realistisk kan overtage — typisk booking og gengangerspørgsmål, ikke rådgivning.</p>
      <h2>Post 2: Opkald og henvendelser, der i dag går tabt</h2>
      <p>Hvor mange opkald bliver ikke taget, og hvor mange af dem får du aldrig fat i igen? Hvor mange kontaktformularer bliver aldrig til en kunde, fordi svaret kom for sent?</p>
      <div class="blog-callout"><strong>Formel:</strong> tabte henvendelser pr. måned × andel der ville være blevet kunder × værdi af en kunde (dækningsbidrag, ikke omsætning)</div>
      <p>Vær konservativ med andelen. Ikke alle, der ringer, ville have købt.</p>
      <h2>Post 3: Færre udeblivelser</h2>
      <div class="blog-callout"><strong>Formel:</strong> udeblivelser pr. måned × andel der fanges af påmindelser og genbookes × værdi af en tid</div>
      <p>Kun relevant, hvis du har aftaler i kalenderen. Læs mere i <a href="/blog/outbound-ai-opkald-paamindelser">automatiske påmindelsesopkald</a>.</p>
      <h2>Post 4: Omkostningen</h2>
      <p>Abonnement pr. måned, evt. ekstra minutter, og opsætning fordelt over fx 12 måneder. Hos Aibooking.dk afhænger prisen af taletiden, og du kan se jeres i <a href="/prisberegner">prisberegneren</a>; opsætning er valgfri. Se <a href="/blog/hvad-koster-en-ai-receptionist">hvad en AI-receptionist koster</a>.</p>
      ${CTA_TRIAL_DA}
      <h2>Et regneeksempel (tænkte tal)</h2>
      <p>En fysioterapiklinik med tre behandlere:</p>
      <div class="blog-table"><table><thead><tr><th>Post</th><th>Antagelse</th><th>Pr. måned</th></tr></thead><tbody>
        <tr><td>Tid frigjort</td><td>4 timer/uge × 300 kr./time × 4,3</td><td>5.160 kr.</td></tr>
        <tr><td>Tabte opkald</td><td>20 opkald × 25 % × 400 kr. dækningsbidrag</td><td>2.000 kr.</td></tr>
        <tr><td>Udeblivelser</td><td>8 udeblivelser × 40 % genbooket × 500 kr.</td><td>1.600 kr.</td></tr>
        <tr><td><strong>Værdi i alt</strong></td><td></td><td><strong>8.760 kr.</strong></td></tr>
      </tbody></table></div>
      <p>Træk jeres månedspris fra – den finder du i <a href="/prisberegner">prisberegneren</a> ud fra jeres egen taletid. Tallene er illustrative — de er ikke målt hos en bestemt kunde. Pointen er metoden: udskift hver antagelse med dit eget tal.</p>
      <h2>Det, regnestykket ikke fanger</h2>
      <ul>
        <li><strong>Fokus:</strong> færre afbrydelser giver bedre arbejde, men er svært at sætte tal på.</li>
        <li><strong>Kundeoplevelse:</strong> svar på sekunder i stedet for i morgen.</li>
        <li><strong>Overblik:</strong> transskriptioner viser, hvad kunderne faktisk spørger om.</li>
        <li><strong>Risiko:</strong> en dårligt opsat AI kan også koste kunder. Derfor: test, læs transskriptioner, og justér.</li>
      </ul>
      <h2>Mål det i prøveperioden</h2>
      <p>Den bedste ROI-beregning er den, du laver på rigtige data. I den gratis prøveperiode kan du se antal besvarede opkald, bookinger og samtalelængde i dashboardet, og bruge dem i stedet for antagelser. Se hvordan du kommer i gang i <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">guiden trin for trin</a>.</p>
    `,
  'kom-i-gang-ai-automatisering-trin-for-trin': `
      <p>De fleste projekter med AI går galt, fordi de starter for bredt. Det, der virker, er det modsatte: én kanal, ét tydeligt formål, rigtige data og en uges justering. Her er de syv trin, vi selv bruger, når en ny virksomhed kommer i gang.</p>
      <h2>Trin 1: Vælg én opgave</h2>
      <p>Start med det, der gør mest ondt. For de fleste er det ubesvarede opkald uden for åbningstid eller ved optaget. Vent med udgående opkald og webshop-integration, til den første opgave kører.</p>
      <h2>Trin 2: Skriv vidensdokumentet</h2>
      <p>AI'en ved kun det, du fortæller den. Skriv på én side:</p>
      <ul>
        <li>Ydelser med varighed og pris (eller hvad prisen afhænger af).</li>
        <li>Åbningstider, adresse, parkering.</li>
        <li>De ti spørgsmål, kunderne oftest stiller — med jeres svar.</li>
        <li>Hvad AI'en <strong>ikke</strong> må svare på eller love.</li>
        <li>Hvornår der skal stilles videre, og til hvem. Se <a href="/blog/ai-receptionist-viderestilling-til-menneske">reglerne for viderestilling</a>.</li>
      </ul>
      <h2>Trin 3: Formulér velkomsten</h2>
      <p>Kort, venlig og ærlig: "Du taler med [virksomhed]s digitale assistent. Samtalen optages. Hvad kan jeg hjælpe med?" Det opfylder kravet om at oplyse, at det er en AI, og om optagelse. Se <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR og AI-forordningen</a>.</p>
      <h2>Trin 4: Forbind kalenderen</h2>
      <p>Forbind Google Kalender, Outlook eller dit branchesystem, og angiv varighed pr. ydelse og evt. buffer. Test at AI'en kun ser ledige tider.</p>
      ${CTA_TRIAL_DA}
      <h2>Trin 5: Ring selv ind — ti gange</h2>
      <p>Før kunderne gør det, så ring selv og lad kolleger ringe:</p>
      <ol>
        <li>En almindelig booking.</li>
        <li>En ombooking og en aflysning.</li>
        <li>De tre hyppigste spørgsmål.</li>
        <li>Et spørgsmål, AI'en ikke har svar på.</li>
        <li>En akut sag.</li>
        <li>En sur kunde.</li>
        <li>En kunde, der vil tale med et menneske.</li>
        <li>En kollega med en anden dialekt.</li>
      </ol>
      <h2>Trin 6: Viderestil — gradvist</h2>
      <p>Start med viderestilling uden for åbningstid eller ved optaget. Du beholder dit nummer, og dit team tager stadig telefonen, når de kan. Udvid, når du er tryg.</p>
      <h2>Trin 7: Læs transskriptionerne den første uge</h2>
      <p>Det vigtigste trin. Læs hver samtale de første dage og spørg: Forstod den ærindet? Svarede den rigtigt? Stillede den videre, når den skulle? Ret vidensdokumentet, hver gang du finder et hul. Efter en uge er de fleste huller lukket.</p>
      <h2>Hvordan vælger du en løsning?</h2>
      <p>Før trin 1 skal du vælge udbyder. Brug de ni krav i <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">AI-telefonpasning: det skal du kræve</a>, lyt til <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">en rigtig dansk AI-stemme</a>, og sammenlign priser i <a href="/blog/hvad-koster-en-ai-receptionist">hvad koster en AI-receptionist?</a>. Hos Aibooking.dk kan du gøre det hele selv i en gratis prøveperiode, eller tilkøbe opsætning, hvor vi tager trin 2–6 med dig på et onboarding-møde.</p>
    `,
  'totalloesning-klinik': `
      <p>En tandlæge, en fysioterapeut, en frisør og en negletekniker har én ting til fælles: når de arbejder, kan de ikke tage telefonen. Og når de tager den, afbryder de en kunde i stolen. AI-booking løser det ved at tage både opkald og bookinger på hjemmesiden — og ved at sørge for, at de bookede tider faktisk bliver brugt.</p>
      <h2>Tre kanaler, én kalender</h2>
      <ul>
        <li><strong>Telefon:</strong> AI'en tager opkaldet under behandlinger, i frokostpausen og efter lukketid, og booker direkte i kalenderen. Se <a href="/blog/ai-indgaaende-opkald">AI til indgående opkald</a>.</li>
        <li><strong>Hjemmeside:</strong> en chat- og talewidget svarer på spørgsmål om behandlinger og priser og booker, mens kunden er på siden — også kl. 22. Se <a href="/widget">AI widget</a>.</li>
        <li><strong>Påmindelser:</strong> SMS ved booking og et kort opkald dagen før, hvor kunden kan flytte tiden. Se <a href="/blog/outbound-ai-opkald-paamindelser">automatiske påmindelsesopkald</a>.</li>
      </ul>
      <h2>Klinikker: nye og eksisterende patienter</h2>
      <p>Klinikker har typisk forskellige regler for nye og eksisterende patienter, forskellige behandlingslængder og behandlere med hver deres kalender. AI'en spørger om det, klinikken har brug for — ny eller eksisterende, hvilken behandler, hvilken type tid — og booker den rigtige varighed hos den rigtige behandler.</p>
      <div class="blog-callout"><strong>Helbredsoplysninger:</strong> AI'en skal ikke give sundhedsfaglige råd, og den bør ikke spørge ind til symptomer ud over det, der er nødvendigt for at vælge den rigtige tid. Ved akutte symptomer skal den henvise til lægevagt eller 112. Påmindelser skal ikke nævne behandlingens indhold. Se <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR og AI-forordningen</a>.</div>
      <h2>Saloner: mange korte bookinger</h2>
      <p>En frisør eller skønhedssalon har mange korte aftaler, faste kunder og en høj andel af bookinger, der flyttes. Her giver AI mest på tre punkter: telefonen bliver taget under klipninger, kunder kan booke og flytte om aftenen, og huller i kalenderen kan tilbydes til kunder på venteliste.</p>
      ${CTA_TRIAL_DA}
      <h2>Udeblivelser: der hvor pengene er</h2>
      <p>For en klinik er en udeblivelse en behandlingstid, der ikke kan sælges igen. Kombinationen af SMS ved booking og et opkald dagen før fanger mange afbud i tide. Mål dine egne udeblivelser før og efter, og regn effekten ud med modellen i <a href="/blog/roi-ai-automatisering-virksomheder">guiden til ROI</a>.</p>
      <h2>Hvad det kræver</h2>
      <ol>
        <li>Forbind klinikkens eller salonens kalender.</li>
        <li>Beskriv behandlinger med varighed og pris.</li>
        <li>Skriv reglerne for nye kunder, akutte henvendelser og hvad AI'en ikke må svare på.</li>
        <li>Viderestil telefonen ved optaget eller uden for åbningstid.</li>
        <li>Indsæt widgeten på hjemmesiden.</li>
      </ol>
      <p>Se mere på <a href="/klinik">AI til klinikker</a>, eller læs <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatisk booking med AI</a>.</p>
    `,
  'ai-kundeservice': `
      <p>Kundeservice er det sted, hvor mange virksomheder først mærker presset: de samme spørgsmål igen og igen, telefonkø i spidsbelastning og mails, der først bliver besvaret næste dag. <strong>AI kundeservice</strong> kan tage en stor del af det forudsigelige — men kun hvis den sættes op til det, den er god til.</p>
      <h2>Hvad AI er god til i kundeservice</h2>
      <ul>
        <li><strong>Gengangerspørgsmål:</strong> åbningstider, priser, levering, returnering, adresse.</li>
        <li><strong>Opslag:</strong> ordrestatus, ledige tider, lagerstatus — når den er forbundet til systemerne.</li>
        <li><strong>Booking og ændringer</strong> i kalenderen.</li>
        <li><strong>Sortering:</strong> forstå ærindet og sende det til den rigtige person med et referat.</li>
        <li><strong>Mængde:</strong> mange samtaler på én gang uden kø, også uden for åbningstid.</li>
      </ul>
      <h2>Hvor AI skal stoppe</h2>
      <ul>
        <li>Klager og kunder, der er kede af det.</li>
        <li>Sager, der kræver skøn eller en undtagelse fra reglerne.</li>
        <li>Kompensation, refusion ud over standardregler og forhandling.</li>
        <li>Når kunden beder om et menneske.</li>
      </ul>
      <p>Den bedste AI kundeservice er den, der hurtigt erkender, at den ikke skal løse sagen, og sender den videre uden at kunden skal gentage sig selv. Se <a href="/blog/ai-receptionist-viderestilling-til-menneske">hvornår der skal stilles videre til et menneske</a>.</p>
      <h2>Fordel arbejdet: en praktisk model</h2>
      <div class="blog-table"><table><thead><tr><th>Henvendelse</th><th>AI</th><th>Team</th></tr></thead><tbody>
        <tr><td>"Hvornår har I åbent?"</td><td>Svarer</td><td>–</td></tr>
        <tr><td>"Hvor er min pakke?"</td><td>Slår op og svarer</td><td>–</td></tr>
        <tr><td>"Kan jeg få en tid?"</td><td>Booker</td><td>–</td></tr>
        <tr><td>"Varen er gået i stykker"</td><td>Samler oplysninger</td><td>Tager beslutningen</td></tr>
        <tr><td>"Jeg er utilfreds"</td><td>Stiller videre med referat</td><td>Tager samtalen</td></tr>
      </tbody></table></div>
      ${CTA_TRIAL_DA}
      <h2>Telefon, chat og mail: samme svar overalt</h2>
      <p>Kunder skifter kanal. De starter i chatten og ringer, hvis de ikke får svar. Når den samme AI står bag <a href="/ai-receptionist">telefonen</a> og <a href="/widget">chat- og talewidgeten på hjemmesiden</a>, giver den de samme svar ud fra den samme viden. Det er både bedre for kunden og lettere at vedligeholde, fordi I kun har ét sted at opdatere priser og regler.</p>
      <h2>Mål kvaliteten — ikke kun mængden</h2>
      <ul>
        <li><strong>Løsningsgrad:</strong> hvor mange henvendelser AI'en løser uden overdragelse.</li>
        <li><strong>Korrekte overdragelser:</strong> blev de rigtige sager sendt videre?</li>
        <li><strong>Fejlsvar:</strong> læs et udsnit af transskriptioner hver uge.</li>
        <li><strong>Svartid</strong> på de sager, teamet overtager.</li>
      </ul>
      <p>Har du en webshop, så læs <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI til webshop</a>. Vil du se den bredere idé om en "digital kollega", så læs <a href="/blog/ai-medarbejder">AI medarbejder</a>.</p>
    `,
  'ai-medarbejder': `
      <p>Udtrykket <strong>AI medarbejder</strong> bruges om en AI, der løser afgrænsede opgaver på virksomhedens vegne — typisk at tage telefonen, svare på hjemmesiden og booke. Det er et nyttigt billede, fordi det tvinger dig til at tænke som en arbejdsgiver: Hvad er jobbet? Hvad må den beslutte? Hvem er dens leder?</p>
      <h2>En stillingsbeskrivelse til en digital kollega</h2>
      <div class="blog-callout"><strong>Stilling:</strong> Digital receptionist (deltid: aften, weekend og ved optaget)<br><strong>Opgaver:</strong> besvare opkald og chats, svare på gengangerspørgsmål, booke og flytte tider, sende bekræftelser, ringe påmindelser dagen før<br><strong>Må ikke:</strong> love priser uden for prislisten, behandle klager, give faglige råd<br><strong>Rapporterer til:</strong> kontorchefen, som læser referater dagligt<br><strong>Stiller videre til:</strong> vagttelefon ved akutte sager; besked til ansvarlig ved alt andet</div>
      <p>Skriv den til din egen virksomhed. Det er det bedste udgangspunkt for opsætningen.</p>
      <h2>Hvad en AI medarbejder kan overtage</h2>
      <ul>
        <li><strong>Reception:</strong> tage imod opkald og stille videre. Se <a href="/blog/ai-reception-virtuel-receptionist">hvad er en AI-receptionist?</a></li>
        <li><strong>Booking:</strong> hele kæden fra forespørgsel til påmindelse. Se <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatisk booking med AI</a>.</li>
        <li><strong>Førstelinje-kundeservice</strong> på telefon og hjemmeside.</li>
        <li><strong>Opfølgning:</strong> påmindelser og bekræftelser.</li>
      </ul>
      <h2>Hvad den ikke kan</h2>
      <ul>
        <li><strong>Tage ansvar.</strong> Det er stadig virksomheden, der står inde for det, AI'en siger.</li>
        <li><strong>Bruge skøn i nye situationer</strong>, den ikke er instrueret i.</li>
        <li><strong>Opbygge relationer</strong> som en fast medarbejder.</li>
        <li><strong>Lære af sig selv</strong> uden at nogen retter dens instruktioner.</li>
      </ul>
      ${CTA_TRIAL_DA}
      <h2>Onboarding: som en ny medarbejder</h2>
      <ol>
        <li><strong>Introduktion:</strong> ydelser, priser, regler og tone — skrevet ned.</li>
        <li><strong>Prøvetid:</strong> start med aften og weekend.</li>
        <li><strong>Feedback:</strong> læs referater dagligt den første uge, og ret instruktionerne.</li>
        <li><strong>Udvidelse:</strong> giv flere opgaver, når den løser de første godt.</li>
      </ol>
      <p>Se de konkrete trin i <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">kom i gang i 7 trin</a>.</p>
      <h2>Hvad koster en AI medarbejder?</h2>
      <p>Hos Aibooking.dk betaler du for taletid, og prisen ser du i <a href="/prisberegner">prisberegneren</a>. AI'en holder ikke ferie og kan tage mange opkald på én gang, men den erstatter ikke en dygtig medarbejders skøn. Se <a href="/blog/hvad-koster-en-ai-receptionist">priser og regnestykke</a> og <a href="/blog/ai-receptionist-vs-telefonpasning">sammenligningen med menneskelig telefonpasning</a>.</p>
    `,
  'ai-i-danmark': `
      <p>Danske virksomheder er blandt de hurtigste i Europa til at tage AI i brug. Ifølge Eurostat brugte omkring 42 % af danske virksomheder med mindst 10 ansatte AI i 2025 — den højeste andel i EU, hvor gennemsnittet var omkring 20 %. Men "bruger AI" dækker over alt fra en medarbejder, der skriver mails med en chatbot, til fuldt automatiserede processer.</p>
      <h2>Hvor danske SMV'er typisk starter</h2>
      <ol>
        <li><strong>Tekst og dokumenter:</strong> mails, opslag, referater og oversættelse. Lav tærskel, men gevinsten afhænger af den enkelte medarbejder.</li>
        <li><strong>Kundekontakt:</strong> AI på hjemmesiden og i telefonen. Her ligger mange af de målbare gevinster, fordi det handler om opkald og henvendelser, der ellers går tabt.</li>
        <li><strong>Administration:</strong> booking, påmindelser, fakturaopfølgning.</li>
        <li><strong>Analyse:</strong> hvad kunderne spørger om, og hvor processen halter.</li>
      </ol>
      <h2>Hvorfor kundekontakt ofte betaler sig først</h2>
      <p>En AI, der tager telefonen eller svarer på hjemmesiden, kan måles direkte: antal besvarede henvendelser, bookinger og sparet tid. Det gør det lettere at se, om investeringen virker, end med generelle AI-værktøjer. Se <a href="/blog/roi-ai-automatisering-virksomheder">regnestykket for ROI</a>.</p>
      <h2>Hvad en dansk AI-løsning bør kunne</h2>
      <ul>
        <li><strong>Dansk sprog i tale og skrift</strong> — med danske navne, adresser og dialekter. Se <a href="/blog/ai-telefonassistent-dansk-sprog">dansk talegenkendelse</a>.</li>
        <li><strong>Data i EU og databehandleraftale.</strong></li>
        <li><strong>Overholdelse af AI-forordningen</strong>, herunder at AI'en oplyser, at den er en AI. Se <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR og AI-forordningen</a>.</li>
        <li><strong>Integration med de systemer, danske virksomheder bruger</strong> — kalendere, branchesystemer og webshops.</li>
        <li><strong>Gennemsigtige priser i kroner</strong> og en prøveperiode.</li>
      </ul>
      ${CTA_TRIAL_DA}
      <h2>Dansk taleteknologi har fået et løft</h2>
      <p>Dansk har længe været et lille sprog for AI. Det ændrer sig: store flersprogede modeller er blevet bedre til dansk, og åbne danske ressourcer som CoRal-projektet under Alexandra Instituttet giver data og modeller til dansk talegenkendelse. Se den bredere udvikling i <a href="/blog/nyeste-ai-teknologi-2026">den nyeste AI-teknologi i 2026</a>.</p>
      <h2>Kom i gang uden et stort projekt</h2>
      <p>Den mest almindelige fejl er at starte for stort. Vælg én opgave — fx ubesvarede opkald — og mål effekten i en måned. Se <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">kom i gang i 7 trin</a>, eller læs <a href="/blog/ai-medarbejder">hvad en AI medarbejder kan overtage</a>.</p>
    `,
  'ai-bestiller-bud-levering-uber-direct-just-eat': `
      <p>"Kan I levere?" er et af de spørgsmål, restauranter, bagerier og butikker med et lokalt lager får hver dag. Svaret kræver normalt, at en medarbejder slår en pris op, ringer eller logger ind hos et budfirma og taster adressen ind. Med Aibooking kan AI-agenten klare det i samme samtale, både i telefonen og i chatten på hjemmesiden.</p>
      <h2>Sådan foregår det, trin for trin</h2>
      <ol>
        <li><strong>Adressen.</strong> AI'en spørger om vej og husnummer, postnummer og by og gentager adressen for kunden.</li>
        <li><strong>Pris og tid.</strong> Den henter et tilbud fra Uber Direct eller Just Eat og læser prisen og den forventede leveringstid op. Bruger I begge, henter den pris fra dem begge og lader kunden vælge.</li>
        <li><strong>Et klart ja.</strong> Buddet bestilles først, når kunden tydeligt har sagt ja til netop den pris.</li>
        <li><strong>Bekræftelse.</strong> AI'en siger først, at buddet er bestilt, når budfirmaet har bekræftet det. I chatten kan kunden få et link til at følge leveringen.</li>
        <li><strong>Status.</strong> Ringer eller skriver kunden igen, kan AI'en fortælle, hvor leveringen er.</li>
      </ol>
      <div class="blog-callout"><strong>Afhentningen sker altid hos jer.</strong> Afhentningsadressen er jeres egen og er sat op på forhånd. Kunden kan vælge, hvor buddet skal hen, men aldrig hvor det skal hentes.</div>
      <h2>Uber Direct og Just Eat side om side</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Uber Direct</th><th>Just Eat</th></tr></thead><tbody>
        <tr><td>Pris og leveringstid før bestilling</td><td>Ja</td><td>Ja</td></tr>
        <tr><td>Prisen gælder i</td><td>15 minutter</td><td>5 minutter</td></tr>
        <tr><td>Status på leveringen</td><td>Ja, med link til at følge buddet</td><td>Ja</td></tr>
        <tr><td>Annullering via AI'en</td><td>Ja, efter bekræftelse fra kunden</td><td>Nej, kunden henvises til jer</td></tr>
      </tbody></table></div>
      <p>Er prisen udløbet, henter AI'en en ny i stedet for at bestille til en gammel pris.</p>
      <h2>Hvem har gavn af det?</h2>
      <ul>
        <li><strong>Restauranter, pizzeriaer og takeaway</strong>, der vil kunne levere uden egne chauffører.</li>
        <li><strong>Bagerier og caféer</strong> med bestillinger til kontorer og selskaber.</li>
        <li><strong>Butikker og webshops med et fysisk lager</strong>, der vil tilbyde levering samme dag i lokalområdet.</li>
      </ul>
      <h2>Hvad det ikke er</h2>
      <p>AI'en bestiller buddet, ikke selve varen. Den tager ikke imod betaling for maden eller varerne, og den sender ikke ordren til jeres kassesystem. Bestillingen står i samtalen i dashboardet, så I kan se, hvad der er aftalt. Tjenesterne findes heller ikke i alle områder, så tjek først, at Uber Direct eller Just Eat kører hos jer.</p>
      <p>Som altid med en AI i telefonen bør den præsentere sig som en digital assistent, så kunden ved, hvem de taler med. Det kræver AI-forordningens artikel 50.</p>
      <h2>Kom i gang</h2>
      <p>Opret en agent, forbind Uber Direct eller Just Eat under agentens leveringsindstillinger med jeres egen afhentningsadresse, og test et opkald selv. Læs mere om <a href="/restaurant">AI til restauranter</a> og om <a href="/integrationer">alle integrationer</a>.</p>
      <div class="blog-cta"><strong>Prøv det på jeres egne opkald</strong><p>Opret en gratis konto og test i 7 dage. Intet kortnummer.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/restaurant">AI til restauranter</a></div></div>`,
} satisfies Record<string, string>;
