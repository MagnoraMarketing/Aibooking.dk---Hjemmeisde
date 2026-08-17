import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { ecommerceFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { Clock, Users, MessageSquare, CheckSquare, CheckCircle, ShoppingCart } from 'lucide-react';

interface EcommercePageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function EcommercePage({ onNavigate }: EcommercePageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Brancher', url: 'https://www.aibooking.dk/industries' },
    { name: 'E-commerce & Webshop', url: 'https://www.aibooking.dk/Hjemmeside/webshop' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Kundeservice til E-commerce & Webshops | Aibooking.dk"
        description="24/7 AI kundeservice til webshops. 40% mere kundetilfredshed, 28% højere konvertering. Automatiske svar, SMS-opdateringer. Prøv gratis."
        keywords="webshop kundeservice, e-handel AI, online shop automatisering, webshop chatbot, kundeservice automation"
        canonical="https://www.aibooking.dk/Hjemmeside/webshop"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">E-commerce & Webshop</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              Kundeservice der skalerer med din forretning
            </h1>
            <p className="text-xl text-ink-600 max-w-4xl mx-auto leading-relaxed">
              I e-handelsverden er hurtig kundeservice afgørende for succes. Forsinkede svar på kundehenvendelser betyder mistede salg og dårlige anmeldelser. Men at bemande kundeservice 24/7 er dyrt og kompleks.
            </p>
          </div>


          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-ink-200 mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-6">AI-drevet kundeservice der aldrig sover</h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-8">
              Aibooking.dk giver dig AI-drevet kundeservice der aldrig sover. Systemet besvarer almindelige spørgsmål om produkter, leveringstider, returneringer og ordrestatus øjeblikkeligt. Komplekse henvendelser eskaleres automatisk til dit team. Med SMS-notifikationer holder du kunderne opdaterede gennem hele købsrejsen. Dit dashboard viser alle kundeinteraktioner, opsummeringer af samtaler, hyppige spørgsmål og trends, så du konstant kan optimere din service. Reducer svartider fra timer til sekunder og forbedr kundetilfredsheden markant.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">24/7 kundeservice</h3>
                  <p className="text-ink-600">Besvar henvendelser øjeblikkeligt uden ekstra personale</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Automatiske svar</h3>
                  <p className="text-ink-600">Håndter spørgsmål om produkter, ordrestatus og returneringer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">SMS-opdateringer</h3>
                  <p className="text-ink-600">Automatiske notifikationer om forsendelser og leveringer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Lynhurtige svartider</h3>
                  <p className="text-ink-600">Reducer svartider fra timer til sekunder</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Indsigt i trends</h3>
                  <p className="text-ink-600">Dashboard med kundeinteraktioner og hyppige spørgsmål</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Webshop-integration</h3>
                  <p className="text-ink-600">Integration med dit webshop-system og ordrehåndtering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-3xl text-center border border-brand-100">
              <Clock className="w-10 h-10 text-brand-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">95%</div>
              <div className="text-ink-600 font-semibold">Hurtigere svar</div>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-3xl text-center border border-brand-100">
              <Users className="w-10 h-10 text-brand-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">+40%</div>
              <div className="text-ink-600 font-semibold">Kundetilfredshed</div>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-3xl text-center border border-brand-100">
              <MessageSquare className="w-10 h-10 text-brand-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">1200+</div>
              <div className="text-ink-600 font-semibold">Henvendelser/md</div>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-3xl text-center border border-brand-100">
              <CheckSquare className="w-10 h-10 text-brand-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">+28%</div>
              <div className="text-ink-600 font-semibold">Konvertering</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ink-900 to-brand-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perfekt til alle online forretninger
            </h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Webshops</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">E-handel</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Dropshipping</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Markedspladser</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Online salg</p>
              </div>
            </div>
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl inline-block"
            >
              Book et uforpligtende møde og få et gratis test login
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-900 to-ink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar til at komme i gang?
          </h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Book et gratis og uforpligtende møde, og få adgang til et test login så du kan prøve systemet selv
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl inline-block"
          >
            Book et uforpligtende møde og få et gratis test login
          </a>
        </div>
      </section>

      <FAQ items={ecommerceFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default EcommercePage;
