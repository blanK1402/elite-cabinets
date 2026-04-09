import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BUSINESS_INFO, getNavLinks, getServiceLinks } from '@/config/constants';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  // Pre-computed link arrays from centralized config
  const menuItems = getNavLinks(t).map(link => ({
    ...link,
    hasDropdown: link.key === 'services',
  }));
  const servicesLinks = getServiceLinks(t);

  return (
    <header className="absolute top-0 w-full bg-black/40 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] duration-300">
          <div className="w-12 h-12 rounded-xl bg-white shadow-sm overflow-hidden flex items-center justify-center shrink-0">
            <img
              src={BUSINESS_INFO.LOGO}
              alt={`${BUSINESS_INFO.NAME} Logo`}
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-black text-white leading-tight tracking-tight drop-shadow-sm">{BUSINESS_INFO.NAME}</p>
            <p className="text-[10px] text-(--color-primary) font-bold uppercase tracking-[0.2em] hidden xl:block">{t('header.tagline')}</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                to={item.path}
                className="text-white/90 hover:text-white hover:bg-white/10 rounded-lg px-2 xl:px-3 py-2 transition-all font-semibold text-sm whitespace-nowrap relative"
                onClick={() => item.hasDropdown && setIsServicesOpen(!isServicesOpen)}
              >
                {item.label}
                {item.hasDropdown && (
                  <span className={`ml-1 inline-block transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}>▾</span>
                )}
              </Link>
              
              {item.hasDropdown && isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-(--color-bg-light) rounded-xl shadow-xl border border-(--color-primary)/10 py-3 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col">
                    {servicesLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="px-5 py-3 text-sm font-medium text-(--color-bg-dark) hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-all"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-white/90 hover:text-white transition-colors px-3 py-1 rounded-lg hover:bg-white/10"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <Link 
            to="/contact" 
            className="hidden lg:flex items-center justify-center font-semibold transition-all duration-300 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] bg-(--color-primary) text-white hover:bg-(--color-primary-hover) px-6 py-2.5 text-sm"
          >
            {t('header.cta')}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[rgb(229,229,223)] border-t border-(--color-primary)/20">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-(--color-bg-dark) hover:text-(--color-primary) hover:bg-(--color-primary)/10 transition-all font-medium py-3 px-4 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-2 flex items-center justify-center font-semibold transition-all duration-300 rounded-xl bg-(--color-primary) text-white hover:bg-(--color-primary-hover) py-4 text-base w-full shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.cta')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};