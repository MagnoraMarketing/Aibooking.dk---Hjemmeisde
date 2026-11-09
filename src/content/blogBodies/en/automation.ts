// English article text for the posts in src/content/blogPosts/automation.ts, keyed by slug.
// Loaded only on blog post pages (see ../index.ts); the rest of each post stays in the cluster file.

const CTA_TRIAL_EN = `<div class="blog-cta"><strong>Let the AI book for you</strong><p>Connect your calendar, forward your number and watch the bookings come in for 7 days — free and without a credit card.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/demo">Book a demo</a></div></div>`;

export default {
  'komplet-ai-automatisering-widget-telefon-booking': `
      <p>A booking is rarely a single action. The customer calls or writes, you find a time, you confirm it, you remind them, the customer moves it, and someone has to fill the gap. <strong>Automatic booking with AI</strong> means the whole chain can be handled without a member of staff touching it — across phone, website and text messages.</p>
      <h2>The booking life cycle — and what the AI does</h2>
      <div class="blog-table"><table><thead><tr><th>Step</th><th>Manually today</th><th>With AI</th></tr></thead><tbody>
        <tr><td>Enquiry</td><td>Phone, email, contact form</td><td>The AI answers on the phone and in the widget immediately</td></tr>
        <tr><td>Find a time</td><td>Check the calendar, suggest times</td><td>Sees only genuinely free slots and suggests two or three</td></tr>
        <tr><td>Registration</td><td>Type in name, number, service</td><td>Written straight into the calendar</td></tr>
        <tr><td>Confirmation</td><td>Send an email or text</td><td>Text/email sent automatically</td></tr>
        <tr><td>Reminder</td><td>Remember to call/write</td><td>Text and optionally a call the day before</td></tr>
        <tr><td>Rescheduling and cancellation</td><td>New call, new round</td><td>The customer calls or writes; the AI moves the appointment</td></tr>
        <tr><td>Gap in the calendar</td><td>Often stays empty</td><td>Can be offered to the next customer on the waiting list</td></tr>
      </tbody></table></div>
      <h2>Calendar integration: it has to work</h2>
      <p>AI booking stands or falls with the integration. It must read and write in the calendar you already use — Google Calendar, Outlook/Microsoft 365 or an industry system — so you don't have two calendars to keep track of.</p>
      <ul>
        <li><strong>No double bookings:</strong> the AI checks availability at the moment it books, not only when it suggested the time.</li>
        <li><strong>Duration per service:</strong> a consultation is 30 minutes, a treatment 60. The AI needs to know.</li>
        <li><strong>Resources:</strong> the right therapist, fitter or room.</li>
        <li><strong>Buffers and travel:</strong> time between appointments, or driving time for tradespeople.</li>
        <li><strong>Rules:</strong> e.g. "new customers only in the morning" or "keep urgent slots free until 10 am".</li>
      </ul>
      <h2>Changes and cancellations</h2>
      <p>This is where most time is lost manually. With AI the customer can call or write "I can't make Thursday", and the AI finds the appointment, offers a new time and updates the calendar. You can set rules like "cancellations later than 24 hours before are logged as late", and the AI can tell the customer about your cancellation policy. Combined with <a href="/blog/outbound-ai-opkald-paamindelser">reminder calls the day before</a>, you catch cancellations while there is still time to give the slot to someone else.</p>
      ${CTA_TRIAL_EN}
      <h2>One booking engine, several channels</h2>
      <p>Customers choose how to get in touch. Some call, others click on the website, and many do both. When the same AI is behind the <a href="/ai-receptionist">phone</a> and the <a href="/widget">website widget</a>, the customer gets the same answers and the same free slots — and you see all bookings and conversations in one place in the dashboard.</p>
      <h2>How much admin disappears?</h2>
      <p>Count for a week: how many minutes go on taking bookings, moving appointments, sending confirmations and chasing no-shows? For many small businesses it is one to two hours a day. See how to turn that into money in the <a href="/blog/roi-ai-automatisering-virksomheder">guide to the ROI of AI automation</a>.</p>
      <h2>Industry examples</h2>
      <ul>
        <li><strong>Clinics and salons:</strong> booking, rescheduling and reminders; see <a href="/blog/totalloesning-klinik">AI booking for clinics and salons</a>.</li>
        <li><strong>Tradespeople:</strong> inspections and service visits in the right fitter's calendar; see <a href="/blog/ai-telefonassistent-haandvaerker">AI for tradespeople</a>.</li>
        <li><strong>Offices:</strong> introductory meetings with a Teams or Zoom link; see <a href="/blog/ai-telefonassistent-kontor-administration">AI for offices</a>.</li>
        <li><strong>Webshops:</strong> advice, fittings or collection; see <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI for webshops</a>.</li>
      </ul>
      <p>See which systems can be connected on <a href="/integrationer">integrations</a>.</p>
    `,
  'roi-ai-automatisering-virksomheder': `
      <p>Many articles about AI promise "up to 80% savings" without showing the calculation. We don't. Instead you get a model with four items that you can work through with your own numbers in fifteen minutes. If the result is negative, AI is not a good investment for you right now — and that is a useful answer too.</p>
      <h2>Item 1: Time freed up</h2>
      <p>During an ordinary week, count how many minutes go on answering the phone, answering the same questions, finding slots and sending confirmations.</p>
      <div class="blog-callout"><strong>Formula:</strong> minutes per week ÷ 60 × hourly cost of the person doing it today × 4.3 weeks = value per month</div>
      <p>Use the real hourly cost including pension and holiday pay. Only count the time the AI can realistically take over — typically bookings and recurring questions, not advice.</p>
      <h2>Item 2: Calls and enquiries lost today</h2>
      <p>How many calls go unanswered, and how many of those do you never reach again? How many contact forms never become a customer because the reply came too late?</p>
      <div class="blog-callout"><strong>Formula:</strong> lost enquiries per month × share that would have become customers × value of a customer (contribution margin, not revenue)</div>
      <p>Be conservative with the share. Not everyone who calls would have bought.</p>
      <h2>Item 3: Fewer no-shows</h2>
      <div class="blog-callout"><strong>Formula:</strong> no-shows per month × share caught by reminders and rebooked × value of a slot</div>
      <p>Only relevant if you have appointments in a calendar. Read more in <a href="/blog/outbound-ai-opkald-paamindelser">automatic reminder calls</a>.</p>
      <h2>Item 4: The cost</h2>
      <p>Monthly subscription, any extra minutes, and setup spread over e.g. 12 months. At Aibooking.dk it is DKK 999, 2,499 or 5,999 per month depending on talk time; setup is optional. See <a href="/blog/hvad-koster-en-ai-receptionist">what an AI receptionist costs</a>.</p>
      ${CTA_TRIAL_EN}
      <h2>A worked example (illustrative numbers)</h2>
      <p>A physiotherapy clinic with three therapists:</p>
      <div class="blog-table"><table><thead><tr><th>Item</th><th>Assumption</th><th>Per month</th></tr></thead><tbody>
        <tr><td>Time freed</td><td>4 hours/week × DKK 300/hour × 4.3</td><td>DKK 5,160</td></tr>
        <tr><td>Lost calls</td><td>20 calls × 25% × DKK 400 contribution</td><td>DKK 2,000</td></tr>
        <tr><td>No-shows</td><td>8 no-shows × 40% rebooked × DKK 500</td><td>DKK 1,600</td></tr>
        <tr><td>Cost</td><td>Professional</td><td>−DKK 2,499</td></tr>
        <tr><td><strong>Net</strong></td><td></td><td><strong>DKK 6,261</strong></td></tr>
      </tbody></table></div>
      <p>The numbers are illustrative — they were not measured at a particular customer. The point is the method: replace each assumption with your own number.</p>
      <h2>What the calculation doesn't capture</h2>
      <ul>
        <li><strong>Focus:</strong> fewer interruptions mean better work, but that is hard to price.</li>
        <li><strong>Customer experience:</strong> answers in seconds instead of tomorrow.</li>
        <li><strong>Insight:</strong> transcripts show what customers actually ask about.</li>
        <li><strong>Risk:</strong> a badly configured AI can also cost customers. So: test, read transcripts and adjust.</li>
      </ul>
      <h2>Measure it during the trial</h2>
      <p>The best ROI calculation is one based on real data. During the free trial you can see answered calls, bookings and call length in the dashboard, and use them instead of assumptions. See how to get started in the <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">step-by-step guide</a>.</p>
    `,
  'kom-i-gang-ai-automatisering-trin-for-trin': `
      <p>Most AI projects go wrong because they start too broad. What works is the opposite: one channel, one clear purpose, real data and a week of tuning. Here are the seven steps we use ourselves when a new business gets started.</p>
      <h2>Step 1: Pick one task</h2>
      <p>Start with what hurts most. For most businesses that is missed calls after hours or when the line is busy. Wait with outbound calls and webshop integration until the first task is running.</p>
      <h2>Step 2: Write the knowledge document</h2>
      <p>The AI only knows what you tell it. Write on one page:</p>
      <ul>
        <li>Services with duration and price (or what the price depends on).</li>
        <li>Opening hours, address, parking.</li>
        <li>The ten questions customers ask most — with your answers.</li>
        <li>What the AI must <strong>not</strong> answer or promise.</li>
        <li>When to transfer, and to whom. See <a href="/blog/ai-receptionist-viderestilling-til-menneske">the transfer rules</a>.</li>
      </ul>
      <h2>Step 3: Write the greeting</h2>
      <p>Short, friendly and honest: "You are speaking with [business]'s digital assistant. This call is recorded. How can I help?" That meets the requirement to disclose that it is an AI and that the call is recorded. See <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR and the AI Act</a>.</p>
      <h2>Step 4: Connect the calendar</h2>
      <p>Connect Google Calendar, Outlook or your industry system, and set the duration per service and any buffer. Test that the AI only sees free slots.</p>
      ${CTA_TRIAL_EN}
      <h2>Step 5: Call in yourself — ten times</h2>
      <p>Before customers do, call yourself and have colleagues call:</p>
      <ol>
        <li>An ordinary booking.</li>
        <li>A reschedule and a cancellation.</li>
        <li>The three most common questions.</li>
        <li>A question the AI has no answer to.</li>
        <li>An urgent case.</li>
        <li>An angry customer.</li>
        <li>A customer who wants to talk to a person.</li>
        <li>A colleague with a different dialect.</li>
      </ol>
      <h2>Step 6: Forward — gradually</h2>
      <p>Start with forwarding after hours or when busy. You keep your number, and your team still answers when they can. Expand when you are confident.</p>
      <h2>Step 7: Read the transcripts in the first week</h2>
      <p>The most important step. Read every conversation in the first days and ask: Did it understand the request? Did it answer correctly? Did it transfer when it should? Fix the knowledge document every time you find a gap. After a week most gaps are closed.</p>
      <h2>How do you choose a solution?</h2>
      <p>Before step 1 you need to choose a provider. Use the nine requirements in <a href="/blog/ai-telefonpasning-dansk-ai-receptionist">AI phone answering: what to require</a>, listen to <a href="/blog/hvordan-lyder-en-dansk-ai-receptionist">a real Danish AI voice</a>, and compare prices in <a href="/blog/hvad-koster-en-ai-receptionist">what does an AI receptionist cost?</a>. At Aibooking.dk you can do it all yourself in a free trial, or buy setup, where we take steps 2–6 with you in an onboarding meeting.</p>
    `,
  'totalloesning-klinik': `
      <p>A dentist, a physiotherapist, a hairdresser and a nail technician have one thing in common: when they work, they can't answer the phone. And when they do, they interrupt a client in the chair. AI booking solves this by taking both calls and website bookings — and by making sure booked appointments are actually used.</p>
      <h2>Three channels, one calendar</h2>
      <ul>
        <li><strong>Phone:</strong> the AI takes calls during treatments, over lunch and after closing, and books directly in the calendar. See <a href="/blog/ai-indgaaende-opkald">AI for inbound calls</a>.</li>
        <li><strong>Website:</strong> a chat and voice widget answers questions about treatments and prices and books while the client is on the page — even at 10 pm. See <a href="/widget">AI widget</a>.</li>
        <li><strong>Reminders:</strong> a text when booking and a short call the day before, when the client can move the appointment. See <a href="/blog/outbound-ai-opkald-paamindelser">automatic reminder calls</a>.</li>
      </ul>
      <h2>Clinics: new and existing patients</h2>
      <p>Clinics typically have different rules for new and existing patients, different treatment lengths and practitioners with their own calendars. The AI asks what the clinic needs — new or existing, which practitioner, which type of appointment — and books the right duration with the right practitioner.</p>
      <div class="blog-callout"><strong>Health information:</strong> the AI must not give clinical advice, and it should not ask about symptoms beyond what is needed to choose the right appointment. For acute symptoms it should refer to the out-of-hours doctor or 112. Reminders should not mention what the treatment is. See <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR and the AI Act</a>.</div>
      <h2>Salons: many short bookings</h2>
      <p>A hairdresser or beauty salon has many short appointments, regular clients and a high share of bookings that get moved. AI adds the most in three places: the phone is answered during haircuts, clients can book and reschedule in the evening, and gaps in the calendar can be offered to clients on a waiting list.</p>
      ${CTA_TRIAL_EN}
      <h2>No-shows: where the money is</h2>
      <p>For a clinic a no-show is a treatment slot that cannot be sold again. The combination of a text when booking and a call the day before catches many cancellations in time. Measure your own no-shows before and after, and work out the effect with the model in the <a href="/blog/roi-ai-automatisering-virksomheder">ROI guide</a>.</p>
      <h2>What it takes</h2>
      <ol>
        <li>Connect the clinic's or salon's calendar.</li>
        <li>Describe treatments with duration and price.</li>
        <li>Write the rules for new clients, urgent enquiries and what the AI must not answer.</li>
        <li>Forward the phone when busy or after hours.</li>
        <li>Add the widget to the website.</li>
      </ol>
      <p>See more on <a href="/klinik">AI for clinics</a>, or read <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatic booking with AI</a>.</p>
    `,
  'ai-kundeservice': `
      <p>Customer service is where many businesses first feel the pressure: the same questions over and over, phone queues at peak times and emails answered the next day. <strong>AI customer service</strong> can take a large share of the predictable work — but only if it is set up for what it is good at.</p>
      <h2>What AI is good at in customer service</h2>
      <ul>
        <li><strong>Recurring questions:</strong> opening hours, prices, delivery, returns, address.</li>
        <li><strong>Lookups:</strong> order status, free slots, stock — when connected to the systems.</li>
        <li><strong>Booking and changes</strong> in the calendar.</li>
        <li><strong>Triage:</strong> understanding the request and sending it to the right person with a summary.</li>
        <li><strong>Volume:</strong> many conversations at once without a queue, also after hours.</li>
      </ul>
      <h2>Where AI should stop</h2>
      <ul>
        <li>Complaints and upset customers.</li>
        <li>Cases that require judgement or an exception to the rules.</li>
        <li>Compensation, refunds beyond standard rules and negotiation.</li>
        <li>When the customer asks for a person.</li>
      </ul>
      <p>The best AI customer service is the one that quickly recognises it shouldn't solve the case and passes it on without the customer having to repeat themselves. See <a href="/blog/ai-receptionist-viderestilling-til-menneske">when to transfer to a human</a>.</p>
      <h2>Split the work: a practical model</h2>
      <div class="blog-table"><table><thead><tr><th>Request</th><th>AI</th><th>Team</th></tr></thead><tbody>
        <tr><td>"When are you open?"</td><td>Answers</td><td>–</td></tr>
        <tr><td>"Where is my parcel?"</td><td>Looks up and answers</td><td>–</td></tr>
        <tr><td>"Can I get an appointment?"</td><td>Books</td><td>–</td></tr>
        <tr><td>"The item is broken"</td><td>Collects details</td><td>Makes the decision</td></tr>
        <tr><td>"I'm unhappy"</td><td>Transfers with a summary</td><td>Takes the conversation</td></tr>
      </tbody></table></div>
      ${CTA_TRIAL_EN}
      <h2>Phone, chat and email: the same answers everywhere</h2>
      <p>Customers switch channels. They start in the chat and call if they don't get an answer. When the same AI is behind the <a href="/ai-receptionist">phone</a> and the <a href="/widget">chat and voice widget on the website</a>, it gives the same answers from the same knowledge. That is better for the customer and easier to maintain, because you only have one place to update prices and rules.</p>
      <h2>Measure quality — not just volume</h2>
      <ul>
        <li><strong>Resolution rate:</strong> how many requests the AI resolves without handover.</li>
        <li><strong>Correct handovers:</strong> were the right cases passed on?</li>
        <li><strong>Wrong answers:</strong> read a sample of transcripts every week.</li>
        <li><strong>Response time</strong> on the cases the team takes over.</li>
      </ul>
      <p>Running a webshop? Read <a href="/blog/shopify-integration-ai-voice-indgaaende-opkald">AI for webshops</a>. For the broader idea of a "digital colleague", read <a href="/blog/ai-medarbejder">AI employee</a>.</p>
    `,
  'ai-medarbejder': `
      <p>The term <strong>AI employee</strong> is used for an AI that handles defined tasks on behalf of a business — typically answering the phone, responding on the website and booking. It is a useful picture because it forces you to think like an employer: What is the job? What may it decide? Who is its manager?</p>
      <h2>A job description for a digital colleague</h2>
      <div class="blog-callout"><strong>Position:</strong> Digital receptionist (part-time: evenings, weekends and when busy)<br><strong>Tasks:</strong> answer calls and chats, answer recurring questions, book and move appointments, send confirmations, make reminder calls the day before<br><strong>Must not:</strong> promise prices outside the price list, handle complaints, give professional advice<br><strong>Reports to:</strong> the office manager, who reads summaries daily<br><strong>Transfers to:</strong> on-call line for urgent cases; message to the person responsible for everything else</div>
      <p>Write one for your own business. It is the best starting point for the setup.</p>
      <h2>What an AI employee can take over</h2>
      <ul>
        <li><strong>Reception:</strong> receiving calls and transferring. See <a href="/blog/ai-reception-virtuel-receptionist">what is an AI receptionist?</a></li>
        <li><strong>Booking:</strong> the whole chain from enquiry to reminder. See <a href="/blog/komplet-ai-automatisering-widget-telefon-booking">automatic booking with AI</a>.</li>
        <li><strong>First-line customer service</strong> on phone and website.</li>
        <li><strong>Follow-up:</strong> reminders and confirmations.</li>
      </ul>
      <h2>What it can't do</h2>
      <ul>
        <li><strong>Take responsibility.</strong> The business still stands behind what the AI says.</li>
        <li><strong>Use judgement in new situations</strong> it hasn't been instructed on.</li>
        <li><strong>Build relationships</strong> the way a permanent employee does.</li>
        <li><strong>Learn by itself</strong> without someone correcting its instructions.</li>
      </ul>
      ${CTA_TRIAL_EN}
      <h2>Onboarding: like a new employee</h2>
      <ol>
        <li><strong>Introduction:</strong> services, prices, rules and tone — written down.</li>
        <li><strong>Probation:</strong> start with evenings and weekends.</li>
        <li><strong>Feedback:</strong> read summaries daily in the first week and correct the instructions.</li>
        <li><strong>Expansion:</strong> give it more tasks once it handles the first ones well.</li>
      </ol>
      <p>See the concrete steps in <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">getting started in 7 steps</a>.</p>
      <h2>What does an AI employee cost?</h2>
      <p>At Aibooking.dk from DKK 999 per month for 150 minutes of talk time. It takes no holidays and can handle many calls at once, but it doesn't replace a skilled employee's judgement. See <a href="/blog/hvad-koster-en-ai-receptionist">prices and the calculation</a> and <a href="/blog/ai-receptionist-vs-telefonpasning">the comparison with human answering services</a>.</p>
    `,
  'ai-i-danmark': `
      <p>Danish businesses are among the fastest in Europe to adopt AI. According to Eurostat, around 42% of Danish enterprises with at least 10 employees used AI in 2025 — the highest share in the EU, where the average was around 20%. But "using AI" covers everything from an employee drafting emails with a chatbot to fully automated processes.</p>
      <h2>Where Danish SMEs typically start</h2>
      <ol>
        <li><strong>Text and documents:</strong> emails, posts, minutes and translation. Low threshold, but the gain depends on the individual employee.</li>
        <li><strong>Customer contact:</strong> AI on the website and on the phone. Many of the measurable gains are here, because it is about calls and enquiries that would otherwise be lost.</li>
        <li><strong>Administration:</strong> booking, reminders, invoice follow-up.</li>
        <li><strong>Analysis:</strong> what customers ask about, and where processes stall.</li>
      </ol>
      <h2>Why customer contact often pays off first</h2>
      <p>An AI that answers the phone or responds on the website can be measured directly: requests answered, bookings and time saved. That makes it easier to see whether the investment works than with general AI tools. See <a href="/blog/roi-ai-automatisering-virksomheder">the ROI calculation</a>.</p>
      <h2>What a Danish AI solution should offer</h2>
      <ul>
        <li><strong>Danish in speech and text</strong> — with Danish names, addresses and dialects. See <a href="/blog/ai-telefonassistent-dansk-sprog">Danish speech recognition</a>.</li>
        <li><strong>Data in the EU and a data processing agreement.</strong></li>
        <li><strong>Compliance with the AI Act</strong>, including the AI disclosing that it is an AI. See <a href="/blog/ai-widget-gdpr-danske-virksomheder">GDPR and the AI Act</a>.</li>
        <li><strong>Integration with the systems Danish businesses use</strong> — calendars, industry systems and webshops.</li>
        <li><strong>Transparent prices in DKK</strong> and a trial.</li>
      </ul>
      ${CTA_TRIAL_EN}
      <h2>Danish speech technology has had a boost</h2>
      <p>Danish has long been a small language for AI. That is changing: large multilingual models have improved at Danish, and open Danish resources like the CoRal project at the Alexandra Institute provide data and models for Danish speech recognition. See the wider developments in <a href="/blog/nyeste-ai-teknologi-2026">the latest AI technology in 2026</a>.</p>
      <h2>Get started without a big project</h2>
      <p>The most common mistake is starting too big. Pick one task — e.g. missed calls — and measure the effect for a month. See <a href="/blog/kom-i-gang-ai-automatisering-trin-for-trin">getting started in 7 steps</a>, or read <a href="/blog/ai-medarbejder">what an AI employee can take over</a>.</p>
    `,
  'ai-bestiller-bud-levering-uber-direct-just-eat': `
      <p>"Do you deliver?" is a question restaurants, bakeries and shops with local stock hear every day. Answering it usually means someone looks up a price, logs in to a courier service and types in the address. With Aibooking, the AI agent can handle it in the same conversation, on the phone and in the chat on your website.</p>
      <h2>How it works, step by step</h2>
      <ol>
        <li><strong>The address.</strong> The AI asks for the street and number, postcode and city, and repeats the address back.</li>
        <li><strong>Price and time.</strong> It gets a quote from Uber Direct or Just Eat and reads out the price and expected delivery time. If you use both, it gets a price from each and lets the customer choose.</li>
        <li><strong>A clear yes.</strong> The courier is only booked once the customer clearly agrees to that price.</li>
        <li><strong>Confirmation.</strong> The AI only says the courier is booked once the courier service has confirmed it. In chat, the customer can get a link to follow the delivery.</li>
        <li><strong>Status.</strong> If the customer calls or writes again, the AI can say where the delivery is.</li>
      </ol>
      <div class="blog-callout"><strong>Pickup is always from you.</strong> The pickup address is your own and set up in advance. Customers choose where the courier goes, never where it collects.</div>
      <h2>Uber Direct and Just Eat side by side</h2>
      <div class="blog-table"><table><thead><tr><th></th><th>Uber Direct</th><th>Just Eat</th></tr></thead><tbody>
        <tr><td>Price and delivery time before booking</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Price valid for</td><td>15 minutes</td><td>5 minutes</td></tr>
        <tr><td>Delivery status</td><td>Yes, with a tracking link</td><td>Yes</td></tr>
        <tr><td>Cancellation via the AI</td><td>Yes, after the customer confirms</td><td>No, the customer is referred to you</td></tr>
      </tbody></table></div>
      <p>If the price has expired, the AI fetches a new one rather than booking at an old price.</p>
      <h2>Who is it for?</h2>
      <ul>
        <li><strong>Restaurants, pizzerias and takeaways</strong> that want to deliver without their own drivers.</li>
        <li><strong>Bakeries and cafés</strong> taking orders for offices and events.</li>
        <li><strong>Shops and webshops with physical stock</strong> that want to offer same-day local delivery.</li>
      </ul>
      <h2>What it isn't</h2>
      <p>The AI books the courier, not the goods themselves. It does not take payment for the food or products, and it does not send the order to your till. The order is in the conversation in the dashboard, so you can see what was agreed. The services are not available everywhere either, so check that Uber Direct or Just Eat runs in your area first.</p>
      <p>As always with an AI on the phone, it should introduce itself as a digital assistant so customers know who they are talking to, as Article 50 of the EU AI Act requires.</p>
      <h2>Getting started</h2>
      <p>Create an agent, connect Uber Direct or Just Eat in the agent's delivery settings with your own pickup address, and test a call yourself. Read more about <a href="/restaurant">AI for restaurants</a> and <a href="/integrationer">all integrations</a>.</p>
      <div class="blog-cta"><strong>Try it on your own calls</strong><p>Create a free account and test for 7 days. No credit card.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/restaurant">AI for restaurants</a></div></div>`,
} satisfies Record<string, string>;
