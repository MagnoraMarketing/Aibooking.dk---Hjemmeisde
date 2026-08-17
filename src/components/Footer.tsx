import { Phone, Mail, MapPin } from 'lucide-react';

type NavigatePage = 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy' | 'blog';

interface FooterProps {
  onNavigate?: (page: NavigatePage) => void;
}

function Footer({ onNavigate = () => {} }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Aibooking.dk</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automatisér dine bookinger og kundeservice med intelligent AI-teknologi.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">Løsninger</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  AI Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('widget')}
                  className="hover:text-blue-400 transition-colors"
                >
                  AI Widget
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('integrations')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Integrationer
                </button>
              </li>
              <li>
                <a
                  href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Book Demo
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-blue-400 transition-colors"
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
                  className="hover:text-blue-400 transition-colors"
                >
                  Klinik & Sundhed
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsman')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Håndværker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('office')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Kontor & Erhverv
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ecommerce')}
                  className="hover:text-blue-400 transition-colors"
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
                  className="hover:text-blue-400 transition-colors"
                >
                  Alle Artikler
                </button>
              </li>
              <li>
                <a
                  href="/blog/category/ai-widget"
                  className="hover:text-blue-400 transition-colors"
                >
                  AI Widget
                </a>
              </li>
              <li>
                <a
                  href="/blog/category/ai-inbound-outbound"
                  className="hover:text-blue-400 transition-colors"
                >
                  AI Inbound/Outbound
                </a>
              </li>
              <li>
                <a
                  href="/blog/category/ai-total-solution"
                  className="hover:text-blue-400 transition-colors"
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
                  className="hover:text-blue-400 transition-colors"
                >
                  Om os
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Privatlivspolitik
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-blue-400 transition-colors"
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
                <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                <a href="mailto:kontakt@aibooking.dk" className="hover:text-blue-400 transition-all">
                  kontakt@aibooking.dk
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                <a href="tel:+4591952794" className="hover:text-blue-400 transition-all">
                  +45 91952794
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>Aarhus C, Danmark</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2026 Aibooking.dk. Alle rettigheder forbeholdes. - <a href="https://www.nexusmarketing.dk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">www.nexusmarketing.dk</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
