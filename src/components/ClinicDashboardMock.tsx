import { useTranslation } from 'react-i18next';
import { PhoneIncoming, PhoneOutgoing, PhoneCall, Users, Clock, Gauge, Calendar } from 'lucide-react';

interface StatTile { label: string; value: string }
interface CallRow { agent: string; date: string; status: string; live: boolean; minutes: string }
interface BookingRow { name: string; type: string; time: string }

// Mock-up of the customer dashboard, built in markup rather than as a
// screenshot so it stays sharp, responsive and translated. The figures are a
// fictional dental clinic — see the note rendered under the frame.
export default function ClinicDashboardMock() {
  const { t } = useTranslation('clinicDashboard');

  const appTabs = t('appTabs', { returnObjects: true }) as string[];
  const stats = t('stats', { returnObjects: true }) as StatTile[];
  const rows = t('recent.rows', { returnObjects: true }) as CallRow[];
  const agents = t('agents.items', { returnObjects: true }) as string[];
  const bookings = t('bookings.items', { returnObjects: true }) as BookingRow[];

  const statIcons = [PhoneCall, Users, Clock, Gauge];

  const panels = [
    { key: 'inbound', icon: PhoneIncoming },
    { key: 'outbound', icon: PhoneOutgoing },
  ] as const;

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-ink-200 bg-white">
      {/* Browser chrome */}
      <div className="bg-ink-100 px-5 py-3 flex items-center gap-3 border-b border-ink-200">
        <div className="flex gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-[11px] text-ink-400 ml-2 truncate border border-ink-200">
          {t('windowLabel')}
        </div>
      </div>

      {/* App tab bar */}
      <div className="bg-white border-b border-ink-200 px-4 sm:px-5 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {appTabs.map((tab, i) => (
            <span
              key={i}
              className={`px-3 py-3 text-[13px] font-medium whitespace-nowrap border-b-2 ${
                i === 0
                  ? 'text-brand-700 border-brand-600'
                  : 'text-ink-600 border-transparent'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-ink-50 p-4 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-2xl font-bold text-ink-900">{t('heading')}</h3>
            <p className="text-sm text-ink-600 mt-0.5">{t('headingSub')}</p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-sm font-semibold text-ink-800">{t('org')}</div>
            <div className="text-xs text-ink-400">{t('period')}</div>
          </div>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i] ?? PhoneCall;
            return (
              // Stacked on narrow screens: side by side, the label has too
              // little room left and gets cut off mid-word.
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

        {/* Direction panels */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
          {panels.map(({ key, icon: Icon }) => (
            <div key={key} className="bg-white rounded-2xl border border-ink-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 min-w-0">
                  <Icon className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span className="font-semibold text-ink-900 text-[15px] truncate">
                    {t(`panels.${key}.title`)}
                  </span>
                </div>
                <span className="text-xs text-brand-600 font-medium whitespace-nowrap ml-3">
                  {t('seeAgents')}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {(['agents', 'calls', 'minutes'] as const).map((metric) => (
                  <div key={metric}>
                    <div className="text-xl font-bold text-ink-900">
                      {t(`panels.${key}.${metric}`)}
                    </div>
                    <div className="text-[11px] text-ink-400 mt-0.5">
                      {t(`panels.${metric}Label`)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 items-start">
          {/* Recent calls */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-ink-200 overflow-hidden">
            <h4 className="font-semibold text-ink-900 px-5 pt-5 pb-3">{t('recent.title')}</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[520px]">
                <thead>
                  <tr className="bg-ink-50 text-[11px] uppercase tracking-wider text-ink-400">
                    <th scope="col" className="text-left font-semibold px-5 py-2.5">{t('recent.columns.agent')}</th>
                    <th scope="col" className="text-left font-semibold px-3 py-2.5">{t('recent.columns.date')}</th>
                    <th scope="col" className="text-left font-semibold px-3 py-2.5">{t('recent.columns.status')}</th>
                    <th scope="col" className="text-left font-semibold px-3 py-2.5">{t('recent.columns.minutes')}</th>
                    <th scope="col" className="px-5 py-2.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {rows.map((row, i) => (
                    <tr key={i}>
                      <td className="px-5 py-3 font-medium text-ink-900 whitespace-nowrap">{row.agent}</td>
                      <td className="px-3 py-3 text-brand-600 whitespace-nowrap">{row.date}</td>
                      <td className="px-3 py-3">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap ${
                            row.live ? 'bg-green-50 text-green-700' : 'bg-ink-100 text-ink-600'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-ink-700 tabular-nums">{row.minutes}</td>
                      <td className="px-5 py-3 text-right">
                        <span className="text-brand-600 text-xs font-medium whitespace-nowrap">
                          {t('recent.view')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Agents + bookings */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white rounded-2xl border border-ink-200 p-5">
              <h4 className="font-semibold text-ink-900 mb-3">{t('agents.title')}</h4>
              <ul className="space-y-2.5">
                {agents.map((agent, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="truncate">{agent}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-ink-200 p-5">
              <h4 className="font-semibold text-ink-900 mb-3">{t('bookings.title')}</h4>
              <ul className="space-y-3">
                {bookings.map((booking, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-ink-900 truncate">{booking.name}</div>
                      <div className="text-xs text-ink-400 truncate">{booking.type}</div>
                    </div>
                    <span className="text-xs font-medium text-ink-700 whitespace-nowrap">{booking.time}</span>
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
