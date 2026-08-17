import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface FAQItem {
  question_da: string;
  question_en: string;
  answer_da: string;
  answer_en: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const { i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const getQuestion = (item: FAQItem) => (i18n.language === 'da' ? item.question_da : item.question_en);
  const getAnswer = (item: FAQItem) => (i18n.language === 'da' ? item.answer_da : item.answer_en);

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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {i18n.language === 'da' ? 'Ofte stillede spørgsmål' : 'Frequently Asked Questions'}
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">{getQuestion(item)}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">{getAnswer(item)}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
