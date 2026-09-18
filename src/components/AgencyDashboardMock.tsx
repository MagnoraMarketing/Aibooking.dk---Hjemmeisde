import { useTranslation } from 'react-i18next';
import {
  MessageSquare, Sparkles, Clock, AlertCircle, Mic, Phone, Calendar, CreditCard, User,
} from 'lucide-react';
import type { IndustryKey } from './industries/industryTheme';

type Channel = 'widget' | 'inbound';
type RowStatus = 'active' | 'ended';
type BookingStatus = 'booked' | 'failed';

interface RecentRow { name: string; date: string; status: RowStatus; minutes: string; channel: Channel }
interface Booking { name: string; time: string; status: BookingStatus }

interface VariantData {
  accountName: string;
  accountInitial: string;
  accent: { iconBg: string; text: string; ring: string };
  stats: { conversations: string; widgets: string; minutesUsed: string; minutesLeft: string };
  widgetPanel: { agents: string; conversations: string; minutes: string };
  phonePanel: { agents: string; calls: string; minutes: string };
  recent: RecentRow[];
  recentWidgets: string[];
  bookings: Booking[];
}

export type DashboardVariant = IndustryKey | 'frisor';

// Fictional demo data — names and figures are the same in every language
// (they're not natural-language content), only the surrounding UI labels
// are translated, via the shared "agencyDashboard" namespace.
const VARIANTS: Record<DashboardVariant, VariantData> = {
  frisor: {
    accountName: 'Frisørstuen',
    accountInitial: 'F',
    accent: { iconBg: 'bg-brand-600', text: 'text-brand-600', ring: 'ring-brand-600/20' },
    stats: { conversations: '19', widgets: '5', minutesUsed: '20.25', minutesLeft: '6.18' },
    widgetPanel: { agents: '2', conversations: '12', minutes: '20.2' },
    phonePanel: { agents: '3', calls: '7', minutes: '0.0' },
    recent: [
      { name: 'Frisørstuen', date: '17. sep. 03:54', status: 'active', minutes: '0.00', channel: 'widget' },
      { name: 'Frisørstuen', date: '17. sep. 03:35', status: 'active', minutes: '0.00', channel: 'inbound' },
      { name: 'Main widget', date: '17. sep. 03:19', status: 'ended', minutes: '2.63', channel: 'widget' },
      { name: 'Main widget', date: '17. sep. 03:19', status: 'active', minutes: '0.00', channel: 'inbound' },
    ],
    recentWidgets: ['Frisørstuen', 'Main widget', 'Claudeio'],
    bookings: [
      { name: 'Lasse', time: '18. sep., 08:00', status: 'booked' },
      { name: 'Lasse Sørensen', time: '17. sep., 10:00', status: 'failed' },
    ],
  },
  healthcare: {
    accountName: 'Pentworth Klinik',
    accountInitial: 'P',
    accent: { iconBg: 'bg-green-600', text: 'text-green-600', ring: 'ring-green-600/20' },
    stats: { conversations: '34', widgets: '3', minutesUsed: '41.10', minutesLeft: '18.90' },
    widgetPanel: { agents: '1', conversations: '9', minutes: '11.4' },
    phonePanel: { agents: '2', calls: '25', minutes: '29.7' },
    recent: [
      { name: 'Pentworth Klinik', date: '17. sep. 09:12', status: 'active', minutes: '0.00', channel: 'inbound' },
      { name: 'Pentworth Klinik', date: '17. sep. 08:47', status: 'ended', minutes: '3.20', channel: 'inbound' },
      { name: 'Booking-widget', date: '16. sep. 15.02', status: 'ended', minutes: '1.55', channel: 'widget' },
      { name: 'Pentworth Klinik', date: '16. sep. 11:30', status: 'ended', minutes: '2.05', channel: 'inbound' },
    ],
    recentWidgets: ['Booking-widget', 'Pentworth Klinik'],
    bookings: [
      { name: 'Maria Holm', time: '18. sep., 09:30', status: 'booked' },
      { name: 'Jonas Ege', time: '18. sep., 13:15', status: 'booked' },
    ],
  },
  craftsman: {
    accountName: 'Nielsen VVS',
    accountInitial: 'N',
    accent: { iconBg: 'bg-orange-600', text: 'text-orange-600', ring: 'ring-orange-600/20' },
    stats: { conversations: '27', widgets: '2', minutesUsed: '33.40', minutesLeft: '11.60' },
    widgetPanel: { agents: '1', conversations: '6', minutes: '7.8' },
    phonePanel: { agents: '2', calls: '21', minutes: '25.6' },
    recent: [
      { name: 'Nielsen VVS', date: '17. sep. 14:21', status: 'active', minutes: '0.00', channel: 'inbound' },
      { name: 'Nielsen VVS', date: '17. sep. 12:05', status: 'ended', minutes: '4.10', channel: 'inbound' },
      { name: 'Hjemmeside-widget', date: '17. sep. 10:47', status: 'ended', minutes: '2.30', channel: 'widget' },
      { name: 'Nielsen VVS', date: '16. sep. 16:18', status: 'ended', minutes: '3.45', channel: 'inbound' },
    ],
    recentWidgets: ['Hjemmeside-widget', 'Nielsen VVS'],
    bookings: [
      { name: 'Karsten Lund', time: '19. sep., 07:30', status: 'booked' },
      { name: 'Pia Krogh', time: '18. sep., 14:00', status: 'booked' },
    ],
  },
  office: {
    accountName: 'Møller & Partners',
    accountInitial: 'M',
    accent: { iconBg: 'bg-brand-600', text: 'text-brand-600', ring: 'ring-brand-600/20' },
    stats: { conversations: '22', widgets: '2', minutesUsed: '26.80', minutesLeft: '15.20' },
    widgetPanel: { agents: '1', conversations: '8', minutes: '9.6' },
    phonePanel: { agents: '1', calls: '14', minutes: '17.2' },
    recent: [
      { name: 'Møller & Partners', date: '17. sep. 11:02', status: 'active', minutes: '0.00', channel: 'inbound' },
      { name: 'Kontakt-widget', date: '17. sep. 09:40', status: 'ended', minutes: '1.48', channel: 'widget' },
      { name: 'Møller & Partners', date: '16. sep. 15:55', status: 'ended', minutes: '5.02', channel: 'inbound' },
      { name: 'Kontakt-widget', date: '16. sep. 13:10', status: 'ended', minutes: '2.11', channel: 'widget' },
    ],
    recentWidgets: ['Kontakt-widget', 'Møller & Partners'],
    bookings: [
      { name: 'Sofie Bach', time: '18. sep., 10:00', status: 'booked' },
      { name: 'Rasmus Dahl', time: '17. sep., 16:00', status: 'failed' },
    ],
  },
  ecommerce: {
    accountName: 'Nordisk Webshop',
    accountInitial: 'N',
    accent: { iconBg: 'bg-brand-600', text: 'text-brand-600', ring: 'ring-brand-600/20' },
    stats: { conversations: '58', widgets: '4', minutesUsed: '35.90', minutesLeft: '9.10' },
    widgetPanel: { agents: '3', conversations: '46', minutes: '28.4' },
    phonePanel: { agents: '1', calls: '12', minutes: '7.5' },
    recent: [
      { name: 'Nordisk Webshop', date: '17. sep. 20:16', status: 'active', minutes: '0.00', channel: 'widget' },
      { name: 'Nordisk Webshop', date: '17. sep. 19:02', status: 'ended', minutes: '1.12', channel: 'widget' },
      { name: 'Ordrestatus-widget', date: '17. sep. 17:44', status: 'ended', minutes: '0.58', channel: 'widget' },
      { name: 'Nordisk Webshop', date: '17. sep. 12:30', status: 'ended', minutes: '3.02', channel: 'inbound' },
    ],
    recentWidgets: ['Nordisk Webshop', 'Ordrestatus-widget'],
    bookings: [
      { name: 'Camilla Vig', time: '18. sep., 12:00', status: 'booked' },
      { name: 'Anders Berg', time: '18. sep., 15:30', status: 'booked' },
    ],
  },
};

interface AgencyDashboardMockProps {
  variant: DashboardVariant;
}

// Mock-up of the account dashboard's overview screen, built in markup rather
// than as a screenshot so it stays sharp, responsive and translated. The
// business shown is fictional; only the surrounding UI chrome is translated
// — names, dates and figures are demo data and read the same in every
// language.
export default function AgencyDashboardMock({ variant }: AgencyDashboardMockProps) {
  const { t } = useTranslation('agencyDashboard');
  const data = VARIANTS[variant];

  const navTabs = t('navTabs', { returnObjects: true }) as string[];

  const statTiles = [
    { icon: MessageSquare, label: t('stats.totalConversations'), value: data.stats.conversations },
    { icon: Sparkles, label: t('stats.activeWidgets'), value: data.stats.widgets },
    { icon: Clock, label: t('stats.minutesUsed'), value: data.stats.minutesUsed },
    { icon: AlertCircle, label: t('stats.minutesLeft'), value: data.stats.minutesLeft },
  ];

  const panels = [
    {
      key: 'widget' as const,
      icon: Mic,
      title: t('panels.widgetTitle'),
      agents: data.widgetPanel.agents,
      middleValue: data.widgetPanel.conversations,
      middleLabel: t('panels.conversations'),
      minutes: data.widgetPanel.minutes,
    },
    {
      key: 'phone' as const,
      icon: Phone,
      title: t('panels.phoneTitle'),
      agents: data.phonePanel.agents,
      middleValue: data.phonePanel.calls,
      middleLabel: t('panels.calls'),
      minutes: data.phonePanel.minutes,
    },
  ];

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-ink-200 bg-white">
      {/* App top bar */}
      <div className="bg-white border-b border-ink-200 px-4 sm:px-5 py-3 flex items-center gap-4 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {navTabs.map((tab, i) => (
            <span
              key={i}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
                i === 0 ? `${data.accent.text} bg-ink-50` : 'text-ink-500'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3 flex-shrink-0">
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
            <CreditCard className="w-3.5 h-3.5" />
            {t('creditsLabel')}: {data.stats.minutesLeft}
          </span>
          <div className={`w-8 h-8 rounded-full ${data.accent.iconBg} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
            {data.accountInitial}
          </div>
        </div>
      </div>

      <div className="bg-ink-50 p-4 sm:p-6 space-y-5">
        <div>
          <h3 className="text-2xl font-bold text-ink-900">{t('title')}</h3>
          <p className="text-sm text-ink-600 mt-0.5">{t('subtitle')}</p>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {statTiles.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-2xl border border-ink-200 p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-ink-600 leading-snug">{stat.label}</div>
                  <div className="text-2xl font-bold text-ink-900 leading-tight">{stat.value}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Widget vs phone panels — the two channels this account is billed and reported on */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {panels.map((panel) => {
            const Icon = panel.icon;
            return (
              <div key={panel.key} className="bg-white rounded-2xl border border-ink-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <Icon className={`w-4 h-4 ${data.accent.text} flex-shrink-0`} />
                    <span className="font-semibold text-ink-900 text-[15px] truncate">{panel.title}</span>
                  </div>
                  <span className={`text-xs font-medium whitespace-nowrap ml-3 ${data.accent.text}`}>
                    {t('panels.seeAgents')}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xl font-bold text-ink-900">{panel.agents}</div>
                    <div className="text-[11px] text-ink-400 mt-0.5">{t('panels.activeAgents')}</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-ink-900">{panel.middleValue}</div>
                    <div className="text-[11px] text-ink-400 mt-0.5">{panel.middleLabel}</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-ink-900">{panel.minutes}</div>
                    <div className="text-[11px] text-ink-400 mt-0.5">{t('panels.minutes')}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 items-start">
          {/* Recent conversations — each row tagged Widget or Inbound so the two
              channels stay visibly distinct in the same table. */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-ink-200 overflow-hidden">
            <h4 className="font-semibold text-ink-900 px-5 pt-5 pb-3">{t('recent.title')}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-ink-50 text-[11px] uppercase tracking-wider text-ink-400">
                    <th scope="col" className="text-left font-semibold px-5 py-2.5">{t('recent.columns.widget')}</th>
                    <th scope="col" className="text-left font-semibold px-3 py-2.5">{t('recent.columns.date')}</th>
                    <th scope="col" className="text-left font-semibold px-3 py-2.5">{t('recent.columns.status')}</th>
                    <th scope="col" className="text-left font-semibold px-3 py-2.5">{t('recent.columns.minutes')}</th>
                    <th scope="col" className="px-5 py-2.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {data.recent.map((row, i) => {
                    const ChannelIcon = row.channel === 'widget' ? Mic : Phone;
                    return (
                      <tr key={i}>
                        <td className="px-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-ink-900">{row.name}</div>
                          <div className={`inline-flex items-center gap-1 text-[11px] font-medium mt-0.5 ${data.accent.text}`}>
                            <ChannelIcon className="w-3 h-3" />
                            {t(`channelLabel.${row.channel}`)}
                          </div>
                        </td>
                        <td className="px-3 py-3 text-ink-500 whitespace-nowrap">{row.date}</td>
                        <td className="px-3 py-3">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap ${
                              row.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-ink-100 text-ink-600'
                            }`}
                          >
                            {t(`status.${row.status}`)}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-ink-700 tabular-nums">{row.minutes}</td>
                        <td className="px-5 py-3 text-right">
                          <span className={`text-xs font-medium whitespace-nowrap ${data.accent.text}`}>
                            {t('recent.viewCall')}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recently used widgets + bookings */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white rounded-2xl border border-ink-200 p-5">
              <h4 className="font-semibold text-ink-900 mb-3">{t('recentWidgetsTitle')}</h4>
              <ul className="space-y-2.5">
                {data.recentWidgets.map((widget, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="truncate">{widget}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-ink-200 p-5">
              <h4 className="font-semibold text-ink-900 mb-3">{t('bookingsTitle')}</h4>
              <ul className="space-y-3">
                {data.bookings.map((booking, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-ink-900 truncate flex items-center gap-1.5">
                        <User className="w-3 h-3 text-ink-400 flex-shrink-0" />
                        {booking.name}
                      </div>
                      <div className="text-xs text-ink-400">{booking.time}</div>
                    </div>
                    <span
                      className={`text-xs font-medium whitespace-nowrap px-2 py-0.5 rounded-full ${
                        booking.status === 'booked' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {t(`status.${booking.status}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
