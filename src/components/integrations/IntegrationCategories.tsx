import { useTranslation } from 'react-i18next';
import { Calendar, Users, MessageSquare, FileText, BarChart, Wrench } from 'lucide-react';

interface CategoryItem { title: string; description: string }

function IntegrationCategories() {
  const { t } = useTranslation('integrationsPage');

  const categoriesText = t('categoriesSection.categories', { returnObjects: true }) as CategoryItem[];
  const categoryIcons = [Calendar, Users, MessageSquare, FileText, BarChart, Wrench];
  const categoryColors = ['blue', 'green', 'purple', 'orange', 'pink', 'indigo'] as const;
  const categories = categoriesText.map((item, i) => ({ ...item, icon: categoryIcons[i], color: categoryColors[i] }));

  const colorClasses = {
    blue: 'bg-brand-100 text-brand-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-brand-100 text-brand-600',
    orange: 'bg-orange-100 text-orange-600',
    pink: 'bg-pink-100 text-pink-600',
    indigo: 'bg-indigo-100 text-indigo-600'
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('categoriesSection.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('categoriesSection.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className={`w-14 h-14 ${colorClasses[category.color]} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IntegrationCategories;
