import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { contactFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about') => void;
}

function ContactPage({ onNavigate }: ContactPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Kontakt', url: 'https://www.aibooking.dk/contact' },
  ]);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Request failed');

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setError('Der skete en fejl. Prøv venligst igen.');
      console.error('Error submitting contact form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ink-50 via-white to-brand-50/30">
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
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Vi er klar til at hjælpe</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              Kontakt os i dag
            </h1>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              Har du spørgsmål eller vil du vide mere om hvordan Aibooking.dk kan hjælpe din virksomhed? Vi står klar til at hjælpe dig.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-ink-200/60 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">Ring til os</h3>
              <p className="text-ink-600 mb-4">Vi svarer gerne på dine spørgsmål</p>
              <a href="tel:+4591952794" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors text-lg">
                +45 91952794
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-ink-200/60 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">Send en email</h3>
              <p className="text-ink-600 mb-4">Vi svarer inden for 24 timer</p>
              <a href="mailto:kontakt@aibooking.dk" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">
                kontakt@aibooking.dk
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-ink-200/60 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">Åbningstider</h3>
              <p className="text-ink-600 mb-2">Man-Fre: 9:00 - 17:00</p>
              <p className="text-ink-600">Weekend: Lukket</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-ink-200/60">
              <h2 className="text-3xl font-bold text-ink-900 mb-2">Send os en besked</h2>
              <p className="text-ink-600 mb-8">Udfyld formularen nedenfor, så vender vi tilbage hurtigst muligt</p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-ink-900 mb-3">Tak for din besked!</h3>
                  <p className="text-ink-600">Vi vender tilbage hurtigst muligt.</p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-800">{error}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Navn</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="Dit fulde navn"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="din@email.dk"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Telefon (valgfri)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="+45 91952794"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Besked</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                        placeholder="Hvordan kan vi hjælpe?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-600 text-white py-4 rounded-xl hover:bg-brand-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sender...' : 'Send besked'}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-10 text-white shadow-xl">
                <MapPin className="w-12 h-12 mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Find os her</h3>
                <p className="text-brand-100 mb-2 text-lg">Aibooking.dk ApS</p>
                <p className="text-brand-100 mb-1">Trindsøvej 6, 1. sal</p>
                <p className="text-brand-100">8000 Aarhus C, Danmark</p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-xl border border-ink-200/60">
                <h3 className="text-2xl font-bold text-ink-900 mb-4">Hvorfor vælge os?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-ink-700 leading-relaxed">Dansk support på dansk</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-ink-700 leading-relaxed">Hurtig implementering</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-ink-700 leading-relaxed">GDPR-compliant løsning</span>
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
