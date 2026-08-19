import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function IntegrationCTA() {
  const { t } = useTranslation('integrationsPage');

  const benefits = t('ctaSection.benefits', { returnObjects: true }) as string[];
  const stats = t('ctaSection.stats', { returnObjects: true }) as { value: string; label: string }[];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('ctaSection.title')}
            </h2>
            <p className="text-xl text-brand-100 mb-8 leading-relaxed">
              {t('ctaSection.subtitle')}
            </p>
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-brand-600 px-8 py-4 rounded-lg hover:bg-brand-50 transition-all duration-300 font-semibold text-lg group"
            >
              <span>{t('ctaSection.button')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('ctaSection.benefitsTitle')}
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-brand-50">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-brand-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationCTA;
