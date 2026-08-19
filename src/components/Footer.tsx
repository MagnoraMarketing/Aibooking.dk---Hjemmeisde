import { Phone, Mail, MapPin, LogIn, UserPlus } from 'lucide-react';

type NavigatePage = 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog';

interface FooterProps {
  onNavigate?: (page: NavigatePage) => void;
}

function Footer({ onNavigate = () => {} }: FooterProps) {
  return (
    <footer className="bg-ink-900 text-ink-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-ink-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Aibooking.dk</span>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed">
              Automatisér dine bookinger og kundeservice med intelligent AI-teknologi.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">Løsninger</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-brand-400 transition-colors"
                >
                  AI Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('widget')}
                  className="hover:text-brand-400 transition-colors"
                >
                  AI Widget
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('integrations')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Integrationer
                </button>
              </li>
              <li>
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  Book Demo
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Funktioner
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">Brancher</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('healthcare')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Klinik & Sundhed
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsman')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Håndværker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('office')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Kontor & Erhverv
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ecommerce')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Webshop & E-handel
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">Blog</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Alle Artikler
                </button>
              </li>
              <li>
                <a
                  href="/blog/category/ai-widget"
                  className="hover:text-brand-400 transition-colors"
                >
                  AI Widget
                </a>
              </li>
              <li>
                <a
                  href="/blog/category/ai-inbound-outbound"
                  className="hover:text-brand-400 transition-colors"
                >
                  AI Inbound/Outbound
                </a>
              </li>
              <li>
                <a
                  href="/blog/category/ai-total-solution"
                  className="hover:text-brand-400 transition-colors"
                >
                  AI Total Løsning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">Virksomhed</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Om os
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Privatlivspolitik
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Vilkår og betingelser
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400" />
                <a href="mailto:kontakt@aibooking.dk" className="hover:text-brand-400 transition-all">
                  kontakt@aibooking.dk
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-brand-400" />
                <a href="tel:+4591952794" className="hover:text-brand-400 transition-all">
                  +45 91952794
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400" />
                <span>Aarhus C, Danmark</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 bg-ink-800/60 border border-ink-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold text-lg">Allerede kunde hos Aibooking.dk?</p>
            <p className="text-sm text-ink-400">Log ind på dit dashboard, eller opret en gratis konto som ny kunde.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://aibooking-backendnew.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-ink-600 text-white hover:border-brand-400 hover:text-brand-400 transition-colors font-medium text-sm"
            >
              <LogIn className="w-4 h-4" />
              Log ind
            </a>
            <a
              href="https://aibooking-backendnew.vercel.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors font-semibold text-sm"
            >
              <UserPlus className="w-4 h-4" />
              Opret konto
            </a>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 text-center text-sm text-ink-400">
          <p>&copy; 2026 Aibooking.dk. Alle rettigheder forbeholdes. Lavet og drevet af <a href="https://www.magnoramarketing.dk" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">MagnoraMarketing.dk</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
