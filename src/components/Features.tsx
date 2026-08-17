import { Phone, Calendar, BarChart3, MessageSquare, Users, Clock, Zap, Shield, LayoutDashboard, Headphones, Mic, Settings, FileText, CheckCircle } from 'lucide-react';

interface FeaturesProps {
  onNavigate?: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function Features({ onNavigate }: FeaturesProps) {
  const features = [
    {
      icon: Phone,
      title: "Intelligent Opkaldstyring",
      description: "AI'en tager alle indgående opkald, forstår kundens behov og håndterer bookinger professionelt – som en erfaren receptionist."
    },
    {
      icon: Calendar,
      title: "Automatisk Kalenderintegration",
      description: "Synkroniserer direkte med dit eksisterende bookingsystem. Ingen dobbeltbookinger, ingen konflikter."
    },
    {
      icon: MessageSquare,
      title: "Naturlig Samtale",
      description: "Avanceret dansk sprogforståelse gør samtalen naturlig og behagelig for dine kunder."
    },
    {
      icon: BarChart3,
      title: "Detaljeret Analyse",
      description: "Fuldt overblik over alle opkald, bookinger og kundeinteraktioner i et overskueligt dashboard."
    },
    {
      icon: Users,
      title: "Kundehistorik",
      description: "AI'en husker tidligere kunder og deres præferencer for en personlig oplevelse hver gang."
    },
    {
      icon: Clock,
      title: "Automatiske Påmindelser",
      description: "Send automatiske påmindelser til kunder om kommende aftaler og reducér no-shows."
    },
    {
      icon: Zap,
      title: "Øjeblikkelig Opfølgning",
      description: "Automatiske opfølgnings-SMS og emails efter hvert opkald og hver aftale."
    },
    {
      icon: Shield,
      title: "GDPR Sikker",
      description: "Alle data håndteres sikkert og i overensstemmelse med dansk lovgivning."
    }
  ];

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full mb-8 border border-blue-100">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Kraftfulde Funktioner</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Alt du behøver for at<br />automatisere bookinger
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Vores AI-løsning er bygget specifikt til danske klinikker og servicevirksomheder
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl bg-white border border-slate-200/70 hover:border-blue-300/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 shadow-md shadow-blue-500/20">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-10 md:p-16 text-white shadow-xl relative overflow-hidden border border-blue-500/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 px-5 py-2.5 rounded-full mb-8 border border-blue-400/30">
                <LayoutDashboard className="w-5 h-5" />
                <span className="text-sm font-bold tracking-wide">PREMIUM FEATURE</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                Eget Dashboard
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Centraliseret kontrol og indsigt i alle dine AI-voice agenter fra ét sted
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Unlimited AI Voice Agents</h4>
                <p className="text-blue-200 leading-relaxed">
                  Skaler dine operationer uden begrænsninger. Administrer nemt flere klientkonti fra ét centraliseret dashboard.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Automatisk Booking</h4>
                <p className="text-blue-200 leading-relaxed">
                  Strømlin din planlægning med AI-drevet booking. Alle aftaler synkroniseres direkte til din kalender med detaljeret resume.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Optagelse & Transkription</h4>
                <p className="text-blue-200 leading-relaxed">
                  Optag og konverter hver samtale til tekst for nem reference. Lyt til alle opkald og se komplette transskriptioner.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Overlegen Støjreduktion</h4>
                <p className="text-blue-200 leading-relaxed">
                  Sikr krystalklare samtaler med avanceret lydbehandling. Dine kunder hører kun professionel, klar lyd.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Træn på 10 Sekunder</h4>
                <p className="text-blue-200 leading-relaxed">
                  Tilpas AI-adfærd hurtigt ved at bruge eksisterende optagelser eller et færdigbygget script. Ingen teknisk viden krævet.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Intelligent Kalenderintegration</h4>
                <p className="text-blue-200 leading-relaxed">
                  Alle bookinger lægges automatisk i din kalender med noter om opkaldsresume, aftaletidspunkt og kundeoplysninger.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-white">Klar til at komme i gang?</h4>
                  <p className="text-blue-200 text-lg">
                    Maximize your clients appointment bookings med vores AI-drevne, ultra-realistiske voice calling service, der arbejder 24/7 for at holde deres kalendere fuldt bookede.
                  </p>
                </div>
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] whitespace-nowrap inline-block"
                >
                  Book Din Gratis Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 rounded-3xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                Perfekt til klinikker og servicevirksomheder
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Uanset om du driver en tandlægeklinik, frisørsalon, massageklinik eller anden servicevirksomhed,
                så er vores AI-løsning skræddersyet til netop dine behov.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-blue-50 text-lg">Håndterer komplekse bookingscenarier</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-blue-50 text-lg">Integration med populære bookingsystemer</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-blue-50 text-lg">Tilpasset jeres specifikke branché og arbejdsgange</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-white/20">
                  <span className="text-blue-100 text-lg">Gennemsnitlig besparelse</span>
                  <span className="text-3xl font-bold">10+ timer/uge</span>
                </div>
                <div className="flex items-center justify-between pb-5 border-b border-white/20">
                  <span className="text-blue-100 text-lg">Kundetilfredshed</span>
                  <span className="text-3xl font-bold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100 text-lg">Reducering af no-shows</span>
                  <span className="text-3xl font-bold">65%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
