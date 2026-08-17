import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { industriesFAQs } from '../content/faq';
import IndustrySection from '../components/industries/IndustrySection';
import ContactForm from '../components/industries/ContactForm';
import IndustrySEO from '../components/industries/IndustrySEO';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { BarChart3, Calendar, Clock, TrendingUp, Users, Phone, MessageSquare, CheckSquare } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: 'home' | 'email' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features') => void;
}

function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Brancher', url: 'https://www.aibooking.dk/industries' },
  ]);
  const industries = [
    {
      title: 'Klinikker og Sundhed',
      subtitle: 'Frihed til at fokusere på patientpleje',
      page: 'healthcare' as const,
      description: `Som klinik ved du, hvor vigtigt det er at give dine patienter den bedste behandling. Men administrative opgaver som telefonopkald, bookinger og aflysninger stjæler værdifuld tid fra patientplejen.

Vores AI-receptionist håndterer alle kundehenvendelser professionelt – fra nye bookinger til ombookinger og bekræftelser. Med automatisk SMS-påmindelse reducerer du no-shows betydeligt. Dit personaliserede dashboard giver dig komplet overblik: Lyt til alle opkald, se korte opsummeringer af hver samtale, hvad der er aftalt, booking-statistik og kalenderintegration. Du kan fortsætte med at bruge din nuværende kalendersoftware – vores system synkroniserer automatisk.`,
      videoUrl: 'https://example.com/clinic-video.mp4',
      benefits: [
        'Reducer telefontid med 85% – fokuser på dine patienter i stedet',
        'Automatiske SMS-påmindelser reducerer no-shows med op til 60%',
        'Håndter bookinger, ombookinger og aflysninger 24/7',
        'Komplet dashboard med opkaldshistorik og samtaleopsummeringer',
        'Integration med dit eksisterende booking-system og kalender',
        'Fuld GDPR-overholdelse for følsomme patientdata'
      ],
      stats: [
        { label: 'Færre no-shows', value: '60%', icon: TrendingUp },
        { label: 'Sparet tid', value: '12t/uge', icon: Clock },
        { label: 'Booking rate', value: '95%', icon: Calendar },
        { label: 'Kundetilfredshed', value: '4.8/5', icon: Users }
      ],
      bgColor: 'bg-green-50',
      accentColor: 'text-green-600'
    },
    {
      title: 'Håndværkere',
      subtitle: 'Stop med at miste ordrer fordi telefonen ikke bliver taget',
      page: 'craftsman' as const,
      description: `Du kender det: Du er midt i et job, og telefonen ringer. Hvis du tager den, mister du fokus. Hvis du ikke gør, mister du potentielt en god ordre. Det er en umulig situation.

Vores AI-receptionist løser dette problem én gang for alle. Systemet tager imod alle opkald, registrerer kundeoplysninger, booker besigtigelser og sender automatiske bekræftelser via SMS. I dit dashboard kan du se alle henvendelser, lytte til optagede samtaler, få korte opsummeringer af hvad kunden ønsker, og se hvad der er blevet aftalt. Din kalender opdateres automatisk, uanset hvilket system du bruger. Slip for bekymringen om mistede ordrer – fokuser på dit håndværk.`,
      videoUrl: 'https://example.com/craftsman-video.mp4',
      benefits: [
        'Tag imod alle henvendelser selv når du er på job',
        'Automatisk registrering af kundeoplysninger og opgavebeskrivelser',
        'Book besigtigelser direkte i din kalender – synkroniserer automatisk',
        'SMS-bekræftelser til både dig og kunden',
        'Dashboard med alle kundehenvendelser og hvad der er aftalt',
        'Aldrig gå glip af en ordre igen – systemet arbejder 24/7'
      ],
      stats: [
        { label: 'Flere ordrer', value: '+45%', icon: TrendingUp },
        { label: 'Sparet tid', value: '10t/uge', icon: Clock },
        { label: 'Svar-rate', value: '100%', icon: Phone },
        { label: 'Kundetilfredshed', value: '4.9/5', icon: Users }
      ],
      bgColor: 'bg-orange-50',
      accentColor: 'text-orange-600'
    },
    {
      title: 'Kontor og Administration',
      subtitle: 'Professionel kundeservice uden afbrydelser',
      page: 'office' as const,
      description: `I kontorvirksomheder er koncentration og produktivitet afgørende. Men konstante telefonopkald afbryder arbejdsflowet og reducerer effektiviteten betydeligt. Samtidig er det vigtigt at give kunderne hurtig og professionel service.

Med Aibooking.dk får du det bedste fra begge verdener. Vores AI-receptionist screener alle indkommende opkald, håndterer bookinger af møder, besvarer almindelige spørgsmål og videresender kun de vigtigste henvendelser. Dit team får fred til at arbejde koncentreret, mens kunderne oplever professionel service døgnet rundt. Dashboard'et giver dig komplet kontrol: Lyt til alle samtaler, se detaljerede opsummeringer, booking-statistik og kalenderintegration. Perfekt til advokater, revisorer, konsulenter og andre videnvirksomheder.`,
      videoUrl: 'https://example.com/office-video.mp4',
      benefits: [
        'Reducer afbrydelser og forbedr medarbejdernes produktivitet',
        'Professionel telefonbetjening uden ekstra lønomkostninger',
        'Automatisk screeing af opkald – kun vigtige sager viderestilles',
        'Book møder direkte i teamets fælles kalender',
        'Dashboard med samtalehistorik, opsummeringer og statistik',
        'Integration med eksisterende CRM og kalendersystemer'
      ],
      stats: [
        { label: 'Produktivitet', value: '+35%', icon: TrendingUp },
        { label: 'Sparet tid', value: '15t/uge', icon: Clock },
        { label: 'Håndterede opkald', value: '98%', icon: Phone },
        { label: 'ROI', value: '320%', icon: BarChart3 }
      ],
      bgColor: 'bg-brand-50',
      accentColor: 'text-brand-600'
    },
    {
      title: 'Webshops og E-handel',
      subtitle: 'Kundeservice der skalerer med din forretning',
      page: 'ecommerce' as const,
      description: `I e-handelsverden er hurtig kundeservice afgørende for succes. Forsinkede svar på kundehenvendelser betyder mistede salg og dårlige anmeldelser. Men at bemande kundeservice 24/7 er dyrt og kompleks.

Aibooking.dk giver dig AI-drevet kundeservice der aldrig sover. Systemet besvarer almindelige spørgsmål om produkter, leveringstider, returneringer og ordrestatus øjeblikkeligt. Komplekse henvendelser eskaleres automatisk til dit team. Med SMS-notifikationer holder du kunderne opdaterede gennem hele købsrejsen. Dit dashboard viser alle kundeinteraktioner, opsummeringer af samtaler, hyppige spørgsmål og trends, så du konstant kan optimere din service. Reducer svartider fra timer til sekunder og forbedr kundetilfredsheden markant.`,
      videoUrl: 'https://example.com/webshop-video.mp4',
      benefits: [
        'Besvar kundehenvendelser øjeblikkeligt 24/7 uden ekstra personale',
        'Håndter spørgsmål om produkter, ordrestatus og returneringer automatisk',
        'Automatiske SMS-opdateringer om forsendelser og leveringer',
        'Reducer svartider fra timer til sekunder',
        'Dashboard med kundeinteraktioner, trends og hyppige spørgsmål',
        'Integration med dit webshop-system og ordrehåndtering'
      ],
      stats: [
        { label: 'Hurtigere svar', value: '95%', icon: Clock },
        { label: 'Kundetilfredshed', value: '+40%', icon: Users },
        { label: 'Håndterede henvendelser', value: '1200+/md', icon: MessageSquare },
        { label: 'Konvertering', value: '+28%', icon: CheckSquare }
      ],
      bgColor: 'bg-brand-50',
      accentColor: 'text-brand-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Receptionist Løsninger for Alle Brancher | Aibooking.dk"
        description="AI-receptionist til sundhed, håndværk, kontorer og e-handel. Skræddersyede løsninger til din branche. 7 dages gratis demo. Perfekt til danske virksomheder."
        keywords="branche løsninger, AI receptionist brancher, sundhed AI, håndværk AI, kontor AI, webshop AI"
        canonical="https://www.aibooking.dk/industries"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <div className="pt-32 pb-20 bg-gradient-to-br from-ink-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">Løsninger til alle brancher</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 mb-8 leading-tight">
            Find den perfekte løsning<br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              til din branche
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-ink-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Aibooking.dk tilpasser sig dine behov – uanset om du driver en klinik, er håndværker,
            har et kontor eller driver en webshop. Få en skræddersyet løsning der passer perfekt til din virksomhed.
          </p>
        </div>
      </div>

      {industries.map((industry, index) => (
        <div key={index}>
          <IndustrySection
            {...industry}
          />
          <div className="text-center -mt-8 pb-12 relative z-10">
            <button
              onClick={() => onNavigate(industry.page)}
              className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Læs mere om {industry.title}
            </button>
          </div>
        </div>
      ))}

      <IndustrySEO />

      <ContactForm />

      <div className="bg-ink-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">7 dage</div>
              <div className="text-ink-400">Gratis demo adgang</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-ink-400">Uforpligtende</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-ink-400">Support og drift</div>
            </div>
          </div>
        </div>
      </div>

      <FAQ items={industriesFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default IndustriesPage;
