import { useState } from 'react';
import { Calendar, Phone, Building2, Mail, User, CheckCircle2, AlertCircle } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    callDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Request failed');

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        industry: '',
        callDate: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setError('Der skete en fejl. Prøv venligst igen.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gradient-to-br from-ink-50 to-brand-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
            Book en gratis præsentation
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto mb-6">
            Lad os tage en uforpligtende snak om, hvordan vores AI-receptionist kan hjælpe netop din virksomhed.
            Få adgang til demo i 7 dage helt gratis.
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl"
          >
            Book Demo Nu
          </a>
          <p className="text-sm text-ink-500 mt-4">Eller udfyld formularen nedenfor, så kontakter vi dig</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-ink-900 mb-4">
                Tak for din henvendelse!
              </h3>
              <p className="text-lg text-ink-600">
                Vi kontakter dig hurtigst muligt på den ønskede dato.
              </p>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-800">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <User className="w-4 h-4" />
                    <span>Navn</span>
                  </label>
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
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </label>
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
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Phone className="w-4 h-4" />
                    <span>Telefon</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="+45 91952794"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>Branche</span>
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Vælg din branche</option>
                    <option value="klinikker">Klinikker</option>
                    <option value="haandvaerker">Håndværker</option>
                    <option value="kontor">Kontor og Administration</option>
                    <option value="webshop">Webshop</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Foretrukken dato for opringning</span>
                  </label>
                  <input
                    type="date"
                    name="callDate"
                    value={formData.callDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <span>Besked (valgfri)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    placeholder="Fortæl os lidt om dine behov..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white py-4 rounded-xl hover:from-brand-700 hover:to-brand-600 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Sender...' : 'Book gratis præsentation'}
              </button>

              <p className="text-center text-sm text-ink-500">
                100% gratis og uforpligtende • 7 dages demo adgang inkluderet
              </p>
            </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
