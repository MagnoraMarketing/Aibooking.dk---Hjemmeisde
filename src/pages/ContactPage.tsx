import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { contactFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about') => void;
}

function ContactPage({ onNavigate }: ContactPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Kontakt', url: 'https://www.aibooking.dk/contact' },
  ]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <SEO
        title="Kontakt Os - Få Hjælp og Support | Aibooking.dk"
        description="Har du spørgsmål til vores AI-receptionist? Kontakt vores danske supportteam. Vi svarer inden for 24 timer. Ring +45 91952794 eller send en email."
        keywords="kontakt aibooking, dansk support, AI receptionist hjælp, kundeservice, få demo"
        canonical="https://www.aibooking.dk/contact"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Vi er klar til at hjælpe</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Kontakt os i dag
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Har du spørgsmål eller vil du vide mere om hvordan Aibooking.dk kan hjælpe din virksomhed? Vi står klar til at hjælpe dig.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ring til os</h3>
              <p className="text-slate-600 mb-4">Vi svarer gerne på dine spørgsmål</p>
              <a href="tel:+4591952794" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg">
                +45 91952794
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Send en email</h3>
              <p className="text-slate-600 mb-4">Vi svarer inden for 24 timer</p>
              <a href="mailto:kontakt@aibooking.dk" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                kontakt@aibooking.dk
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Åbningstider</h3>
              <p className="text-slate-600 mb-2">Man-Fre: 9:00 - 17:00</p>
              <p className="text-slate-600">Weekend: Lukket</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200/60">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send os en besked</h2>
              <p className="text-slate-600 mb-8">Udfyld formularen nedenfor, så vender vi tilbage hurtigst muligt</p>

              <iframe
                data-tally-src="https://tally.so/r/ja6R61"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Kontakt formular"
                className="rounded-xl"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-xl">
                <MapPin className="w-12 h-12 mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Find os her</h3>
                <p className="text-blue-100 mb-2 text-lg">Aibooking.dk ApS</p>
                <p className="text-blue-100 mb-1">Trindsøvej 6, 1. sal</p>
                <p className="text-blue-100">8000 Aarhus C, Danmark</p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200/60">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hvorfor vælge os?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">Dansk support på dansk</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">Hurtig implementering</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">GDPR-compliant løsning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ items={contactFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default ContactPage;
