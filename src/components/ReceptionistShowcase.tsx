import { Phone, Calendar, Bell, CheckCircle, MessageSquare, Zap } from 'lucide-react';

interface ReceptionistShowcaseProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function ReceptionistShowcase({ onNavigate }: ReceptionistShowcaseProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnptMC0ydjJ6bTAtMnYyem0wLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
              <Zap className="w-4 h-4" />
              <span>AI Receptionist til Voksende Virksomheder</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Gå aldrig glip af et opkald.
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Vind mere arbejde.
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              Reducer administration.
            </h2>

            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Din AI-receptionist håndterer opkald, registrerer kundeemner og tager sig af
              ombookinger, så du kan fokusere på at vokse dit firma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-slate-900 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Gratis Demo</span>
              </a>
              <button
                onClick={() => onNavigate('demo')}
                className="group bg-blue-500/20 text-white px-8 py-4 rounded-xl hover:bg-blue-500/30 transition-all duration-300 font-semibold border border-blue-400/40 hover:border-blue-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Prøv vores AI voice widget</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>AI Receptionist Aktiv</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/10 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-blue-300 mb-1">AI Receptionist</p>
                      <p className="text-white text-sm leading-relaxed">
                        Hej, du har ringet til Pentworth Klinik. Hvordan kan jeg hjælpe dig i dag?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-xs text-green-300">Opkald Besvaret</span>
                    </div>
                    <p className="text-white text-sm font-medium">Ny Patient Registreret</p>
                  </div>

                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-xs text-blue-300">Omboget</span>
                    </div>
                    <p className="text-white text-sm font-medium">Link Sendt Automatisk</p>
                  </div>

                  <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-orange-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Bell className="w-5 h-5 text-orange-400" />
                      <span className="text-xs text-orange-300">Notifikation</span>
                    </div>
                    <p className="text-white text-sm font-medium">Dr. Schmidt Informeret</p>
                  </div>

                  <div className="bg-slate-500/20 backdrop-blur-sm rounded-xl p-4 border border-slate-400/30 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Phone className="w-5 h-5 text-slate-300" />
                      <span className="text-xs text-slate-300">Samtale</span>
                    </div>
                    <p className="text-white text-sm font-medium">AI Håndterede Alle</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-slate-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 mb-1">Sammendrag</p>
                    <p className="text-white text-sm">
                      Fenley bad om information om parkering ved klinikken. Vi gav alle relevante detaljer for at sikre et problemfrit besøg.
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="flex-1 bg-slate-700 rounded-full h-1 overflow-hidden">
                    <div className="bg-blue-500 h-full w-3/4"></div>
                  </div>
                  <span className="text-xs text-slate-400">2:34</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReceptionistShowcase;
