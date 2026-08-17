import { useState } from 'react';
import { Zap, Mic, Calendar, Clock, CheckCircle, MessageSquare, PhoneCall, Star, Shield, Globe, ChevronDown, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

interface WidgetPageProps {
  onNavigate: (page: 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy') => void;
}

const faqs = [
  {
    question: 'Hvad er en AI voice widget?',
    answer: 'En AI voice widget er et intelligent chat- og taleinterface, der kan integreres direkte på din hjemmeside. Den giver dine besøgende mulighed for at tale med en AI-assistent, som kan besvare spørgsmål, booke møder og håndtere forespørgsler – automatisk, 24 timer i døgnet.',
  },
  {
    question: 'Hvordan integrerer jeg widgetten på min hjemmeside?',
    answer: 'Det tager under 5 minutter. Du får en enkel JavaScript-kodestump, som du indsætter på din hjemmeside. Widgetten er kompatibel med alle platforme, herunder WordPress, Shopify, Squarespace og egne løsninger.',
  },
  {
    question: 'Kan AI-widgetten booke møder automatisk?',
    answer: 'Ja. Widgetten integrerer direkte med din kalender (Google Calendar, Outlook m.fl.) og sørger for, at nye bookinger lander automatisk, uden at du skal løfte en finger.',
  },
  {
    question: 'Hvad koster AI-widgetten?',
    answer: 'Startpakken koster 999 kr/md og inkluderer 150 minutters taletid. Du betaler kun for aktiv tale – ingen timeløn, ingen binding.',
  },
  {
    question: 'Hvilke sprog understøtter widgetten?',
    answer: 'Widgetten understøtter dansk og en lang række andre sprog. AI-assistenten tilpasser sig automatisk til det sprog, kunden taler.',
  },
  {
    question: 'Er widgetten GDPR-kompatibel?',
    answer: 'Ja. Al data behandles i overensstemmelse med GDPR-reglerne, og du har fuld kontrol over hvilke informationer der opbevares.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border border-slate-200 rounded-2xl overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors list-none">
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
      </summary>
      <div className="px-6 pb-6 text-slate-600 leading-relaxed">{answer}</div>
    </details>
  );
}

const phonePlans = [
  {
    name: 'Demo',
    description: 'Til dig der vil se vores platform og lege selv med opsætning',
    price: '0',
    setup: '0',
    minutes: 'Aktiv i 7 dage',
    features: [
      'Basis stemme-tilpasning',
      'Analyse dashboard',
      'Mulighed for at opgradere til Starterpakken',
    ],
    highlighted: false,
    isDemo: true,
    href: 'https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk',
    cta: 'Prøv gratis',
  },
  {
    name: 'Starter',
    description: 'Perfekt til mindre virksomheder der vil i gang med AI',
    price: '999',
    setup: '1.998',
    minutes: '200 minutter',
    features: [
      '200 AI opkalds-minutter',
      'Basis stemme-tilpasning',
      'Standard support',
      'Analyse dashboard',
      'Email notifikationer',
    ],
    highlighted: false,
    href: 'https://buy.stripe.com/7sY5kC1CX5NF6oI3ET4AU00',
    cta: 'Bestil pakke og book Onboarding',
  },
  {
    name: 'Professional',
    description: 'Ideel til voksende virksomheder med regelmæssige opkald',
    price: '2.499',
    setup: '4.998',
    minutes: '600 minutter',
    features: [
      '600 AI opkalds-minutter',
      'Avanceret stemme-tilpasning',
      'Prioriteret support',
      'Avanceret analyse',
      'Tilpassede integrationer',
      'SMS påmindelser',
      'Kundehistorik',
    ],
    highlighted: true,
    href: 'https://buy.stripe.com/9B628q3L5b7Z3cwgrF4AU01',
    cta: 'Bestil pakke og book Onboarding',
  },
  {
    name: 'Enterprise',
    description: 'For organisationer der kræver maksimal fleksibilitet',
    price: '5.999',
    setup: '11.998',
    minutes: '2000 minutter',
    features: [
      '2000 AI opkalds-minutter',
      'Fuld stemme-tilpasning',
      '24/7 dedikeret support',
      'Tilpasset AI træning',
      'API adgang',
      'Dedikeret success manager',
      'Ubegrænset integrationer',
      'GDPR compliance support',
    ],
    highlighted: false,
    href: 'https://buy.stripe.com/7sYeVcgxRa3VcN64IX4AU02',
    cta: 'Bestil pakke og book Onboarding',
  },
];

function PricingSection() {
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);

  return (
    <section id="priser" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
            <CheckCircle className="w-4 h-4" />
            Transparent prissætning
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Enkle og gennemsigtige priser
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Vælg den løsning der passer til din virksomhed – betal kun for hvad du bruger, uden skjulte gebyrer
          </p>
        </div>

        {/* Widget plan – primary */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">AI Voice Widget</h3>
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Anbefalet startpunkt</span>
          </div>
          <p className="text-slate-800 mb-8 leading-relaxed max-w-3xl font-medium">
            Den hurtigste og billigste måde at automatisere din booking på. Widgetten sidder på din hjemmeside og lader kunder tale eller skrive direkte med din AI-assistent – 24/7, uden menneskelig indgriben.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-7xl font-bold text-slate-900">999</span>
                  <span className="text-2xl text-blue-600 font-semibold">kr/md</span>
                </div>
                <p className="text-slate-700 mb-1 font-medium">Inkluderer 150 minutters taletid (ca. 6,66 kr/minut)</p>
                <p className="text-slate-500 text-sm">Pakken fornyes automatisk når de 150 minutter er brugt</p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://buy.stripe.com/7sY3cu2H14JB00k4IX4AU04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Bestil nu
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://cal.com/ai-booking-mgtx8v/intro-voiceboot-aibooking.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-800 border border-slate-200 px-6 py-3.5 rounded-xl hover:bg-slate-200 transition-all font-semibold"
                  >
                    Book gratis intro
                  </a>
                </div>
              </div>

              <div>
                <ul className="space-y-3">
                  {[
                    'Voice AI-bot – kunder taler direkte med AI\'en',
                    'Besvarer spørgsmål og håndterer bookinger',
                    'Bookinger går direkte i din kalender',
                    '24/7 tilgængelig på din hjemmeside',
                    '150 minutters taletid inkluderet',
                    'Betal kun for aktiv tale – ingen timeløn',
                    'Åben 24/7, 365 dage om året – altid klar',
                    'Håndterer kunder selv når du er optaget',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-800 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white border border-blue-100 rounded-2xl p-5 text-sm text-slate-600 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <span><span className="font-semibold text-slate-900">Taletid:</span> Indkøbt credit gælder i 3 måneder</span>
            <span><span className="font-semibold text-slate-900">Fornyelse:</span> Automatisk ved 150 min. brugt</span>
            <span><span className="font-semibold text-slate-900">Binding:</span> Ingen – opsig når som helst</span>
          </div>
        </div>

        {/* AI Telefonassistent section header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    AI Telefonassistent
                  </h3>
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Udgående & indgående opkald
                  </span>
                </div>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  Har du brug for en AI-assistent der også ringer ud eller modtager telefonopkald direkte? Vælg en af vores skalerbare pakker nedenfor — fra gratis demo til enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phone plans */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">Vælg din pakke</h3>
          <p className="text-slate-600 text-center mb-12">Skræddersyede pakker designet til virksomheder af alle størrelser</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {phonePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 text-white shadow-xl scale-105 border border-blue-500/50'
                  : 'bg-white border border-slate-200/80 hover:border-blue-300/60 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-5 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                    Mest Populær
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h4 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h4>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {plan.price === '0' ? (
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      Gratis
                    </span>
                  ) : (
                    <>
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>kr/md</span>
                    </>
                  )}
                </div>
                <div className={`mt-2 text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.minutes}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? 'bg-blue-500' : 'bg-blue-100'}`}>
                      <CheckCircle className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.setup !== '0' && (
                <div className={`mb-6 pt-6 border-t ${plan.highlighted ? 'border-blue-500' : 'border-slate-200'}`}>
                  <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                    Engangspris på <span className="font-semibold">{plan.setup} kr</span> for opsætning og onboarding
                  </p>
                </div>
              )}

              <div className="flex-grow"></div>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all transform hover:scale-[1.02] text-[15px] ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Efter bestilling modtager du et kalenderlink hvor du kan booke tid til opsætning.
          </p>
        </div>

        {/* Additional prices */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Øvrige priser</h3>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <button
              onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
              className="w-full flex items-center justify-between p-8 md:p-10 hover:bg-slate-50 transition-colors"
            >
              <h4 className="text-xl font-semibold text-slate-900">Se øvrige priser</h4>
              <ChevronDown className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${isAdditionalOpen ? 'rotate-180' : ''}`} />
            </button>

            {isAdditionalOpen && (
              <div className="border-t border-slate-200">
                <div className="p-8 md:p-10 space-y-8">
                  <div className="pb-8 border-b border-slate-200">
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">Opsætning</h4>
                    <p className="text-slate-700 text-lg">
                      2 x abonnementspris <span className="text-slate-600 text-base">(engangsbeløb)</span>
                    </p>
                  </div>
                  <div className="pb-8 border-b border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      Månedlig vedligeholdelse og prompting <span className="text-blue-600 text-sm font-medium">(tilvalg)</span>
                    </h4>
                    <p className="text-slate-600 mb-2 text-sm leading-relaxed">
                      Vi står for vedligeholdelse og hjælper løbende med at optimere prompts, så der gives præcise og relevante svar. Det sparer jer tid og sikrer en endnu bedre oplevelse for jeres kunder og medarbejdere.
                    </p>
                    <p className="text-slate-900 font-semibold text-base">2.995 kr./md</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">Timepris ved ad hoc-opgaver</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Prompting/træning</span>
                        <span className="text-slate-900 font-semibold">695 kr. pr. time</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Udvikling</span>
                        <span className="text-slate-900 font-semibold">1.100 kr. pr. time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

function WidgetPage({ onNavigate }: WidgetPageProps) {
  return (
    <>
      <SEO
        title="AI Voice Widget – Book Møder Med Stemmen | Aibooking.dk"
        description="Integrer Aibooking.dk's AI voice widget på din hjemmeside. Lad kunder booke møder og stille spørgsmål via tale – 24/7 automatisk. Kom i gang på under 5 minutter. Fra 999 kr/md."
        keywords="AI voice widget, voicebot hjemmeside, AI booking widget, stemmebaseret booking, chatbot dansk, automatisk møbebooking, AI receptionist widget, booking automation"
        canonical="https://www.aibooking.dk/widget"
      />
      <Navigation onNavigate={onNavigate} />
      <main className="min-h-screen bg-white pt-20">

        {/* Hero */}
        <section className="py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
                  <Mic className="w-4 h-4" />
                  AI Voice Widget til din hjemmeside
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Lad dine kunder booke møder{' '}
                  <span className="text-blue-600">med stemmen</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Aibooking.dk's AI voice widget integreres direkte på din hjemmeside og håndterer bookinger, spørgsmål og kundehenvendelser automatisk – via tale og tekst, 24 timer i døgnet, 365 dage om året.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://cal.com/ai-booking-mgtx8v/intro-voiceboot-aibooking.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Prøv gratis demo
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="https://buy.stripe.com/7sY3cu2H14JB00k4IX4AU04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all font-semibold"
                  >
                    Bestil nu – 999 kr/md
                  </a>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> Ingen binding</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> Kom i gang på 5 min</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> GDPR-kompatibel</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-slate-100 rounded-3xl blur-2xl opacity-60"></div>
                <img
                  src="/ai-voice-widget.webp"
                  alt="AI voice widget interface – tale og chat booking direkte på din hjemmeside"
                  className="relative w-full rounded-3xl shadow-2xl object-cover"
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <PhoneCall className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Ny booking</p>
                      <p className="text-xs text-slate-500">Via voice widget – nu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Altid tilgængelig</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">&lt; 5 min</div>
                <div className="text-blue-200 text-sm">Til at komme i gang</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150 min</div>
                <div className="text-blue-200 text-sm">Taletid inkluderet</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">999 kr</div>
                <div className="text-blue-200 text-sm">Pr. måned</div>
              </div>
            </div>
          </div>
        </section>

        {/* What is a voice widget */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl blur-2xl opacity-70"></div>
                <img
                  src="/ai-widget-website.webp"
                  alt="AI voice widget integreret på hjemmeside – automatisk booking og kundeservice"
                  className="relative w-full rounded-3xl shadow-2xl object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Hvad er en AI voice widget?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  En <strong>AI voice widget</strong> er et intelligent taleinterface, der sidder diskret på din hjemmeside – typisk som en flydende knap i hjørnet. Når en besøgende klikker, kan de tale direkte med din AI-assistent.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  AI-assistenten forstår naturligt dansk tale, kan svare på spørgsmål om din virksomhed, og booke møder direkte ind i din kalender – <strong>helt uden menneskelig indgriben</strong>.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Det er som at have en receptionist, der aldrig sover, aldrig er syg og altid er professionel – til en brøkdel af prisen.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: Mic, label: 'Talebaseret' },
                    { icon: MessageSquare, label: 'Tekst-chat' },
                    { icon: Calendar, label: 'Auto-booking' },
                    { icon: Globe, label: 'Flersproget' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-semibold text-slate-800 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Sådan virker AI voice widgetten
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Fra installation til automatisk booking – en simpel proces i tre trin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  icon: Zap,
                  title: 'Installer widgetten',
                  description: 'Du får en enkel JavaScript-kodestump. Indsæt den på din hjemmeside – kompatibel med WordPress, Shopify, Wix og alle andre platforme. Ingen teknisk viden kræves.',
                },
                {
                  step: '02',
                  icon: Mic,
                  title: 'Kunder taler med AI',
                  description: 'Besøgende på din hjemmeside klikker på widgetten og taler direkte med din personlige AI-assistent. AI\'en forstår dansk og svarer på spørgsmål om din virksomhed.',
                },
                {
                  step: '03',
                  icon: Calendar,
                  title: 'Bookinger lander automatisk',
                  description: 'Møder og bookinger registreres direkte i din kalender. Du modtager en bekræftelse, og kunden får automatisk en kvittering – uden du skal gøre noget.',
                },
              ].map(({ step, icon: Icon, title, description }) => (
                <div key={step} className="relative bg-white rounded-3xl p-8 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="text-6xl font-bold text-slate-100 mb-4 leading-none">{step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Funktioner der gør forskel
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Alt hvad du har brug for til automatisk booking og kundeservice via AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Mic,
                  title: 'Naturlig talegenkendelse',
                  description: 'Forstår naturligt dansk tale – kunder behøver ikke tale i kommandoer. AI\'en følger samtalen og stiller opfølgende spørgsmål.',
                },
                {
                  icon: Calendar,
                  title: 'Direkte kalenderintegration',
                  description: 'Synkroniserer med Google Calendar, Outlook og andre kalendersystemer. Ingen dobbeltbookinger, ingen manuel registrering.',
                },
                {
                  icon: Clock,
                  title: '24/7 tilgængelighed',
                  description: 'Din AI-assistent arbejder rundt uret – også uden for åbningstid, i weekenden og på helligdage.',
                },
                {
                  icon: MessageSquare,
                  title: 'Tale og tekst',
                  description: 'Kunder kan vælge at tale eller skrive. Widgetten understøtter begge inputformer og svarer på samme måde.',
                },
                {
                  icon: Shield,
                  title: 'GDPR-kompatibel',
                  description: 'Al data behandles sikkert og i overensstemmelse med GDPR. Du har fuld kontrol over dine kunders data.',
                },
                {
                  icon: Globe,
                  title: 'Flersproget AI',
                  description: 'Widgetten understøtter dansk og mange andre sprog. AI\'en tilpasser sig automatisk til det sprog kunden taler.',
                },
                {
                  icon: Zap,
                  title: 'Lynhurtig opsætning',
                  description: 'Fra bestilling til aktiv widget på din hjemmeside tager det under 5 minutter. Ingen udviklere nødvendige.',
                },
                {
                  icon: Star,
                  title: 'Tilpasset din virksomhed',
                  description: 'AI-assistenten kender din virksomhed, dine services og dine åbningstider – svar der passer præcist til din forretning.',
                },
                {
                  icon: PhoneCall,
                  title: 'Betal kun for aktivitet',
                  description: 'Du betaler kun for aktive taletid – ikke for ventetid eller pauser. En langt billigere løsning end en deltidsmedarbejder.',
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Hvem bruger AI voice widgetten?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Perfekt til alle virksomheder, der tager imod bookinger og kundehenvendelser online
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Klinikker', desc: 'Patientbooking automatiseret' },
                { label: 'Håndværkere', desc: 'Opgaver og møder bookes' },
                { label: 'Konsulenter', desc: 'Møder direkte i kalender' },
                { label: 'Saloner', desc: 'Tider bookes automatisk' },
                { label: 'Tandlæger', desc: 'Patienthåndtering 24/7' },
                { label: 'E-handel', desc: 'Kundeservice non-stop' },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="font-bold text-slate-900 mb-1">{label}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-md max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Typisk ROI for en AI voice widget
              </h3>
              <p className="text-slate-600 text-center mb-8 leading-relaxed">
                En deltidsreceptionist koster typisk 15.000-20.000 kr/md. Med AI voice widgetten til 999 kr/md får du <strong>samme funktionalitet</strong> – men 24 timer i døgnet, 7 dage om ugen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-slate-50 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-sm text-slate-600">Besparelse vs. receptionist</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-blue-600 mb-1">0 sek</div>
                  <div className="text-sm text-slate-600">Ventetid for kunder</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Automatiserede bookinger</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Ofte stillede spørgsmål
              </h2>
              <p className="text-xl text-slate-600">
                Alt du vil vide om AI voice widgetten
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
              <div className="px-8 md:px-16 py-16 md:py-20 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Klar til at automatisere din booking?
                </h2>
                <p className="text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed">
                  Kom i gang på under 5 minutter. Book en gratis introduktionssamtale og se, hvordan AI voice widgetten kan transformere din kundehåndtering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://cal.com/ai-booking-mgtx8v/intro-voiceboot-aibooking.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Book gratis intro
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="https://buy.stripe.com/7sY3cu2H14JB00k4IX4AU04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-500/30 text-white border border-white/30 px-8 py-4 rounded-xl hover:bg-blue-500/50 transition-all font-semibold"
                  >
                    Bestil direkte – 999 kr/md
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default WidgetPage;
