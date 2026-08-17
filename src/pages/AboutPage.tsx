import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { aboutFAQs } from '../content/faq';
import SEO from '../components/SEO';
import { createBreadcrumbSchema } from '../utils/structuredData';
import { Users, Target, Lightbulb, Heart, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about') => void;
}

function AboutPage({ onNavigate }: AboutPageProps) {
  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Hjem', url: 'https://www.aibooking.dk/' },
    { name: 'Om Os', url: 'https://www.aibooking.dk/about' },
  ]);
  const values = [
    {
      icon: Heart,
      title: 'Kundefokus',
      description: 'Vi sætter altid vores kunders behov i centrum og stræber efter at levere den bedste service.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Vi udvikler konstant nye løsninger og forbedrer vores AI-teknologi for at være på forkant.'
    },
    {
      icon: Shield,
      title: 'Pålidelighed',
      description: 'Vi leverer stabile og sikre løsninger, som du kan stole på dag efter dag.'
    },
    {
      icon: TrendingUp,
      title: 'Vækst',
      description: 'Vi hjælper virksomheder med at vokse ved at automatisere og optimere deres kundeservice.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Erfaring der gør en forskel',
      description: 'Med over 20 års erfaring i telemarketing kender vi alle udfordringer ved kundekontakt. Vores AI-løsning er bygget på reel brancheforståelse.'
    },
    {
      icon: Zap,
      title: 'Automatisering der fungerer',
      description: 'Vi ved præcis hvilke dele af kundekontakten der kan automatiseres effektivt. Vores virtuelle receptionist håndterer både indgående og udgående opkald professionelt.'
    },
    {
      icon: Shield,
      title: 'Support på dansk, engelsk og spansk',
      description: 'Vores AI taler perfekt dansk, engelsk og spansk. Vi giver dig lokal support og rådgivning baseret på dybdegående markedskendskab.'
    },
    {
      icon: Lightbulb,
      title: 'Erfaring på tværs af mange brancher',
      description: 'Vi har mange års erfaring i adskillige brancher og har derfor sikker forståelse for, hvordan vi sætter den bedst mulige løsning op for netop din virksomhed.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ink-50 via-white to-brand-50/30">
      <SEO
        title="Om Os - 20+ Års Erfaring i Telemarketing | Aibooking.dk"
        description="Folkene bag Aibooking.dk har 20+ års erfaring i telemarketing. Vores virtuelle receptionist automatiserer indgående og udgående kundekontakt. 500+ tilfredse kunder."
        keywords="om aibooking, telemarketing erfaring, virtuel receptionist, AI kundeservice Danmark, indgående opkald, udgående opkald, automatisering kundekontakt"
        canonical="https://www.aibooking.dk/about"
        structuredData={breadcrumbData}
      />
      <Navigation onNavigate={onNavigate} />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              <span>Om Aibooking.dk</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ink-900 mb-6">
              Vi revolutionerer<br />kundeservice med AI
            </h1>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
              Vores mission er at hjælpe danske virksomheder med at levere fremragende kundeservice døgnet rundt ved hjælp af avanceret AI-teknologi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                <span>Vores historie</span>
              </div>
              <h2 className="text-4xl font-bold text-ink-900 mb-6">
                Fra idé til virkelighed
              </h2>
              <div className="space-y-4 text-ink-600 leading-relaxed">
                <p>
                  Aibooking.dk blev grundlagt med en klar vision: At gøre professionel kundeservice tilgængelig for alle virksomheder, uanset størrelse.
                </p>
                <p>
                  Folkene bag Aibooking.dk har mere end 20 års erfaring i telemarketing opgaver, både indgående og udgående. Vi ved præcis, hvor mange ressourcer der bruges på kundekontakt i danske virksomheder. Denne dybdegående viden har ført os til at udvikle en AI-løsning, der fungerer som Din Virtuelle Receptionist og effektivt kan automatisere mange af de gentagne opgaver, der ellers kræver betydelige personalemæssige ressourcer.
                </p>
                <p>
                  Vi opdagede gennem vores årelange erfaring, at mange små og mellemstore virksomheder mistede værdifulde kunder, fordi de ikke havde ressourcer til at besvare alle henvendelser døgnet rundt. Vores løsning kombinerer avanceret AI-teknologi med dansk sprog og kultur.
                </p>
                <p>
                  I dag betjener vi hundredvis af virksomheder på tværs af Danmark og hjælper dem med at forbedre deres kundeservice, øge deres booking-rate og frigøre tid til det, de er bedst til.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-12 text-white shadow-2xl">
              <Globe className="w-16 h-16 mb-8 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">Vores vision</h3>
              <p className="text-brand-100 text-lg leading-relaxed mb-6">
                At være Danmarks førende leverandør af AI-drevne kundeservice løsninger og hjælpe virksomheder med at vokse gennem bedre kundeoplevelser.
              </p>
              <div className="flex items-center space-x-3 bg-brand-500/30 rounded-xl p-4">
                <Zap className="w-8 h-8 text-yellow-300" />
                <span className="font-semibold">Innovation driver os fremad</span>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ink-900 mb-4">Vores værdier</h2>
              <p className="text-xl text-ink-600 max-w-2xl mx-auto">
                De principper der guider alt hvad vi gør
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-ink-200/60 hover:shadow-xl transition-all hover:scale-105">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-3">{value.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ink-900 mb-4">Hvorfor vælge Aibooking.dk?</h2>
              <p className="text-xl text-ink-600 max-w-2xl mx-auto">
                Erfaring, ekspertise og resultater der taler for sig selv
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-ink-200/60 hover:shadow-xl transition-all hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-4">{benefit.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-ink-200/60 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-ink-900 mb-4">Din Virtuelle Receptionist</h2>
              <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
                Vores AI-løsning er ikke bare endnu en chatbot. Det er resultatet af årtiers erfaring med telemarketing og kundekontakt. Vi forstår, hvad det kræver at levere professionel kundeservice, og har bygget en løsning der virkelig fungerer i praksis.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-ink-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ink-900 mb-4">Indgående opkald</h3>
                <p className="text-ink-600 leading-relaxed mb-4">
                  Vores virtuelle receptionist tager imod alle indgående opkald, besvarer spørgsmål, bookinger og viderestiller kun når det er nødvendigt. Det betyder færre afbrudte arbejdsgange og mere tid til kerneopgaver.
                </p>
                <ul className="space-y-2 text-ink-600">
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>24/7 tilgængelighed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Professionel dansk kommunikation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Automatisk booking og bekræftelse</span>
                  </li>
                </ul>
              </div>
              <div className="bg-ink-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-ink-900 mb-4">Udgående opkald</h3>
                <p className="text-ink-600 leading-relaxed mb-4">
                  Med erfaring fra udgående telemarketing ved vi, hvad der virker. Vores AI kan foretage opfølgende opkald, bekræftelser og påmindelser - altid med det rigtige tone og timing.
                </p>
                <ul className="space-y-2 text-ink-600">
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Automatiske påmindelser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Booking bekræftelser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 mr-2">✓</span>
                    <span>Kundeservice opfølgning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-ink-200/60 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-ink-900 mb-4">Aibooking.dk Widget</h2>
              <p className="text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
                Aibooking.dk Widget gør det nemt at planlægge og booke møder uden manuel indsats. Integrer vores intelligente widget direkte på din hjemmeside og lad AI'en tage styringen. Både via Voice og tekst mulighed hvor du får booket nye møder automatisk ind i din kalender.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-ink-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">AI-baseret planlægning</h3>
                <p className="text-ink-600 leading-relaxed">
                  Widgeten foreslår de bedste tidspunkter for dig og dine kunder – helt automatisk.
                </p>
              </div>
              <div className="bg-ink-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">Voice og tekst booking</h3>
                <p className="text-ink-600 leading-relaxed">
                  Dine kunder kan vælge mellem at tale direkte med AI'en eller bruge tekstbaseret booking.
                </p>
              </div>
              <div className="bg-ink-50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">Automatisk kalenderintegration</h3>
                <p className="text-ink-600 leading-relaxed">
                  Nye møder bliver automatisk booket ind i din kalender uden manuel håndtering.
                </p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://www.aibooking.dk/widget"
                className="inline-block bg-brand-600 text-white px-8 py-4 rounded-xl hover:bg-brand-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Læs mere om Widget
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Klar til at komme i gang?</h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Lad os vise dig hvordan Aibooking.dk kan transformere din kundeservice og hjælpe din virksomhed med at vokse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Book en demo
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-brand-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-400 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white/20"
              >
                Kontakt os
              </button>
            </div>
          </div>
        </div>
      </div>

      <FAQ items={aboutFAQs} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default AboutPage;
