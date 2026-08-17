import { useState, useRef, useEffect } from 'react';
import { Phone, Plug, Building2, ChevronDown, Stethoscope, Wrench, Briefcase, ShoppingCart, MessageSquare, Users, Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  onNavigate: (page: 'home' | 'widget' | 'integrations' | 'industries' | 'demo' | 'healthcare' | 'craftsman' | 'office' | 'ecommerce' | 'features' | 'contact' | 'about' | 'terms' | 'privacy') => void;
}

function Navigation({ onNavigate }: NavigationProps) {
  const { i18n } = useTranslation();
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
      }
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  const handleMobileNavigate = (page: Parameters<NavigationProps['onNavigate']>[0]) => {
    onNavigate(page);
    setIsMobileOpen(false);
  };

  const industries = [
    { name: 'Klinikker', page: 'healthcare' as const, icon: Stethoscope, description: 'Læger, tandlæger, fysioterapeuter' },
    { name: 'Håndværk', page: 'craftsman' as const, icon: Wrench, description: 'VVS, el, tømrer, maler' },
    { name: 'Kontor & Erhverv', page: 'office' as const, icon: Briefcase, description: 'Advokater, revisorer, konsulenter' },
    { name: 'E-commerce & Webshop', page: 'ecommerce' as const, icon: ShoppingCart, description: 'Webshops og online forretninger' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-ink-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-ink-900 tracking-tight">Aibooking.dk</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => onNavigate('home')}
                className="text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]"
              >
                {i18n.language === 'da' ? 'Hjem' : 'Home'}
              </button>
              <button
                onClick={() => onNavigate('features')}
                className="text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]"
              >
                {i18n.language === 'da' ? 'Fordele' : 'Benefits'}
              </button>
              <button
                onClick={() => onNavigate('widget')}
                className="text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]"
              >
                AI-Widget
              </button>
              <a href="#priser" className="text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]">
                {i18n.language === 'da' ? 'Priser' : 'Pricing'}
              </a>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="flex items-center space-x-2 text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{i18n.language === 'da' ? 'Brancher' : 'Industries'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isIndustriesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-ink-200/60 py-2 z-50">
                    {industries.map((industry, index) => {
                      const Icon = industry.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => { onNavigate(industry.page); setIsIndustriesOpen(false); }}
                          className="w-full flex items-start space-x-4 px-5 py-3.5 hover:bg-ink-50/80 transition-all text-left"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-ink-900 font-semibold mb-0.5 text-[15px]">{industry.name}</div>
                            <div className="text-sm text-ink-500">{industry.description}</div>
                          </div>
                        </button>
                      );
                    })}
                    <div className="border-t border-ink-100 mt-2 pt-2 px-5">
                      <button
                        onClick={() => { onNavigate('industries'); setIsIndustriesOpen(false); }}
                        className="text-sm text-brand-600 hover:text-brand-700 font-semibold transition-colors"
                      >
                        {i18n.language === 'da' ? 'Se alle brancher →' : 'See all industries →'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => onNavigate('integrations')}
                className="flex items-center space-x-2 text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]"
              >
                <Plug className="w-4 h-4" />
                <span>{i18n.language === 'da' ? 'Integrationer' : 'Integrations'}</span>
              </button>
              <div className="relative" ref={contactDropdownRef}>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="flex items-center space-x-2 text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{i18n.language === 'da' ? 'Kontakt' : 'Contact'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isContactOpen ? 'rotate-180' : ''}`} />
                </button>

                {isContactOpen && (
                  <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-ink-200/60 py-2 z-50">
                    <button
                      onClick={() => { onNavigate('contact'); setIsContactOpen(false); }}
                      className="w-full flex items-center space-x-3 px-5 py-3 hover:bg-ink-50/80 transition-all text-left"
                    >
                      <MessageSquare className="w-5 h-5 text-brand-600" />
                      <span className="text-ink-900 font-medium text-[15px]">
                        {i18n.language === 'da' ? 'Kontakt os' : 'Contact us'}
                      </span>
                    </button>
                    <button
                      onClick={() => { onNavigate('about'); setIsContactOpen(false); }}
                      className="w-full flex items-center space-x-3 px-5 py-3 hover:bg-ink-50/80 transition-all text-left"
                    >
                      <Users className="w-5 h-5 text-brand-600" />
                      <span className="text-ink-900 font-medium text-[15px]">
                        {i18n.language === 'da' ? 'Om os' : 'About us'}
                      </span>
                    </button>
                  </div>
                )}
              </div>
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 text-ink-600 hover:text-brand-600 transition-all font-medium text-[15px]"
                >
                  <Globe className="w-4 h-4" />
                  <span>{i18n.language === 'da' ? 'DA' : 'EN'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-3 w-40 bg-white rounded-2xl shadow-xl border border-ink-200/60 py-2 z-50">
                    <button
                      onClick={() => changeLanguage('da')}
                      className="w-full flex items-center space-x-3 px-5 py-3 hover:bg-ink-50/80 transition-all text-left"
                    >
                      <span className="text-ink-900 font-medium text-[15px]">🇩🇰 Dansk</span>
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="w-full flex items-center space-x-3 px-5 py-3 hover:bg-ink-50/80 transition-all text-left"
                    >
                      <span className="text-ink-900 font-medium text-[15px]">🇬🇧 English</span>
                    </button>
                  </div>
                )}
              </div>
              <a
                href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 text-white px-7 py-2.5 rounded-xl hover:bg-brand-700 transition-all font-semibold shadow-sm hover:shadow-md transform hover:scale-[1.02] text-[15px] inline-block"
              >
                {i18n.language === 'da' ? 'Book Demo' : 'Book Demo'}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 rounded-xl text-ink-700 hover:bg-ink-100 transition-colors"
              aria-label="Åbn menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-ink-100 flex-shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-md">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-ink-900">Aibooking.dk</span>
          </div>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 rounded-xl text-ink-500 hover:bg-ink-100 transition-colors"
            aria-label="Luk menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer nav items */}
        <div className="flex-1 overflow-y-auto py-4 px-3">
          <button
            onClick={() => handleMobileNavigate('home')}
            className="w-full flex items-center px-4 py-3.5 rounded-xl text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition-all font-medium text-[15px] text-left"
          >
            {i18n.language === 'da' ? 'Hjem' : 'Home'}
          </button>
          <button
            onClick={() => handleMobileNavigate('features')}
            className="w-full flex items-center px-4 py-3.5 rounded-xl text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition-all font-medium text-[15px] text-left"
          >
            {i18n.language === 'da' ? 'Fordele' : 'Benefits'}
          </button>
          <button
            onClick={() => handleMobileNavigate('widget')}
            className="w-full flex items-center px-4 py-3.5 rounded-xl text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition-all font-medium text-[15px] text-left"
          >
            AI-Widget
          </button>
          <a
            href="#priser"
            onClick={() => setIsMobileOpen(false)}
            className="w-full flex items-center px-4 py-3.5 rounded-xl text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition-all font-medium text-[15px]"
          >
            {i18n.language === 'da' ? 'Priser' : 'Pricing'}
          </a>

          {/* Industries accordion */}
          <button
            onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition-all font-medium text-[15px]"
          >
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              {i18n.language === 'da' ? 'Brancher' : 'Industries'}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileIndustriesOpen && (
            <div className="ml-3 mb-1 border-l-2 border-brand-100 pl-3 space-y-1">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleMobileNavigate(industry.page)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-ink-600 hover:bg-brand-50 hover:text-brand-600 transition-all text-left"
                  >
                    <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{industry.name}</div>
                      <div className="text-xs text-ink-400">{industry.description}</div>
                    </div>
                  </button>
                );
              })}
              <button
                onClick={() => handleMobileNavigate('industries')}
                className="w-full px-3 py-2 text-sm text-brand-600 font-semibold hover:text-brand-700 transition-colors text-left"
              >
                {i18n.language === 'da' ? 'Se alle brancher →' : 'See all industries →'}
              </button>
            </div>
          )}

          <button
            onClick={() => handleMobileNavigate('integrations')}
            className="w-full flex items-center gap-2 px-4 py-3.5 rounded-xl text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition-all font-medium text-[15px] text-left"
          >
            <Plug className="w-4 h-4" />
            {i18n.language === 'da' ? 'Integrationer' : 'Integrations'}
          </button>

          {/* Contact accordion */}
          <button
            onClick={() => setMobileContactOpen(!mobileContactOpen)}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-ink-700 hover:bg-ink-50 hover:text-brand-600 transition-all font-medium text-[15px]"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              {i18n.language === 'da' ? 'Kontakt' : 'Contact'}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileContactOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileContactOpen && (
            <div className="ml-3 mb-1 border-l-2 border-brand-100 pl-3 space-y-1">
              <button
                onClick={() => handleMobileNavigate('contact')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-ink-600 hover:bg-brand-50 hover:text-brand-600 transition-all text-left"
              >
                <MessageSquare className="w-4 h-4 text-brand-600" />
                <span className="font-medium text-sm">{i18n.language === 'da' ? 'Kontakt os' : 'Contact us'}</span>
              </button>
              <button
                onClick={() => handleMobileNavigate('about')}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-ink-600 hover:bg-brand-50 hover:text-brand-600 transition-all text-left"
              >
                <Users className="w-4 h-4 text-brand-600" />
                <span className="font-medium text-sm">{i18n.language === 'da' ? 'Om os' : 'About us'}</span>
              </button>
            </div>
          )}

          {/* Language */}
          <div className="mt-2 px-4 py-3 border-t border-ink-100">
            <p className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-2">Sprog</p>
            <div className="flex gap-2">
              <button
                onClick={() => { changeLanguage('da'); setIsMobileOpen(false); }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${i18n.language === 'da' ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'}`}
              >
                🇩🇰 Dansk
              </button>
              <button
                onClick={() => { changeLanguage('en'); setIsMobileOpen(false); }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${i18n.language === 'en' ? 'bg-brand-600 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'}`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>
        </div>

        {/* Drawer footer CTA */}
        <div className="px-4 py-5 border-t border-ink-100 flex-shrink-0">
          <a
            href="https://cal.com/aibooking-booking/intro-voiceagent-aibooking.dk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileOpen(false)}
            className="w-full flex items-center justify-center bg-brand-600 text-white py-3.5 rounded-xl hover:bg-brand-700 transition-all font-semibold text-[15px] shadow-md"
          >
            {i18n.language === 'da' ? 'Book Demo' : 'Book Demo'}
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
