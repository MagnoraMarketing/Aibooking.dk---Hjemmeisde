import { useTranslation } from 'react-i18next';
import {
  ArrowRight, CheckCircle, Globe, LayoutDashboard, MessageSquare, PhoneIncoming, PhoneOutgoing,
  BookOpen, Calendar, Layers,
} from 'lucide-react';
import type { SupportedLanguage } from '../../i18n/config';
import { blogPostPath, buildLocalizedPath } from '../../utils/localePaths';

// Sections of the /ai-receptionist page: the three channels (AI Voice Widget
// first, then inbound and outbound calls), the combined solution with a worked
// example, and the comparison with voicemail and answering services.
// Texts: src/i18n/locales/pages/aiReceptionistPage.<lang>.json.
// Images: localized SVGs from scripts/generate-illustrations.js, so the text in
// each illustration follows the visitor's language.

function useLang() {
  const { i18n } = useTranslation();
  return (i18n.resolvedLanguage || i18n.language) as SupportedLanguage;
}

/** Localized illustration (public/images/illustrations/<name>-<lang>.svg). */
export function Illustration({ name, alt, width, height, className = '' }: { name: string; alt: string; width: number; height: number; className?: string }) {
  const lang = useLang();
  return (
    <img
      src={`/images/illustrations/${name}-${lang}.svg`}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`w-full h-auto rounded-3xl ${className}`}
    />
  );
}

function Points({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${dark ? 'text-accent-400' : 'text-brand-600'}`} />
          <span className={dark ? 'text-ink-200' : 'text-ink-700'}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ReceptionistChannels() {
  const { t } = useTranslation('aiReceptionistPage');
  const lang = useLang();
  const widgetPoints = t('channels.widget.points', { returnObjects: true }) as string[];
  const inboundPoints = t('channels.inbound.points', { returnObjects: true }) as string[];
  const outboundPoints = t('channels.outbound.points', { returnObjects: true }) as string[];

  return (
    <section id="kanaler" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-brand-100">
            <Layers className="w-3.5 h-3.5" />
            {t('channels.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-6 tracking-tight">{t('channels.title')}</h2>
          <p className="text-lg text-ink-600 leading-relaxed">{t('channels.intro')}</p>
        </div>

        {/* 1. AI Voice Widget — the first and largest channel */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-[2rem] p-6 sm:p-10 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 mb-3">
              <MessageSquare className="w-4 h-4" />
              {t('channels.widget.label')}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-ink-900 mb-4">{t('channels.widget.title')}</h3>
            <p className="text-lg text-ink-600 leading-relaxed mb-6">{t('channels.widget.text')}</p>
            <Points items={widgetPoints} />
            <a href={buildLocalizedPath(lang, '/widget')} className="group inline-flex items-center mt-7 font-semibold text-brand-600 hover:text-brand-700">
              {t('channels.widget.link')}
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <Illustration name="widget-chat" alt={t('channels.widget.imageAlt')} width={1200} height={720} className="shadow-xl ring-1 ring-ink-200/60" />
        </div>

        {/* 2. Inbound and 3. outbound, right below */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white border border-ink-200 rounded-[2rem] p-6 sm:p-8 shadow-sm">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 mb-3">
              <PhoneIncoming className="w-4 h-4" />
              {t('channels.inbound.label')}
            </span>
            <h3 className="text-2xl font-bold text-ink-900 mb-4">{t('channels.inbound.title')}</h3>
            <p className="text-ink-600 leading-relaxed mb-6">{t('channels.inbound.text')}</p>
            <Illustration name="call-salon" alt={t('channels.inbound.imageAlt')} width={1200} height={760} className="mb-6 ring-1 ring-ink-200/60" />
            <Points items={inboundPoints} />
          </div>
          <div className="lg:col-span-2 bg-gradient-to-br from-ink-900 to-ink-950 rounded-[2rem] p-6 sm:p-8 text-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-accent-300">
                <PhoneOutgoing className="w-4 h-4" />
                {t('channels.outbound.label')}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider bg-accent-500/20 text-accent-300 border border-accent-500/30 rounded-full px-3 py-1">
                {t('channels.outbound.badge')}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('channels.outbound.title')}</h3>
            <p className="text-ink-300 leading-relaxed mb-6">{t('channels.outbound.text')}</p>
            <Points items={outboundPoints} dark />
            <p className="text-sm text-ink-400 mt-auto pt-6">{t('channels.outbound.note')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Step { time: string; channel: string; title: string; text: string }
interface Benefit { title: string; text: string }

const STEP_ICONS = [MessageSquare, PhoneIncoming, PhoneOutgoing, LayoutDashboard];
const BENEFIT_ICONS = [BookOpen, Calendar, Globe];

export function ReceptionistCombined() {
  const { t } = useTranslation('aiReceptionistPage');
  const steps = t('combined.steps', { returnObjects: true }) as Step[];
  const benefits = t('combined.benefits', { returnObjects: true }) as Benefit[];

  return (
    <section id="samlet-loesning" className="py-20 md:py-28 bg-ink-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white text-brand-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 border border-brand-100">
            <Layers className="w-3.5 h-3.5" />
            {t('combined.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 mb-6 tracking-tight">{t('combined.title')}</h2>
          <p className="text-lg text-ink-600 leading-relaxed">{t('combined.intro')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <ol className="relative border-l-2 border-brand-200 ml-4 space-y-8">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              return (
                <li key={step.time} className="pl-10 relative">
                  <span className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="text-sm font-semibold text-brand-700 mb-1">{step.time} · {step.channel}</div>
                  <h3 className="text-xl font-bold text-ink-900 mb-2">{step.title}</h3>
                  <p className="text-ink-600 leading-relaxed">{step.text}</p>
                </li>
              );
            })}
          </ol>
          <figure className="lg:sticky lg:top-28">
            <Illustration name="bookings-salon" alt={t('combined.imageAlt')} width={1200} height={720} className="shadow-xl ring-1 ring-ink-200/60" />
            <figcaption className="text-sm text-ink-600 mt-3 text-center">{t('combined.caption')}</figcaption>
          </figure>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {benefits.map((b, i) => {
            const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
            return (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-ink-100 shadow-sm">
                <Icon className="w-7 h-7 text-brand-600 mb-3" />
                <h3 className="font-bold text-ink-900 mb-2">{b.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ReceptionistAlternatives() {
  const { t } = useTranslation('aiReceptionistPage');
  const lang = useLang();
  const columns = t('alternatives.columns', { returnObjects: true }) as string[];
  const rows = t('alternatives.rows', { returnObjects: true }) as string[][];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-5 tracking-tight">{t('alternatives.title')}</h2>
          <p className="text-lg text-ink-600 leading-relaxed">{t('alternatives.intro')}</p>
        </div>
        <div className="overflow-x-auto rounded-3xl shadow-lg border border-ink-100">
          <table className="w-full bg-white min-w-[720px] text-left">
            <thead>
              <tr className="bg-ink-50">
                {columns.map((c, i) => (
                  <th key={i} scope="col" className={`px-5 py-4 font-semibold ${i === 1 ? 'bg-brand-600 text-white' : 'text-ink-700'}`}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    i === 0
                      ? <th key={i} scope="row" className="px-5 py-4 font-medium text-ink-800">{cell}</th>
                      : <td key={i} className={`px-5 py-4 ${i === 1 ? 'bg-brand-50/60 font-semibold text-brand-800' : 'text-ink-600'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <a href={blogPostPath(lang, 'ai-receptionist-vs-telefonpasning')} className="group inline-flex items-center font-semibold text-brand-600 hover:text-brand-700">
            {t('alternatives.link')}
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
