import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface TermsPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms') => void;
}

function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <>
      <Navigation onNavigate={onNavigate} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Vilkår og betingelser
            </h1>
            <p className="text-xl text-slate-600">
              Vilkår og betingelser for Aibooking.dk
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Disse vilkår og betingelser gælder for brugen af Aibooking.dk og de ydelser, der tilbydes via platformen. Ved at oprette en konto, booke en DEMO eller købe et abonnement accepterer du nedenstående vilkår.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                1. Generelt
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Aibooking.dk er en online booking- og administrationsplatform. Platformen udbydes som en digital tjeneste og leveres som den er og forefindes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                2. DEMO-periode
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Når du booker en DEMO hos Aibooking.dk, får du 7 dages gratis prøveperiode.</li>
                <li>Prøveperioden starter fra den dag, adgangen gives.</li>
                <li>I DEMO-perioden har du mulighed for at afprøve funktionerne på platformen.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                3. Køb og bestilling
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Du kan vælge at købe direkte uden DEMO-periode.</li>
                <li>Ved køb kan du samtidig bestille onboarding, hvor du bliver hjulpet i gang med opsætning og brug af Aibooking.dk.</li>
                <li>Alle priser er angivet i danske kroner (DKK) og er ekskl. moms, medmindre andet er angivet.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                4. Betaling
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Betaling sker forud for den valgte abonnementsperiode.</li>
                <li>Abonnementet faktureres løbende, typisk månedligt, medmindre andet er aftalt.</li>
                <li>Manglende betaling kan medføre suspension eller lukning af adgangen til platformen.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                5. Fortrydelsesret
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Efter gennemført køb er der ingen fortrydelsesret.</li>
                <li>Dette gælder både for abonnementer og eventuel onboarding, da der er tale om digitale ydelser, som leveres straks.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                6. Opsigelse
              </h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Abonnementet er løbende måned plus én måned.</li>
                <li>Opsigelse skal ske skriftligt via e-mail eller via din konto på Aibooking.dk.</li>
                <li>Opsigelsen træder i kraft ved udgangen af den efterfølgende måned.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                7. Ændringer
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Aibooking.dk forbeholder sig retten til løbende at ændre disse vilkår og betingelser. Opdaterede vilkår vil altid være tilgængelige på hjemmesiden.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                8. Ansvarsbegrænsning
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Aibooking.dk kan ikke holdes ansvarlig for indirekte tab, driftstab, datatab eller andre følgeskader, som måtte opstå ved brug af platformen.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                9. Kontakt
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Har du spørgsmål til vilkår og betingelser, er du velkommen til at kontakte os via Aibooking.dk.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default TermsPage;
