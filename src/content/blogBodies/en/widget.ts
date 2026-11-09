// English article text for the posts in src/content/blogPosts/widget.ts, keyed by slug.
// Loaded only on blog post pages (see ../index.ts); the rest of each post stays in the cluster file.

const CTA_WIDGET_EN = `<div class="blog-cta"><strong>Put an AI widget on your website</strong><p>One code snippet, and the AI answers and books on your site — in Danish, by voice or text. Try free for 7 days.</p><div class="blog-cta-actions"><a class="primary" href="/proeveperiode">Try free for 7 days</a><a href="/widget">See AI widget</a></div></div>`;

export default {
  'ai-widget-hjemmeside-komplet-guide': `
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
        <tr><td>What does it cost, and is there a commitment?</td><td>With us the price depends on talk time – see it in the <a href="/prisberegner">price calculator</a>. No commitment, and 7 days free.</td></tr>
      </tbody></table></div>
      <p>For more ways to use AI on your website, read <a href="/blog/ai-til-hjemmeside">AI for your website: 7 ways</a>. See the product on <a href="/widget">AI widget</a>.</p>
    `,
  'ai-til-hjemmeside': `
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
  'ai-widget-vs-kontaktformular': `
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
} satisfies Record<string, string>;
