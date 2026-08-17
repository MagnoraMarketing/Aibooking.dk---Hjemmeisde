import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { featuresFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import {
  Phone, Calendar, MessageSquare, Clock, Shield, CheckCircle, Zap,
  Users, Bell, Settings, TrendingUp, DollarSign, PhoneIncoming,
  PhoneOutgoing, Bot, Globe, ArrowRight, Mic, Radio, Volume2,
  MousePointer, LayoutDashboard, LineChart, FileText, RefreshCw, Activity
} from 'lucide-react';

type PageType = 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog' | 'blog-category' | 'blog-post';

interface FeaturesPageProps {
  onNavigate: (page: PageType) => void;
}

function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Funktioner', url: 'https://www.aibooking.dk/funktioner' },
  ]);

  const mainBenefits = [
    { icon: Clock, title: 'Spar 85% af din telefontid', description: 'Frigør værdifuld tid til kerneopgaver', color: 'from-blue-600 to-blue-500' },
    { icon: DollarSign, title: 'ROI på 320%', description: 'Dokumenteret værdi fra dag ét', color: 'from-green-600 to-green-500' },
    { icon: Users, title: '98% kundetilfredshed', description: 'Professionel service døgnet rundt', color: 'from-cyan-600 to-cyan-500' },
    { icon: TrendingUp, title: '+45% flere konverteringer', description: 'Gå aldrig glip af en mulighed igen', color: 'from-slate-700 to-slate-600' }
  ];

  const dashboardFeatures = [
    { icon: Activity, label: 'Realtids opkaldsstatistik', desc: 'Se alle opkald live og historisk' },
    { icon: FileText, label: 'AI-genererede samtalenotater', desc: 'Automatisk opsummering af hvert opkald' },
    { icon: LineChart, label: 'Booking- og konverteringsrate', desc: 'Spor præcis hvor mange opkald ender i booking' },
    { icon: Volume2, label: 'Lyt til optagede samtaler', desc: 'Fuld lydlog tilgængelig altid' },
    { icon: RefreshCw, label: 'Live synkronisering', desc: 'Dashboard opdateres i realtid' },
    { icon: LayoutDashboard, label: 'Tilpasset overblik', desc: 'Konfigurer dit eget dashboard-layout' }
  ];

  const voiceInFeatures = [
    'AI-receptionist besvarer øjeblikkeligt',
    'Forstår alle danske dialekter',
    'Håndterer flere samtidige opkald',
    'Automatisk booking direkte i samtalen',
    'Viderestilling til menneskelig støtte ved behov',
    'Fuldt opkaldsreferat sendt til dig efter samtale'
  ];

  const voiceOutFeatures = [
    'Automatiske bekræftelsesopkald til kunder',
    'Påmindelser om aftaler dagen før',
    'Opfølgning på ubesvarede henvendelser',
    'Re-aktivering af inaktive kunder',
    'Personaliseret AI-stemme i dit brand',
    'Fuld log og optagelse af alle udgående opkald'
  ];

  const widgetBenefits = [
    { icon: Globe, title: 'Virker på alle hjemmesider', desc: 'WordPress, Shopify, Webflow, custom — én linje kode' },
    { icon: Bot, title: 'AI-drevet live chat', desc: 'Besvarer spørgsmål, booker aftaler og konverterer besøgende' },
    { icon: MessageSquare, title: 'Dansk naturlig sprogforståelse', desc: 'Forstår kontekst og nuancer i kundens spørgsmål' },
    { icon: Zap, title: 'Aktiv på under 5 minutter', desc: 'Intet teknisk kendskab kræves — plug and play' },
    { icon: Calendar, title: 'Direkte booking i chatten', desc: 'Kunden kan booke tid uden at forlade siden' },
    { icon: TrendingUp, title: '+45% konverteringsstigning', desc: 'Dokumenteret effekt på salg og leads' }
  ];

  const additionalFeatures = [
    {
      icon: Calendar,
      title: 'Automatisk Kalenderintegration',
      description: 'Synkroniserer problemfrit med Google Calendar, Outlook og alle populære kalendersystemer. Ingen dobbeltbookinger, ingen konflikter — alt opdateres automatisk.',
      benefits: ['Integration med Google Calendar og Outlook', 'Realtidssynkronisering', 'Automatisk check af ledige tider', 'Håndtering af ombookinger og aflysninger']
    },
    {
      icon: MessageSquare,
      title: 'SMS-påmindelser og Bekræftelser',
      description: 'Reducer no-shows med op til 60% gennem automatiske SMS-påmindelser. Kunder modtager bekræftelser og påmindelser tilpasset din virksomheds tone og brand.',
      benefits: ['Automatiske bookingbekræftelser', 'Påmindelser 24 timer før aftaler', 'Mulighed for at ombooke via SMS', 'Brugerdefinerede beskedskabeloner']
    },
    {
      icon: Shield,
      title: 'GDPR-sikker og Dansk Hosting',
      description: 'Alle data håndteres i overensstemmelse med GDPR og opbevares sikkert i Danmark. End-to-end kryptering, fuld transparens og regelmæssige sikkerhedsaudits.',
      benefits: ['Fuld GDPR-overholdelse', 'Data hostes i Danmark', 'End-to-end kryptering', 'Regelmæssige sikkerhedsaudits']
    },
    {
      icon: Settings,
      title: 'Hurtig Opsætning — Under 24 Timer',
      description: 'Kom i gang på under 24 timer med hjælp fra vores dedikerede onboarding-specialist. AI-en trænes til din branche og begynder at tage opkald næsten med det samme.',
      benefits: ['Opsætning på under 24 timer', 'Dedikeret onboarding-specialist', 'Tilpasning til din branche', 'Kontinuerlig optimering']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Funktioner - AI Receptionist, Dashboard, Voice Opkald og Widget | Aibooking.dk"
        description="Udforsk alle funktioner i Aibooking.dk: Komplet AI-dashboard, indgående og udgående AI-stemme opkald, AI chat widget til din hjemmeside og automatisk booking. Prøv gratis."
        keywords="AI funktioner, AI receptionist, AI dashboard, indgående opkald, udgående opkald, AI widget, automatisk booking, AI chat, dansk AI"
        canonical="https://www.aibooking.dk/funktioner"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">Alle Funktioner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Komplet AI-platform for<br />
              <span className="text-blue-600">moderne virksomheder</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Fra intelligent opkaldstyring og udgående AI-voice opkald til et komplet dashboard og en AI-widget
              til din hjemmeside — alt i én platform. Spar tid, øg konverteringer og giv dine kunder
              en professionel oplevelse 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-24 bg-white" id="dashboard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full mb-6">
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-sm font-semibold">Dit Kontrolcenter</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Komplet dashboard —<br />
                <span className="text-blue-600">fuld kontrol over alle interaktioner</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Med Aibooking.dk's dashboard har du altid et præcist overblik over din virksomheds AI-aktivitet.
                Se hvilke opkald der er håndteret, lyt til samtaler, læs AI-genererede notater og spor
                dine bookinger i realtid — alt samlet ét sted.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {dashboardFeatures.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div key={i} className="flex items-start space-x-3 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                      <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{feat.label}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{feat.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a
                href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Se dashboard i aktion</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Dashboard Mock Visual */}
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="bg-slate-800 px-6 py-4 flex items-center space-x-3 border-b border-slate-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-lg px-4 py-1.5 text-xs text-slate-400 ml-4">
                    dashboard.aibooking.dk
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                      <div className="text-xs text-slate-400 mb-1">Opkald i dag</div>
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-xs text-green-400 mt-1">+12% vs i går</div>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                      <div className="text-xs text-slate-400 mb-1">Bookinger</div>
                      <div className="text-2xl font-bold text-white">31</div>
                      <div className="text-xs text-green-400 mt-1">66% konv.</div>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                      <div className="text-xs text-slate-400 mb-1">Svartid</div>
                      <div className="text-2xl font-bold text-white">1.2s</div>
                      <div className="text-xs text-blue-400 mt-1">Gennemsnit</div>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 mb-4">
                    <div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">Seneste opkald</div>
                    <div className="space-y-3">
                      {[
                        { time: '14:32', caller: 'Ukendt nr.', outcome: 'Booket', color: 'bg-green-500', badge: 'bg-green-900 text-green-300' },
                        { time: '14:18', caller: '+45 22 xx xx xx', outcome: 'Info givet', color: 'bg-blue-500', badge: 'bg-blue-900 text-blue-300' },
                        { time: '13:55', caller: '+45 50 xx xx xx', outcome: 'Booket', color: 'bg-green-500', badge: 'bg-green-900 text-green-300' },
                        { time: '13:40', caller: '+45 31 xx xx xx', outcome: 'Videresendt', color: 'bg-yellow-500', badge: 'bg-yellow-900 text-yellow-300' },
                      ].map((call, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${call.color}`}></div>
                            <span className="text-xs text-slate-400">{call.time}</span>
                            <span className="text-sm text-slate-300">{call.caller}</span>
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${call.badge}`}>
                            {call.outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
                    <div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">Ugentlig aktivitet</div>
                    <div className="flex items-end space-x-2 h-16">
                      {[40, 65, 55, 80, 70, 90, 75].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center space-y-1">
                          <div
                            className="w-full bg-blue-600 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                            style={{ height: `${h}%` }}
                          ></div>
                          <div className="text-slate-500 text-xs">{['M','T','O','T','F','L','S'][i]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Live Data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Voice Calls Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="voice-opkald">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Mic className="w-4 h-4" />
              <span className="text-sm font-semibold">AI Voice Opkald</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ind- og udgående AI-stemme opkald<br />
              <span className="text-blue-600">på professionelt niveau</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Vores AI-receptionist taler flydende dansk og lyder som en rigtig person. Den håndterer
              alle typer opkald — fra bookinger og spørgsmål til udgående påmindelser og opfølgning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Indgående */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <PhoneIncoming className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Indgående AI-opkald</h3>
                    <p className="text-slate-500 text-sm">Besvarer alle opkald — 24 timer i døgnet</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 mb-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="relative flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Radio className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 mb-1">Indgående opkald — aktiv</div>
                      <div className="bg-white/10 rounded-2xl px-4 py-3 text-sm mb-2">
                        "Hej, jeg vil gerne booke en tid til en konsultation..."
                      </div>
                      <div className="bg-white/20 rounded-2xl px-4 py-3 text-sm w-fit">
                        "Selvfølgelig! Hvornår passer det bedst for dig?"
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {voiceInFeatures.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Udgående */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <PhoneOutgoing className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Udgående AI-opkald</h3>
                    <p className="text-slate-500 text-sm">Automatiseret kundekommunikation</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 mb-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="relative flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs text-green-200 mb-1">Udgående opkald — sender påmindelse</div>
                      <div className="bg-white/20 rounded-2xl px-4 py-3 text-sm mb-2 w-fit">
                        "Hej Lars, dette er en påmindelse om din aftale i morgen kl. 10.00..."
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-200">Aftale bekræftet af kunden</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {voiceOutFeatures.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6 text-lg">Hør hvordan AI-receptionist lyder — book en gratis demonstration</p>
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>Book gratis demonstration</span>
            </a>
          </div>
        </div>
      </section>

      {/* AI Widget Section */}
      <section className="py-24 bg-white" id="ai-widget">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-6">
              <Bot className="w-4 h-4" />
              <span className="text-sm font-semibold">AI Chat Widget — Nyhed</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              AI-Widget til din hjemmeside —<br />
              <span className="text-cyan-600">konverter besøgende til kunder</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tilføj en intelligent AI-chatassistent til din hjemmeside med én linje kode.
              Widgetten besvarer spørgsmål, håndterer bookinger og guider dine besøgende
              — automatisk, på dansk, døgnet rundt.
            </p>
          </div>

          {/* Chat widget image + benefits */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/ai-widget-website.webp"
                  alt="AI Chat Widget integreret på hjemmeside - Aibooking.dk"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                  <MousePointer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Plug &amp; Play</div>
                  <div className="text-slate-500 text-xs">Aktiv på 5 minutter</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Din 24/7 AI-salgsassistent
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                AI-Widgetten fra Aibooking.dk er mere end en chatbot. Det er en intelligent salgsassistent
                der forstår dine besøgendes behov, giver præcise svar baseret på dit indhold og
                konverterer henvendelser til bookinger — helt automatisk.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {widgetBenefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={i} className="flex items-start space-x-3 bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50 transition-colors">
                      <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{benefit.title}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{benefit.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('widget')}
                  className="inline-flex items-center justify-center space-x-2 bg-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Se AI-Widget planer</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-cyan-600 hover:text-cyan-600 transition-all"
                >
                  <span>Book en demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Voice widget image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/ai-voice-widget.webp"
                  alt="AI Voice Widget til hjemmeside - Aibooking.dk"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Voice-aktiveret</div>
                  <div className="text-slate-500 text-xs">Tal direkte med AI</div>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Volume2 className="w-4 h-4" />
                <span className="text-sm font-semibold">AI Voice Widget</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Stemmestyret AI direkte på din hjemmeside
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Med vores AI Voice Widget kan dine besøgende tale direkte med en AI-assistent
                på din hjemmeside. Det giver en ekstraordinær kundeoplevelse og gør det nemmere
                at booke, spørge og engagere — helt uden at taste.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Naturlig dansk stemme og forståelse',
                  'Aktiveres med et klik — ingen app-download',
                  'Integrerer med din kalender og booking-system',
                  'Fungerer på mobil, tablet og desktop',
                  'Kombinér voice og chat i samme widget',
                  'Fuld log af alle samtaler i dashboard'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('widget')}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Kom i gang med Widget</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">85%</div>
              <div className="text-slate-400">Mindre telefontid</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">60%</div>
              <div className="text-slate-400">Færre no-shows</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-slate-400">Kundetilfredshed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">320%</div>
              <div className="text-slate-400">ROI første år</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-slate-50" id="alle-funktioner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Alle funktioner — ét samlet system
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Aibooking.dk er designet til at fungere som dit komplette kommunikationscenter.
              Ingen separate systemer, ingen rodede integrationer — bare ét system der virker.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 -translate-y-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 translate-y-32"></div>
            </div>
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Klar til at automatisere din forretning?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                Prøv Aibooking.dk gratis i 7 dage og oplev selv forskellen — ingen binding, ingen kortoplysninger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-block"
                >
                  Book gratis demo
                </a>
                <button
                  onClick={() => onNavigate('widget')}
                  className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Se AI-Widget
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={featuresFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default FeaturesPage;
