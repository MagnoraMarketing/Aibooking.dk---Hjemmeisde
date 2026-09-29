import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { SupportedLanguage } from '../i18n/config';
import { buildLocalizedPath } from '../utils/localePaths';

// Dark hero matching the AI Widget page (the site's reference design):
// ink-950 background, dot grid, brand/accent glows, pulsing badge, gradient
// headline highlight, accent primary CTA and a row of trust checkmarks.
// Pages render <Navigation transparent /> above it.

interface HeroCta {
  label: string;
  /** Danish-worded path (localized automatically) or an absolute URL. */
  href: string;
}

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  /** Optional second part of the headline, rendered with the gradient. */
  highlight?: ReactNode;
  subtitle?: ReactNode;
  /** Defaults to the free trial. Pass null to hide. */
  primaryCta?: HeroCta | null;
  /** Defaults to booking a demo. Pass null to hide. */
  secondaryCta?: HeroCta | null;
  /** Defaults to the shared trust points. Pass [] to hide. */
  trust?: string[];
  /** Optional right-hand column (image, mock, card). Centered layout when omitted. */
  aside?: ReactNode;
  /** Extra content under the CTAs (e.g. breadcrumbs, meta row). */
  children?: ReactNode;
  compact?: boolean;
}

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  trust,
  aside,
  children,
  compact = false,
}: PageHeroProps) {
  const { t, i18n } = useTranslation('pageHero');
  const lang = (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
  const href = (target: string) => (target.startsWith('http') ? target : buildLocalizedPath(lang, target));

  const primary = primaryCta === undefined ? { label: t('primary'), href: '/proeveperiode' } : primaryCta;
  const secondary = secondaryCta === undefined ? { label: t('secondary'), href: '/demo' } : secondaryCta;
  const trustItems = trust ?? (t('trust', { returnObjects: true }) as string[]);
  const centered = !aside;

  const content = (
    <div className={`space-y-8 ${centered ? 'max-w-4xl mx-auto text-center' : ''}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-accent-300 px-4 py-2 rounded-full text-sm font-semibold border border-white/10">
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
          {badge}
        </div>
      )}
      <h1 className={`${compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'} font-bold text-white leading-tight`}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className="bg-gradient-to-r from-brand-300 via-brand-200 to-accent-300 bg-clip-text text-transparent">
              {highlight}
            </span>
          </>
        )}
      </h1>
      {subtitle && (
        <p className={`text-xl text-ink-200 leading-relaxed ${centered ? 'max-w-3xl mx-auto' : ''}`}>{subtitle}</p>
      )}
      {(primary || secondary) && (
        <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
          {primary && (
            <a
              href={href(primary.href)}
              className="inline-flex items-center justify-center gap-2 bg-accent-400 text-ink-950 px-8 py-4 rounded-xl hover:bg-accent-300 transition-all font-bold shadow-lg shadow-accent-500/20 transform hover:scale-[1.02]"
            >
              {primary.label}
              <ArrowRight className="w-5 h-5" />
            </a>
          )}
          {secondary && (
            <a
              href={href(secondary.href)}
              className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
            >
              {secondary.label}
            </a>
          )}
        </div>
      )}
      {trustItems.length > 0 && (
        <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-300 ${centered ? 'justify-center' : ''}`}>
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent-400" /> {item}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  );

  return (
    <section className={`relative pt-32 ${compact ? 'pb-16 md:pb-20' : 'pb-16 md:pb-28'} bg-ink-950 overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:32px_32px]"></div>
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-brand-600/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {aside ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {content}
            <div className="relative">{aside}</div>
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
