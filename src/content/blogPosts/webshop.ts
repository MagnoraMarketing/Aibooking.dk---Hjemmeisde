import type { BlogPost } from '../blog';

// AI for webshops: the phone + chat customer service pillar (with the deep
// Shopify integration), the webshop widget, and the Shopify setup guide.

export const webshopPosts: BlogPost[] = [
  {
    id: 'shopify-integration-ai-voice-indgaaende-opkald',
    slug: 'shopify-integration-ai-voice-indgaaende-opkald',
    categorySlug: 'ai-webshop',
    title_en: 'AI for Webshops: Customer Service on Phone and Chat with Shopify Integration',
    title_da: 'AI til webshop: kundeservice i telefon og chat med Shopify-integration',
    excerpt_en: 'Connect Shopify once and let one AI answer your customers everywhere — as an AI voice receptionist on your website and on the phone. Every feature explained, and why it matters.',
    excerpt_da: 'Forbind Shopify én gang, og lad én AI svare dine kunder overalt — som AI reception på hjemmesiden og på telefonen. Alle funktioner forklaret, og hvorfor de betyder noget.',
    content_en: `
      <p>Webshop customers ask the same questions whether they type them into your website or call you: <em>Is it in stock? Where is my parcel? Can I return it?</em> With a <strong>Shopify integration with AI voice</strong>, one AI answers all of them — on your website and on the phone — using live data from your store, 24/7.</p>
      <div class="blog-toc"><strong>In this guide</strong><ol>
        <li><a href="#what">What is Shopify + AI voice?</a></li>
        <li><a href="#why">Why webshops need AI</a></li>
        <li><a href="#how">How it works</a></li>
        <li><a href="#features">All features — and why</a></li>
        <li><a href="#website">AI reception on your website</a></li>
        <li><a href="#inbound">AI for inbound calls</a></li>
        <li><a href="#compare">Before vs. after</a></li>
        <li><a href="#setup">Get started in 4 steps</a></li>
      </ol></div>
      <h2 id="what">What is a Shopify integration with AI voice?</h2>
      <p>You connect your Shopify store to Aibooking.dk once in the dashboard. From then on the AI reads products, prices, variants, stock and orders directly from Shopify. The same knowledge powers two channels:</p>
      <ul>
        <li><strong>AI voice widget on your website</strong> — customers talk or type with an AI receptionist while they shop.</li>
        <li><strong>AI for inbound calls</strong> — the AI answers your phone in natural Danish (or English) and handles the call end to end.</li>
      </ul>
      <div class="blog-stats">
        <div class="blog-stat"><b>24/7</b>answers on web and phone</div>
        <div class="blog-stat"><b>~5 min</b>to connect Shopify</div>
        <div class="blog-stat"><b>0</b>customers in the phone queue</div>
        <div class="blog-stat"><b>2</b>channels, one AI</div>
      </div>
      <h2 id="why">Why your webshop needs AI</h2>
      <p>Most questions arrive in the evening, at weekends and during peak season — exactly when nobody is free to answer. Every unanswered question is a potential abandoned cart or a one-star review. AI for webshops removes the wait: the customer gets the right answer immediately, and your team only handles the cases that genuinely need a person.</p>
      <div class="blog-callout"><strong>The key point</strong>Speed sells. A customer who gets an answer while still on the product page is far more likely to buy than one who has to wait until tomorrow.</div>
      <h2 id="how">How it works</h2>
      <div class="blog-flow">
        <div><span>🛍️</span><b>Customer asks</b>on the website or by phone</div>
        <div><span>🤖</span><b>AI understands</b>voice or text, in Danish</div>
        <div><span>🔗</span><b>Shopify lookup</b>products, stock, orders</div>
        <div><span>✅</span><b>Solves it</b>answers, reorders or books</div>
        <div><span>📊</span><b>You get the summary</b>transcript and trends</div>
      </div>
      <div class="blog-cta"><strong>Hear the AI voice on your own store</strong><p>Free 7-day trial — set up in a short onboarding meeting.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Start free trial</a><a href="/demo">Book a demo</a></div></div>
      <h2 id="features">All features — and why they matter</h2>
      <div class="blog-grid">
        <div class="blog-card"><h3><span class="blog-icon">🛒</span>Live product data from Shopify</h3><p>Prices, variants, sizes and materials are read directly from your catalogue.</p><p class="why"><b>Why:</b> answers are always up to date — no FAQ to maintain.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📦</span>Real-time stock</h3><p>The AI checks stock before promising anything.</p><p class="why"><b>Why:</b> no disappointed customers and fewer cancellations.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🚚</span>Order tracking</h3><p>"Where is my parcel?" is answered from the live order status.</p><p class="why"><b>Why:</b> the most common support question disappears from your inbox.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🔁</span>Reorders in the conversation</h3><p>Returning customers reorder a previous item by voice or chat.</p><p class="why"><b>Why:</b> more repeat sales with less friction.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🎙️</span>AI voice widget</h3><p>Customers talk or type with an AI receptionist on your website.</p><p class="why"><b>Why:</b> a personal shop-assistant feel, around the clock.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📞</span>AI for inbound calls</h3><p>Answers the phone in seconds, keeps your existing number.</p><p class="why"><b>Why:</b> no customer ends up on voicemail.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">♾️</span>Unlimited simultaneous calls</h3><p>Five customers can call at once without a queue.</p><p class="why"><b>Why:</b> Black Friday and peak season cost no extra staff.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🇩🇰</span>Natural Danish conversation</h3><p>Understands everyday Danish, dialects and interruptions — plus English.</p><p class="why"><b>Why:</b> customers talk normally, no "press 1".</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📅</span>Calendar booking</h3><p>Books advice sessions, fittings or pick-up times in Google Calendar or Outlook.</p><p class="why"><b>Why:</b> service appointments without back-and-forth emails.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🙋</span>Hand-off to a human</h3><p>Complaints and edge cases are transferred with full context.</p><p class="why"><b>Why:</b> AI handles volume, your team handles relationships.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">💬</span>SMS updates</h3><p>Confirmations and delivery notifications by SMS.</p><p class="why"><b>Why:</b> customers stay informed without calling.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📊</span>Transcripts and dashboard</h3><p>Every conversation is recorded, transcribed and summarised, with trends.</p><p class="why"><b>Why:</b> see what customers ask and improve your shop.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📤</span>Outbound calls</h3><p>The AI can also call about missing payments or uncollected parcels.</p><p class="why"><b>Why:</b> recover revenue that would otherwise be lost.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🔒</span>GDPR and EU data</h3><p>Data processed in the EU, encrypted, with a data processing agreement.</p><p class="why"><b>Why:</b> safe for Danish customers and your business.</p></div>
      </div>
      <h2 id="website">AI reception on your website</h2>
      <p>The AI voice widget works as a receptionist on your website: it greets visitors, helps them find the right product, answers delivery and return questions and can book appointments. It works on Shopify, WooCommerce and Magento. Read more in <a href="/blog/shopify-ai-automatisering">Shopify AI: setup and automation</a>.</p>
      <h2 id="inbound">AI for inbound calls in your webshop</h2>
      <p>Many webshop customers still pick up the phone. With AI for inbound calls, the AI answers with the same Shopify knowledge as the widget, so the answer is the same whether the customer writes or calls. You choose which calls it takes — all, only outside opening hours, or only when the line is busy. See <a href="/ind-og-udgaaende-opkald">AI inbound and outbound calls</a>.</p>
      <div class="blog-cta"><strong>Answer every call — even at 11 pm</strong><p>Keep your number. We set up forwarding for you.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/ind-og-udgaaende-opkald">See AI phone answering</a></div></div>
      <h2 id="compare">Before vs. after</h2>
      <div class="blog-table"><table>
        <thead><tr><th>Situation</th><th>Without AI</th><th>With Aibooking.dk + Shopify</th></tr></thead>
        <tbody>
          <tr><td>"Where is my parcel?"</td><td>Email, answered tomorrow</td><td>Answered in seconds from Shopify</td></tr>
          <tr><td>Call at 9 pm</td><td>Voicemail</td><td>AI answers and solves it</td></tr>
          <tr><td>Peak season</td><td>Phone queue, extra staff</td><td>Unlimited simultaneous calls</td></tr>
          <tr><td>Stock question</td><td>Staff checks manually</td><td>Live stock lookup</td></tr>
          <tr><td>Insight</td><td>Scattered emails</td><td>Transcripts, summaries and trends</td></tr>
        </tbody>
      </table></div>
      <h2 id="setup">Get started in 4 steps</h2>
      <ol>
        <li><strong>Create a free account</strong> — no credit card.</li>
        <li><strong>Connect Shopify</strong> in the dashboard in a few clicks.</li>
        <li><strong>Add the widget and forward your number</strong> — or we do it with you.</li>
        <li><strong>Adjust tone and rules</strong> and decide when to hand off to your team.</li>
      </ol>
      <p>Read more: <a href="/blog/shopify-ai-automatisering">automating Shopify with AI</a> and <a href="/webshop">AI for webshops</a>.</p>
      <div class="blog-cta"><strong>One AI for your website and your phone</strong><p>Connected to Shopify. No commitment, no credit card.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Start free trial</a><a href="/kontakt">Contact us</a></div></div>
    `,
    content_da: `
      <p>Webshop-kunder stiller de samme spørgsmål, uanset om de skriver på hjemmesiden eller ringer: <em>Er den på lager? Hvor er min pakke? Kan jeg returnere den?</em> Med en <strong>Shopify integration med AI voice</strong> besvarer én AI dem alle — på hjemmesiden og i telefonen — ud fra live data fra din butik, døgnet rundt. Det er <strong>AI til webshop</strong>, der faktisk sælger.</p>
      <div class="blog-toc"><strong>I denne guide</strong><ol>
        <li><a href="#hvad-er">Hvad er Shopify + AI voice?</a></li>
        <li><a href="#hvorfor">Hvorfor din webshop har brug for AI</a></li>
        <li><a href="#saadan-virker-det">Sådan virker det</a></li>
        <li><a href="#funktioner">Alle funktioner — og hvorfor</a></li>
        <li><a href="#ai-reception-hjemmeside">AI reception på hjemmesiden</a></li>
        <li><a href="#indgaaende-opkald">AI til indgående opkald</a></li>
        <li><a href="#foer-efter">Før og efter</a></li>
        <li><a href="#kom-i-gang">Kom i gang i 4 trin</a></li>
      </ol></div>
      <h2 id="hvad-er">Hvad er en Shopify integration med AI voice?</h2>
      <p>Du forbinder din Shopify-butik med Aibooking.dk én gang i dashboardet. Derefter læser AI'en produkter, priser, varianter, lagerstatus og ordrer direkte fra Shopify. Den samme viden driver to kanaler:</p>
      <ul>
        <li><strong>AI voice widget på hjemmesiden</strong> — kunderne taler eller skriver med en AI-receptionist, mens de handler.</li>
        <li><strong>AI til indgående opkald</strong> — AI'en tager telefonen på naturligt dansk og løser henvendelsen fra start til slut.</li>
      </ul>
      <p>Resultatet er én samlet <strong>AI kundeservice til webshop</strong>: samme svar, samme tone og samme data, uanset hvor kunden henvender sig.</p>
      <div class="blog-stats">
        <div class="blog-stat"><b>24/7</b>svar på web og telefon</div>
        <div class="blog-stat"><b>~5 min</b>at forbinde Shopify</div>
        <div class="blog-stat"><b>0</b>kunder i telefonkø</div>
        <div class="blog-stat"><b>2</b>kanaler, én AI</div>
      </div>
      <h2 id="hvorfor">Hvorfor din webshop har brug for AI</h2>
      <p>De fleste spørgsmål kommer om aftenen, i weekenden og i højsæsonen — præcis når ingen har tid til at svare. Hvert ubesvaret spørgsmål er en potentiel forladt kurv eller en dårlig anmeldelse. <strong>AI til webshop</strong> fjerner ventetiden: kunden får det rigtige svar med det samme, og dit team bruger kun tid på de sager, der reelt kræver et menneske.</p>
      <ul>
        <li><strong>Flere salg:</strong> kunden får svar, mens produktsiden stadig er åben.</li>
        <li><strong>Færre mails og opkald:</strong> "hvor er min pakke?" besvares automatisk.</li>
        <li><strong>Skalerer uden ansættelser:</strong> Black Friday og julehandel kræver ikke ekstra personale.</li>
        <li><strong>Bedre anmeldelser:</strong> hurtige svar giver tilfredse kunder.</li>
      </ul>
      <div class="blog-callout"><strong>Pointen</strong>Hastighed sælger. En kunde, der får svar med det samme, køber langt oftere end en, der skal vente til i morgen.</div>
      <h2 id="saadan-virker-det">Sådan virker det</h2>
      <div class="blog-flow">
        <div><span>🛍️</span><b>Kunden spørger</b>på hjemmesiden eller i telefonen</div>
        <div><span>🤖</span><b>AI'en forstår</b>tale eller tekst, på dansk</div>
        <div><span>🔗</span><b>Opslag i Shopify</b>produkter, lager, ordrer</div>
        <div><span>✅</span><b>Løser opgaven</b>svarer, genbestiller eller booker</div>
        <div><span>📊</span><b>Du får referatet</b>transskription og trends</div>
      </div>
      <div class="blog-cta"><strong>Hør AI-stemmen på din egen butik</strong><p>Gratis 7-dages prøveperiode — sat op på et kort onboarding-møde.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Start gratis prøveperiode</a><a href="/demo">Book en demo</a></div></div>
      <h2 id="funktioner">Alle funktioner — og hvorfor de betyder noget</h2>
      <p>Her er alt, hvad Shopify-integrationen med AI voice og indgående opkald kan — og den konkrete grund til, at hver funktion gør en forskel for din webshop.</p>
      <div class="blog-grid">
        <div class="blog-card"><h3><span class="blog-icon">🛒</span>Live produktdata fra Shopify</h3><p>Priser, varianter, størrelser og materialer hentes direkte fra dit katalog.</p><p class="why"><b>Hvorfor:</b> svarene er altid opdaterede — ingen FAQ at vedligeholde.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📦</span>Lagerstatus i realtid</h3><p>AI'en tjekker lageret, før den lover noget.</p><p class="why"><b>Hvorfor:</b> ingen skuffede kunder og færre annulleringer.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🚚</span>Ordresporing</h3><p>"Hvor er min pakke?" besvares ud fra ordrens live status.</p><p class="why"><b>Hvorfor:</b> det hyppigste supportspørgsmål forsvinder fra din indbakke.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🔁</span>Genbestilling i samtalen</h3><p>Faste kunder bestiller en tidligere vare igen med stemmen eller i chatten.</p><p class="why"><b>Hvorfor:</b> mere genkøb med mindre friktion.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🎙️</span>AI voice widget</h3><p>Kunderne taler eller skriver med en AI-receptionist på din hjemmeside.</p><p class="why"><b>Hvorfor:</b> en personlig ekspedient-oplevelse døgnet rundt.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📞</span>AI til indgående opkald</h3><p>Tager telefonen på sekunder — du beholder dit nuværende nummer.</p><p class="why"><b>Hvorfor:</b> ingen kunde ender på telefonsvareren.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">♾️</span>Ubegrænset samtidige opkald</h3><p>Fem kunder kan ringe på én gang uden kø.</p><p class="why"><b>Hvorfor:</b> højsæson koster ikke ekstra personale.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🇩🇰</span>Naturlig dansk samtale</h3><p>Forstår almindelig dansk, dialekt og afbrydelser — og engelsk.</p><p class="why"><b>Hvorfor:</b> kunden taler bare, ingen "tryk 1".</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📅</span>Booking i kalenderen</h3><p>Booker rådgivning, prøvning eller afhentning i Google Calendar eller Outlook.</p><p class="why"><b>Hvorfor:</b> serviceaftaler uden frem-og-tilbage-mails.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🙋</span>Stiller om til et menneske</h3><p>Klager og særsager sendes videre med fuld kontekst.</p><p class="why"><b>Hvorfor:</b> AI'en tager mængden, dit team tager relationerne.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">💬</span>SMS-opdateringer</h3><p>Bekræftelser og leveringsbeskeder sendes automatisk på SMS.</p><p class="why"><b>Hvorfor:</b> kunderne er opdaterede uden at ringe.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📊</span>Transskription og dashboard</h3><p>Hver samtale optages, transskriberes og opsummeres — med trends.</p><p class="why"><b>Hvorfor:</b> se hvad kunderne spørger om, og forbedr butikken.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">📤</span>Udgående opkald</h3><p>AI'en kan også ringe ud ved manglende betaling eller uafhentede pakker.</p><p class="why"><b>Hvorfor:</b> hent omsætning hjem, der ellers var tabt.</p></div>
        <div class="blog-card"><h3><span class="blog-icon">🔒</span>GDPR og data i EU</h3><p>Data behandles i EU, krypteret og med databehandleraftale.</p><p class="why"><b>Hvorfor:</b> trygt for dine kunder og din virksomhed.</p></div>
      </div>
      <div class="blog-cta"><strong>Se alle funktionerne live</strong><p>Book en demo, så viser vi Shopify-integrationen med AI voice i en rigtig butik.</p><div class="blog-cta-actions"><a class="primary" href="/demo">Book en demo</a><a href="/funktioner">Se alle funktioner</a></div></div>
      <h2 id="ai-reception-hjemmeside">AI reception på hjemmesiden</h2>
      <p>AI voice widgeten fungerer som en <strong>AI reception på hjemmesiden</strong>: den byder besøgende velkommen, hjælper dem med at finde det rigtige produkt, svarer på spørgsmål om levering og returnering og kan booke tider. Den virker på Shopify, WooCommerce og Magento — men med Shopify-integrationen svarer den ud fra live data fra din butik.</p>
      <ul>
        <li><strong>Hjælper med købet:</strong> størrelser, lager og leveringstid, mens kunden handler.</li>
        <li><strong>Tale og tekst:</strong> kunden vælger selv at skrive eller tale.</li>
        <li><strong>Kvalificerer henvendelser:</strong> dit team får hele historikken, hvis sagen sendes videre.</li>
      </ul>
      <p>Læs mere i <a href="/blog/shopify-ai-automatisering">Shopify AI: installation og automatisering</a> og <a href="/blog/ai-til-hjemmeside">AI til hjemmeside</a>.</p>
      <h2 id="indgaaende-opkald">AI til indgående opkald i webshoppen</h2>
      <p>Mange webshop-kunder tager stadig telefonen — især ved dyrere køb og ved problemer med en ordre. Med <strong>AI til indgående opkald</strong> svarer AI'en med den samme Shopify-viden som widgeten, så svaret er det samme, uanset om kunden skriver eller ringer.</p>
      <ul>
        <li><strong>Du vælger, hvilke opkald den tager:</strong> alle, kun uden for åbningstid, eller kun når linjen er optaget.</li>
        <li><strong>Du beholder dit nummer:</strong> vi sætter viderestilling op.</li>
        <li><strong>Referat af hvert opkald:</strong> optagelse, transskription og opsummering i dashboardet.</li>
      </ul>
      <p>Se hvordan det virker på <a href="/ind-og-udgaaende-opkald">AI til ind- og udgående opkald</a>, og læs <a href="/blog/ai-indgaaende-opkald">guiden til AI til indgående opkald</a>.</p>
      <div class="blog-cta"><strong>Besvar hvert opkald — også kl. 23</strong><p>Behold dit nummer. Vi sætter viderestillingen op for dig.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/ind-og-udgaaende-opkald">Se AI-telefonpasning</a></div></div>
      <h2 id="foer-efter">Før og efter: uden og med AI</h2>
      <div class="blog-table"><table>
        <thead><tr><th>Situation</th><th>Uden AI</th><th>Med Aibooking.dk + Shopify</th></tr></thead>
        <tbody>
          <tr><td>"Hvor er min pakke?"</td><td>Mail, svar i morgen</td><td>Besvaret på sekunder fra Shopify</td></tr>
          <tr><td>Opkald kl. 21</td><td>Telefonsvarer</td><td>AI'en svarer og løser det</td></tr>
          <tr><td>Højsæson</td><td>Telefonkø og ekstra personale</td><td>Ubegrænset samtidige opkald</td></tr>
          <tr><td>Spørgsmål om lager</td><td>Medarbejder tjekker manuelt</td><td>Live opslag i lageret</td></tr>
          <tr><td>Indsigt</td><td>Spredte mails</td><td>Transskriptioner, referater og trends</td></tr>
        </tbody>
      </table></div>
      <h2 id="kom-i-gang">Kom i gang i 4 trin</h2>
      <ol>
        <li><strong>Opret en gratis konto</strong> — intet betalingskort.</li>
        <li><strong>Forbind Shopify</strong> i dashboardet med få klik.</li>
        <li><strong>Indsæt widgeten og viderestil dit nummer</strong> — eller få hjælp på onboarding-mødet.</li>
        <li><strong>Tilpas tone og regler</strong>, og bestem hvornår AI'en skal sende videre til dit team.</li>
      </ol>
      <p>Læs også: <a href="/blog/shopify-ai-automatisering">automatisering af Shopify med AI</a>, <a href="/blog/widget-til-webshop">widget til webshop</a> og <a href="/webshop">AI til webshops</a>.</p>
      <div class="blog-cta"><strong>Én AI til din hjemmeside og din telefon</strong><p>Forbundet til Shopify. Ingen binding, intet betalingskort.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Start gratis prøveperiode</a><a href="/kontakt">Kontakt os</a></div></div>
    `,
    meta_title_en: 'AI for Webshops: Phone & Chat Customer Service | AIBooking.dk',
    meta_title_da: 'AI til webshop: kundeservice i telefon og chat | AIBooking.dk',
    meta_description_en: 'AI for webshops: one AI answers customers on the phone and website about orders, stock and delivery from live Shopify data — even after hours.',
    meta_description_da: 'AI til webshop: én AI svarer kunderne i telefonen og på hjemmesiden om ordrer, lager og levering ud fra live Shopify-data — også uden for åbningstid.',
    keywords: ['ai til webshop', 'ai kundeservice webshop', 'shopify integration', 'ai voice webshop', 'kundehenvendelser uden for åbningstid'],
    image_url: '/blog/covers/shopify-integration-ai-voice-indgaaende-opkald.svg',
    published: true,
    audioDemo: 'bottom',
    published_at: '2026-09-23',
    updated_at: '2026-10-16',
    related: ['widget-til-webshop', 'shopify-ai-automatisering', 'ai-kundeservice'],
    faq: [
      {
        question_da: 'Virker det også med WooCommerce og Magento?',
        answer_da: 'Ja. Widgeten virker på Shopify, WooCommerce og Magento. Den dybe Shopify-integration læser produkter, lager og ordrer live.',
        question_en: 'Does it also work with WooCommerce and Magento?',
        answer_en: 'Yes. The widget works on Shopify, WooCommerce and Magento. The deep Shopify integration reads products, stock and orders live.',
      },
      {
        question_da: 'Kan AI’en svare på "hvor er min pakke?"',
        answer_da: 'Ja. Med Shopify-integrationen slår AI’en ordrens live status op og svarer i telefonen eller på hjemmesiden.',
        question_en: 'Can the AI answer "where is my parcel?"',
        answer_en: 'Yes. With the Shopify integration the AI looks up the order’s live status and answers on the phone or on the website.',
      },
      {
        question_da: 'Beholder jeg mit telefonnummer?',
        answer_da: 'Ja. Vi sætter viderestilling op, så AI’en tager præcis de opkald, du vælger: alle, kun uden for åbningstid eller kun ved optaget.',
        question_en: 'Do I keep my phone number?',
        answer_en: 'Yes. We set up forwarding, so the AI takes exactly the calls you choose: all, only after hours or only when busy.',
      },
      {
        question_da: 'Hvad sker der, hvis AI’en ikke kan svare?',
        answer_da: 'Den stiller om til dit team med kontekst eller tager en besked, så intet går tabt.',
        question_en: 'What if the AI can’t answer?',
        answer_en: 'It transfers the call or chat to your team with context, or takes a message, so nothing is lost.',
      },
      {
        question_da: 'Er det GDPR-sikkert?',
        answer_da: 'Data behandles i EU med krypteret opbevaring, aftalte sletteregler og databehandleraftale.',
        question_en: 'Is it GDPR compliant?',
        answer_en: 'Data is processed in the EU with encrypted storage, agreed deletion rules and a data processing agreement.',
      },
    ],
  },
  {
    id: 'widget-til-webshop',
    slug: 'widget-til-webshop',
    categorySlug: 'ai-webshop',
    title_en: 'Widget for Webshops: AI That Answers Product Questions and Sells After Hours',
    title_da: 'Widget til webshop: AI der svarer på produktspørgsmål og sælger uden for åbningstid',
    excerpt_en: 'Most webshop questions arrive in the evening, when nobody answers. How an AI widget answers product, size and delivery questions in the moment of purchase — on Shopify, WooCommerce and Magento.',
    excerpt_da: 'De fleste spørgsmål til en webshop kommer om aftenen, hvor ingen svarer. Sådan svarer en AI widget på spørgsmål om produkter, størrelser og levering i købsøjeblikket — på Shopify, WooCommerce og Magento.',
    content_da: `
      <p>En kunde, der står med en vare i kurven og et ubesvaret spørgsmål, køber sjældent. "Passer den til min model?", "Hvornår kan den være her?", "Kan jeg bytte, hvis størrelsen er forkert?" Hvis svaret kommer i morgen, er kunden væk. En <strong>widget til webshop</strong> med AI svarer i det øjeblik, spørgsmålet opstår.</p>
      <h2>De spørgsmål, der koster salg</h2>
      <div class="blog-table"><table><thead><tr><th>Spørgsmål</th><th>Hvad AI'en svarer ud fra</th></tr></thead><tbody>
        <tr><td>"Har I den i str. 42?"</td><td>Varianter og lager</td></tr>
        <tr><td>"Hvad er forskellen på de to modeller?"</td><td>Produktbeskrivelser og specifikationer</td></tr>
        <tr><td>"Hvornår kan jeg have den?"</td><td>Leveringstider og fragtregler</td></tr>
        <tr><td>"Kan jeg returnere den?"</td><td>Returpolitik</td></tr>
        <tr><td>"Hvor er min pakke?"</td><td>Ordrestatus (med Shopify-integration)</td></tr>
      </tbody></table></div>
      <h2>Uden for åbningstid</h2>
      <p>For mange webshops kommer en stor del af trafikken om aftenen og i weekenden — netop når kundeservice har lukket. Widgeten svarer døgnet rundt, så kunden ikke skal vente til næste hverdag. Det kræver ikke flere medarbejdere, og det skalerer i højsæsonen, hvor henvendelserne stiger mest.</p>
      <h2>Chat, stemme og ordreinformation — samspillet</h2>
      <p>Den samme AI kan svare i chatten, med stemme i widgeten og i telefonen, og med den samme viden om produkter og ordrer. Kunden, der starter i chatten og senere ringer, får det samme svar. Se hvordan telefon og chat spiller sammen i <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI til webshop: kundeservice i telefon og chat</a>.</p>
      <div class="blog-cta"><strong>Svar dine kunder, mens de handler</strong><p>Indsæt widgeten med én kodestump og prøv den gratis i 7 dage.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/webshop">Se AI til webshop</a></div></div>
      <h2>Platforme</h2>
      <ul>
        <li><strong>Shopify:</strong> dyb integration, hvor AI'en læser produkter, varianter, lager og ordrer live. Se <a href="/blog/shopify-ai-automatisering">Shopify AI: installation og automatisering</a>.</li>
        <li><strong>WooCommerce og Magento:</strong> widgeten virker via kodestumpen og svarer ud fra den information, du giver den, fx produktkategorier, fragt og returregler.</li>
        <li><strong>Andre platforme</strong> (Wix, Squarespace, egne løsninger): samme kodestump.</li>
      </ul>
      <h2>Hvad den ikke skal gøre</h2>
      <ul>
        <li>Love lagerstatus eller leveringstid, den ikke kan slå op.</li>
        <li>Behandle reklamationer og refusioner ud over jeres faste regler — dem skal den samle oplysninger om og sende videre.</li>
        <li>Presse kunden. En god widget hjælper; den sælger ikke aggressivt.</li>
      </ul>
      <h2>Mål effekten</h2>
      <p>Følg antal samtaler, andel løst uden medarbejder, de mest stillede spørgsmål og — hvis din platform kan — salg fra sessioner med en samtale. De hyppigste spørgsmål er også en tjekliste til at forbedre dine produktsider. Læs mere på <a href="/webshop">AI til webshop</a>.</p>
    `,
    content_en: `
      <p>A customer with an item in the basket and an unanswered question rarely buys. "Does it fit my model?", "When can it be here?", "Can I exchange it if the size is wrong?" If the answer comes tomorrow, the customer is gone. An AI <strong>widget for webshops</strong> answers the moment the question arises.</p>
      <h2>The questions that cost sales</h2>
      <div class="blog-table"><table><thead><tr><th>Question</th><th>What the AI answers from</th></tr></thead><tbody>
        <tr><td>"Do you have it in size 42?"</td><td>Variants and stock</td></tr>
        <tr><td>"What's the difference between the two models?"</td><td>Product descriptions and specifications</td></tr>
        <tr><td>"When can I have it?"</td><td>Delivery times and shipping rules</td></tr>
        <tr><td>"Can I return it?"</td><td>Returns policy</td></tr>
        <tr><td>"Where is my parcel?"</td><td>Order status (with Shopify integration)</td></tr>
      </tbody></table></div>
      <h2>After hours</h2>
      <p>For many webshops a large share of traffic comes in the evening and at weekends — exactly when customer service is closed. The widget answers around the clock, so the customer doesn't have to wait until the next working day. It needs no extra staff, and it scales in peak season, when enquiries rise most.</p>
      <h2>Chat, voice and order information — working together</h2>
      <p>The same AI can answer in the chat, by voice in the widget and on the phone, with the same knowledge of products and orders. A customer who starts in the chat and later calls gets the same answer. See how phone and chat work together in <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI for webshops: customer service on phone and chat</a>.</p>
      <div class="blog-cta"><strong>Answer your customers while they shop</strong><p>Add the widget with one code snippet and try it free for 7 days.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/webshop">See AI for webshops</a></div></div>
      <h2>Platforms</h2>
      <ul>
        <li><strong>Shopify:</strong> deep integration where the AI reads products, variants, stock and orders live. See <a href="/blog/shopify-ai-automatisering">Shopify AI: setup and automation</a>.</li>
        <li><strong>WooCommerce and Magento:</strong> the widget works via the snippet and answers from the information you give it, e.g. product categories, shipping and returns rules.</li>
        <li><strong>Other platforms</strong> (Wix, Squarespace, custom sites): the same snippet.</li>
      </ul>
      <h2>What it shouldn't do</h2>
      <ul>
        <li>Promise stock or delivery times it can't look up.</li>
        <li>Handle complaints and refunds beyond your fixed rules — it should collect the details and pass them on.</li>
        <li>Push the customer. A good widget helps; it doesn't hard-sell.</li>
      </ul>
      <h2>Measure the effect</h2>
      <p>Track the number of conversations, the share solved without staff, the most-asked questions and — if your platform allows — sales from sessions with a conversation. The most frequent questions are also a checklist for improving your product pages. Read more on <a href="/webshop">AI for webshops</a>.</p>
    `,
    meta_title_en: 'Widget for Webshops: AI for Product Questions | AIBooking.dk',
    meta_title_da: 'Widget til webshop: AI der svarer på produktspørgsmål | AIBooking.dk',
    meta_description_en: 'How an AI widget answers product, size, delivery and order questions in the moment of purchase and after hours — on Shopify, WooCommerce and Magento.',
    meta_description_da: 'En AI widget svarer på spørgsmål om produkter, størrelser, levering og ordrer, mens kunden handler — også efter lukketid. Shopify, WooCommerce og Magento.',
    keywords: ['widget til webshop', 'webshop widget', 'ai produktspørgsmål', 'ai kundeservice webshop', 'webshop chatbot'],
    image_url: '/blog/covers/widget-til-webshop.svg',
    published: true,
    published_at: '2026-09-23',
    updated_at: '2026-10-16',
    related: ['shopify-integration-ai-voice-indgaaende-opkald', 'shopify-ai-automatisering', 'ai-widget-hjemmeside-komplet-guide'],
    faq: [
      {
        question_da: 'Virker widgeten på WooCommerce?',
        answer_da: 'Ja. Widgeten virker på Shopify, WooCommerce, Magento og andre platforme. Den dybe integration med live lager og ordrer findes til Shopify.',
        question_en: 'Does the widget work on WooCommerce?',
        answer_en: 'Yes. The widget works on Shopify, WooCommerce, Magento and other platforms. The deep integration with live stock and orders is available for Shopify.',
      },
      {
        question_da: 'Kan AI’en svare uden for åbningstid?',
        answer_da: 'Ja. Widgeten svarer døgnet rundt og sender sager, der kræver en medarbejder, videre med de nødvendige oplysninger.',
        question_en: 'Can the AI answer after hours?',
        answer_en: 'Yes. The widget answers around the clock and passes on cases that need a member of staff with the necessary details.',
      },
    ],
  },
  {
    id: 'shopify-ai-automatisering',
    slug: 'shopify-ai-automatisering',
    categorySlug: 'ai-webshop',
    title_en: 'Shopify AI: Setting Up an AI Assistant and Automating Your Store',
    title_da: 'Shopify AI: Sådan sætter du en AI-assistent op og automatiserer din butik',
    excerpt_en: 'A practical guide for Shopify merchants: connecting the store, what the AI can read and do, order tracking and reorders, adding the widget to your theme, and what to automate first.',
    excerpt_da: 'En praktisk guide til Shopify-butikker: forbind butikken, hvad AI’en kan læse og gøre, ordresporing og genbestilling, widgeten i dit tema, og hvad du skal automatisere først.',
    content_da: `
      <p>Shopify gør det nemt at drive en webshop — men kundeservicen skalerer ikke af sig selv. Denne guide viser, hvordan du forbinder en AI-assistent til din Shopify-butik, hvad den kan gøre med dine data, og hvilke opgaver du bør automatisere først.</p>
      <h2>Trin 1: Forbind Shopify</h2>
      <p>Du forbinder butikken i Aibooking.dk-dashboardet med få klik. Derefter kan AI'en læse:</p>
      <ul>
        <li><strong>Produkter</strong> med beskrivelser, priser og varianter (størrelser, farver, materialer).</li>
        <li><strong>Lagerstatus</strong> i realtid.</li>
        <li><strong>Ordrer og deres status</strong>, så den kan svare på "hvor er min pakke?".</li>
      </ul>
      <p>Den læser data fra butikken, så du ikke skal vedligeholde en separat FAQ med priser og lager.</p>
      <h2>Trin 2: Indsæt widgeten i dit tema</h2>
      <p>Widgeten indsættes med en kort kodestump i Shopify-temaet (fx i theme.liquid) eller får hjælp til det på et onboarding-møde. Den indlæses asynkront, så den ikke forsinker butikken.</p>
      <h2>Trin 3: Beslut hvad AI'en må</h2>
      <div class="blog-table"><table><thead><tr><th>Opgave</th><th>Anbefaling</th></tr></thead><tbody>
        <tr><td>Produktspørgsmål og størrelser</td><td>Automatisér fra start</td></tr>
        <tr><td>Lagerstatus og leveringstid</td><td>Automatisér fra start</td></tr>
        <tr><td>Ordrestatus ("hvor er min pakke?")</td><td>Automatisér fra start</td></tr>
        <tr><td>Genbestilling af tidligere køb</td><td>Når de første tre kører</td></tr>
        <tr><td>Returnering efter faste regler</td><td>Forklar reglerne; send sagen videre</td></tr>
        <tr><td>Reklamationer og refusion</td><td>Altid til en medarbejder</td></tr>
      </tbody></table></div>
      <div class="blog-cta"><strong>Forbind din Shopify-butik</strong><p>Prøv AI-assistenten gratis i 7 dage — på hjemmesiden og i telefonen.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/demo">Se en demo</a></div></div>
      <h2>Trin 4: Tilføj telefonen</h2>
      <p>Mange Shopify-kunder ringer stadig — især ved dyrere køb og problemer med en ordre. Med AI til indgående opkald svarer den samme AI i telefonen ud fra de samme Shopify-data. AI'en kan også ringe ud, fx ved uafhentede pakker. Se <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI til webshop: kundeservice i telefon og chat</a>.</p>
      <h2>Trin 5: Brug samtalerne</h2>
      <p>Dashboardet viser, hvad kunderne spørger om. Spørger mange om den samme størrelsesguide, så forbedr produktsiden. Spørger mange om levering, så gør fragtinformationen tydeligere i checkout.</p>
      <h2>Hvad med Shopifys egne AI-funktioner?</h2>
      <p>Shopify har selv AI-værktøjer til fx produkttekster og butiksadministration. De er gode til at hjælpe dig som butiksejer. En AI-assistent som vores er bygget til den anden side: at tale med dine kunder — i chatten, med stemme og i telefonen — og løse deres henvendelser.</p>
      <p>Se også <a href="/blog/widget-til-webshop">widget til webshop</a> og <a href="/webshop">AI til webshop</a>.</p>
    `,
    content_en: `
      <p>Shopify makes it easy to run a webshop — but customer service doesn't scale by itself. This guide shows how to connect an AI assistant to your Shopify store, what it can do with your data, and which tasks to automate first.</p>
      <h2>Step 1: Connect Shopify</h2>
      <p>You connect the store in the Aibooking.dk dashboard in a few clicks. The AI can then read:</p>
      <ul>
        <li><strong>Products</strong> with descriptions, prices and variants (sizes, colours, materials).</li>
        <li><strong>Stock levels</strong> in real time.</li>
        <li><strong>Orders and their status</strong>, so it can answer "where is my parcel?".</li>
      </ul>
      <p>It reads data from the store, so you don't have to maintain a separate FAQ with prices and stock.</p>
      <h2>Step 2: Add the widget to your theme</h2>
      <p>The widget is added with a short snippet in the Shopify theme (e.g. in theme.liquid), or you get help with it in an onboarding meeting. It loads asynchronously, so it doesn't slow the store down.</p>
      <h2>Step 3: Decide what the AI may do</h2>
      <div class="blog-table"><table><thead><tr><th>Task</th><th>Recommendation</th></tr></thead><tbody>
        <tr><td>Product questions and sizes</td><td>Automate from the start</td></tr>
        <tr><td>Stock and delivery time</td><td>Automate from the start</td></tr>
        <tr><td>Order status ("where is my parcel?")</td><td>Automate from the start</td></tr>
        <tr><td>Reordering previous purchases</td><td>Once the first three are running</td></tr>
        <tr><td>Returns under fixed rules</td><td>Explain the rules; pass the case on</td></tr>
        <tr><td>Complaints and refunds</td><td>Always to a member of staff</td></tr>
      </tbody></table></div>
      <div class="blog-cta"><strong>Connect your Shopify store</strong><p>Try the AI assistant free for 7 days — on the website and on the phone.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/demo">See a demo</a></div></div>
      <h2>Step 4: Add the phone</h2>
      <p>Many Shopify customers still call — especially for more expensive purchases and problems with an order. With AI for inbound calls, the same AI answers the phone from the same Shopify data. The AI can also call out, e.g. about uncollected parcels. See <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI for webshops: customer service on phone and chat</a>.</p>
      <h2>Step 5: Use the conversations</h2>
      <p>The dashboard shows what customers ask about. If many ask about the same size guide, improve the product page. If many ask about delivery, make shipping information clearer at checkout.</p>
      <h2>What about Shopify's own AI features?</h2>
      <p>Shopify has its own AI tools for things like product descriptions and store admin. They are good at helping you as the merchant. An AI assistant like ours is built for the other side: talking to your customers — in chat, by voice and on the phone — and resolving their requests.</p>
      <p>See also <a href="/blog/widget-til-webshop">widget for webshops</a> and <a href="/webshop">AI for webshops</a>.</p>
    `,
    meta_title_en: 'Shopify AI: Set Up an AI Assistant for Your Store | AIBooking.dk',
    meta_title_da: 'Shopify AI: sæt en AI-assistent op i din butik | AIBooking.dk',
    meta_description_en: 'Connect an AI assistant to Shopify: what it reads, order tracking and reorders, adding the widget to your theme, and what to automate first.',
    meta_description_da: 'Forbind en AI-assistent til Shopify: hvad den læser, ordresporing og genbestilling, widgeten i dit tema, og hvad du skal automatisere først.',
    keywords: ['shopify ai', 'ai widget til shopify', 'shopify automatisering', 'shopify chatbot', 'shopify kundeservice ai'],
    image_url: '/blog/covers/shopify-ai-automatisering.svg',
    published: true,
    published_at: '2026-09-21',
    updated_at: '2026-10-16',
    related: ['shopify-integration-ai-voice-indgaaende-opkald', 'widget-til-webshop', 'ai-til-hjemmeside'],
    faq: [
      {
        question_da: 'Hvilke Shopify-data kan AI’en læse?',
        answer_da: 'Produkter med priser og varianter, lagerstatus i realtid og ordrer med status, så den kan svare på spørgsmål om levering.',
        question_en: 'Which Shopify data can the AI read?',
        answer_en: 'Products with prices and variants, real-time stock and orders with status, so it can answer delivery questions.',
      },
      {
        question_da: 'Skal jeg kunne kode for at installere widgeten i Shopify?',
        answer_da: 'Nej. Det er en kort kodestump i temaet, og du kan få hjælp til det på et onboarding-møde.',
        question_en: 'Do I need to code to install the widget in Shopify?',
        answer_en: 'No. It is a short snippet in the theme, and you can get help with it in an onboarding meeting.',
      },
    ],
  },
];
