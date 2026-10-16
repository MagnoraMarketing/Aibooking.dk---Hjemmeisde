import type { BlogPost } from '../blog';

// AI voice agents and AI telephony: the technology (realtime voice, Danish
// speech), inbound vs. outbound, reminders, and data protection / AI Act.

const UPDATED = '2026-10-16';

const CTA_TRIAL_DA = `<div class="blog-cta"><strong>Hør en dansk AI voice agent på dine egne opkald</strong><p>Opret en gratis konto, viderestil dit nummer, og test i 7 dage. Intet betalingskort.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Prøv gratis i 7 dage</a><a href="/ind-og-udgaaende-opkald">Se AI-telefonpasning</a></div></div>`;
const CTA_TRIAL_EN = `<div class="blog-cta"><strong>Hear a Danish AI voice agent on your own calls</strong><p>Create a free account, forward your number and test for 7 days. No credit card.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/ind-og-udgaaende-opkald">See AI phone answering</a></div></div>`;

const SRC_AI_ACT = { title: 'Forordning (EU) 2024/1689 om kunstig intelligens (AI-forordningen)', publisher: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj', date: '2024-07-12' };
const SRC_STIVERS = { title: 'Universals and cultural variation in turn-taking in conversation (Stivers m.fl.)', publisher: 'PNAS', url: 'https://doi.org/10.1073/pnas.0903616106', date: '2009-06-30' };
const SRC_CORAL = { title: 'CoRal – dansk taleteknologi', publisher: 'Alexandra Instituttet', url: 'https://alexandra.dk/coral/', date: '2026' };

export const voicePosts: BlogPost[] = [
  {
    id: 'nyeste-ai-teknologi-2026',
    slug: 'nyeste-ai-teknologi-2026',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'The Latest AI Technology in 2026: AI Voice Agents, Realtime AI and the Future AI Receptionist',
    title_da: 'Den nyeste AI-teknologi i 2026: AI voice agents, realtids-AI og fremtidens AI-receptionist',
    excerpt_en: 'Speech-to-speech models, sub-second turn-taking, AI agents that act in your calendar and CRM — and new EU rules. What actually launched, what is still beta, and what it means for a Danish business owner.',
    excerpt_da: 'Speech-to-speech-modeller, svartider under et sekund, AI-agenter der handler i kalender og CRM — og nye EU-regler. Hvad der faktisk er lanceret, hvad der stadig er beta, og hvad det betyder for en dansk virksomhedsejer.',
    content_da: `
      <p>For tre år siden var en AI, der kunne tage telefonen på flydende dansk, en demo. I 2026 er det et produkt, man kan købe for under tusind kroner om måneden. Det skyldes ikke ét gennembrud, men at flere teknologier er modnet på samme tid: modeller, der lytter og taler i realtid, bedre talegenkendelse på små sprog, AI-agenter, der kan udføre handlinger, og åbne standarder for at forbinde dem med de systemer, virksomheder allerede bruger.</p>
      <p>Denne artikel forklarer udviklingen uden buzzwords. Vi skelner mellem tre ting: <strong>lanceret</strong> (generelt tilgængeligt og i produktion), <strong>beta/preview</strong> (tilgængeligt, men kan ændre sig) og <strong>forventninger</strong> (forskning eller annonceret, men ikke klar). Kilder og datoer står nederst. Leverandørerne nævnt her er eksempler på markedet — ikke en liste over, hvad Aibooking.dk er bygget på.</p>
      <div class="blog-toc"><strong>I denne artikel</strong><ol><li><a href="#realtid">Realtidsmodeller til tale</a></li><li><a href="#latenstid">Latenstid, afbrydelser og naturlig dialog</a></li><li><a href="#dansk">Dansk talegenkendelse og talesyntese</a></li><li><a href="#agenter">AI-agenter, der udfører handlinger</a></li><li><a href="#integrationer">Kalender, CRM og webshop</a></li><li><a href="#overtagelse">Menneskelig overtagelse og fejlhåndtering</a></li><li><a href="#regler">Datasikkerhed og AI-forordningen</a></li><li><a href="#praksis">Hvad betyder det for din virksomhed?</a></li></ol></div>

      <h2 id="realtid">1. Realtidsmodeller til tale: fra kæde til ét skridt</h2>
      <p>En AI-telefonassistent har traditionelt været en <strong>kæde</strong> af tre systemer: talegenkendelse (tale → tekst), en sprogmodel (tekst → svar) og talesyntese (svar → tale). Hvert led tilføjer ventetid, og tonefald forsvinder undervejs, fordi sprogmodellen kun ser teksten.</p>
      <p><strong>Speech-to-speech</strong>-modeller tager lyd ind og giver lyd ud i én model. De kan høre, om kunden lyder stresset, og svare med et passende tonefald, og de skal ikke vente på, at et led er færdigt, før det næste starter.</p>
      <ul>
        <li><strong>Lanceret:</strong> OpenAI gjorde sin Realtime API generelt tilgængelig i august 2025 sammen med speech-to-speech-modellen gpt-realtime, og API'et kan tage imod telefonopkald direkte via SIP — den standard, telefoni bruger. Google tilbyder realtidssamtaler gennem Gemini Live API; Vertex AI's release notes angiver Gemini 2.5 Flash med native audio som generelt tilgængelig fra december 2025, og Gemini API's release notes angiver Gemini 3.8 Live som generelt tilgængelig fra september 2026.</li>
        <li><strong>Beta/preview:</strong> Flere nyere realtidsmodeller udgives først som "preview", hvor navne, priser og opførsel kan ændre sig. Det er værd at vide, hvis en udbyder bygger på en preview-model.</li>
        <li><strong>Forventning:</strong> "Fuld duplex" — modeller, der lytter og taler på samme tid som mennesker gør, og kan sige "mm" mens du taler. Forskningsmodeller som Kyutai's Moshi (2024) har vist princippet, men det er endnu ikke standard i kommercielle telefonløsninger.</li>
      </ul>
      <p>Kæden er ikke død. Mange løsninger bruger stadig separat talegenkendelse og talesyntese, fordi det giver mere kontrol over stemmen og over, hvad AI'en siger. Det vigtige for dig er ikke arkitekturen, men resultatet: lyder samtalen naturlig, og gør AI'en det rigtige?</p>

      <h2 id="latenstid">2. Latenstid, afbrydelser og naturlig dialog</h2>
      <p>Mennesker er ekstremt følsomme over for pauser i en samtale. Et kendt studie af ti sprog fandt, at den typiske pause mellem to talere ligger omkring 200 millisekunder — og at danskere havde de længste pauser i studiet, knap et halvt sekund i gennemsnit. Det er gode nyheder for danske AI-stemmer: vi er vant til lidt mere luft.</p>
      <p>Det svære er ikke kun at svare hurtigt, men at vide, <strong>hvornår</strong> kunden er færdig. Ældre systemer ventede på stilhed, hvilket enten gav lange pauser eller afbrydelser midt i en tænkepause. Nye modeller til "turn-taking" kombinerer lyd og mening for at vurdere, om sætningen er slut. Deepgram lancerede i oktober 2025 Flux, en talegenkendelsesmodel med indbygget detektion af taleskift, og realtidsmodellerne fra de store udbydere har tilsvarende funktioner.</p>
      <ul>
        <li><strong>Afbrydelser ("barge-in"):</strong> En god AI-stemme stopper, når kunden afbryder, og lytter. Spørg altid en udbyder, om du kan afbryde den.</li>
        <li><strong>Fyldord og tænkepauser:</strong> "Øh, lad mig lige se…" skal ikke tolkes som en færdig sætning.</li>
        <li><strong>Telefonlyd:</strong> Telefonnettet sender lyd i lavere kvalitet end en app. Test altid via en rigtig telefonlinje, ikke kun i browseren.</li>
      </ul>

      <h2 id="dansk">3. Dansk talegenkendelse og talesyntese</h2>
      <p>Dansk er svært for maskiner: mange vokaler, stød, sammentrækninger og et lille sprogområde, der giver mindre træningsdata. Det har ændret sig på to måder.</p>
      <p>For det første er de store flersprogede modeller blevet markant bedre til dansk, fordi de trænes på langt mere lyd. For det andet har Danmark fået åbne ressourcer: <strong>CoRal-projektet</strong>, ledet af Alexandra Instituttet og støttet af Innovationsfonden, har indsamlet hundredvis af timers dansk tale fra over tusind personer i alle aldre og fra hele landet — både oplæsning og samtaler — og udgivet en dansk talegenkendelsesmodel og et datasæt til talesyntese. Det gør det muligt at teste, hvor godt en model forstår dialekter, ældre og unge talere.</p>
      <p>På talesyntese-siden findes der i dag naturligt klingende danske stemmer fra flere leverandører. Forskellen mellem dem ligger især i udtale af navne, tal, adresser og engelske låneord. Læs mere i <a href="/blog/ai-telefonassistent-dansk-sprog">dansk talegenkendelse og AI-stemmer</a>.</p>

      ${CTA_TRIAL_DA}

      <h2 id="agenter">4. AI-agenter, der udfører handlinger</h2>
      <p>Den største forskel på en chatbot og en <strong>AI-agent</strong> er, at agenten kan gøre noget: slå en ledig tid op, oprette en booking, sende en SMS eller hente en ordrestatus. Det sker via "function calling" eller "tools", hvor sprogmodellen beslutter at kalde en funktion, som udbyderen har defineret, og får resultatet tilbage.</p>
      <ul>
        <li><strong>Lanceret:</strong> Function calling er standard i alle de store realtidsmodeller. Google beskriver for Gemini 3.8 Live, at funktionskald kan køre asynkront, så samtalen kan fortsætte, mens systemet arbejder.</li>
        <li><strong>Lanceret som åben standard:</strong> Model Context Protocol (MCP) er en åben protokol til at forbinde AI med eksterne værktøjer og data. Den blev i december 2025 overdraget til Agentic AI Foundation under Linux Foundation, og understøttes af de største AI-leverandører.</li>
        <li><strong>Forventning:</strong> Agenter, der selvstændigt løser længere opgaver på tværs af flere systemer. Det virker i kontrollerede setups, men i kundekontakt bør handlingerne være få, veldefinerede og logget.</li>
      </ul>
      <p>For en virksomhed betyder det: spørg ikke "har I AI?", men "<em>hvilke handlinger</em> må AI'en udføre, og hvordan kan jeg se, hvad den har gjort?"</p>

      <h2 id="integrationer">5. Kalender-, CRM- og webshopintegrationer</h2>
      <p>En AI-receptionist er kun så god som de systemer, den er forbundet til. I praksis er tre integrationer afgørende:</p>
      <ul>
        <li><strong>Kalender</strong> (Google Kalender, Outlook, branchesystemer): så AI'en kun booker i reelt ledige tider. Se <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatisk booking med AI</a>.</li>
        <li><strong>CRM</strong>: så samtalen gemmes på kunden, og næste opkald kan starte med kontekst.</li>
        <li><strong>Webshop</strong> (fx Shopify): så AI'en kan svare om lager, levering og ordrestatus ud fra live data. Se <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI til webshop med Shopify-integration</a>.</li>
      </ul>
      <p>Den tekniske tendens er, at integrationer bygges på åbne standarder (API'er, webhooks og MCP) frem for lukkede plugins. Det gør det lettere at skifte udbyder og at forbinde branchesystemer.</p>

      <h2 id="overtagelse">6. Menneskelig overtagelse og fejlhåndtering</h2>
      <p>Selv de bedste modeller tager fejl: de kan mishøre et navn, misforstå en dobbelt negation eller "hallucinere" et svar, de ikke har dækning for. Modenheden i 2026 handler derfor lige så meget om sikkerhedsnet som om intelligens:</p>
      <ul>
        <li><strong>Gentag og bekræft:</strong> navne, datoer og adresser læses op igen, før de gemmes.</li>
        <li><strong>Afgrænset viden:</strong> AI'en svarer kun ud fra den virksomheds information, den har fået, og siger "det ved jeg ikke" i stedet for at gætte.</li>
        <li><strong>Overdragelse med kontekst:</strong> klager, akutte sager og ønsker om et menneske sendes videre med et referat. Se <a href="/blog/ai-receptionist-viderestilling-til-menneske">hvornår der skal viderestilles til et menneske</a>.</li>
        <li><strong>Optagelse og transskription:</strong> så fejl kan findes og rettes.</li>
      </ul>

      <h2 id="regler">7. Datasikkerhed og ansvarlig brug: AI-forordningen er trådt i kraft</h2>
      <p>2026 er året, hvor EU's AI-forordning for alvor rammer kundeservice. Fra <strong>2. august 2026</strong> gælder gennemsigtighedskravene i artikel 50: personer skal informeres om, at de interagerer med et AI-system, medmindre det er åbenlyst. For en AI-receptionist betyder det i praksis, at velkomsten skal sige, at det er en digital assistent. EU vedtog i sommeren 2026 en "digital omnibus", der udskyder reglerne for højrisiko-AI, men ifølge juridiske analyser blev gennemsigtighedskravene for chatbots ikke udskudt.</p>
      <p>Samtidig gælder GDPR som altid: et opkald indeholder personoplysninger, og optagelse af telefonsamtaler kræver et lovligt grundlag. Datatilsynet har udgivet en vejledning om optagelse af telefonsamtaler. Kræv data i EU, databehandleraftale, kryptering og sletteregler. Se vores guide til <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR og AI-forordningen for AI-receptionister</a>.</p>
      <p>Denne artikel er ikke juridisk rådgivning — tjek altid den aktuelle lovtekst eller tal med en rådgiver om din konkrete opsætning.</p>

      <h2 id="praksis">8. Hvad betyder det for din virksomhed?</h2>
      <p>Teknologien er klar til de opgaver, de fleste små og mellemstore virksomheder har brug for: tage telefonen, svare på gengangerspørgsmål, booke i kalenderen og sende påmindelser. Den er ikke klar til at erstatte skøn, empati og ansvar. Den praktiske tjekliste for 2026:</p>
      <ol>
        <li><strong>Lyt før du køber.</strong> Ring til en demolinje og <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">hør efter de seks kvalitetstegn</a>.</li>
        <li><strong>Afbryd den.</strong> Stopper den og lytter?</li>
        <li><strong>Test med dine kunders dansk</strong> — navne, adresser, dialekter.</li>
        <li><strong>Spørg hvilke handlinger</strong> den kan udføre, og hvor de logges.</li>
        <li><strong>Kræv AI-oplysning, data i EU og databehandleraftale.</strong></li>
        <li><strong>Start smalt</strong> — fx kun opkald uden for åbningstid — og udvid, når du har læst de første ugers transskriptioner.</li>
      </ol>
      <p>Vil du vide mere om grundbegreberne, så start med <a href="/blog/hvad-er-en-ai-voice-agent">hvad er en AI voice agent?</a> og <a href="/blog/ai-reception-virtuel-receptionist">hvad er en AI-receptionist?</a></p>
    `,
    content_en: `
      <p>Three years ago an AI that could answer the phone in fluent Danish was a demo. In 2026 it is a product you can buy for less than DKK 1,000 a month. That is not down to a single breakthrough, but to several technologies maturing at the same time: models that listen and speak in real time, better speech recognition for small languages, AI agents that can take actions, and open standards for connecting them to the systems businesses already use.</p>
      <p>This article explains the developments without buzzwords. We distinguish three things: <strong>launched</strong> (generally available and in production), <strong>beta/preview</strong> (available, but may change) and <strong>expectations</strong> (research or announced, but not ready). Sources and dates are listed at the bottom. The vendors named here are examples from the market — not a list of what Aibooking.dk is built on.</p>
      <div class="blog-toc"><strong>In this article</strong><ol><li><a href="#realtid">Realtime speech models</a></li><li><a href="#latenstid">Latency, interruptions and natural dialogue</a></li><li><a href="#dansk">Danish speech recognition and synthesis</a></li><li><a href="#agenter">AI agents that take actions</a></li><li><a href="#integrationer">Calendar, CRM and webshop</a></li><li><a href="#overtagelse">Human handover and error handling</a></li><li><a href="#regler">Data security and the AI Act</a></li><li><a href="#praksis">What does it mean for your business?</a></li></ol></div>

      <h2 id="realtid">1. Realtime speech models: from a chain to a single step</h2>
      <p>An AI phone assistant has traditionally been a <strong>chain</strong> of three systems: speech recognition (speech → text), a language model (text → reply) and speech synthesis (reply → speech). Each link adds delay, and tone of voice is lost along the way because the language model only sees text.</p>
      <p><strong>Speech-to-speech</strong> models take audio in and give audio out in a single model. They can hear whether the caller sounds stressed and reply in a suitable tone, and they don't have to wait for one link to finish before the next starts.</p>
      <ul>
        <li><strong>Launched:</strong> OpenAI made its Realtime API generally available in August 2025 together with the speech-to-speech model gpt-realtime, and the API can accept phone calls directly over SIP — the standard telephony uses. Google offers realtime conversations through the Gemini Live API; Vertex AI release notes list Gemini 2.5 Flash with native audio as generally available from December 2025, and the Gemini API release notes list Gemini 3.8 Live as generally available from September 2026.</li>
        <li><strong>Beta/preview:</strong> Several newer realtime models are released first as "preview", where names, prices and behaviour can change. Worth knowing if a provider builds on a preview model.</li>
        <li><strong>Expectation:</strong> "Full duplex" — models that listen and talk at the same time as humans do, and can say "mm" while you speak. Research models such as Kyutai's Moshi (2024) have shown the principle, but it is not yet standard in commercial phone solutions.</li>
      </ul>
      <p>The chain is not dead. Many solutions still use separate speech recognition and synthesis because it gives more control over the voice and over what the AI says. What matters to you is not the architecture but the result: does the conversation sound natural, and does the AI do the right thing?</p>

      <h2 id="latenstid">2. Latency, interruptions and natural dialogue</h2>
      <p>People are extremely sensitive to pauses in a conversation. A well-known study of ten languages found that the typical gap between two speakers is around 200 milliseconds — and that Danes had the longest gaps in the study, almost half a second on average. That is good news for Danish AI voices: we are used to a little more air.</p>
      <p>The hard part is not only answering quickly but knowing <strong>when</strong> the caller has finished. Older systems waited for silence, which gave either long pauses or interruptions in the middle of a thinking pause. New turn-taking models combine sound and meaning to judge whether the sentence is over. Deepgram launched Flux in October 2025, a speech recognition model with built-in turn detection, and the realtime models from the large providers have similar features.</p>
      <ul>
        <li><strong>Interruptions ("barge-in"):</strong> A good AI voice stops when the caller interrupts, and listens. Always ask a provider whether you can interrupt it.</li>
        <li><strong>Filler words and thinking pauses:</strong> "Um, let me just check…" must not be read as a finished sentence.</li>
        <li><strong>Phone audio:</strong> The phone network carries lower-quality audio than an app. Always test over a real phone line, not just in the browser.</li>
      </ul>

      <h2 id="dansk">3. Danish speech recognition and synthesis</h2>
      <p>Danish is hard for machines: many vowels, the glottal "stød", contractions and a small language area with less training data. That has changed in two ways.</p>
      <p>First, the large multilingual models have become markedly better at Danish because they are trained on far more audio. Second, Denmark now has open resources: the <strong>CoRal project</strong>, led by the Alexandra Institute and funded by Innovation Fund Denmark, has collected hundreds of hours of Danish speech from more than a thousand people of all ages across the country — both read-aloud speech and conversations — and released a Danish speech recognition model and a dataset for speech synthesis. That makes it possible to test how well a model understands dialects, older and younger speakers.</p>
      <p>On the synthesis side there are now natural-sounding Danish voices from several vendors. The differences between them lie mostly in pronouncing names, numbers, addresses and English loanwords. Read more in <a href="/blog/ai-telefonassistent-dansk-sprog">Danish speech recognition and AI voices</a>.</p>

      ${CTA_TRIAL_EN}

      <h2 id="agenter">4. AI agents that take actions</h2>
      <p>The biggest difference between a chatbot and an <strong>AI agent</strong> is that the agent can do something: look up a free slot, create a booking, send a text or fetch an order status. This happens through "function calling" or "tools", where the language model decides to call a function the provider has defined and gets the result back.</p>
      <ul>
        <li><strong>Launched:</strong> Function calling is standard in all the large realtime models. For Gemini 3.8 Live, Google describes function calls that can run asynchronously, so the conversation can continue while the system works.</li>
        <li><strong>Launched as an open standard:</strong> The Model Context Protocol (MCP) is an open protocol for connecting AI to external tools and data. In December 2025 it was handed over to the Agentic AI Foundation under the Linux Foundation, and it is supported by the largest AI vendors.</li>
        <li><strong>Expectation:</strong> Agents that independently solve longer tasks across several systems. This works in controlled setups, but in customer contact the actions should be few, well defined and logged.</li>
      </ul>
      <p>For a business this means: don't ask "do you have AI?", but "<em>which actions</em> may the AI take, and how can I see what it has done?"</p>

      <h2 id="integrationer">5. Calendar, CRM and webshop integrations</h2>
      <p>An AI receptionist is only as good as the systems it is connected to. In practice three integrations are decisive:</p>
      <ul>
        <li><strong>Calendar</strong> (Google Calendar, Outlook, industry systems): so the AI only books genuinely free slots. See <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatic booking with AI</a>.</li>
        <li><strong>CRM</strong>: so the conversation is saved on the customer and the next call can start with context.</li>
        <li><strong>Webshop</strong> (e.g. Shopify): so the AI can answer about stock, delivery and order status from live data. See <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI for webshops with Shopify integration</a>.</li>
      </ul>
      <p>The technical trend is that integrations are built on open standards (APIs, webhooks and MCP) rather than closed plugins. That makes it easier to switch provider and to connect industry systems.</p>

      <h2 id="overtagelse">6. Human handover and error handling</h2>
      <p>Even the best models make mistakes: they can mishear a name, misread a double negative or "hallucinate" an answer they have no basis for. Maturity in 2026 is therefore as much about safety nets as about intelligence:</p>
      <ul>
        <li><strong>Repeat and confirm:</strong> names, dates and addresses are read back before they are saved.</li>
        <li><strong>Bounded knowledge:</strong> the AI only answers from the business information it has been given, and says "I don't know" instead of guessing.</li>
        <li><strong>Handover with context:</strong> complaints, urgent cases and requests for a person are passed on with a summary. See <a href="/blog/ai-receptionist-viderestilling-til-menneske">when to transfer to a human</a>.</li>
        <li><strong>Recording and transcription:</strong> so mistakes can be found and fixed.</li>
      </ul>

      <h2 id="regler">7. Data security and responsible use: the AI Act now applies</h2>
      <p>2026 is the year the EU AI Act really reaches customer service. From <strong>2 August 2026</strong> the transparency requirements in Article 50 apply: people must be informed that they are interacting with an AI system unless it is obvious. For an AI receptionist this means in practice that the greeting must say it is a digital assistant. In summer 2026 the EU adopted a "digital omnibus" that postpones the rules for high-risk AI, but according to legal analyses the transparency requirements for chatbots were not postponed.</p>
      <p>GDPR applies as always: a call contains personal data, and recording phone calls requires a lawful basis. The Danish Data Protection Agency (Datatilsynet) has published guidance on recording phone calls. Require data in the EU, a data processing agreement, encryption and deletion rules. See our guide to <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR and the AI Act for AI receptionists</a>.</p>
      <p>This article is not legal advice — always check the current legal text or talk to an adviser about your specific setup.</p>

      <h2 id="praksis">8. What does it mean for your business?</h2>
      <p>The technology is ready for the tasks most small and medium-sized businesses need: answering the phone, handling recurring questions, booking in the calendar and sending reminders. It is not ready to replace judgement, empathy and responsibility. The practical checklist for 2026:</p>
      <ol>
        <li><strong>Listen before you buy.</strong> Call a demo line and <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">listen for the six quality signs</a>.</li>
        <li><strong>Interrupt it.</strong> Does it stop and listen?</li>
        <li><strong>Test with your customers' Danish</strong> — names, addresses, dialects.</li>
        <li><strong>Ask which actions</strong> it can take, and where they are logged.</li>
        <li><strong>Require AI disclosure, data in the EU and a data processing agreement.</strong></li>
        <li><strong>Start narrow</strong> — e.g. only after-hours calls — and expand once you have read the first weeks' transcripts.</li>
      </ol>
      <p>For the basics, start with <a href="/blog/hvad-er-en-ai-voice-agent">what is an AI voice agent?</a> and <a href="/blog/ai-reception-virtuel-receptionist">what is an AI receptionist?</a></p>
    `,
    meta_title_en: 'Latest AI Technology 2026: Voice Agents & Realtime AI | AIBooking.dk',
    meta_title_da: 'Nyeste AI-teknologi 2026: voice agents og realtids-AI | AIBooking.dk',
    meta_description_en: 'Realtime speech models, turn-taking, Danish speech tech, AI agents, integrations and the AI Act: what launched, what is beta, and what it means for SMEs.',
    meta_description_da: 'Realtids-talemodeller, taleskift, dansk taleteknologi, AI-agenter, integrationer og AI-forordningen: hvad er lanceret, hvad er beta, og hvad betyder det?',
    keywords: ['nyeste ai-teknologi 2026', 'ai voice agents', 'realtids-ai', 'speech-to-speech', 'fremtidens ai-receptionist', 'ai-forordningen'],
    image_url: '/blog/covers/nyeste-ai-teknologi-2026.svg',
    published: true,
    published_at: '2026-10-16',
    related: ['hvad-er-en-ai-voice-agent', 'ai-telefonassistent-dansk-sprog', 'ai-widget-gdpr-danske-virksomheder'],
    faq: [
      {
        question_da: 'Hvad er en speech-to-speech-model?',
        answer_da: 'En AI-model, der tager tale ind og giver tale ud i ét skridt, i stedet for at omsætte til tekst og tilbage. Det giver kortere svartid og bevarer tonefald.',
        question_en: 'What is a speech-to-speech model?',
        answer_en: 'An AI model that takes speech in and gives speech out in a single step, instead of converting to text and back. That shortens response time and preserves tone of voice.',
      },
      {
        question_da: 'Skal en AI-telefonassistent sige, at den er en AI i 2026?',
        answer_da: 'Ja. AI-forordningens artikel 50 gælder fra 2. august 2026 og kræver, at personer informeres om, at de interagerer med et AI-system, medmindre det er åbenlyst.',
        question_en: 'Must an AI phone assistant say it is an AI in 2026?',
        answer_en: 'Yes. Article 50 of the AI Act applies from 2 August 2026 and requires that people are informed they are interacting with an AI system unless it is obvious.',
      },
      {
        question_da: 'Forstår AI dansk godt nok til telefonopkald?',
        answer_da: 'Moderne modeller forstår dansk tale, dialekter og afbrydelser godt nok til booking og kundeservice. Test altid via en rigtig telefonlinje med dine egne kunders typiske formuleringer.',
        question_en: 'Does AI understand Danish well enough for phone calls?',
        answer_en: 'Modern models understand Danish speech, dialects and interruptions well enough for booking and customer service. Always test over a real phone line with your own customers’ typical phrasing.',
      },
      {
        question_da: 'Hvad er MCP?',
        answer_da: 'Model Context Protocol er en åben standard for at forbinde AI med eksterne værktøjer og data, fx kalendere og CRM-systemer. Den forvaltes af Agentic AI Foundation under Linux Foundation.',
        question_en: 'What is MCP?',
        answer_en: 'The Model Context Protocol is an open standard for connecting AI to external tools and data such as calendars and CRM systems. It is governed by the Agentic AI Foundation under the Linux Foundation.',
      },
    ],
    sources: [
      { title: 'Introducing gpt-realtime and Realtime API updates for production voice agents', publisher: 'OpenAI', url: 'https://openai.com/index/introducing-gpt-realtime/', date: '2025-08-28' },
      { title: 'Realtime API with SIP', publisher: 'OpenAI developer docs', url: 'https://developers.openai.com/api/docs/guides/realtime-sip', date: '2026-10' },
      { title: 'Gemini API release notes', publisher: 'Google AI for Developers', url: 'https://ai.google.dev/gemini-api/docs/changelog', date: '2026-09-15' },
      { title: 'Vertex AI release notes (Gemini 2.5 Flash native audio)', publisher: 'Google Cloud', url: 'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes', date: '2025-12-12' },
      { title: 'Deepgram Launches Flux, Conversational Speech Recognition Model', publisher: 'Business Wire', url: 'https://www.businesswire.com/news/home/20251002758871/en/Deepgram-Launches-Flux---The-Worlds-First-Conversational-Speech-Recognition-Model', date: '2025-10-02' },
      { title: 'Donating the Model Context Protocol and establishing the Agentic AI Foundation', publisher: 'Anthropic', url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation', date: '2025-12-09' },
      SRC_STIVERS,
      SRC_CORAL,
      SRC_AI_ACT,
      { title: 'Yes, August 2 Still Matters: The EU Approved a High-Risk AI Delay, but Most Transparency Obligations Remain', publisher: 'Jones Walker LLP', url: 'https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html', date: '2026' },
      { title: 'Optagelse af telefonsamtaler (vejledning)', publisher: 'Datatilsynet', url: 'https://www.datatilsynet.dk/Media/638477264404280979/Optagelse%20af%20telefonsamtaler.pdf', date: '2024-04' },
    ],
  },
  {
    id: 'hvad-er-en-ai-voice-agent',
    slug: 'hvad-er-en-ai-voice-agent',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'What Is an AI Voice Agent? Realtime AI in Phone Calls Explained',
    title_da: 'Hvad er en AI voice agent? Sådan fungerer realtids-AI i telefonen',
    excerpt_en: 'An AI voice agent is an AI that listens, thinks, speaks and acts during a live call. The building blocks, what happens in the half-second before it answers, and how it differs from a chatbot and an IVR.',
    excerpt_da: 'En AI voice agent er en AI, der lytter, tænker, taler og handler under et live opkald. Byggestenene, hvad der sker i det halve sekund før den svarer, og hvordan den adskiller sig fra en chatbot og en telefonmenu.',
    content_da: `
      <p>En <strong>AI voice agent</strong> er en AI, der fører en talt samtale i realtid — typisk i telefonen eller i en talewidget på en hjemmeside — og som kan udføre handlinger undervejs, fx booke en tid eller slå en ordre op. En AI-receptionist er en AI voice agent, der er sat op til at tage imod opkald for en virksomhed.</p>
      <h2>Voice agent, chatbot og telefonmenu</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Telefonmenu (IVR)</th><th>Chatbot</th><th>AI voice agent</th></tr></thead><tbody>
        <tr><td>Input</td><td>Tastetryk eller enkeltord</td><td>Skrevet tekst</td><td>Fri tale</td></tr>
        <tr><td>Forstår kundens egne ord</td><td>Nej</td><td>Ja</td><td>Ja</td></tr>
        <tr><td>Tidspres</td><td>Lavt</td><td>Lavt — kunden venter gerne et par sekunder</td><td>Højt — pauser over et sekund føles lange</td></tr>
        <tr><td>Kan udføre handlinger</td><td>Begrænset</td><td>Ofte</td><td>Ja, fx booking og opslag</td></tr>
      </tbody></table></div>
      <h2>Byggestenene</h2>
      <ol>
        <li><strong>Telefoni:</strong> opkaldet kommer ind via telefonnettet (SIP) eller en browser (WebRTC) og streames som lyd til AI'en.</li>
        <li><strong>Lytning:</strong> talegenkendelse omsætter lyd til forståelse, og en taleskiftsmodel vurderer, om kunden er færdig med at tale.</li>
        <li><strong>Tænkning:</strong> en sprogmodel beslutter, hvad der skal siges eller gøres, ud fra virksomhedens instruktioner og viden.</li>
        <li><strong>Handling:</strong> via "function calling" slår agenten ledige tider op, opretter bookinger, sender SMS eller henter ordrestatus.</li>
        <li><strong>Tale:</strong> talesyntese — eller en speech-to-speech-model, der gør lytning, tænkning og tale i ét — giver svaret som naturlig tale.</li>
        <li><strong>Logning:</strong> optagelse, transskription og referat, så samtalen kan gennemgås bagefter.</li>
      </ol>
      <h2>Det halve sekund, der afgør alt</h2>
      <p>I en almindelig samtale svarer vi hinanden efter et par hundrede millisekunder. En voice agent skal nå at høre, at kunden er færdig, forstå, beslutte og begynde at tale på omtrent samme tid. Hvis den venter for længe, føles den langsom; hvis den svarer for hurtigt, afbryder den. Derfor er de tre vigtigste kvalitetsmål for en voice agent:</p>
      <ul>
        <li><strong>Svartid</strong> fra kunden holder op med at tale, til agenten begynder.</li>
        <li><strong>Taleskift</strong>: afbryder den midt i en tænkepause?</li>
        <li><strong>Barge-in</strong>: holder den op med at tale, når kunden afbryder?</li>
      </ul>
      <p>En lille trick-teknik: gode agenter siger "et øjeblik, jeg kigger lige i kalenderen", mens de laver et opslag, ligesom et menneske ville.</p>
      ${CTA_TRIAL_DA}
      <h2>Indgående og udgående</h2>
      <p>En voice agent kan både tage imod opkald (indgående) og ringe ud (udgående) — fx med påmindelser dagen før en aftale eller opfølgning på et tilbud. Reglerne for de to er forskellige; læs <a href="/blog/inbound-outbound-forskel">inbound og outbound AI-opkald</a>.</p>
      <h2>Hvad kan gå galt?</h2>
      <ul>
        <li><strong>Mishørte navne og tal:</strong> løses ved at agenten gentager og bekræfter.</li>
        <li><strong>Svar uden dækning:</strong> agenten skal kun svare ud fra virksomhedens information og ellers sige, at den vender tilbage.</li>
        <li><strong>Støj og dårlig forbindelse:</strong> agenten bør bede kunden gentage i stedet for at gætte.</li>
        <li><strong>Kunder, der vil tale med et menneske:</strong> skal altid kunne få lov. Se <a href="/blog/ai-receptionist-viderestilling-til-menneske">viderestilling til et menneske</a>.</li>
      </ul>
      <h2>Vil du dykke dybere?</h2>
      <p>Se den aktuelle udvikling inden for realtidsmodeller, dansk taleteknologi og AI-regulering i <a href="/blog/nyeste-ai-teknologi-2026">den nyeste AI-teknologi i 2026</a>, eller hør <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">hvordan en dansk voice agent lyder i praksis</a>.</p>
    `,
    content_en: `
      <p>An <strong>AI voice agent</strong> is an AI that holds a spoken conversation in real time — usually on the phone or in a voice widget on a website — and can take actions along the way, such as booking an appointment or looking up an order. An AI receptionist is an AI voice agent set up to receive calls for a business.</p>
      <h2>Voice agent, chatbot and phone menu</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Phone menu (IVR)</th><th>Chatbot</th><th>AI voice agent</th></tr></thead><tbody>
        <tr><td>Input</td><td>Key presses or single words</td><td>Written text</td><td>Free speech</td></tr>
        <tr><td>Understands the customer's own words</td><td>No</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Time pressure</td><td>Low</td><td>Low — users happily wait a few seconds</td><td>High — pauses over a second feel long</td></tr>
        <tr><td>Can take actions</td><td>Limited</td><td>Often</td><td>Yes, e.g. booking and lookups</td></tr>
      </tbody></table></div>
      <h2>The building blocks</h2>
      <ol>
        <li><strong>Telephony:</strong> the call arrives via the phone network (SIP) or a browser (WebRTC) and is streamed as audio to the AI.</li>
        <li><strong>Listening:</strong> speech recognition turns audio into understanding, and a turn-taking model judges whether the caller has finished speaking.</li>
        <li><strong>Thinking:</strong> a language model decides what to say or do based on the business's instructions and knowledge.</li>
        <li><strong>Acting:</strong> through "function calling" the agent looks up free slots, creates bookings, sends texts or fetches order status.</li>
        <li><strong>Speaking:</strong> speech synthesis — or a speech-to-speech model that does listening, thinking and speaking in one — delivers the answer as natural speech.</li>
        <li><strong>Logging:</strong> recording, transcript and summary, so the conversation can be reviewed afterwards.</li>
      </ol>
      <h2>The half-second that decides everything</h2>
      <p>In an ordinary conversation we reply to each other after a few hundred milliseconds. A voice agent must hear that the caller has finished, understand, decide and start speaking in roughly the same time. If it waits too long it feels slow; if it answers too quickly it interrupts. The three most important quality measures for a voice agent are therefore:</p>
      <ul>
        <li><strong>Response time</strong> from when the caller stops speaking to when the agent starts.</li>
        <li><strong>Turn-taking</strong>: does it interrupt in the middle of a thinking pause?</li>
        <li><strong>Barge-in</strong>: does it stop talking when the caller interrupts?</li>
      </ul>
      <p>A small technique: good agents say "one moment, I'm just checking the calendar" while they do a lookup, just as a person would.</p>
      ${CTA_TRIAL_EN}
      <h2>Inbound and outbound</h2>
      <p>A voice agent can both receive calls (inbound) and call out (outbound) — for example with reminders the day before an appointment or follow-up on a quote. The rules for the two differ; read <a href="/blog/inbound-outbound-forskel">inbound and outbound AI calls</a>.</p>
      <h2>What can go wrong?</h2>
      <ul>
        <li><strong>Misheard names and numbers:</strong> solved by the agent repeating and confirming.</li>
        <li><strong>Answers without a basis:</strong> the agent should only answer from the business's information and otherwise say it will get back.</li>
        <li><strong>Noise and poor connections:</strong> the agent should ask the caller to repeat rather than guess.</li>
        <li><strong>Customers who want a person:</strong> must always be allowed to. See <a href="/blog/ai-receptionist-viderestilling-til-menneske">transferring to a human</a>.</li>
      </ul>
      <h2>Want to go deeper?</h2>
      <p>See the current developments in realtime models, Danish speech technology and AI regulation in <a href="/blog/nyeste-ai-teknologi-2026">the latest AI technology in 2026</a>, or hear <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">what a Danish voice agent sounds like in practice</a>.</p>
    `,
    meta_title_en: 'What Is an AI Voice Agent? Realtime AI Explained | AIBooking.dk',
    meta_title_da: 'Hvad er en AI voice agent? Realtids-AI forklaret | AIBooking.dk',
    meta_description_en: 'What an AI voice agent is, its building blocks, why response time and turn-taking matter, and how it differs from a chatbot and a phone menu.',
    meta_description_da: 'Hvad en AI voice agent er, dens byggesten, hvorfor svartid og taleskift betyder alt, og hvordan den adskiller sig fra chatbot og telefonmenu.',
    keywords: ['ai voice agent', 'hvad er en ai voice agent', 'voice ai dansk', 'realtids-ai telefon', 'ai telefoni'],
    image_url: '/blog/covers/hvad-er-en-ai-voice-agent.svg',
    published: true,
    published_at: '2026-10-16',
    related: ['nyeste-ai-teknologi-2026', 'ai-reception-virtuel-receptionist', 'ai-telefonassistent-dansk-sprog'],
    faq: [
      {
        question_da: 'Hvad er forskellen på en AI voice agent og en AI-receptionist?',
        answer_da: 'AI voice agent er teknologien: en AI, der taler og handler i realtid. En AI-receptionist er en voice agent sat op til at tage imod opkald og booke for en virksomhed.',
        question_en: 'What is the difference between an AI voice agent and an AI receptionist?',
        answer_en: 'AI voice agent is the technology: an AI that talks and acts in real time. An AI receptionist is a voice agent set up to receive calls and book for a business.',
      },
      {
        question_da: 'Kan man afbryde en AI voice agent?',
        answer_da: 'En god voice agent understøtter "barge-in": den holder op med at tale og lytter, når kunden afbryder. Det er et af de vigtigste punkter at teste.',
        question_en: 'Can you interrupt an AI voice agent?',
        answer_en: 'A good voice agent supports "barge-in": it stops talking and listens when the caller interrupts. It is one of the most important things to test.',
      },
    ],
    sources: [SRC_STIVERS],
  },
  {
    id: 'ai-telefonassistent-dansk-sprog',
    slug: 'ai-telefonassistent-dansk-sprog',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'Danish Speech Recognition and AI Voices: How the AI Understands Danish',
    title_da: 'Dansk talegenkendelse og AI-stemmer: Sådan forstår AI’en dansk',
    excerpt_en: 'Why Danish is hard for machines, what has improved, and how to test whether an AI understands your customers — names, addresses, numbers and dialects included.',
    excerpt_da: 'Hvorfor dansk er svært for maskiner, hvad der er blevet bedre, og hvordan du tester, om en AI forstår dine kunder — navne, adresser, tal og dialekter inklusive.',
    content_da: `
      <p>Dansk er kendt som et svært sprog — også for mennesker, der lærer det. For en maskine er udfordringen den samme: mange vokallyde, stødet, endelser der forsvinder i talesprog ("det har jeg" bliver til "de' har ja'"), og et sprogområde på kun omkring seks millioner talere. Alligevel kan en AI i dag forstå og tale dansk godt nok til at tage telefonen for en virksomhed. Her er hvordan — og hvordan du tester det.</p>
      <h2>Hvorfor dansk har været svært</h2>
      <ul>
        <li><strong>Udtale og skrift passer dårligt sammen.</strong> "Rødgrød med fløde" er det klassiske eksempel; "Hvidovrevej" og "Ørestads Boulevard" er de praktiske.</li>
        <li><strong>Lidt træningsdata.</strong> Talegenkendelse lærer af transskriberet lyd, og der findes langt mindre dansk end engelsk.</li>
        <li><strong>Dialekter og talesprog.</strong> En nordjysk landmand og en ung københavner udtaler de samme ord forskelligt.</li>
        <li><strong>Telefonlyd.</strong> Telefonnettet skærer frekvenser væk, så "f" og "s" er sværere at skelne.</li>
      </ul>
      <h2>Hvad har ændret sig?</h2>
      <p>De store flersprogede talemodeller er trænet på enorme mængder lyd på mange sprog, og dansk drager fordel af det, man lærer fra beslægtede sprog. Samtidig har Danmark fået åbne data: CoRal-projektet under Alexandra Instituttet har indsamlet hundredvis af timers dansk tale fra mere end tusind personer i alle aldre og fra hele landet, inklusive samtaler — ikke kun oplæsning — og udgivet en dansk talegenkendelsesmodel. Den slags data gør det muligt at måle, hvor godt modeller forstår dialekter og forskellige aldersgrupper.</p>
      <p>Også stemmerne er blevet bedre. Moderne talesyntese lyder naturligt på dansk, med rytme og pauser, der minder om et menneske. Se <a href="/blog/nyeste-ai-teknologi-2026">den nyeste AI-teknologi i 2026</a> for den bredere udvikling.</p>
      <h2>Hvor fejler AI'en stadig oftest?</h2>
      <ul>
        <li><strong>Egennavne:</strong> sjældne efternavne og firmanavne.</li>
        <li><strong>Tal og adresser:</strong> "fireoghalvfems" vs. "94", husnumre med bogstaver, postnumre.</li>
        <li><strong>Engelske ord i dansk:</strong> produktnavne og fagudtryk.</li>
        <li><strong>Flere, der taler på én gang</strong>, eller kraftig baggrundsstøj.</li>
      </ul>
      <p>Løsningen er ikke en perfekt model, men en god samtaleteknik: AI'en gentager navn, telefonnummer og adresse og beder kunden bekræfte, før det gemmes. Det gør en dygtig receptionist også.</p>
      ${CTA_TRIAL_DA}
      <h2>Sådan tester du en dansk AI-stemme</h2>
      <ol>
        <li><strong>Ring via en rigtig telefon</strong> — ikke kun i browseren.</li>
        <li><strong>Brug dine kunders navne og adresser</strong>, fx "Kjærsgaard" og "Søndergade 14, 9000 Aalborg".</li>
        <li><strong>Tal som en kunde</strong>: "øh, jeg ville egentlig bare høre om… nej vent, kan I komme på torsdag?"</li>
        <li><strong>Afbryd den</strong> midt i en sætning.</li>
        <li><strong>Lad en kollega med en anden dialekt ringe</strong>.</li>
        <li><strong>Læs transskriptionen bagefter</strong> og se, hvor den tog fejl.</li>
      </ol>
      <h2>Dansk og engelsk i samme løsning</h2>
      <p>Mange danske virksomheder har også engelsktalende kunder. En AI-stemme kan skifte til engelsk, hvis kunden taler engelsk, så du ikke behøver to opsætninger. Velkomsten bør være på dansk, og AI'en skal præsentere sig som en digital assistent.</p>
      <p>Hør hvordan det lyder i praksis i <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">hvordan lyder en dansk AI-receptionist?</a>, eller se kravene til en løsning i <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">AI-telefonpasning: det skal du kræve</a>.</p>
    `,
    content_en: `
      <p>Danish is known as a hard language — also for people learning it. For a machine the challenge is the same: many vowel sounds, the glottal "stød", endings that disappear in spoken language, and a language area of only around six million speakers. Even so, an AI today can understand and speak Danish well enough to answer the phone for a business. Here is how — and how to test it.</p>
      <h2>Why Danish has been hard</h2>
      <ul>
        <li><strong>Pronunciation and spelling match poorly.</strong> "Rødgrød med fløde" is the classic example; street names like "Hvidovrevej" and "Ørestads Boulevard" are the practical ones.</li>
        <li><strong>Little training data.</strong> Speech recognition learns from transcribed audio, and there is far less Danish than English.</li>
        <li><strong>Dialects and spoken language.</strong> A farmer from North Jutland and a young Copenhagener pronounce the same words differently.</li>
        <li><strong>Phone audio.</strong> The phone network cuts frequencies, so "f" and "s" are harder to tell apart.</li>
      </ul>
      <h2>What has changed?</h2>
      <p>The large multilingual speech models are trained on enormous amounts of audio in many languages, and Danish benefits from what is learned from related languages. At the same time Denmark has gained open data: the CoRal project at the Alexandra Institute has collected hundreds of hours of Danish speech from more than a thousand people of all ages across the country, including conversations — not just read-aloud speech — and released a Danish speech recognition model. Data like this makes it possible to measure how well models understand dialects and different age groups.</p>
      <p>The voices have improved too. Modern speech synthesis sounds natural in Danish, with rhythm and pauses close to a person. See <a href="/blog/nyeste-ai-teknologi-2026">the latest AI technology in 2026</a> for the wider picture.</p>
      <h2>Where does the AI still fail most often?</h2>
      <ul>
        <li><strong>Proper names:</strong> rare surnames and company names.</li>
        <li><strong>Numbers and addresses:</strong> spoken numbers, house numbers with letters, postcodes.</li>
        <li><strong>English words in Danish:</strong> product names and technical terms.</li>
        <li><strong>Several people talking at once</strong>, or heavy background noise.</li>
      </ul>
      <p>The solution is not a perfect model but good conversation technique: the AI repeats name, phone number and address and asks the caller to confirm before saving. A skilled receptionist does the same.</p>
      ${CTA_TRIAL_EN}
      <h2>How to test a Danish AI voice</h2>
      <ol>
        <li><strong>Call from a real phone</strong> — not just in the browser.</li>
        <li><strong>Use your customers' names and addresses</strong>, e.g. "Kjærsgaard" and "Søndergade 14, 9000 Aalborg".</li>
        <li><strong>Talk like a customer</strong>: "um, I just wanted to ask about… no wait, can you come on Thursday?"</li>
        <li><strong>Interrupt it</strong> in the middle of a sentence.</li>
        <li><strong>Have a colleague with a different dialect call</strong>.</li>
        <li><strong>Read the transcript afterwards</strong> and see where it went wrong.</li>
      </ol>
      <h2>Danish and English in the same solution</h2>
      <p>Many Danish businesses also have English-speaking customers. An AI voice can switch to English if the caller speaks English, so you don't need two setups. The greeting should be in Danish, and the AI must introduce itself as a digital assistant.</p>
      <p>Hear what it sounds like in practice in <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">what does a Danish AI receptionist sound like?</a>, or see the requirements for a solution in <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">AI phone answering: what to require</a>.</p>
    `,
    meta_title_en: 'Danish Speech Recognition & AI Voices | AIBooking.dk',
    meta_title_da: 'Dansk talegenkendelse og AI-stemmer | AIBooking.dk',
    meta_description_en: 'Why Danish is hard for machines, what has improved, where AI still fails, and a six-step test of whether an AI understands your customers.',
    meta_description_da: 'Hvorfor dansk er svært for maskiner, hvad der er blevet bedre, hvor AI stadig fejler, og en test i seks trin af om AI’en forstår dine kunder.',
    keywords: ['dansk talegenkendelse', 'ai-stemme dansk', 'dansk ai stemme', 'ai telefonassistent dansk', 'talesyntese dansk'],
    image_url: '/blog/covers/ai-telefonassistent-dansk-sprog.svg',
    published: true,
    published_at: '2026-04-26',
    updated_at: UPDATED,
    related: ['hvordan-lyder-en-dansk-ai-receptionist', 'nyeste-ai-teknologi-2026', 'hvad-er-en-ai-voice-agent'],
    faq: [
      {
        question_da: 'Forstår AI’en jysk og sønderjysk?',
        answer_da: 'Moderne talegenkendelse forstår de fleste danske dialekter godt, men kraftig dialekt kan give flere fejl i navne og tal. Derfor bør AI’en gentage og bekræfte vigtige oplysninger.',
        question_en: 'Does the AI understand regional Danish dialects?',
        answer_en: 'Modern speech recognition handles most Danish dialects well, but strong dialects can cause more errors in names and numbers. The AI should therefore repeat and confirm key details.',
      },
      {
        question_da: 'Kan AI’en tale engelsk med udenlandske kunder?',
        answer_da: 'Ja. AI’en kan føre samtalen på engelsk, hvis kunden taler engelsk.',
        question_en: 'Can the AI speak English with foreign customers?',
        answer_en: 'Yes. The AI can continue in English if the caller speaks English.',
      },
    ],
    sources: [SRC_CORAL],
  },
  {
    id: 'hvordan-lyder-en-dansk-ai-receptionist',
    slug: 'hvordan-lyder-en-dansk-ai-receptionist',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'What Does a Danish AI Receptionist Sound Like? Listen — and 6 Things to Listen For',
    title_da: 'Hvordan lyder en dansk AI-receptionist? Lyt med — og 6 ting du skal lytte efter',
    excerpt_en: 'Every provider says its voice sounds natural. The only way to know is to listen. Play our recording and use the six quality signs to judge any Danish AI receptionist.',
    excerpt_da: 'Alle udbydere siger, at deres stemme lyder naturlig. Den eneste måde at vide det på er at lytte. Afspil vores optagelse, og brug de seks kvalitetstegn til at vurdere enhver dansk AI-receptionist.',
    content_da: `
      <p>Mange virksomhedsejere har dårlige erfaringer med automatiske telefonsystemer: "tryk 1 for…", robotstemmer og systemer, der ikke forstår et ord. En moderne AI-receptionist er noget andet — men kvaliteten svinger meget fra løsning til løsning. Den bedste test er enkel: lyt.</p>
      <p>Optagelsen herover er en produktdemo af vores danske AI-stemme. Afspil den, og brug de seks punkter nedenfor som målestok. Du kan bruge de samme punkter, når du vurderer andre udbydere.</p>
      <h2>1. Lyder den som et menneske?</h2>
      <p>Tempo, intonation og pauser betyder mere, end man tror. En god AI-stemme lyder rolig og venlig og haster ikke kunden igennem. Læg mærke til, om betoningen falder rigtigt i lange ord og i navne.</p>
      <h2>2. Forstår den almindeligt talesprog?</h2>
      <p>Kunder taler ikke i søgeord. De forklarer problemet med deres egne ord, skifter mening midt i en sætning og bruger lokale udtryk. AI'en skal stadig forstå, hvad de vil. Læs mere om <a href="/blog/ai-telefonassistent-dansk-sprog">dansk talegenkendelse</a>.</p>
      <h2>3. Stiller den de rigtige spørgsmål?</h2>
      <p>En receptionist, der kun tager en besked, er ikke meget værd. Den skal spørge ind til præcis det, din virksomhed skal bruge — hos en håndværker fx adresse, opgavetype og hastegrad; hos en klinik om man er ny eller eksisterende patient.</p>
      <h2>4. Slutter samtalen med en handling?</h2>
      <p>Det stærkeste kvalitetstegn er, at opkaldet ender med noget konkret: en tid i kalenderen, en bekræftelse på SMS eller en besked med en aftalt opringning. Det er forskellen på en AI-receptionist og en <a href="/blog/ai-receptionist-vs-telefonpasning">telefonsvarer</a>.</p>
      ${CTA_TRIAL_DA}
      <h2>5. Ved den, hvornår den skal stille videre?</h2>
      <p>Akutte eller komplicerede opkald skal stilles videre til et menneske med kontekst, så kunden ikke skal starte forfra. Se <a href="/blog/ai-receptionist-viderestilling-til-menneske">hvornår et opkald skal viderestilles</a>.</p>
      <h2>6. Er den ærlig om, at den er en AI?</h2>
      <p>En god AI-receptionist præsenterer sig som en digital assistent. Det er ikke kun pænt; efter EU's AI-forordning skal folk vide, at de taler med en AI. Kunder, der ved det fra start, er også mere tålmodige, hvis den beder dem gentage noget.</p>
      <h2>Prøv selv — med din egen virksomhed</h2>
      <p>En optagelse viser stemmen, men ikke hvordan den håndterer <em>dine</em> kunder. Ring til vores demolinje, eller opret en gratis prøveperiode, hvor AI'en lærer dine ydelser, og ring selv ind med de spørgsmål, dine kunder plejer at stille. På <a href="/ind-og-udgaaende-opkald">siden om ind- og udgående opkald</a> kan du også læse to komplette samtaleforløb ord for ord — et indgående opkald til en VVS'er og et udgående påmindelsesopkald for en klinik.</p>
    `,
    content_en: `
      <p>Many business owners have bad experiences with automated phone systems: "press 1 for…", robotic voices and systems that don't understand a word. A modern AI receptionist is something else — but quality varies a lot between solutions. The best test is simple: listen.</p>
      <p>The recording above is a product demo of our Danish AI voice. Play it and use the six points below as a yardstick. You can use the same points when you assess other providers.</p>
      <h2>1. Does it sound like a person?</h2>
      <p>Pace, intonation and pauses matter more than you might think. A good AI voice sounds calm and friendly and does not rush the caller. Notice whether the stress falls correctly in long words and names.</p>
      <h2>2. Does it understand everyday speech?</h2>
      <p>Customers don't speak in keywords. They explain the problem in their own words, change their mind mid-sentence and use local expressions. The AI must still understand what they want. Read more about <a href="/blog/ai-telefonassistent-dansk-sprog">Danish speech recognition</a>.</p>
      <h2>3. Does it ask the right questions?</h2>
      <p>A receptionist who only takes a message is not worth much. It should ask exactly what your business needs — for a tradesperson address, type of job and urgency; for a clinic whether the caller is a new or existing patient.</p>
      <h2>4. Does the conversation end with an action?</h2>
      <p>The strongest sign of quality is that the call ends with something concrete: an appointment in the calendar, a text confirmation or a message with an agreed callback. That is the difference between an AI receptionist and <a href="/blog/ai-receptionist-vs-telefonpasning">voicemail</a>.</p>
      ${CTA_TRIAL_EN}
      <h2>5. Does it know when to transfer?</h2>
      <p>Urgent or complicated calls should be transferred to a person with context, so the caller doesn't have to start over. See <a href="/blog/ai-receptionist-viderestilling-til-menneske">when a call should be transferred</a>.</p>
      <h2>6. Is it honest about being an AI?</h2>
      <p>A good AI receptionist introduces itself as a digital assistant. That is not just polite; under the EU AI Act people must know they are talking to an AI. Customers who know from the start are also more patient if it asks them to repeat something.</p>
      <h2>Try it yourself — with your own business</h2>
      <p>A recording shows the voice, but not how it handles <em>your</em> customers. Call our demo line, or start a free trial where the AI learns your services, and call in yourself with the questions your customers usually ask. On the <a href="/ind-og-udgaaende-opkald">inbound and outbound calls page</a> you can also read two complete conversations word for word — an inbound call to a plumber and an outbound reminder call for a clinic.</p>
    `,
    meta_title_en: 'What Does a Danish AI Receptionist Sound Like? | AIBooking.dk',
    meta_title_da: 'Hvordan lyder en dansk AI-receptionist? Lyt med | AIBooking.dk',
    meta_description_en: 'Listen to a Danish AI receptionist and use six quality signs — voice, understanding, questions, action, handover and honesty — to judge any provider.',
    meta_description_da: 'Lyt til en dansk AI-receptionist, og brug seks kvalitetstegn — stemme, forståelse, spørgsmål, handling, overdragelse og ærlighed — til at vurdere udbydere.',
    keywords: ['dansk ai-receptionist', 'ai-stemme dansk', 'lydeksempel ai', 'hvordan lyder ai', 'voice ai dansk'],
    image_url: '/blog/covers/hvordan-lyder-en-dansk-ai-receptionist.svg',
    published: true,
    published_at: '2026-09-29',
    updated_at: UPDATED,
    audioDemo: 'top',
    related: ['ai-telefonassistent-dansk-sprog', 'ai-telefonpasning-dansk-ai-receptionist', 'hvad-er-en-ai-voice-agent'],
    faq: [
      {
        question_da: 'Kan jeg selv vælge stemmen og velkomsten?',
        answer_da: 'Ja. Du formulerer selv velkomsten og tonen, og du godkender ordlyden, før AI’en går i luften.',
        question_en: 'Can I choose the voice and greeting myself?',
        answer_en: 'Yes. You write the greeting and tone yourself, and you approve the wording before the AI goes live.',
      },
    ],
  },
  {
    id: 'ai-indgaaende-opkald',
    slug: 'ai-indgaaende-opkald',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'AI for Inbound Calls: Never Miss a Call Again',
    title_da: 'AI til indgående opkald: Gå aldrig glip af et opkald igen',
    excerpt_en: 'Missed calls are lost customers. How AI for inbound calls works, the four forwarding setups to choose between, and how to measure whether it captures the calls you lose today.',
    excerpt_da: 'Ubesvarede opkald er tabte kunder. Sådan virker AI til indgående opkald, de fire måder at sætte viderestillingen op på, og hvordan du måler, om den fanger de opkald, du mister i dag.',
    content_da: `
      <p>Et ubesvaret opkald er sjældent bare et opkald. Det er en kunde, der havde et behov lige nu — og som med stor sandsynlighed ringer til den næste virksomhed på listen i stedet for at vente. <strong>AI til indgående opkald</strong> sørger for, at alle opkald bliver taget, også når du er optaget, holder fri eller har lukket.</p>
      <h2>Hvor mange opkald mister du?</h2>
      <p>Start med at finde ud af det. Det fleste telefonsystemer og mobilabonnementer viser ubesvarede opkald. Tæl i en almindelig uge:</p>
      <ul>
        <li>Hvor mange opkald blev ikke taget?</li>
        <li>Hvor mange af dem ringede du tilbage til — og fik fat i?</li>
        <li>Hvornår på dagen skete det?</li>
      </ul>
      <p>Mønsteret fortæller dig, hvilken opsætning du har brug for.</p>
      <h2>Fire måder at sætte AI'en op på</h2>
      <div class="blog-table"><table><thead><tr><th>Opsætning</th><th>Hvornår AI'en svarer</th><th>Passer til</th></tr></thead><tbody>
        <tr><td>Uden for åbningstid</td><td>Aften, weekend og helligdage</td><td>Klinikker og butikker, der er bemandet i åbningstiden</td></tr>
        <tr><td>Ved optaget</td><td>Når linjen allerede er i brug</td><td>Virksomheder med spidsbelastning</td></tr>
        <tr><td>Efter et antal ring</td><td>Hvis ingen tager telefonen inden for fx 4 ring</td><td>Håndværkere og små teams</td></tr>
        <tr><td>Altid</td><td>Alle opkald — AI'en stiller videre efter behov</td><td>Virksomheder, der vil frigøre personalet helt</td></tr>
      </tbody></table></div>
      <p>Du beholder dit nummer i alle fire tilfælde; det er kun viderestillingen, der ændres.</p>
      <h2>Hvad sker der i opkaldet?</h2>
      <ol>
        <li>AI'en svarer på sekunder og præsenterer sig som virksomhedens digitale assistent.</li>
        <li>Den finder ud af, hvorfor kunden ringer.</li>
        <li>Den løser det, den kan: booker, ombooker, svarer på gengangerspørgsmål.</li>
        <li>Resten stilles videre eller ender som en struktureret besked.</li>
        <li>Kunden får en SMS-bekræftelse, og du får et referat i dashboardet.</li>
      </ol>
      ${CTA_TRIAL_DA}
      <h2>Mere end en telefonsvarer</h2>
      <p>Forskellen på en telefonsvarer og AI til indgående opkald er, at sagen bliver løst, mens kunden er i røret. Ingen skal ringe tilbage for at aftale en tid, og ingen kunde lægger på, fordi de ikke gider indtale en besked. Se den fulde sammenligning i <a href="/blog/ai-receptionist-vs-telefonpasning">AI-receptionist vs. telefonpasning og telefonsvarer</a>.</p>
      <h2>Hvordan måler du effekten?</h2>
      <ul>
        <li><strong>Andel besvarede opkald</strong> før og efter.</li>
        <li><strong>Antal bookinger</strong> lavet af AI'en, især uden for åbningstid.</li>
        <li><strong>Tid brugt på tilbageringninger</strong> pr. uge.</li>
        <li><strong>Andel opkald stillet videre</strong> — er den for høj, mangler AI'en viden; er den nul, så tjek at den ikke holder fast i sager, den burde sende videre.</li>
      </ul>
      <p>Se hvordan du omsætter tallene til kroner i <a href="/blog/roi-ai-automatisering-virksomheder">guiden til ROI af AI-automatisering</a>. Vil du også have AI'en til at ringe ud, så læs <a href="/blog/inbound-outbound-forskel">inbound og outbound AI-opkald</a>.</p>
    `,
    content_en: `
      <p>A missed call is rarely just a call. It is a customer with a need right now — who will very likely call the next business on the list rather than wait. <strong>AI for inbound calls</strong> makes sure every call is answered, even when you are busy, off or closed.</p>
      <h2>How many calls do you lose?</h2>
      <p>Start by finding out. Most phone systems and mobile plans show missed calls. Count during an ordinary week:</p>
      <ul>
        <li>How many calls were not answered?</li>
        <li>How many of them did you call back — and reach?</li>
        <li>When during the day did it happen?</li>
      </ul>
      <p>The pattern tells you which setup you need.</p>
      <h2>Four ways to set up the AI</h2>
      <div class="blog-table"><table><thead><tr><th>Setup</th><th>When the AI answers</th><th>Suits</th></tr></thead><tbody>
        <tr><td>After hours</td><td>Evenings, weekends and holidays</td><td>Clinics and shops staffed during opening hours</td></tr>
        <tr><td>When busy</td><td>When the line is already in use</td><td>Businesses with peaks</td></tr>
        <tr><td>After a number of rings</td><td>If nobody answers within e.g. 4 rings</td><td>Tradespeople and small teams</td></tr>
        <tr><td>Always</td><td>All calls — the AI transfers as needed</td><td>Businesses that want to free staff completely</td></tr>
      </tbody></table></div>
      <p>You keep your number in all four cases; only the forwarding changes.</p>
      <h2>What happens during the call?</h2>
      <ol>
        <li>The AI answers within seconds and introduces itself as the business's digital assistant.</li>
        <li>It works out why the customer is calling.</li>
        <li>It solves what it can: books, reschedules, answers recurring questions.</li>
        <li>The rest is transferred or becomes a structured message.</li>
        <li>The customer gets a text confirmation, and you get a summary in the dashboard.</li>
      </ol>
      ${CTA_TRIAL_EN}
      <h2>More than voicemail</h2>
      <p>The difference between voicemail and AI for inbound calls is that the matter is solved while the customer is on the line. Nobody has to call back to agree a time, and no customer hangs up because they can't be bothered to leave a message. See the full comparison in <a href="/blog/ai-receptionist-vs-telefonpasning">AI receptionist vs. answering service and voicemail</a>.</p>
      <h2>How do you measure the effect?</h2>
      <ul>
        <li><strong>Share of calls answered</strong> before and after.</li>
        <li><strong>Number of bookings</strong> made by the AI, especially after hours.</li>
        <li><strong>Time spent on callbacks</strong> per week.</li>
        <li><strong>Share of calls transferred</strong> — if it is too high, the AI lacks knowledge; if it is zero, check it isn't holding on to cases it should pass on.</li>
      </ul>
      <p>See how to turn the numbers into money in the <a href="/blog/roi-ai-automatisering-virksomheder">guide to the ROI of AI automation</a>. Want the AI to call out as well? Read <a href="/blog/inbound-outbound-forskel">inbound and outbound AI calls</a>.</p>
    `,
    meta_title_en: 'AI for Inbound Calls: Never Miss a Call | AIBooking.dk',
    meta_title_da: 'AI til indgående opkald: mist aldrig et opkald | AIBooking.dk',
    meta_description_en: 'How AI for inbound calls works, four forwarding setups to choose between, and how to measure whether it captures the calls you lose today.',
    meta_description_da: 'Sådan virker AI til indgående opkald, fire måder at sætte viderestillingen op på, og hvordan du måler, om den fanger de opkald, du mister i dag.',
    keywords: ['ai til indgående opkald', 'ai indgående opkald', 'ubesvarede opkald', 'automatisk telefonpasning', 'ai telefonassistent'],
    image_url: '/blog/covers/ai-indgaaende-opkald.svg',
    published: true,
    published_at: '2026-09-18',
    updated_at: UPDATED,
    related: ['inbound-outbound-forskel', 'ai-receptionist-vs-telefonpasning', 'roi-ai-automatisering-virksomheder'],
    faq: [
      {
        question_da: 'Hvornår tager AI’en mine opkald?',
        answer_da: 'Det bestemmer du: uden for åbningstid, når linjen er optaget, efter et antal ring eller altid. Du beholder dit nummer i alle tilfælde.',
        question_en: 'When does the AI take my calls?',
        answer_en: 'You decide: after hours, when the line is busy, after a number of rings or always. You keep your number in all cases.',
      },
      {
        question_da: 'Får jeg besked om opkald, AI’en har taget?',
        answer_da: 'Ja. Hvert opkald ligger i dashboardet med optagelse, transskription og referat, og beskeder kan sendes til dig på SMS eller email.',
        question_en: 'Am I notified about calls the AI has taken?',
        answer_en: 'Yes. Every call is in the dashboard with recording, transcript and summary, and messages can be sent to you by text or email.',
      },
    ],
  },
  {
    id: 'inbound-outbound-forskel',
    slug: 'inbound-outbound-forskel',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'Inbound and Outbound AI Calls: The Difference and the Rules',
    title_da: 'Indgående og udgående AI-opkald: forskellen og reglerne',
    excerpt_en: 'Inbound AI answers your customers; outbound AI calls them. What each is good for, the Danish rules for automated outbound calls, and where most businesses should start.',
    excerpt_da: 'Indgående AI tager imod dine kunder; udgående AI ringer til dem. Hvad hver er god til, de danske regler for automatiserede udgående opkald, og hvor de fleste bør starte.',
    content_da: `
      <p>En AI-telefonassistent kan arbejde i to retninger. <strong>Indgående</strong> (inbound) betyder, at kunden ringer til dig, og AI'en tager telefonen. <strong>Udgående</strong> (outbound) betyder, at AI'en selv ringer til kunden — med en påmindelse, en bekræftelse eller en opfølgning. Samme stemme, samme nummer, men forskellige formål og forskellige regler.</p>
      <h2>Hvad hver retning er god til</h2>
      <div class="blog-table"><table><thead><tr><th>Opgave</th><th>Indgående</th><th>Udgående</th></tr></thead><tbody>
        <tr><td>Besvare kundernes opkald</td><td>Ja</td><td>–</td></tr>
        <tr><td>Booke, ombooke og aflyse</td><td>Ja</td><td>Ja</td></tr>
        <tr><td>Svare på gengangerspørgsmål</td><td>Ja</td><td>–</td></tr>
        <tr><td>Påmindelse dagen før en aftale</td><td>–</td><td>Ja</td></tr>
        <tr><td>Genbooke aflyste tider fra en venteliste</td><td>–</td><td>Ja</td></tr>
        <tr><td>Følge op på et fremsendt tilbud</td><td>–</td><td>Ja, med samtykke/forudgående kontakt</td></tr>
        <tr><td>Stille om til en kollega</td><td>Ja</td><td>Ja</td></tr>
      </tbody></table></div>
      <h2>Reglerne for udgående AI-opkald</h2>
      <p>Indgående opkald er kunden, der kontakter dig — her gælder primært GDPR og kravet om, at AI'en oplyser, at den er en AI. Udgående opkald kræver mere omtanke:</p>
      <ul>
        <li><strong>Markedsføring:</strong> Efter markedsføringslovens § 10 må en erhvervsdrivende ikke rette henvendelse via et automatiseret opkaldssystem med henblik på direkte markedsføring, medmindre modtageren forudgående har anmodet om det. Et AI-opkald, der sælger, kræver altså samtykke.</li>
        <li><strong>Service:</strong> En påmindelse om en tid, kunden selv har booket, eller en bekræftelse af et aftalt besøg, er service — ikke markedsføring. Det er den mest almindelige og mindst kontroversielle brug af udgående AI.</li>
        <li><strong>Gennemsigtighed:</strong> AI'en skal sige, hvem den ringer fra, og at den er en digital assistent.</li>
        <li><strong>Tidspunkter:</strong> Ring på tidspunkter, hvor du selv ville ringe — ikke kl. 21 en søndag.</li>
      </ul>
      <p>Grænsen mellem service og markedsføring kan være uklar, fx ved "vil du booke din næste tid?". Er du i tvivl, så få det vurderet. Denne artikel er ikke juridisk rådgivning.</p>
      ${CTA_TRIAL_DA}
      <h2>Hvor skal du starte?</h2>
      <p>De fleste starter med indgående opkald, fordi det løser et akut problem (ubesvarede opkald) og ikke kræver nye processer. Når AI'en har kørt et par uger, er påmindelser dagen før det naturlige næste skridt — det er der, udeblivelserne falder. Læs <a href="/blog/outbound-ai-opkald-paamindelser">automatiske påmindelsesopkald</a> og <a href="/blog/ai-indgaaende-opkald">AI til indgående opkald</a>.</p>
      <p>Hos Aibooking.dk indeholder alle pakker både indgående og udgående opkald. Se <a href="/ind-og-udgaaende-opkald">ind- og udgående opkald</a> for to komplette eksempler på samtaler.</p>
    `,
    content_en: `
      <p>An AI phone assistant can work in two directions. <strong>Inbound</strong> means the customer calls you and the AI answers. <strong>Outbound</strong> means the AI calls the customer — with a reminder, a confirmation or a follow-up. Same voice, same number, but different purposes and different rules.</p>
      <h2>What each direction is good for</h2>
      <div class="blog-table"><table><thead><tr><th>Task</th><th>Inbound</th><th>Outbound</th></tr></thead><tbody>
        <tr><td>Answering customers' calls</td><td>Yes</td><td>–</td></tr>
        <tr><td>Booking, rescheduling and cancelling</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Answering recurring questions</td><td>Yes</td><td>–</td></tr>
        <tr><td>Reminder the day before an appointment</td><td>–</td><td>Yes</td></tr>
        <tr><td>Rebooking cancelled slots from a waiting list</td><td>–</td><td>Yes</td></tr>
        <tr><td>Following up on a quote</td><td>–</td><td>Yes, with consent/prior contact</td></tr>
        <tr><td>Transferring to a colleague</td><td>Yes</td><td>Yes</td></tr>
      </tbody></table></div>
      <h2>The rules for outbound AI calls</h2>
      <p>Inbound calls are the customer contacting you — here GDPR and the requirement that the AI discloses it is an AI are the main rules. Outbound calls need more care:</p>
      <ul>
        <li><strong>Marketing:</strong> Under section 10 of the Danish Marketing Practices Act, a trader may not contact anyone through an automated calling system for direct marketing unless the recipient has asked for it in advance. An AI call that sells therefore requires consent.</li>
        <li><strong>Service:</strong> A reminder about an appointment the customer booked, or confirmation of an agreed visit, is service — not marketing. It is the most common and least controversial use of outbound AI.</li>
        <li><strong>Transparency:</strong> The AI must say who it is calling from and that it is a digital assistant.</li>
        <li><strong>Timing:</strong> Call at times when you would call yourself — not at 9 pm on a Sunday.</li>
      </ul>
      <p>The line between service and marketing can be blurry, e.g. "would you like to book your next appointment?". If in doubt, get it assessed. This article is not legal advice.</p>
      ${CTA_TRIAL_EN}
      <h2>Where should you start?</h2>
      <p>Most start with inbound calls, because it solves an acute problem (missed calls) and needs no new processes. Once the AI has run for a couple of weeks, reminders the day before are the natural next step — that is where no-shows drop. Read <a href="/blog/outbound-ai-opkald-paamindelser">automatic reminder calls</a> and <a href="/blog/ai-indgaaende-opkald">AI for inbound calls</a>.</p>
      <p>At Aibooking.dk every plan includes both inbound and outbound calls. See <a href="/ind-og-udgaaende-opkald">inbound and outbound calls</a> for two complete example conversations.</p>
    `,
    meta_title_en: 'Inbound vs. Outbound AI Calls: Difference & Rules | AIBooking.dk',
    meta_title_da: 'Indgående og udgående AI-opkald: forskel og regler | AIBooking.dk',
    meta_description_en: 'What inbound and outbound AI calls are good for, the Danish rules for automated outbound calls, and where most businesses should start.',
    meta_description_da: 'Hvad indgående og udgående AI-opkald er gode til, de danske regler for automatiserede udgående opkald, og hvor de fleste bør starte.',
    keywords: ['inbound outbound ai', 'udgående ai-opkald', 'indgående og udgående opkald', 'ai outbound regler', 'markedsføringsloven automatiske opkald'],
    image_url: '/blog/covers/inbound-outbound-forskel.svg',
    published: true,
    published_at: '2026-04-19',
    updated_at: UPDATED,
    related: ['outbound-ai-opkald-paamindelser', 'ai-indgaaende-opkald', 'ai-widget-gdpr-danske-virksomheder'],
    faq: [
      {
        question_da: 'Må en AI ringe til kunder i Danmark?',
        answer_da: 'Ja, til service som påmindelser og bekræftelser af aftaler. Bruges et automatiseret opkaldssystem til direkte markedsføring, kræver markedsføringslovens § 10 forudgående samtykke.',
        question_en: 'May an AI call customers in Denmark?',
        answer_en: 'Yes, for service such as reminders and confirmations of appointments. If an automated calling system is used for direct marketing, section 10 of the Marketing Practices Act requires prior consent.',
      },
    ],
    sources: [
      { title: 'Markedsføringsloven (lov nr. 426 af 3. maj 2017), § 10', publisher: 'Retsinformation', url: 'https://www.retsinformation.dk/eli/lta/2017/426', date: '2017-05-03' },
      SRC_AI_ACT,
    ],
  },
  {
    id: 'outbound-ai-opkald-paamindelser',
    slug: 'outbound-ai-opkald-paamindelser',
    categorySlug: 'ai-inbound-outbound',
    title_en: 'Automatic Reminder Calls: How AI Reduces No-Shows',
    title_da: 'Automatiske påmindelsesopkald: Sådan reducerer AI udeblivelser',
    excerpt_en: 'A text reminder is easy to ignore; a call where you can rebook on the spot is not. How AI reminder calls work, when to call, and how to refill the slot when someone cancels.',
    excerpt_da: 'En SMS-påmindelse er nem at overse; et opkald, hvor man kan flytte tiden med det samme, er ikke. Sådan virker AI-påmindelser, hvornår der skal ringes, og hvordan tiden fyldes ud, når nogen melder afbud.',
    content_da: `
      <p>En udeblivelse koster dobbelt: tiden står tom, og en anden kunde, der gerne ville have haft den, fik den ikke. For klinikker, saloner og håndværkere er det en af de mest direkte måder at tabe omsætning på. Automatiske påmindelsesopkald angriber problemet ét skridt tidligere — før tiden går tabt.</p>
      <h2>Hvorfor et opkald virker anderledes end en SMS</h2>
      <p>En SMS-påmindelse er god og billig, og den bør du blive ved med at sende. Men den er nem at læse og glemme, og den er svær at svare på, hvis man skal flytte tiden. Et kort opkald dagen før giver kunden mulighed for at sige "det passer faktisk ikke" — og få en ny tid med det samme. Det er den kombination, der får udeblivelserne ned: SMS ved booking, opkald dagen før.</p>
      <h2>Sådan forløber et påmindelsesopkald</h2>
      <ol>
        <li>Kl. 09:15 dagen før ringer AI'en morgendagens aftaler igennem.</li>
        <li>"Hej Mette, det er klinikkens digitale assistent. Jeg ringer om din tid i morgen kl. 10 — passer den stadig?"</li>
        <li>Passer den: tak, og en kort bekræftelse.</li>
        <li>Passer den ikke: AI'en tilbyder to nye tider, flytter aftalen og sender en ny SMS.</li>
        <li>Den ledige tid kan tilbydes til næste kunde på ventelisten.</li>
        <li>Svarer kunden ikke: en SMS med mulighed for at ringe tilbage, eller et nyt forsøg senere.</li>
      </ol>
      <p>Du kan læse hele samtalen ord for ord på <a href="/ind-og-udgaaende-opkald">siden om ind- og udgående opkald</a>.</p>
      <h2>Klinikker: hvor udeblivelserne koster mest</h2>
      <p>For tandlæger, fysioterapeuter og kiropraktorer er en tom behandlingstid ren tabt omsætning, fordi personalet er der alligevel. Her giver påmindelsesopkald mest — især for nye patienter, lange behandlinger og tider booket langt frem. Kombiner med <a href="/blog/totalloesning-klinik">AI-booking til klinikker</a>, så både booking og påmindelse sker automatisk. Husk, at opkaldet ikke skal nævne helbredsoplysninger — "din tid hos os i morgen" er nok.</p>
      ${CTA_TRIAL_DA}
      <h2>Håndværkere: undgå forgæves kørsel</h2>
      <p>For en håndværker er udeblivelsen en kunde, der ikke er hjemme. Et bekræftelsesopkald dagen før ("vi kommer i morgen mellem 8 og 10 — er der nogen hjemme?") sparer en forgæves tur og kan samtidig tage imod adgangsoplysninger. Se <a href="/blog/ai-telefonassistent-haandvaerker">AI til håndværkere</a>.</p>
      <h2>Gode regler for påmindelser</h2>
      <ul>
        <li><strong>Ring i dagtimerne</strong>, typisk formiddag dagen før.</li>
        <li><strong>Hold det kort</strong> — under et minut, hvis tiden passer.</li>
        <li><strong>Sig hvem du ringer fra</strong>, og at det er en digital assistent.</li>
        <li><strong>Ingen salg i påmindelsen.</strong> En påmindelse om en booket tid er service; tilbud kræver samtykke. Se <a href="/blog/inbound-outbound-forskel">reglerne for udgående AI-opkald</a>.</li>
        <li><strong>Mål effekten</strong>: antal udeblivelser pr. måned før og efter, og hvor mange ledige tider der blev genbooket.</li>
      </ul>
    `,
    content_en: `
      <p>A no-show costs twice: the slot stays empty, and another customer who wanted it didn't get it. For clinics, salons and tradespeople it is one of the most direct ways to lose revenue. Automatic reminder calls tackle the problem one step earlier — before the slot is lost.</p>
      <h2>Why a call works differently from a text</h2>
      <p>A text reminder is good and cheap, and you should keep sending it. But it is easy to read and forget, and awkward to reply to if you need to move the appointment. A short call the day before lets the customer say "actually, that doesn't work" — and get a new time on the spot. That combination is what brings no-shows down: a text when booking, a call the day before.</p>
      <h2>How a reminder call goes</h2>
      <ol>
        <li>At 9:15 am the day before, the AI calls through tomorrow's appointments.</li>
        <li>"Hi Mette, this is the clinic's digital assistant. I'm calling about your appointment tomorrow at 10 — does it still suit you?"</li>
        <li>If it does: thanks, and a short confirmation.</li>
        <li>If not: the AI offers two new times, moves the appointment and sends a new text.</li>
        <li>The free slot can be offered to the next customer on the waiting list.</li>
        <li>If the customer doesn't answer: a text with the option to call back, or another attempt later.</li>
      </ol>
      <p>You can read the full conversation word for word on the <a href="/ind-og-udgaaende-opkald">inbound and outbound calls page</a>.</p>
      <h2>Clinics: where no-shows cost the most</h2>
      <p>For dentists, physiotherapists and chiropractors an empty treatment slot is pure lost revenue, because the staff are there anyway. Reminder calls pay off most here — especially for new patients, long treatments and appointments booked far ahead. Combine with <a href="/blog/totalloesning-klinik">AI booking for clinics</a> so both booking and reminders happen automatically. Remember that the call should not mention health information — "your appointment with us tomorrow" is enough.</p>
      ${CTA_TRIAL_EN}
      <h2>Tradespeople: avoid wasted trips</h2>
      <p>For a tradesperson the no-show is a customer who isn't home. A confirmation call the day before ("we're coming tomorrow between 8 and 10 — will someone be home?") saves a wasted trip and can collect access details at the same time. See <a href="/blog/ai-telefonassistent-haandvaerker">AI for tradespeople</a>.</p>
      <h2>Good rules for reminders</h2>
      <ul>
        <li><strong>Call during the day</strong>, typically the morning before.</li>
        <li><strong>Keep it short</strong> — under a minute if the time suits.</li>
        <li><strong>Say who you are calling from</strong>, and that it is a digital assistant.</li>
        <li><strong>No selling in the reminder.</strong> A reminder about a booked appointment is service; offers require consent. See <a href="/blog/inbound-outbound-forskel">the rules for outbound AI calls</a>.</li>
        <li><strong>Measure the effect</strong>: no-shows per month before and after, and how many free slots were rebooked.</li>
      </ul>
    `,
    meta_title_en: 'Automatic Reminder Calls: Fewer No-Shows with AI | AIBooking.dk',
    meta_title_da: 'Automatiske påmindelsesopkald: færre udeblivelser | AIBooking.dk',
    meta_description_en: 'How AI reminder calls work, why a call beats a text alone, how to refill cancelled slots, and good rules for clinics and tradespeople.',
    meta_description_da: 'Sådan virker AI-påmindelsesopkald, hvorfor et opkald slår en SMS alene, hvordan aflyste tider fyldes ud, og gode regler for klinikker og håndværkere.',
    keywords: ['påmindelsesopkald', 'udeblivelser', 'no-show', 'ai outbound', 'automatisk påmindelse klinik'],
    image_url: '/blog/covers/outbound-ai-opkald-paamindelser.svg',
    published: true,
    published_at: '2026-05-24',
    updated_at: UPDATED,
    related: ['totalloesning-klinik', 'inbound-outbound-forskel', 'komplet-ai-automatisering-widget-telefon-booking'],
    faq: [
      {
        question_da: 'Hvornår skal påmindelsesopkaldet ringe?',
        answer_da: 'Typisk formiddagen dagen før aftalen. Så er der tid til at flytte tiden og tilbyde den ledige tid til en anden.',
        question_en: 'When should the reminder call be made?',
        answer_en: 'Typically the morning before the appointment. That leaves time to move it and offer the free slot to someone else.',
      },
      {
        question_da: 'Kan kunden flytte sin tid i opkaldet?',
        answer_da: 'Ja. AI’en tilbyder nye ledige tider, flytter aftalen i kalenderen og sender en ny SMS-bekræftelse.',
        question_en: 'Can the customer move the appointment during the call?',
        answer_en: 'Yes. The AI offers new free slots, moves the appointment in the calendar and sends a new text confirmation.',
      },
    ],
  },
  {
    id: 'ai-widget-gdpr-danske-virksomheder',
    slug: 'ai-widget-gdpr-danske-virksomheder',
    categorySlug: 'ai-total-solution',
    title_en: 'AI Receptionist, GDPR and the AI Act: What Danish Businesses Need to Know',
    title_da: 'AI-receptionist, GDPR og AI-forordningen: Det skal danske virksomheder vide',
    excerpt_en: 'An AI that answers calls or chats processes personal data — and from August 2026 it must say it is an AI. The rules in plain language, and the questions to put to your provider.',
    excerpt_da: 'En AI, der tager opkald eller chatter, behandler personoplysninger — og fra august 2026 skal den sige, at den er en AI. Reglerne i et klart sprog, og de spørgsmål du skal stille din udbyder.',
    content_da: `
      <p>Når en AI-receptionist tager telefonen, eller en AI-widget på hjemmesiden tager imod en booking, behandler den personoplysninger: navn, telefonnummer, måske en adresse og et ærinde. Det er ikke en grund til at lade være — men en grund til at gøre det rigtigt. Her er de regler, der gælder i 2026, forklaret uden juristsprog. Artiklen er generel information, ikke juridisk rådgivning.</p>
      <h2>1. GDPR: de samme regler som for en kontaktformular</h2>
      <ul>
        <li><strong>Formål og grundlag:</strong> Du må behandle oplysningerne for at håndtere henvendelsen og bookingen. Brug dem ikke til andet uden et nyt grundlag.</li>
        <li><strong>Dataminimering:</strong> Spørg kun om det, der er nødvendigt. En frisør har ikke brug for et CPR-nummer.</li>
        <li><strong>Databehandleraftale:</strong> Udbyderen af AI'en behandler data på dine vegne og skal have en databehandleraftale med dig.</li>
        <li><strong>Opbevaring og sletning:</strong> Aftal, hvor længe samtaler, optagelser og transskriptioner gemmes.</li>
        <li><strong>Overførsel uden for EU:</strong> Spørg, hvor data behandles. Behandling i EU er det enkleste.</li>
        <li><strong>Oplysningspligt:</strong> Beskriv brugen af AI og optagelse i din privatlivspolitik.</li>
      </ul>
      <h2>2. Optagelse af telefonsamtaler</h2>
      <p>Mange AI-løsninger optager og transskriberer opkald, så du kan se, hvad der blev aftalt. Datatilsynet har en vejledning om optagelse af telefonsamtaler: du skal have et lovligt grundlag, fx en legitim interesse i dokumentation, der vejer tungere end kundens interesse i ikke at blive optaget, og du skal oplyse om optagelsen. Er der følsomme oplysninger i samtalen — fx helbred — gælder strengere regler. Sig derfor i velkomsten, at samtalen optages, og sæt AI'en op til ikke at spørge ind til helbredsforhold, medmindre det er nødvendigt.</p>
      <h2>3. AI-forordningen: sig, at det er en AI</h2>
      <p>EU's AI-forordning (forordning 2024/1689) indeholder i artikel 50 krav om gennemsigtighed, som gælder fra <strong>2. august 2026</strong>: AI-systemer, der interagerer direkte med mennesker, skal udformes, så personerne informeres om, at de interagerer med et AI-system, medmindre det er åbenlyst. En AI-receptionist eller chatbot er ikke en højrisiko-AI, men den er omfattet af dette krav. EU's "digitale omnibus" fra sommeren 2026 udskød reglerne for højrisiko-AI, men ifølge juridiske analyser ikke dette krav.</p>
      <p>I praksis: velkomsten skal sige noget i retning af "Du taler med [virksomhedens] digitale assistent". Det er også det, kunderne reagerer bedst på.</p>
      ${CTA_TRIAL_DA}
      <h2>4. Udgående opkald og markedsføring</h2>
      <p>Ringer AI'en ud, gælder også markedsføringsloven. Automatiserede opkald med henblik på direkte markedsføring kræver forudgående samtykke. Påmindelser om bookede tider er service. Se <a href="/blog/inbound-outbound-forskel">reglerne for udgående AI-opkald</a>.</p>
      <h2>Spørgsmål til din udbyder</h2>
      <ol>
        <li>Hvor behandles og opbevares samtaledata — i EU?</li>
        <li>Har I en standard databehandleraftale, og hvilke underdatabehandlere bruger I?</li>
        <li>Hvor længe gemmes optagelser og transskriptioner, og kan jeg ændre det?</li>
        <li>Kan en kundes data findes og slettes efter anmodning?</li>
        <li>Er data krypteret under overførsel og opbevaring?</li>
        <li>Kan jeg selv bestemme velkomsten, så AI'en oplyser, at den er en AI, og at samtalen optages?</li>
        <li>Bruges mine kunders samtaler til at træne jeres eller andres modeller?</li>
      </ol>
      <h2>Sådan håndterer Aibooking.dk det</h2>
      <p>Data behandles i EU med krypteret opbevaring, aftalte sletteregler og databehandleraftale. Optagelser og transskriptioner er kun tilgængelige for jer, og du bestemmer selv ordlyden af velkomsten. Læs <a href="/privatlivspolitik">vores privatlivspolitik</a>, eller se hvordan det spiller sammen med teknologien i <a href="/blog/nyeste-ai-teknologi-2026">den nyeste AI-teknologi i 2026</a>.</p>
    `,
    content_en: `
      <p>When an AI receptionist answers the phone, or an AI widget on your website takes a booking, it processes personal data: name, phone number, perhaps an address and a reason for contact. That is no reason not to do it — but a reason to do it properly. Here are the rules that apply in 2026, explained without legal jargon. This article is general information, not legal advice.</p>
      <h2>1. GDPR: the same rules as for a contact form</h2>
      <ul>
        <li><strong>Purpose and basis:</strong> You may process the data to handle the request and the booking. Don't use it for anything else without a new basis.</li>
        <li><strong>Data minimisation:</strong> Ask only for what is necessary. A hairdresser doesn't need a national ID number.</li>
        <li><strong>Data processing agreement:</strong> The AI provider processes data on your behalf and must have a data processing agreement with you.</li>
        <li><strong>Storage and deletion:</strong> Agree how long conversations, recordings and transcripts are kept.</li>
        <li><strong>Transfers outside the EU:</strong> Ask where data is processed. Processing in the EU is simplest.</li>
        <li><strong>Duty to inform:</strong> Describe the use of AI and recording in your privacy policy.</li>
      </ul>
      <h2>2. Recording phone calls</h2>
      <p>Many AI solutions record and transcribe calls so you can see what was agreed. The Danish Data Protection Agency has guidance on recording phone calls: you need a lawful basis, e.g. a legitimate interest in documentation that outweighs the caller's interest in not being recorded, and you must inform about the recording. If the conversation contains sensitive data — e.g. health — stricter rules apply. So say in the greeting that the call is recorded, and set the AI up not to ask about health matters unless necessary.</p>
      <h2>3. The AI Act: say it is an AI</h2>
      <p>The EU AI Act (Regulation 2024/1689) contains transparency requirements in Article 50 that apply from <strong>2 August 2026</strong>: AI systems that interact directly with people must be designed so that those people are informed they are interacting with an AI system, unless this is obvious. An AI receptionist or chatbot is not high-risk AI, but it is covered by this requirement. The EU's "digital omnibus" from summer 2026 postponed the rules for high-risk AI, but according to legal analyses not this requirement.</p>
      <p>In practice: the greeting should say something like "You are speaking with [business]'s digital assistant". That is also what customers respond to best.</p>
      ${CTA_TRIAL_EN}
      <h2>4. Outbound calls and marketing</h2>
      <p>If the AI calls out, the Marketing Practices Act also applies. Automated calls for direct marketing require prior consent. Reminders about booked appointments are service. See <a href="/blog/inbound-outbound-forskel">the rules for outbound AI calls</a>.</p>
      <h2>Questions for your provider</h2>
      <ol>
        <li>Where is conversation data processed and stored — in the EU?</li>
        <li>Do you have a standard data processing agreement, and which sub-processors do you use?</li>
        <li>How long are recordings and transcripts kept, and can I change it?</li>
        <li>Can a customer's data be found and deleted on request?</li>
        <li>Is data encrypted in transit and at rest?</li>
        <li>Can I decide the greeting myself, so the AI says it is an AI and that the call is recorded?</li>
        <li>Are my customers' conversations used to train your or others' models?</li>
      </ol>
      <h2>How Aibooking.dk handles it</h2>
      <p>Data is processed in the EU with encrypted storage, agreed deletion rules and a data processing agreement. Recordings and transcripts are only available to you, and you decide the wording of the greeting yourself. Read <a href="/privatlivspolitik">our privacy policy</a>, or see how it fits with the technology in <a href="/blog/nyeste-ai-teknologi-2026">the latest AI technology in 2026</a>.</p>
    `,
    meta_title_en: 'AI Receptionist, GDPR & the AI Act | AIBooking.dk',
    meta_title_da: 'AI-receptionist, GDPR og AI-forordningen | AIBooking.dk',
    meta_description_en: 'GDPR, call recording and the AI Act transparency rule from August 2026 explained for AI receptionists and chatbots — plus 7 questions for your provider.',
    meta_description_da: 'GDPR, optagelse af opkald og AI-forordningens oplysningskrav fra august 2026 forklaret for AI-receptionister og chatbots — plus 7 spørgsmål til udbyderen.',
    keywords: ['ai gdpr', 'ai-forordningen', 'ai act chatbot', 'gdpr ai-receptionist', 'optagelse af telefonsamtaler', 'ai widget gdpr'],
    image_url: '/blog/covers/ai-widget-gdpr-danske-virksomheder.svg',
    published: true,
    published_at: '2026-04-22',
    updated_at: UPDATED,
    related: ['nyeste-ai-teknologi-2026', 'inbound-outbound-forskel', 'ai-telefonpasning-dansk-ai-receptionist'],
    faq: [
      {
        question_da: 'Er en AI-receptionist en højrisiko-AI?',
        answer_da: 'Normalt ikke. Men den er omfattet af AI-forordningens gennemsigtighedskrav i artikel 50, som gælder fra 2. august 2026: kunderne skal vide, at de taler med en AI.',
        question_en: 'Is an AI receptionist high-risk AI?',
        answer_en: 'Normally not. But it is covered by the AI Act’s transparency requirement in Article 50, which applies from 2 August 2026: customers must know they are talking to an AI.',
      },
      {
        question_da: 'Må AI’en optage telefonsamtaler?',
        answer_da: 'Det kræver et lovligt grundlag, fx legitim interesse i dokumentation, og at du oplyser om optagelsen. Følsomme oplysninger kræver ekstra omhu. Se Datatilsynets vejledning om optagelse af telefonsamtaler.',
        question_en: 'May the AI record phone calls?',
        answer_en: 'It requires a lawful basis, e.g. a legitimate interest in documentation, and that you inform about the recording. Sensitive data requires extra care. See the Danish Data Protection Agency’s guidance on recording phone calls.',
      },
    ],
    sources: [
      SRC_AI_ACT,
      { title: 'Optagelse af telefonsamtaler (vejledning)', publisher: 'Datatilsynet', url: 'https://www.datatilsynet.dk/Media/638477264404280979/Optagelse%20af%20telefonsamtaler.pdf', date: '2024-04' },
      { title: 'Markedsføringsloven (lov nr. 426 af 3. maj 2017), § 10', publisher: 'Retsinformation', url: 'https://www.retsinformation.dk/eli/lta/2017/426', date: '2017-05-03' },
    ],
  },
];
