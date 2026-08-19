import { useTranslation } from 'react-i18next';
import { CheckCircle2, BarChart3 } from 'lucide-react';

interface IndustrySectionProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  benefits: string[];
  stats: { label: string; value: string; icon: typeof BarChart3 }[];
  bgColor: string;
  accentColor: string;
}

function IndustrySection({
  title,
  subtitle,
  description,
  videoUrl,
  benefits,
  stats,
  bgColor,
  accentColor
}: IndustrySectionProps) {
  const { t } = useTranslation('industriesPage');

  return (
    <div className={`${bgColor} py-20 border-b border-ink-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-ink-900 mb-4`}>
            {title}
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg">
              <p className="text-ink-700 leading-relaxed mb-8">
                {description}
              </p>

              <h3 className={`text-2xl font-bold ${accentColor} mb-6`}>
                {t('industrySection.benefitsTitle')}
              </h3>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className={`w-6 h-6 ${accentColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-ink-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto"
                controls
                poster="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <Icon className={`w-8 h-8 ${accentColor} mb-3`} />
                <div className="text-3xl font-bold text-ink-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-ink-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IndustrySection;
