import { useTranslation } from 'react-i18next';
import {
  HelpCircle,
  Calendar,
  CalendarClock,
  MessageSquare,
  ShoppingCart,
  Package,
  TrendingUp,
  Clock,
} from 'lucide-react';

const ICONS = [HelpCircle, Calendar, CalendarClock, MessageSquare, ShoppingCart, Package, TrendingUp, Clock];

function WidgetCapabilitiesSEO() {
  const { t } = useTranslation('widgetCapabilitiesSEO');
  const capabilities = t('capabilities', { returnObjects: true }) as { title: string; text: string }[];

  return (
    <div className="bg-ink-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-ink-600 leading-relaxed">
            {t('intro')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {capabilities.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-ink-100">
                <Icon className="w-7 h-7 text-brand-600 mb-4" />
                <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>

        <p className="max-w-3xl mx-auto text-center text-lg font-semibold text-brand-600 mt-14">
          {t('closing')}
        </p>
      </div>
    </div>
  );
}

export default WidgetCapabilitiesSEO;
