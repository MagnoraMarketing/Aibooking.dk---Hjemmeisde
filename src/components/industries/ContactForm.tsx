import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Phone, Building2, Mail, User, CheckCircle2, AlertCircle } from 'lucide-react';

function ContactForm() {
  const { t } = useTranslation('industriesPage');
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
      setError(t('contactForm.errorMessage'));
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
            {t('contactForm.title')}
          </h2>
          <p className="text-xl text-ink-600 max-w-2xl mx-auto mb-6">
            {t('contactForm.subtitle')}
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl"
          >
            {t('contactForm.bookDemoButton')}
          </a>
          <p className="text-sm text-ink-500 mt-4">{t('contactForm.orFillForm')}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-ink-900 mb-4">
                {t('contactForm.success.title')}
              </h3>
              <p className="text-lg text-ink-600">
                {t('contactForm.success.message')}
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
                    <span>{t('contactForm.fields.name.label')}</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder={t('contactForm.fields.name.placeholder')}
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Mail className="w-4 h-4" />
                    <span>{t('contactForm.fields.email.label')}</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder={t('contactForm.fields.email.placeholder')}
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Phone className="w-4 h-4" />
                    <span>{t('contactForm.fields.phone.label')}</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder={t('contactForm.fields.phone.placeholder')}
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>{t('contactForm.fields.industry.label')}</span>
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">{t('contactForm.fields.industry.placeholder')}</option>
                    <option value="klinikker">{t('contactForm.fields.industry.options.healthcare')}</option>
                    <option value="haandvaerker">{t('contactForm.fields.industry.options.craftsman')}</option>
                    <option value="kontor">{t('contactForm.fields.industry.options.office')}</option>
                    <option value="webshop">{t('contactForm.fields.industry.options.webshop')}</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center space-x-2 text-sm font-semibold text-ink-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{t('contactForm.fields.callDate.label')}</span>
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
                    <span>{t('contactForm.fields.message.label')}</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-ink-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                    placeholder={t('contactForm.fields.message.placeholder')}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white py-4 rounded-xl hover:from-brand-700 hover:to-brand-600 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? t('contactForm.submitButtonLoading') : t('contactForm.submitButton')}
              </button>

              <p className="text-center text-sm text-ink-500">
                {t('contactForm.disclaimer')}
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
