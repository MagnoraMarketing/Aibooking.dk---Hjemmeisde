import { ArrowRight, CheckCircle2 } from 'lucide-react';

function IntegrationCTA() {
  const benefits = [
    'Automatisk håndtering af ind- og udgående opkald',
    'SMS påmindelser og bekræftelser sendes automatisk',
    'Email kommunikation styret af AI',
    'Ombookinger håndteres uden manuel indgriben',
    'Mødebekræftigelser sendes til tiden hver gang',
    'Opfølgning på mistede opkald og henvendelser',
    'Real-time synkronisering med alle dine systemer',
    'Professionel håndtering 24/7'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lad AI'en overtage administrationen
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Vores AI-løsning integrerer problemfrit med dine eksisterende systemer og
              automatiserer alt fra telefonopkald til email kommunikation. Spar timer hver
              dag og fokuser på det der virkelig betyder noget: dine kunder.
            </p>
            <a
              href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg group"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Hvad får du med AI-integration?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-blue-50">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">5 min</div>
            <p className="text-blue-100">Gennemsnitlig opsætningstid</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-blue-100">AI-drevet kundeservice</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <p className="text-blue-100">Automatisk synkronisering</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationCTA;
