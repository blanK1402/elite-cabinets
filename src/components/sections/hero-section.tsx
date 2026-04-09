import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, BUSINESS_INFO } from '../../config/constants';

export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BUSINESS_INFO.HERO_IMAGE}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-(--color-bg-dark)/90 via-(--color-bg-dark)/70 to-(--color-bg-dark)/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-(--color-primary) rounded-full"></span>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">
              {isSpanish ? 'Fabricación 100% Personalizada' : '100% Custom Manufacturing'}
            </span>
          </div>

          <p className="text-(--color-primary) font-bold mb-3 tracking-[0.15em] uppercase text-sm">
            {isSpanish ? 'Elite Custom Cabinets' : 'Elite Custom Cabinets'}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-xl shadow-lg shadow-(--color-primary)/25 hover:shadow-(--color-primary)/40 hover:-translate-y-0.5 active:scale-[0.98] bg-(--color-primary) text-white hover:bg-(--color-primary-hover) px-8 py-4 text-base"
            >
              {t('home.hero.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a 
              href={CONTACT_INFO.WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-base"
            >
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};