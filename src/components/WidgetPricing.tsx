import { Check, ArrowRight, Sparkles } from 'lucide-react';

function WidgetPricing() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-ink-50 via-white to-brand-50/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-ink-100/60 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-50 to-brand-100/80 text-brand-700 px-5 py-2.5 rounded-full mb-8 border border-brand-200/50 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Nem Integration På Din Hjemmeside</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight">
            AIBooking Voice AI-Widget
          </h2>
          <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            Voicebot dine kunder kan snakke med direkte på din hjemmeside - håndterer spørgsmål og bookinger automatisk
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-brand-200/60 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-100/50 to-transparent rounded-full blur-2xl"></div>

            <div className="p-8 md:p-12 lg:p-16 relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <div className="inline-block bg-gradient-to-r from-brand-600 to-brand-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-md">
                      Mest Fleksible Løsning
                    </div>
                    <div className="flex items-baseline mb-2">
                      <span className="text-6xl md:text-7xl font-bold text-ink-900">999</span>
                      <span className="text-2xl text-ink-600 ml-3">kr/md</span>
                    </div>
                    <p className="text-ink-600 text-lg">
                      Inkluderer 150 minutters taletid (ca. 6,66 kr/minut)
                    </p>
                    <p className="text-sm text-ink-500 mt-1">
                      Pakken fornyes automatisk når de 150 minutter er brugt
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        <span className="font-semibold text-ink-900">Voice AI-bot</span> - kunder taler direkte med AI'en
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        Besvarer spørgsmål og håndterer bookinger
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        Bookinger går direkte i din kalender
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        24/7 tilgængelig på din hjemmeside
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        150 minutters taletid inkluderet
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        <span className="font-semibold text-ink-900">Betal kun for aktiv tale</span> - ingen timeløn
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        <span className="font-semibold text-ink-900">Åben 24/7, 365 dage om året</span> - altid klar
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-brand-600" />
                      </div>
                      <span className="text-ink-700 leading-relaxed">
                        Håndterer kunder selv når du er optaget
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://aibooking.dk/widget"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-xl hover:from-brand-700 hover:to-brand-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
                  >
                    Se AI-Widget i aktion
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-ink-100 to-ink-200/80 rounded-2xl p-8 border border-ink-300/50 shadow-lg">
                    <div className="bg-white rounded-xl p-6 shadow-md mb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink-900">AI Booking Assistant</div>
                          <div className="text-xs text-ink-500">Online nu</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-brand-50 rounded-lg p-3 border border-brand-100">
                          <p className="text-sm text-ink-700">
                            <span className="font-semibold">🎤 AI Voice:</span> Hej! Du kan tale direkte med mig. Hvad kan jeg hjælpe dig med?
                          </p>
                        </div>
                        <div className="bg-ink-100 rounded-lg p-3 ml-8 border border-ink-200">
                          <p className="text-sm text-ink-700">
                            <span className="font-semibold">🗣️ Kunde:</span> "Jeg vil gerne booke en tid på fredag"
                          </p>
                        </div>
                        <div className="bg-brand-50 rounded-lg p-3 border border-brand-100">
                          <p className="text-sm text-ink-700">
                            <span className="font-semibold">🎤 AI Voice:</span> Perfekt! Jeg har følgende tider ledige på fredag...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-ink-600 font-medium">
                        Voice AI-widget - kunder taler direkte på din side
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-50 to-ink-50 rounded-2xl p-8 max-w-3xl mx-auto border border-brand-100/50 shadow-sm">
            <p className="text-lg text-ink-700 leading-relaxed">
              <span className="font-semibold text-ink-900">Perfekt til:</span> Klinikker, håndværkere, konsulenter, saloner,
              kontorer og alle andre virksomheder der tager imod bookinger direkte på deres hjemmeside.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WidgetPricing;
