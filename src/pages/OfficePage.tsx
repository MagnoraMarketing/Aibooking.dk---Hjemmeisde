import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { officeFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { TrendingUp, Clock, Phone, BarChart3, CheckCircle, Briefcase } from 'lucide-react';

interface OfficePageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function OfficePage({ onNavigate }: OfficePageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Brancher', url: 'https://www.aibooking.dk/industries' },
    { name: 'Kontor', url: 'https://www.aibooking.dk/office' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Receptionist til Kontorer - Advokater, Revisorer, Konsulenter | Aibooking.dk"
        description="Professionel AI receptionist til kontorvirksomheder. 35% mere produktivitet, 320% ROI. Perfekt til advokater, revisorer og konsulenter. Prøv gratis."
        keywords="kontor receptionist, advokat receptionist, revisor booking, konsulent booking, kontorautomatisering, møde booking"
        canonical="https://www.aibooking.dk/office"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">Kontor og Administration</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Professionel kundeservice uden afbrydelser
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              I kontorvirksomheder er koncentration og produktivitet afgørende. Men konstante telefonopkald afbryder arbejdsflowet og reducerer effektiviteten betydeligt. Samtidig er det vigtigt at give kunderne hurtig og professionel service.
            </p>
          </div>


          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Det bedste fra begge verdener</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Med Aibooking.dk får du det bedste fra begge verdener. Vores AI-receptionist screener alle indkommende opkald, håndterer bookinger af møder, besvarer almindelige spørgsmål og videresender kun de vigtigste henvendelser. Dit team får fred til at arbejde koncentreret, mens kunderne oplever professionel service døgnet rundt. Dashboard'et giver dig komplet kontrol: Lyt til alle samtaler, se detaljerede opsummeringer, booking-statistik og kalenderintegration. Perfekt til advokater, revisorer, konsulenter og andre videnvirksomheder.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Reducer afbrydelser</h3>
                  <p className="text-slate-600">Forbedr medarbejdernes produktivitet markant</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Professionel telefonbetjening</h3>
                  <p className="text-slate-600">Uden ekstra lønomkostninger til receptionist</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Automatisk screening</h3>
                  <p className="text-slate-600">Kun vigtige sager viderestilles til dit team</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Møde-booking</h3>
                  <p className="text-slate-600">Book møder direkte i teamets fælles kalender</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Komplet dashboard</h3>
                  <p className="text-slate-600">Samtalehistorik, opsummeringer og statistik</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">CRM-integration</h3>
                  <p className="text-slate-600">Integration med eksisterende systemer og kalendere</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl text-center border border-blue-100">
              <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">+35%</div>
              <div className="text-slate-600 font-semibold">Produktivitet</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl text-center border border-blue-100">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">15t/uge</div>
              <div className="text-slate-600 font-semibold">Sparet tid</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl text-center border border-blue-100">
              <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-600 font-semibold">Håndterede opkald</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl text-center border border-blue-100">
              <BarChart3 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">320%</div>
              <div className="text-slate-600 font-semibold">ROI</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perfekt til alle kontorvirksomheder
            </h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Advokater</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Revisorer</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Konsulenter</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Trænere</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Coaches</p>
              </div>
            </div>
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl inline-block"
            >
              Book et uforpligtende møde og få et gratis test login
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar til at komme i gang?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book et gratis og uforpligtende møde, og få adgang til et test login så du kan prøve systemet selv
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl inline-block"
          >
            Book et uforpligtende møde og få et gratis test login
          </a>
        </div>
      </section>

      <FAQ items={officeFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default OfficePage;
