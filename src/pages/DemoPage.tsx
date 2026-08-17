import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { demoFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { CheckCircle, Calendar, Clock, Zap } from 'lucide-react';

interface DemoPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function DemoPage({ onNavigate }: DemoPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Book Demo', url: 'https://www.aibooking.dk/demo' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Book Gratis Demo - Se AI Receptionist i Aktion | Aibooking.dk"
        description="Book en gratis og uforpligtende demo af vores AI-receptionist. Få 7 dages gratis adgang og se hvordan vi kan transformere din forretning. Book nu."
        keywords="book demo, gratis demo, AI receptionist demo, prøv gratis, uforpligtende demo"
        canonical="https://www.aibooking.dk/demo"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />


      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Eksklusivt Tilbud</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Book Din Gratis Demo
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Få en personlig gennemgang af systemet og oplev hvordan vores AI-receptionist kan transformere din forretning.
              Book en gratis og uforpligtende demo i dag og få <span className="font-bold text-blue-600">7 dages gratis prøveperiode</span> med fuld adgang.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Gratis Gennemgang</h3>
              <p className="text-slate-600">
                Få en personlig og uforpligtende gennemgang tilpasset netop din forretning og dine behov.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">7 Dages Gratis Demo</h3>
              <p className="text-slate-600">
                Test alle funktioner uden binding i 7 dage. Helt uforpligtende og ingen kreditkort påkrævet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vi Hjælper Dig I Gang</h3>
              <p className="text-slate-600">
                Vores team guider dig gennem hele opsætningen og sikrer, at du kommer godt i gang fra dag ét.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Vælg Din Tid</h2>
              <p className="text-blue-100">Book et møde der passer til din kalender</p>
            </div>
            <div className="p-12 text-center">
              <a
                href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Din Gratis Demo
              </a>
            </div>
          </div>

          <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Hvad Sker Der Efter Booking?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Book Møde</h4>
                <p className="text-sm text-slate-600">Vælg en tid der passer dig</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Personlig Demo</h4>
                <p className="text-sm text-slate-600">Se AI-receptionisten i aktion</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Gratis Aktivering</h4>
                <p className="text-sm text-slate-600">Få 7 dages fuld adgang</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  4
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Nyd Fordelene</h4>
                <p className="text-sm text-slate-600">Fokuser på at vokse din klinik</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hvorfor Vælge Vores AI-Receptionist?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oplev forskellen med markedets mest avancerede AI-drevne bookingsystem designet specifikt til danske virksomheder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">24/7 Tilgængelighed</h3>
              <p className="text-slate-600 leading-relaxed">
                Vores AI-receptionist arbejder døgnet rundt uden pauser, ferier eller fridage. Dine kunder kan altid booke en tid,
                uanset om det er midt om natten, i weekenden eller på helligdage. Det betyder flere bookinger og højere kundetilfredshed.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Øget Effektivitet</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatiser op til 80% af dine telefoniske henvendelser og frigør værdifuld tid til dit personale.
                Reducer administrative opgaver drastisk og lad dit team fokusere på at levere førsteklasses service til dine kunder.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Øjeblikkelig Respons</h3>
              <p className="text-slate-600 leading-relaxed">
                Ingen ventetid for dine kunder. AI'en besvarer alle opkald med det samme og kan håndtere ubegrænsede samtaler samtidigt.
                Det betyder nul tabte opkald og maksimal kundetilfredshed hele tiden.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Kalenderintegration</h3>
              <p className="text-slate-600 leading-relaxed">
                Seamless integration med dit eksisterende bookingsystem. AI'en ser din reelle kalender i realtid og booker kun ledige tider.
                Alle aftaler synkroniseres automatisk med detaljerede noter om samtalen og kundens ønsker.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reducér No-Shows</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatiske påmindelser via SMS og email reducerer udeblevne aftaler med op til 65%.
                Systemet sender intelligente påmindelser på det rigtige tidspunkt og kan endda ombooke automatisk ved aflysninger.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Perfekt Dansk</h3>
              <p className="text-slate-600 leading-relaxed">
                Vores AI er trænet specifikt til dansk sprog og danske kulturnormer. Den forstår dialekter, slang og taler naturligt dansk.
                Dine kunder oplever en behagelig og professionel samtale hver eneste gang.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Konkrete Fordele For Din Forretning
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Spar 10+ Timer Om Ugen</h3>
                    <p className="text-blue-100">
                      Frigør tid der før gik til at besvare telefonen, administrere bookinger og sende påmindelser.
                      Brug tiden på at vokse din forretning i stedet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Øg Indtægten Med 30%</h3>
                    <p className="text-blue-100">
                      Fang alle leads 24/7 og reducer tabte bookinger. Flere bookinger og færre no-shows betyder direkte øget omsætning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Nul Tabte Opkald</h3>
                    <p className="text-blue-100">
                      Hvert ubesvaret opkald er tabt omsætning. Med AI-receptionisten går intet opkald glip -
                      selv når du er optaget, til møde eller uden for åbningstid.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bedre Kundeoplevelse</h3>
                    <p className="text-blue-100">
                      Konsistent høj servicekvalitet hver gang. Ingen dårlige dage, ingen stress-fejl.
                      Dine kunder oplever altid en professionel og venlig receptionist.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Komplet Dokumentation</h3>
                    <p className="text-blue-100">
                      Alle samtaler optages og transskriberes automatisk. Få værdifuld indsigt i kundeønsker,
                      typiske spørgsmål og muligheder for at forbedre din service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Skalerbar Løsning</h3>
                    <p className="text-blue-100">
                      Håndter 1 eller 1000 opkald om dagen uden at ansætte mere personale.
                      Systemet vokser med din forretning uden ekstra omkostninger.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold mb-6">Klar Til At Komme I Gang?</p>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Book din gratis demo nu og få 7 dages fuld adgang til systemet. Vi guider dig gennem hele opsætningen
                  og sikrer, at du kommer godt i gang. Ingen binding, ingen kreditkort påkrævet.
                </p>
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105"
                >
                  Book Din Gratis Demo Nu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Perfekt Til Alle Typer Servicevirksomheder
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Vores AI-receptionist er designet til at håndtere bookinger og kundeservice for alle brancher
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Sundhedssektoren</h3>
              <p className="text-sm text-slate-600">
                Tandlæger, fysioterapeuter, kiropraktorer, massageklinikker, psykologer
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Skønhed & Wellness</h3>
              <p className="text-sm text-slate-600">
                Frisører, kosmetologer, neglestudioer, spa-centre, tatovører
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Håndværk & Service</h3>
              <p className="text-sm text-slate-600">
                VVS, elektrikere, malere, tømrere, rengøring, flyttefirmaer
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Rådgivning & Coaching</h3>
              <p className="text-sm text-slate-600">
                Advokater, revisorer, konsulenter, personlige trænere, karrierecoaches
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={demoFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default DemoPage;
