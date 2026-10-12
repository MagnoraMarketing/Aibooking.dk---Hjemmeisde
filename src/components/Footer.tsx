import { Phone, Mail, MapPin, LogIn, UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import type { NavigatePage } from '../types/navigation';
import { LOGIN_URL, SIGNUP_URL } from '../utils/backend';
import { useLocalizedHref } from '../utils/pagePaths';
import PageLink from './PageLink';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/config';
import { splitLocalizedPath, buildLocalizedPath } from '../utils/localePaths';
import { currentPathname } from '../utils/currentPath';

const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  da: 'Dansk', en: 'English', pt: 'Português', fr: 'Français', es: 'Español',
};

// This page in another language. Blog posts only exist in Danish and English,
// so the other languages link to their blog overview instead.
function languageHref(lang: SupportedLanguage) {
  const { path } = splitLocalizedPath(currentPathname());
  const isPost = /^\/blog\/(?!category\/)./.test(path);
  return buildLocalizedPath(lang, isPost && lang !== 'da' && lang !== 'en' ? '/blog' : path);
}

interface FooterProps {
  onNavigate?: (page: NavigatePage) => void;
}

function Footer({ onNavigate = () => {} }: FooterProps) {
  const { t, i18n } = useTranslation();
  const href = useLocalizedHref();

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
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">{t('footer.solutions')}</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <PageLink page="home"
                  onClick={() => onNavigate('home')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.ai_booking')}
                </PageLink>
              </li>
              <li>
                <PageLink page="trial"
                  onClick={() => onNavigate('trial')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.free_trial')}
                </PageLink>
              </li>
              <li>
                <PageLink page="widget"
                  onClick={() => onNavigate('widget')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.ai_widget')}
                </PageLink>
              </li>
              <li>
                <PageLink page="inbound-outbound"
                  onClick={() => onNavigate('inbound-outbound')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.phone_assistant')}
                </PageLink>
              </li>
              <li>
                <PageLink page="integrations"
                  onClick={() => onNavigate('integrations')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('nav.integrations')}
                </PageLink>
              </li>
              <li>
                <PageLink page="contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.book_demo')}
                </PageLink>
              </li>
              <li>
                <PageLink page="features"
                  onClick={() => onNavigate('features')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.features')}
                </PageLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">{t('footer.industries_title')}</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <PageLink page="healthcare"
                  onClick={() => onNavigate('healthcare')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.healthcare')}
                </PageLink>
              </li>
              <li>
                <PageLink page="craftsman"
                  onClick={() => onNavigate('craftsman')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.craftsman')}
                </PageLink>
              </li>
              <li>
                <PageLink page="office"
                  onClick={() => onNavigate('office')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.office')}
                </PageLink>
              </li>
              <li>
                <PageLink page="ecommerce"
                  onClick={() => onNavigate('ecommerce')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.ecommerce')}
                </PageLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">{t('footer.blog_title')}</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <PageLink page="blog"
                  onClick={() => onNavigate('blog')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.all_articles')}
                </PageLink>
              </li>
              <li>
                <a
                  href={href('/blog/category/ai-widget')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.blog_ai_widget')}
                </a>
              </li>
              <li>
                <a
                  href={href('/blog/category/ai-inbound-outbound')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.blog_inbound_outbound')}
                </a>
              </li>
              <li>
                <a
                  href={href('/blog/category/ai-webshop')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.blog_webshop')}
                </a>
              </li>
              <li>
                <a
                  href={href('/blog/category/ai-total-solution')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.blog_total_solution')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">{t('footer.company')}</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <PageLink page="about"
                  onClick={() => onNavigate('about')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.about')}
                </PageLink>
              </li>
              <li>
                <PageLink page="contact"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.contact')}
                </PageLink>
              </li>
              <li>
                <PageLink page="privacy"
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.privacy')}
                </PageLink>
              </li>
              <li>
                <PageLink page="terms"
                  onClick={() => onNavigate('terms')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('footer.terms')}
                </PageLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-[15px]">{t('footer.contact_title')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-brand-400" />
                <a href="mailto:mail@aibooking.dk" className="hover:text-brand-400 transition-all">
                  mail@aibooking.dk
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-400" />
                <span>{t('footer.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Customer account callout — the dashboard lives on the backend app */}
        <div className="border-t border-ink-800 pt-10 mb-10">
          <div className="bg-ink-800/60 border border-ink-700 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-1.5">{t('footer.customer_cta_title')}</h3>
              <p className="text-sm text-ink-400 leading-relaxed">{t('footer.customer_cta_subtitle')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink-600 text-white px-6 py-3 rounded-xl hover:bg-ink-700 transition-colors font-medium text-sm whitespace-nowrap"
              >
                <LogIn className="w-4 h-4" />
                {t('nav.login')}
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors font-semibold text-sm whitespace-nowrap"
              >
                <UserPlus className="w-4 h-4" />
                {t('nav.signup')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 text-center text-sm text-ink-400">
          <nav aria-label={t('nav.language')} className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <a
                key={lang}
                href={languageHref(lang)}
                hrefLang={lang}
                lang={lang}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                  e.preventDefault();
                  window.history.pushState({}, '', languageHref(lang));
                  // App's popstate listener switches language and page.
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo(0, 0);
                }}
                className={`hover:text-brand-400 transition-colors ${i18n.language === lang ? 'text-white font-semibold' : ''}`}
              >
                {LANGUAGE_NAMES[lang]}
              </a>
            ))}
          </nav>
          <p>&copy; 2026 Aibooking.dk. {t('footer.rights')}. {t('footer.made_by')} <a href="https://www.magnoramarketing.dk" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">MagnoraMarketing.dk</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
