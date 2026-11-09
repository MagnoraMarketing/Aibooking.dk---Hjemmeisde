// English article text for the posts in src/content/blogPosts/voice.ts, keyed by slug.
// Loaded only on blog post pages (see ../index.ts); the rest of each post stays in the cluster file.

const CTA_TRIAL_EN = `<div class="blog-cta"><strong>Hear a Danish AI voice agent on your own calls</strong><p>Create a free account, forward your number and test for 7 days. No credit card.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/ai-receptionist">See AI phone answering</a></div></div>`;

export default {
  'nyeste-ai-teknologi-2026': `
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
  'hvad-er-en-ai-voice-agent': `
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
  'ai-telefonassistent-dansk-sprog': `
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
  'hvordan-lyder-en-dansk-ai-receptionist': `
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
      <p>A recording shows the voice, but not how it handles <em>your</em> customers. Call our demo line, or start a free trial where the AI learns your services, and call in yourself with the questions your customers usually ask. On the <a href="/ai-receptionist">inbound and outbound calls page</a> you can also read two complete conversations word for word — an inbound call to a plumber and an outbound reminder call for a clinic.</p>
    `,
  'ai-indgaaende-opkald': `
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
  'inbound-outbound-forskel': `
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
      <p>At Aibooking.dk every plan includes both inbound and outbound calls. See <a href="/ai-receptionist">inbound and outbound calls</a> for two complete example conversations.</p>
    `,
  'outbound-ai-opkald-paamindelser': `
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
      <p>You can read the full conversation word for word on the <a href="/ai-receptionist">inbound and outbound calls page</a>.</p>
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
  'ai-widget-gdpr-danske-virksomheder': `
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
} satisfies Record<string, string>;
