// English article text for the posts in src/content/blogPosts/receptionist.ts, keyed by slug.
// Loaded only on blog post pages (see ../index.ts); the rest of each post stays in the cluster file.

const CTA_TRIAL_EN = `<div class="blog-cta"><strong>Try an AI receptionist on your own number</strong><p>Create a free account, forward your number and let the AI take real calls for 7 days. No credit card.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/demo">Book a demo</a></div></div>`;
const CTA_RECEPTIONIST_EN = `<div class="blog-cta"><strong>One AI receptionist for your website and phone</strong><p>See how the AI Voice Widget, AI phone answering and outbound calls work together — with an example from a whole week.</p><div class="blog-cta-actions"><a class="primary" href="/ai-receptionist">See the AI receptionist</a><a href="/proeveperiode">Try free for 7 days</a></div></div>`;

export default {
  'ai-reception-virtuel-receptionist': `
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
  'hvad-koster-en-ai-receptionist': `
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
      <p>Setup and onboarding is an <strong>optional</strong> one-time purchase priced the same as the chosen plan (e.g. DKK 999 for Starter), including one hour of follow-up support. You can also set it up yourself. Ad hoc work costs DKK 695 per hour for prompting/training and DKK 1,100 per hour for development. See current prices on the <a href="/ai-receptionist#priser">AI phone answering page</a>.</p>
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
  'ai-receptionist-vs-telefonpasning': `
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
  'ai-receptionist-viderestilling-til-menneske': `
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
  'sma-virksomheder-telefon-tid-penge': `
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
  'ai-telefonpasning-dansk-ai-receptionist': `
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
  'ai-telefonassistent-haandvaerker': `
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
      <p>On <a href="/ai-receptionist">our inbound and outbound calls page</a> you can see a full call to a plumbing business an hour and a half after closing: the AI asks whether there is water on the floor, chooses a regular appointment over an emergency call-out, books 8:30 the next morning and sends a text. The call takes just over a minute, and the job is ready for the fitter.</p>
      <h2>What it changes day to day</h2>
      <ul>
        <li>You don't return missed calls in the evening.</li>
        <li>Jobs come in with address and description instead of "call me back".</li>
        <li>Fewer wasted trips, because visits are confirmed the day before.</li>
        <li>You can see every enquiry in the dashboard and plan tomorrow.</li>
      </ul>
      <p>Read more on <a href="/haandvaerker">AI for tradespeople</a>, or see <a href="/blog/hvad-koster-en-ai-receptionist">what it costs</a>. A master painter with few large jobs needs something different from a plumber with many small ones — talk to us about your setup in <a href="/demo">a free demo</a>.</p>
    `,
  'ai-telefonassistent-kontor-administration': `
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
  'ai-telefonpasning-uden-for-aabningstid': `
      <p>Your customers call when <em>they</em> have time: after work, once the kids are in bed, on Sunday morning or in the middle of the summer holidays. Those are exactly the hours when nobody answers the phone at a small business. <strong>After-hours AI phone answering</strong> means an AI receptionist takes the calls you would otherwise miss — and you start the day with new bookings in your calendar and a summary of everything else.</p>
      <div class="blog-toc"><strong>In this guide</strong><ol><li><a href="#i-dag">What happens to your after-hours calls today?</a></li><li><a href="#saadan">How after-hours AI phone answering works</a></li><li><a href="#tidspunkter">Evenings, weekends and holidays: three different needs</a></li><li><a href="#regler">What the AI should handle — and what can wait</a></li><li><a href="#akut">Urgent calls</a></li><li><a href="#opsaetning">Setup step by step</a></li><li><a href="#pris">What does it cost?</a></li></ol></div>
      <h2 id="i-dag">What happens to your after-hours calls today?</h2>
      <p>Most small businesses use one of three options, and none of them is great:</p>
      <ul>
        <li><strong>Voicemail.</strong> Many callers hang up without leaving a message, and those who do have to be called back the next day — by which time they may have booked elsewhere.</li>
        <li><strong>The owner's mobile.</strong> The owner takes calls in the evening. It works until you are at the dinner table, on holiday or simply need time off.</li>
        <li><strong>A human answering service.</strong> A friendly person on the line, but often with limited hours, surcharges for evenings and weekends, and usually just a message passed on to you. See the full comparison in <a href="/blog/ai-receptionist-vs-telefonpasning">AI receptionist vs. answering service</a>.</li>
      </ul>
      <h2 id="saadan">How after-hours AI phone answering works</h2>
      <ol>
        <li><strong>You forward only when you are closed.</strong> You keep your number. With your phone provider you set forwarding on a schedule, when busy or when nobody answers after a few rings. During opening hours your team answers as usual.</li>
        <li><strong>The AI introduces itself honestly.</strong> "You are speaking with the salon's digital assistant — we are closed, but I can help you book or take a message." Customers expect it, and the EU AI Act (Article 50) requires it.</li>
        <li><strong>It solves the request.</strong> It answers from your knowledge base (opening hours, prices, address, services), finds a free slot and books straight into Google Calendar, Outlook or Cal.com. It can also move and cancel existing appointments after checking who is calling.</li>
        <li><strong>It takes care of the rest.</strong> Anything that needs you — a quote, a complaint, a question about an ongoing job — becomes a message with name, number and a short summary.</li>
        <li><strong>You read it all the next morning.</strong> Every call is in the dashboard with recording, transcript and summary, so you can decide who to call back first.</li>
      </ol>
      <figure class="blog-figure"><img src="/images/illustrations/call-salon-en.svg" alt="Inbound call at 8:08 PM in the dashboard with recording, summary, booking and transcript" width="1200" height="760" loading="lazy"><figcaption>Tuesday at 8:08 PM, after closing: the call is answered, the appointment booked and the summary ready the next morning.</figcaption></figure>
      <h2 id="tidspunkter">Evenings, weekends and holidays: three different needs</h2>
      <h3>Weekday evenings</h3>
      <p>This is when people call who can't call from work: patients booking a physiotherapist, customers wanting a Saturday haircut, homeowners who finally have time to contact a carpenter. The requests are mostly bookings and simple questions — exactly what an AI receptionist handles best.</p>
      <h3>Weekends</h3>
      <p>At weekends more calls are about something that broke, or about appointments in the coming week. Let the AI book and take messages, and decide in advance what is so urgent it can't wait until Monday (see below).</p>
      <h3>Holidays and the summer shutdown</h3>
      <p>Easter, Christmas and the weeks in summer when much of the country is off. Update the greeting and knowledge base with your holiday dates, so the AI tells callers when you are back and only books appointments after the break. Customers get an answer instead of a phone ringing into nothing.</p>
      ${CTA_TRIAL_EN}
      <h2 id="regler">What the AI should handle — and what can wait</h2>
      <div class="blog-table"><table><thead><tr><th>After-hours request</th><th>The AI</th><th>You, next working day</th></tr></thead><tbody>
        <tr><td>New booking</td><td>Finds a free slot and books</td><td>Nothing — it's in the calendar</td></tr>
        <tr><td>Move or cancel</td><td>Checks who is calling, moves or cancels</td><td>Nothing</td></tr>
        <tr><td>Questions on prices, address, services</td><td>Answers from the knowledge base</td><td>Nothing</td></tr>
        <tr><td>Quote or larger job</td><td>Collects details and takes a message</td><td>Call back with a quote</td></tr>
        <tr><td>Complaint</td><td>Listens, takes a message, promises a call</td><td>Call back yourself</td></tr>
        <tr><td>Urgent issue</td><td>Follows your urgent-call rule</td><td>Depends on the rule</td></tr>
      </tbody></table></div>
      <h2 id="akut">Urgent calls: set a clear rule</h2>
      <p>The most important decision for after-hours answering is what happens to things that can't wait. Write it into the AI's instructions so it never has to guess:</p>
      <ul>
        <li><strong>Tradespeople with an on-call rota:</strong> water damage and power failures go to the on-call phone or are flagged "urgent" with a message to whoever is on call. Everything else is booked or noted for Monday.</li>
        <li><strong>Clinics:</strong> the AI never gives medical advice. For acute symptoms it refers callers to the out-of-hours doctor or the emergency number 112.</li>
        <li><strong>Shops and webshops:</strong> almost nothing is urgent. The AI answers, takes messages and says when you open.</li>
      </ul>
      <p>Read more about <a href="/blog/ai-receptionist-viderestilling-til-menneske">when the AI should hand over to a person</a>.</p>
      ${CTA_RECEPTIONIST_EN}
      <h2 id="opsaetning">Setup step by step</h2>
      <ol>
        <li><strong>Write the greeting</strong> so it says you are closed and what the AI can help with.</li>
        <li><strong>Fill the knowledge base</strong> with opening hours, holiday dates, prices and the questions customers ask — as text, from your website or as a PDF.</li>
        <li><strong>Connect the calendar</strong> (Google Calendar, Outlook/Microsoft 365 or Cal.com) so the AI only sees free slots.</li>
        <li><strong>Decide the urgent-call rule</strong> from the section above.</li>
        <li><strong>Set up forwarding</strong> with your phone provider: outside opening hours, when busy or after, say, four rings.</li>
        <li><strong>Call yourself one evening</strong> and test with your customers' typical requests. Adjust, and repeat after the first week.</li>
      </ol>
      <h2 id="pris">What does after-hours AI phone answering cost?</h2>
      <p>At Aibooking.dk you pay for talk time, not for the time of day. There are no evening or weekend surcharges. Starter costs DKK 999 per month for 150 minutes of talk time. An example: 40 after-hours calls a month at about two minutes each comes to 80 minutes — within Starter. You can try it free for 7 days on your own number. See all packages in <a href="/blog/hvad-koster-en-ai-receptionist">what an AI receptionist costs</a>, and read <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">the nine requirements for AI phone answering</a> before you choose a provider.</p>
    `,
  'ai-telefonpasning-webshop-haandvaerker-klinik-kontor': `
      <p><strong>AI phone answering</strong> is the same technology in every industry: an AI receptionist that takes your calls, answers from your information and books in your calendar. But <em>what</em> it should do depends entirely on who is calling. A webshop customer wants to know where the parcel is. A homeowner with a leaking tap wants a tradesperson out. A patient wants to move an appointment, and a new client wants to speak to a lawyer. Here is how to set up AI phone answering for the four industries we help most often.</p>
      <div class="blog-toc"><strong>In this guide</strong><ol><li><a href="#webshop">Phone answering for webshops</a></li><li><a href="#haandvaerker">AI phone answering for tradespeople</a></li><li><a href="#klinik">AI phone answering for clinics</a></li><li><a href="#kontor">AI phone answering for offices</a></li><li><a href="#faelles">What all four have in common</a></li></ol></div>
      <h2 id="webshop">Phone answering for webshops</h2>
      <p>Webshop customers rarely call to buy — they call because something is unclear: "Where is my parcel?", "Can I swap for another size?", "Do you have it in stock?". The same questions over and over, often in the evening and at weekends when customer service is off.</p>
      <ul>
        <li><strong>The AI handles:</strong> questions on delivery, returns, exchanges and payment from your own policies; product questions; and with Shopify, order status from the order number.</li>
        <li><strong>Stays with you:</strong> complaints, refunds and order changes. The AI takes the case and writes a summary so customer service can act the next morning.</li>
        <li><strong>Good to know:</strong> the AI has read-only access to Shopify and only shares status, shipping and delivery — never names, addresses or payment details.</li>
      </ul>
      <figure class="blog-figure"><img src="/images/illustrations/call-webshop-en.svg" alt="Call to an online store about order status, where the AI looks up the order and answers about delivery and returns" width="1200" height="760" loading="lazy"><figcaption>Sunday morning: the AI looks up order 10482 and also answers the question about returns.</figcaption></figure>
      <p>Read more in <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">Shopify and AI on the phone</a>, or see <a href="/webshop">AI for webshops</a>.</p>
      <h2 id="haandvaerker">AI phone answering for tradespeople</h2>
      <p>For a tradesperson, the phone is the sales department — but it rings while you are up a ladder or have your hands in an installation. The customer with water damage simply calls the next name on the list. AI phone answering takes the call and makes sure you know exactly what is waiting.</p>
      <ul>
        <li><strong>The AI handles:</strong> asks about the job, the address and how urgent it is; books site visits in the calendar; answers questions about your area, hours and prices for standard jobs.</li>
        <li><strong>Stays with you:</strong> the quote. The AI never promises a price for a job it doesn't know, but collects all the details so you can call back well prepared.</li>
        <li><strong>Urgent-call rule:</strong> decide in advance what counts as urgent (water damage, power failure) and whether it is flagged as urgent or transferred to the on-call phone.</li>
      </ul>
      <figure class="blog-figure"><img src="/images/illustrations/phone-craftsman-en.svg" alt="The phone shows an urgent job, a booked site visit and a quote request taken by the AI" width="1200" height="760" loading="lazy"><figcaption>7:45 AM: an urgent job, a site visit in the calendar and a quote request — all with address and details.</figcaption></figure>
      <p>Read the full guide: <a href="/blog/ai-telefonassistent-haandvaerker">AI phone assistant for tradespeople</a>, or see <a href="/haandvaerker">AI for tradespeople</a>.</p>
      ${CTA_RECEPTIONIST_EN}
      <h2 id="klinik">AI phone answering for clinics</h2>
      <p>Dentists, physiotherapists, chiropractors and psychologists usually have a short phone hour when the line is busy, and for the rest of the day staff are with patients. AI phone answering takes appointment calls all day — outside phone hours too.</p>
      <ul>
        <li><strong>The AI handles:</strong> new bookings, moves and cancellations straight in the calendar (after checking who is calling); questions about prices, address, parking and preparation.</li>
        <li><strong>Stays with you:</strong> anything clinical. The AI never gives advice about symptoms or treatment, but takes a message for the practitioner.</li>
        <li><strong>Urgent-call rule:</strong> for acute symptoms the AI refers callers to the out-of-hours doctor or the emergency number.</li>
      </ul>
      <figure class="blog-figure"><img src="/images/illustrations/bookings-clinic-en.svg" alt="The dental practice’s bookings, moves and cancellations from phone and website in the dashboard" width="1200" height="720" loading="lazy"><figcaption>A cancellation on Tuesday at 10:00 — and the slot is booked again from the website shortly after.</figcaption></figure>
      <p>Read more in <a href="/blog/totalloesning-klinik">AI booking for clinics and salons</a>, or see <a href="/klinik">AI for clinics</a>.</p>
      <h2 id="kontor">AI phone answering for offices</h2>
      <p>For lawyers, accountants, estate agents and consultants the phone is the first impression, and it usually rings while everyone is in a meeting. AI phone answering greets callers professionally, books meetings and makes sure the right colleague gets the message.</p>
      <ul>
        <li><strong>The AI handles:</strong> greeting and sorting enquiries, booking initial meetings in the right colleague's calendar and answering practical questions (address, hours, which areas you cover).</li>
        <li><strong>Stays with you:</strong> all advice and anything about specific matters. The AI never discloses information about clients.</li>
        <li><strong>Languages:</strong> international clients can hold the conversation in English, Danish, German, Spanish, French or Portuguese.</li>
      </ul>
      <figure class="blog-figure"><img src="/images/illustrations/call-office-en.svg" alt="Call to a law firm where the AI books an initial meeting and notes what the client needs" width="1200" height="760" loading="lazy"><figcaption>Lunchtime: the AI books an initial meeting and notes what the client needs.</figcaption></figure>
      <p>Read the full guide: <a href="/blog/ai-telefonassistent-kontor-administration">AI phone assistant for the office</a>, or see <a href="/kontor">AI for offices</a>.</p>
      <h2 id="faelles">What all four have in common</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Webshop</th><th>Tradespeople</th><th>Clinic</th><th>Office</th></tr></thead><tbody>
        <tr><td>Typical call</td><td>Order status, returns</td><td>New job, urgent damage</td><td>Booking, cancellation</td><td>New enquiry, meeting</td></tr>
        <tr><td>The AI books</td><td>—</td><td>Site visit</td><td>Treatment</td><td>Initial meeting</td></tr>
        <tr><td>Stays with you</td><td>Refunds, complaints</td><td>Quote</td><td>Clinical questions</td><td>Advice</td></tr>
        <tr><td>Key rule</td><td>Status only, no personal data</td><td>Urgent-call rule</td><td>No medical advice</td><td>No case details</td></tr>
      </tbody></table></div>
      <p>Whatever the industry, the same three things apply: the AI introduces itself as a digital assistant (the EU AI Act requires it), you keep your number and choose when it takes over, and every call is then in the dashboard with recording, transcript and summary. If you also want to answer customers on your website, the AI Voice Widget uses the same knowledge and calendar. It all comes together in the <a href="/ai-receptionist">AI receptionist</a>, and the price is the same for every industry — from DKK 999 per month for 150 minutes. Also read <a href="/blog/ai-telefonpasning-uden-for-aabningstid">after-hours AI phone answering</a>.</p>
    `,
} satisfies Record<string, string>;
