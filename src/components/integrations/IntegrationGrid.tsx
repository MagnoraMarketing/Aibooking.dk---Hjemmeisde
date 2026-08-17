import { Calendar, Mail, MessageSquare, ShoppingBag, FileText, Zap, Video, Share2 } from 'lucide-react';

function IntegrationGrid() {
  const integrations = [
    {
      name: 'Google Calendar',
      description: 'Automatisk booking og synkronisering af møder',
      icon: Calendar,
      category: 'Kalender',
      popular: true
    },
    {
      name: 'Outlook',
      description: 'Microsoft 365 integration til email og kalender',
      icon: Mail,
      category: 'Kalender',
      popular: true
    },
    {
      name: 'WhatsApp',
      description: 'Send SMS bekræftelser og påmindelser',
      icon: MessageSquare,
      category: 'Kommunikation',
      popular: true
    },
    {
      name: 'Slack',
      description: 'Real-time notifikationer til dit team',
      icon: MessageSquare,
      category: 'Kommunikation',
      popular: false
    },
    {
      name: 'Shopify',
      description: 'E-handel booking integration',
      icon: ShoppingBag,
      category: 'E-handel',
      popular: true
    },
    {
      name: 'Notion',
      description: 'Dokumenter og noter synkronisering',
      icon: FileText,
      category: 'Produktivitet',
      popular: false
    },
    {
      name: 'WordPress',
      description: 'Tilføj booking til din hjemmeside',
      icon: FileText,
      category: 'Hjemmeside',
      popular: true
    },
    {
      name: 'Zapier',
      description: 'Forbind med 5000+ apps automatisk',
      icon: Zap,
      category: 'Automatisering',
      popular: true
    },
    {
      name: 'Zoom',
      description: 'Automatisk oprettelse af mødelinks',
      icon: Video,
      category: 'Video',
      popular: true
    },
    {
      name: 'Microsoft Teams',
      description: 'Teams møde integration',
      icon: Video,
      category: 'Video',
      popular: false
    },
    {
      name: 'Messenger',
      description: 'Facebook Messenger integration',
      icon: MessageSquare,
      category: 'Kommunikation',
      popular: false
    },
    {
      name: 'Discord',
      description: 'Community og server integration',
      icon: MessageSquare,
      category: 'Kommunikation',
      popular: false
    },
    {
      name: 'OpenAI',
      description: 'Avanceret AI-understøttelse',
      icon: Share2,
      category: 'AI',
      popular: false
    },
    {
      name: 'Webhooks',
      description: 'Custom integration med dine systemer',
      icon: Share2,
      category: 'Udvikler',
      popular: true
    },
    {
      name: 'REST API',
      description: 'Fuld API adgang til alle funktioner',
      icon: Share2,
      category: 'Udvikler',
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Populære Integrationer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Arbejd problemfrit med dine eksisterende værktøjer. Vores AI håndterer
            automatisk kommunikation på tværs af alle platforme.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Skabt specielt til klinikker og behandlingssteder
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Over 500 danske klinikker har allerede valgt vores løsning. Fra tandlægeklinikker og fysioterapeuter til skønhedssaloner og wellness-centre – vores AI-assistent integrerer perfekt med dit eksisterende booking-system og håndterer alt fra telefonopkald til SMS-påmindelser.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm"><strong>GDPR-sikker datahåndtering</strong> – alle patientdata behandles fortroligt og i overensstemmelse med sundhedsloven</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm"><strong>Reducér "no-shows" med op til 67%</strong> – automatiske påmindelser via SMS og email holder dine kunder informeret</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm"><strong>Opsætning på under 15 minutter</strong> – ingen IT-viden kræves, vores team guider dig hele vejen</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm"><strong>Dansk support 7 dage om ugen</strong> – hjælp når du har brug for det, på dit eget sprog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 relative group"
              >
                {integration.popular && (
                  <div className="absolute -top-3 -right-3 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Populær
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-50 transition-colors">
                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-brand-600 transition-colors" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {integration.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mangler din integration?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Vi tilføjer løbende nye integrationer. Med vores Webhook og API support kan du
            forbinde næsten hvilket som helst system til vores AI-løsning.
          </p>
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-600 text-white px-8 py-3 rounded-lg hover:bg-brand-700 transition-colors font-medium"
          >
            Book Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntegrationGrid;
