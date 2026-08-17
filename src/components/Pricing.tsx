import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Pricing() {
  const [isAdditionalPricesOpen, setIsAdditionalPricesOpen] = useState(false);

  const plans = [
    {
      name: "Demo",
      description: "Til dig der vil se vores platform og lege selv med opsætning",
      price: "0",
      setup: "0",
      minutes: "Aktiv i 7 dage",
      features: [
        "Basis stemme-tilpasning",
        "Analyse dashboard",
        "Mulighed for at opgradere til Starterpakken"
      ],
      highlighted: false,
      isDemo: true
    },
    {
      name: "Starter",
      description: "Perfekt til mindre virksomheder der vil i gang med AI",
      price: "999",
      setup: "1.998",
      minutes: "200 minutter",
      features: [
        "200 AI opkalds-minutter",
        "Basis stemme-tilpasning",
        "Standard support",
        "Analyse dashboard",
        "Email notifikationer"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Ideel til voksende virksomheder med regelmæssige opkald",
      price: "2.499",
      setup: "4.998",
      minutes: "600 minutter",
      features: [
        "600 AI opkalds-minutter",
        "Avanceret stemme-tilpasning",
        "Prioriteret support",
        "Avanceret analyse",
        "Tilpassede integrationer",
        "SMS påmindelser",
        "Kundehistorik"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For organisationer der kræver maksimal fleksibilitet",
      price: "5.999",
      setup: "11.998",
      minutes: "2000 minutter",
      features: [
        "2000 AI opkalds-minutter",
        "Fuld stemme-tilpasning",
        "24/7 dedikeret support",
        "Tilpasset AI træning",
        "API adgang",
        "Dedikeret success manager",
        "Ubegrænset integrationer",
        "GDPR compliance support"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="priser" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full mb-8 border border-blue-100">
            <Check className="w-4 h-4" />
            <span className="text-sm font-semibold">Transparent Prissætning</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Vælg din pakke
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Skræddersyede pakker designet til virksomheder af alle størrelser
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 text-white shadow-xl scale-105 border border-blue-500/50'
                  : 'bg-white border border-slate-200/80 hover:border-blue-300/60 hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-5 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                    Mest Populær
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {plan.price === "0" ? (
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      Gratis
                    </span>
                  ) : (
                    <>
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                        kr/md
                      </span>
                    </>
                  )}
                </div>
                <div className={`mt-2 text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.minutes}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-blue-500' : 'bg-blue-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-slate-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.setup !== "0" && (
                <div className={`mb-6 pt-6 border-t ${plan.highlighted ? 'border-blue-500' : 'border-slate-200'}`}>
                  <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                    Engangspris på <span className="font-semibold">{plan.setup} kr</span> for opsætning og onboarding
                  </p>
                </div>
              )}

              <div className="flex-grow"></div>

              <a
                href={index === 0 ? "https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk" : index === 1 ? "https://buy.stripe.com/7sY5kC1CX5NF6oI3ET4AU00" : index === 2 ? "https://buy.stripe.com/9B628q3L5b7Z3cwgrF4AU01" : index === 3 ? "https://buy.stripe.com/7sYeVcgxRa3VcN64IX4AU02" : "https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all transform hover:scale-[1.02] text-[15px] ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-md'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                }`}
              >
                {index === 0 ? "Prøv gratis" : "Bestil pakke og book Onboarding"}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Efter bestilling modtager du et kalenderlink hvor du kan booke tid til opsætning.
          </p>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
            Øvrige priser
          </h3>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <button
              onClick={() => setIsAdditionalPricesOpen(!isAdditionalPricesOpen)}
              className="w-full flex items-center justify-between p-8 md:p-10 hover:bg-slate-50 transition-colors"
            >
              <h4 className="text-xl font-semibold text-slate-900">
                Se øvrige priser
              </h4>
              <ChevronDown
                className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${isAdditionalPricesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isAdditionalPricesOpen && (
              <div className="border-t border-slate-200">
                <div className="p-8 md:p-10 space-y-8">
                  <div className="pb-8 border-b border-slate-200">
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">
                      Opsætning
                    </h4>
                    <p className="text-slate-700 text-lg">
                      2 x abonnementspris <span className="text-slate-600 text-base">(engangsbeløb)</span>
                    </p>
                  </div>

                  <div className="pb-8 border-b border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      Månedlig vedligeholdelse og prompting <span className="text-blue-600 text-sm font-medium">(tilvalg)</span>
                    </h4>
                    <p className="text-slate-600 mb-2 text-sm leading-relaxed">
                      Vi står for vedligeholdelse og hjælper løbende med at optimere prompts, så der gives præcise og relevante svar. Det sparer jer tid og sikrer en endnu bedre oplevelse for jeres kunder og medarbejdere.
                    </p>
                    <p className="text-slate-900 font-semibold text-base">
                      2.995 kr./md
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">
                      Timepris ved ad hoc-opgaver
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Prompting/træning</span>
                        <span className="text-slate-900 font-semibold">695 kr. pr. time</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Udvikling</span>
                        <span className="text-slate-900 font-semibold">1.100 kr. pr. time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
