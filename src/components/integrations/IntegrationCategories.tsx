import { Calendar, Users, MessageSquare, FileText, BarChart, Wrench } from 'lucide-react';

function IntegrationCategories() {
  const categories = [
    {
      icon: Calendar,
      title: 'Kalender & Planlægning',
      description: 'Google Calendar, Outlook, CalDAV',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'CRM & Kunder',
      description: 'HubSpot, Salesforce, Pipedrive',
      color: 'green'
    },
    {
      icon: MessageSquare,
      title: 'Kommunikation',
      description: 'WhatsApp, Slack, Discord, Messenger',
      color: 'purple'
    },
    {
      icon: FileText,
      title: 'Dokumenter',
      description: 'Notion, WordPress, Google Docs',
      color: 'orange'
    },
    {
      icon: BarChart,
      title: 'E-handel',
      description: 'Shopify, WooCommerce, Stripe',
      color: 'pink'
    },
    {
      icon: Wrench,
      title: 'Automatisering',
      description: 'Zapier, Make, Webhooks, API',
      color: 'indigo'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    pink: 'bg-pink-100 text-pink-600',
    indigo: 'bg-indigo-100 text-indigo-600'
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integration Kategorier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vores AI-løsning forbinder med de værktøjer du allerede bruger hver dag
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
                <div className={`w-14 h-14 ${colorClasses[category.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4`}>
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
