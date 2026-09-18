import { UserPlus, PhoneForwarded, Mic, ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SIGNUP_URL } from '../utils/backend';
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from '../utils/demoPhone';

interface StepItem { title: string; desc: string }

const stepIcons = [UserPlus, PhoneForwarded, Mic];

function HowItWorks() {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true }) as StepItem[];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ink-50/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={index} className="bg-white border border-ink-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{step.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            {t('howItWorks.cta')}
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-5 text-sm text-ink-500 flex items-center justify-center gap-1.5 flex-wrap">
            <Phone className="w-4 h-4 text-brand-600" />
            {t('howItWorks.demo_phone_label')}{' '}
            <a href={`tel:${DEMO_PHONE_TEL}`} className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
              {DEMO_PHONE_DISPLAY}
            </a>
            <span>— {t('howItWorks.demo_phone_note')}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
