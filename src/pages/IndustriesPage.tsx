import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import BookingAudioDemo from '../components/BookingAudioDemo';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import AppQrSection from '../components/AppQrSection';
import FAQ from '../components/FAQ';
import { industriesFAQs } from '../content/faq';
import IndustrySection from '../components/industries/IndustrySection';
import ContactForm from '../components/industries/ContactForm';
import IndustrySEO from '../components/industries/IndustrySEO';
import WidgetCapabilitiesSEO from '../components/WidgetCapabilitiesSEO';
import SEO from '../components/SEO';
import type { SupportedLanguage } from '../i18n/config';
import { localizedUrl } from '../utils/localePaths';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { BarChart3, Calendar, Clock, TrendingUp, Users, Phone, MessageSquare, CheckSquare, Scissors } from 'lucide-react';
import type { NavigatePage } from '../types/navigation';
import PageLink from '../components/PageLink';

interface IndustriesPageProps {
  onNavigate: (page: NavigatePage) => void;
}

interface StatText { label: string; value: string }
interface IndustryText {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  stats: StatText[];
}

const industryKeys = ['healthcare', 'craftsman', 'office', 'ecommerce'] as const;

const industryMeta = [
  {
    page: 'healthcare' as const,
    videoUrl: 'https://example.com/clinic-video.mp4',
    bgColor: 'bg-green-50',
    accentColor: 'text-green-600',
    statIcons: [TrendingUp, Clock, Calendar, Users]
  },
  {
    page: 'craftsman' as const,
    videoUrl: 'https://example.com/craftsman-video.mp4',
    bgColor: 'bg-orange-50',
    accentColor: 'text-orange-600',
    statIcons: [TrendingUp, Clock, Phone, Users]
  },
  {
    page: 'office' as const,
    videoUrl: 'https://example.com/office-video.mp4',
    bgColor: 'bg-brand-50',
    accentColor: 'text-brand-600',
    statIcons: [TrendingUp, Clock, Phone, BarChart3]
  },
  {
    page: 'ecommerce' as const,
    videoUrl: 'https://example.com/webshop-video.mp4',
    bgColor: 'bg-brand-50',
    accentColor: 'text-brand-600',
    statIcons: [Clock, Users, MessageSquare, CheckSquare]
  }
];

function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const { t, i18n } = useTranslation('industriesPage');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;

  const breadcrumbData = createBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: localizedUrl(lang, '/') },
    { name: t('breadcrumb.industries'), url: localizedUrl(lang, '/brancher') },
  ]);

  const industriesText = t('industries', { returnObjects: true }) as Record<typeof industryKeys[number], IndustryText>;

  const industries = industryKeys.map((key, i) => {
    const text = industriesText[key];
    const meta = industryMeta[i];
    return {
      ...text,
      ...meta,
      stats: text.stats.map((stat, si) => ({ ...stat, icon: meta.statIcons[si] }))
    };
  });

  const bottomStats = t('bottomStats', { returnObjects: true }) as Record<'days' | 'free' | 'support', { value: string; label: string }>;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={localizedUrl(lang, '/brancher')}
        path="/brancher"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} transparent />

      <PageHero badge={t('hero.badge')} title={t('hero.title_line1')} highlight={t('hero.title_line2')} subtitle={t('hero.subtitle')} />

      {/* Real recorded example call (Danish only), right below the hero */}
      <BookingAudioDemo className="border-t border-white/10" />

      {industries.map((industry, index) => (
        <div key={index}>
          <IndustrySection
            {...industry}
          />
          <div className="text-center -mt-8 pb-12 relative z-10">
            <PageLink page={industry.page}
              onClick={() => onNavigate(industry.page)}
              className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('readMoreButton', { title: industry.title })}
            </PageLink>
          </div>
        </div>
      ))}

      {/* Salons use the same building blocks; linked here so the page is reachable from the overview */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-rose-50 border border-rose-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
            <Scissors className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-3">{t('salon.title')}</h2>
            <p className="text-ink-600 leading-relaxed">{t('salon.text')}</p>
          </div>
          <PageLink page="salon"
            onClick={() => onNavigate('salon')}
            className="bg-rose-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-rose-700 transition-all text-center"
          >
            {t('salon.link')}
          </PageLink>
        </div>
      </section>

      <IndustrySEO />

      <ContactForm />

      <div className="bg-ink-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">{bottomStats.days.value}</div>
              <div className="text-ink-400">{bottomStats.days.label}</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">{bottomStats.free.value}</div>
              <div className="text-ink-400">{bottomStats.free.label}</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">{bottomStats.support.value}</div>
              <div className="text-ink-400">{bottomStats.support.label}</div>
            </div>
          </div>
        </div>
      </div>

      <FAQ items={industriesFAQs} />
      <WidgetCapabilitiesSEO />
      <AppQrSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default IndustriesPage;
