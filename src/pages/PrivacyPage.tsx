import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import type { NavigatePage } from '../types/navigation';

interface PrivacyPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface LabelDesc {
  label: string;
  desc: string;
}

interface PrivacySection {
  heading: string;
  body?: string;
  intro?: string;
  items?: string[];
  labelItems?: LabelDesc[];
  before?: string;
  after?: string;
}

function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const { t } = useTranslation('privacyPage');
  const sections = t('sections', { returnObjects: true }) as PrivacySection[];

  return (
    <>
      <Navigation onNavigate={onNavigate} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-ink-600">
              {t('subtitle')}
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            {sections.map((section, index) => (
              <section key={index} className="mb-10">
                <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                  {section.heading}
                </h2>
                {section.labelItems ? (
                  <>
                    {section.intro && (
                      <p className="text-ink-700 leading-relaxed mb-4">{section.intro}</p>
                    )}
                    <ul className="list-disc pl-6 text-ink-700 space-y-2">
                      {section.labelItems.map((item, i) => (
                        <li key={i}>
                          <strong>{item.label}:</strong> {item.desc}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : section.items ? (
                  <>
                    {section.intro && (
                      <p className="text-ink-700 leading-relaxed mb-4">{section.intro}</p>
                    )}
                    <ul className="list-disc pl-6 text-ink-700 space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : section.before !== undefined ? (
                  <p className="text-ink-700 leading-relaxed">
                    {section.before}
                    <a href="mailto:mail@aibooking.dk" className="text-brand-600 hover:text-brand-800">mail@aibooking.dk</a>
                    {section.after}
                  </p>
                ) : (
                  <p className="text-ink-700 leading-relaxed">
                    {section.body}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default PrivacyPage;
