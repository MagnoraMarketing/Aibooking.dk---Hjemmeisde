import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { craftsmanFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { TrendingUp, Clock, Phone, Users, CheckCircle, Wrench } from 'lucide-react';

interface CraftsmanPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function CraftsmanPage({ onNavigate }: CraftsmanPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Brancher', url: 'https://www.aibooking.dk/industries' },
    { name: 'Håndværkere', url: 'https://www.aibooking.dk/craftsman' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Receptionist til Håndværkere - VVS, Elektrikere, Tømrere | Aibooking.dk"
        description="Automatisk booking til håndværkere. Aldrig gå glip af en ordre igen. 45% flere ordrer, 100% svar-rate. Perfekt til VVS, elektrikere og malere. Prøv gratis."
        keywords="håndværker booking, VVS booking, elektriker booking, tømrer booking, håndværk AI receptionist, ordre automatisering"
        canonical="https://www.aibooking.dk/craftsman"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">Håndværkere</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Stop med at miste ordrer fordi telefonen ikke bliver taget
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Du kender det: Du er midt i et job, og telefonen ringer. Hvis du tager den, mister du fokus. Hvis du ikke gør, mister du potentielt en god ordre. Det er en umulig situation.
            </p>
          </div>


          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Aldrig gå glip af en ordre igen</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Vores AI-receptionist løser dette problem én gang for alle. Systemet tager imod alle opkald, registrerer kundeoplysninger, booker besigtigelser og sender automatiske bekræftelser via SMS. I dit dashboard kan du se alle henvendelser, lytte til optagede samtaler, få korte opsummeringer af hvad kunden ønsker, og se hvad der er blevet aftalt. Din kalender opdateres automatisk, uanset hvilket system du bruger. Slip for bekymringen om mistede ordrer – fokuser på dit håndværk.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Tag imod alle henvendelser</h3>
                  <p className="text-slate-600">Selv når du er på job og ikke kan svare på telefonen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Automatisk registrering</h3>
                  <p className="text-slate-600">Kundeoplysninger og opgavebeskrivelser gemmes automatisk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Book besigtigelser direkte</h3>
                  <p className="text-slate-600">I din kalender – synkroniserer automatisk med dit system</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">SMS-bekræftelser</h3>
                  <p className="text-slate-600">Til både dig og kunden med alle relevante detaljer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Komplet dashboard</h3>
                  <p className="text-slate-600">Se alle kundehenvendelser og hvad der er aftalt</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">24/7 tilgængelighed</h3>
                  <p className="text-slate-600">Systemet arbejder hele døgnet, også i weekenden</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl text-center border border-orange-100">
              <TrendingUp className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">+45%</div>
              <div className="text-slate-600 font-semibold">Flere ordrer</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl text-center border border-orange-100">
              <Clock className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">10t/uge</div>
              <div className="text-slate-600 font-semibold">Sparet tid</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl text-center border border-orange-100">
              <Phone className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
              <div className="text-slate-600 font-semibold">Svar-rate</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl text-center border border-orange-100">
              <Users className="w-10 h-10 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
              <div className="text-slate-600 font-semibold">Kundetilfredshed</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-orange-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perfekt til alle håndværksfag
            </h2>
            <div className="grid md:grid-cols-6 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Wrench className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">VVS</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Wrench className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Elektrikere</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Wrench className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Malere</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Wrench className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Tømrere</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Wrench className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Rengøring</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Wrench className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Flyttefirmaer</p>
              </div>
            </div>
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all shadow-2xl inline-block"
            >
              Book et uforpligtende møde og få et gratis test login
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar til at komme i gang?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Book et gratis og uforpligtende møde, og få adgang til et test login så du kan prøve systemet selv
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all shadow-2xl inline-block"
          >
            Book et uforpligtende møde og få et gratis test login
          </a>
        </div>
      </section>

      <FAQ items={craftsmanFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default CraftsmanPage;
