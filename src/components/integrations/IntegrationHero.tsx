import { Zap, Clock, CheckCircle } from 'lucide-react';

function IntegrationHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-50 via-white to-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Problemfri Integration</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Forbind med dine
            <span className="text-brand-600"> eksisterende værktøjer</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Vores AI-løsning automatiserer administration, opkald, SMS og email ved at arbejde
            sammen med de systemer du allerede bruger. Spar tid, bliv mere professionel og lad
            AI'en håndtere ombookinger, opfølgning og mødebekræftigelser automatisk.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Spar Timer Dagligt</h3>
              <p className="text-gray-600 text-sm">
                Automatiser ind- og udgående opkald, SMS og emails mens AI'en synkroniserer med dine systemer
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hurtig Opsætning</h3>
              <p className="text-gray-600 text-sm">
                Ingen kompliceret installation. Forbind dine eksisterende værktøjer på minutter
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Altid Synkroniseret</h3>
              <p className="text-gray-600 text-sm">
                Real-time opdateringer på tværs af alle dine platforme. Ingen dobbeltarbejde
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationHero;
