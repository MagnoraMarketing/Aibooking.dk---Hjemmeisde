import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { healthcareFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { TrendingUp, Clock, Calendar, Users, CheckCircle, Phone } from 'lucide-react';

interface HealthcarePageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function HealthcarePage({ onNavigate }: HealthcarePageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Brancher', url: 'https://www.aibooking.dk/industries' },
    { name: 'Klinikker', url: 'https://www.aibooking.dk/Klinik' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Receptionist til Klinikker - Tandlæger, Fysioterapeuter | Aibooking.dk"
        description="Automatisk booking til klinikker, tandlæger, fysioterapeuter. Reducer no-shows med 60%, spar 12 timer om ugen. GDPR-sikker patientdata. Prøv gratis."
        keywords="tandlæge booking, klinik booking, fysioterapi booking, sundhed AI receptionist, patient booking, klinik automatisering"
        canonical="https://www.aibooking.dk/Klinik"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">Klinikker og Sundhed</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              Frihed til at fokusere på patientpleje
            </h1>
            <p className="text-xl text-ink-600 max-w-4xl mx-auto leading-relaxed">
              Som klinik ved du, hvor vigtigt det er at give dine patienter den bedste behandling. Men administrative opgaver som telefonopkald, bookinger og aflysninger stjæler værdifuld tid fra patientplejen.
            </p>
          </div>


          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-ink-200 mb-16">
            <h2 className="text-3xl font-bold text-ink-900 mb-6">Den komplette løsning til sundhedssektoren</h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-8">
              Vores AI-receptionist håndterer alle kundehenvendelser professionelt – fra nye bookinger til ombookinger og bekræftelser. Med automatisk SMS-påmindelse reducerer du no-shows betydeligt. Dit personaliserede dashboard giver dig komplet overblik: Lyt til alle opkald, se korte opsummeringer af hver samtale, hvad der er aftalt, booking-statistik og kalenderintegration. Du kan fortsætte med at bruge din nuværende kalendersoftware – vores system synkroniserer automatisk.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Reducer telefontid med 85%</h3>
                  <p className="text-ink-600">Fokuser på dine patienter i stedet for administrative opgaver</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Automatiske SMS-påmindelser</h3>
                  <p className="text-ink-600">Reducer no-shows med op til 60% og optimer din kapacitet</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">24/7 booking service</h3>
                  <p className="text-ink-600">Håndter bookinger, ombookinger og aflysninger hele døgnet</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Komplet dashboard</h3>
                  <p className="text-ink-600">Opkaldshistorik, samtaleopsummeringer og booking-statistik</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">Kalenderintegration</h3>
                  <p className="text-ink-600">Synkroniserer med dit eksisterende booking-system automatisk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-2">GDPR-overholdelse</h3>
                  <p className="text-ink-600">Fuld sikkerhed for følsomme patientdata</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl text-center border border-green-100">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">60%</div>
              <div className="text-ink-600 font-semibold">Færre no-shows</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl text-center border border-green-100">
              <Clock className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">12t/uge</div>
              <div className="text-ink-600 font-semibold">Sparet tid</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl text-center border border-green-100">
              <Calendar className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">95%</div>
              <div className="text-ink-600 font-semibold">Booking rate</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl text-center border border-green-100">
              <Users className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-ink-900 mb-2">4.8/5</div>
              <div className="text-ink-600 font-semibold">Kundetilfredshed</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ink-900 to-green-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perfekt til alle sundhedsfaglige klinikker
            </h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Tandlæger</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Fysioterapeuter</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Kiropraktorer</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Massageklinikker</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Psykologer</p>
              </div>
            </div>
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-50 transition-all shadow-2xl inline-block"
            >
              Book et uforpligtende møde og få et gratis test login
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-900 to-ink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar til at komme i gang?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Book et gratis og uforpligtende møde, og få adgang til et test login så du kan prøve systemet selv
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-green-50 transition-all shadow-2xl inline-block"
          >
            Book et uforpligtende møde og få et gratis test login
          </a>
        </div>
      </section>

      <FAQ items={healthcareFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default HealthcarePage;
