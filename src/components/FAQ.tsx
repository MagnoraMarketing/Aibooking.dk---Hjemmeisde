import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface FAQItem {
  question_da: string;
  question_en: string;
  question_pt: string;
  question_fr: string;
  answer_da: string;
  answer_en: string;
  answer_pt: string;
  answer_fr: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const lang = (i18n.language in { da: 1, en: 1, pt: 1, fr: 1 } ? i18n.language : 'da') as 'da' | 'en' | 'pt' | 'fr';
  const getQuestion = (item: FAQItem) => item[`question_${lang}`];
  const getAnswer = (item: FAQItem) => item[`answer_${lang}`];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: getQuestion(item),
      acceptedAnswer: {
        '@type': 'Answer',
        text: getAnswer(item),
      },
    })),
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-4 tracking-tight">
            {t('faq.heading')}
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-ink-200 rounded-2xl overflow-hidden bg-ink-50/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink-900">{getQuestion(item)}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-ink-600 leading-relaxed">{getAnswer(item)}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
