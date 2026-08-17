import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface PrivacyPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy') => void;
}

function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <>
      <Navigation onNavigate={onNavigate} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 mb-4">
              Privatlivspolitik
            </h1>
            <p className="text-xl text-ink-600">
              Sådan beskytter vi dine personlige data
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                1. Introduktion
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Aibooking.dk er forpligtet til at beskytte dine personlige data og respektere dit privatliv. Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger, gemmer og beskytter dine personlige oplysninger, når du bruger vores platform og services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                2. Dataansvarlig
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Aibooking.dk (herefter "vi" eller "os") er dataansvarlig for behandlingen af dine personlige data i henhold til Databeskyttelsesforordningen (GDPR).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                3. Hvilke data indsamler vi
              </h2>
              <p className="text-ink-700 leading-relaxed mb-4">Vi indsamler følgende kategorier af personlige data:</p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2">
                <li><strong>Kontodata:</strong> Navn, e-mailadresse, telefonnummer og andre oplysninger, du giver os, når du opretter en konto</li>
                <li><strong>Betalingsdata:</strong> Faktureringsadresse og betalingsoplysninger (behandlet sikkert via betalingsudbydere)</li>
                <li><strong>Brugsdata:</strong> Oplysninger om dine aktiviteter på platformen, såsom bookinger, forespørgsler og interaktioner</li>
                <li><strong>Tekniske data:</strong> IP-adresse, browsertype, enhedstype og andre tekniske oplysninger</li>
                <li><strong>Kommunikationsdata:</strong> E-mails, beskeder og anden kommunikation mellem dig og os</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                4. Hvordan bruger vi dine data
              </h2>
              <p className="text-ink-700 leading-relaxed mb-4">Vi bruger dine personlige data til følgende formål:</p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2">
                <li>At levere og administrere vores services</li>
                <li>At behandle dine bookinger og transaktioner</li>
                <li>At kommunikere med dig om din konto og vores services</li>
                <li>At forbedre og optimere vores platform</li>
                <li>At opfylde juridiske og regulatoriske krav</li>
                <li>At forhindre svindel og sikre sikkerheden på vores platform</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                5. Deling af data
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Vi deler kun dine personlige data med tredjeparts-udbydere, der er nødvendige for at levere vores services, såsom betalingsprocessorer, hostingudbydere og kundestøtte-platforme. Alle tredjeparts-udbydere er forpligtet til at behandle dine data sikkert og i overensstemmelse med gældende lovgivning.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                6. Lagring af data
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Dine personlige data lagres på sikre servere og slettes ikke længere end nødvendigt for at opfylde formålene, de blev indsamlet til, medmindre lovgivningen kræver længere opbevaring. Du kan anmode om sletning af dine data på ethvert tidspunkt ved at kontakte os.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                7. Dine rettigheder
              </h2>
              <p className="text-ink-700 leading-relaxed mb-4">I henhold til GDPR har du følgende rettigheder vedrørende dine personlige data:</p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2">
                <li><strong>Ret til adgang:</strong> Du kan anmode om at se, hvilke personlige data vi har om dig</li>
                <li><strong>Ret til berigtigelse:</strong> Du kan anmode om, at vi retter urigtige data</li>
                <li><strong>Ret til sletning:</strong> Du kan anmode om, at vi sletter dine data</li>
                <li><strong>Ret til begrænsning:</strong> Du kan anmode om, at vi begrænser brugen af dine data</li>
                <li><strong>Ret til dataportabilitet:</strong> Du kan anmode om at modtage dine data i et struktureret format</li>
                <li><strong>Ret til indsigelse:</strong> Du kan protestere mod visse behandlinger af dine data</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                8. Sikkerhed
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Vi implementerer tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine personlige data mod uautoriseret adgang, ændring, offentliggørelse eller ødelæggelse. Dette omfatter kryptering, sikre forbindelser og adgangskontrol.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                9. Cookies
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Vores platform kan bruge cookies for at forbedre din brugeroplevelse. Du kan kontrollere cookie-indstillingerne i din browser. Nogle cookies er nødvendige for, at platformen kan fungere korrekt, mens andre bruges til at analysere brugeradfærd.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                10. Ændringer til denne politik
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Vi kan opdatere denne privatlivspolitik fra tid til anden. Vigtige ændringer vil blive kommunikeret til dig via e-mail eller gennem en meddelelse på platformen. Din fortsatte brug af platformen efter ændringer betyder, at du accepterer de nye vilkår.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ink-900 mt-8 mb-4">
                11. Kontakt os
              </h2>
              <p className="text-ink-700 leading-relaxed">
                Hvis du har spørgsmål om denne privatlivspolitik eller ønsker at udøve dine rettigheder, er du velkommen til at kontakte os på <a href="mailto:kontakt@aibooking.dk" className="text-brand-600 hover:text-brand-800">kontakt@aibooking.dk</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default PrivacyPage;
