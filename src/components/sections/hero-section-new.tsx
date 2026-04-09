import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../config/constants';

const checkmarks = [
  { es: 'Diseño 100% personalizado', en: '100% Custom Design' },
  { es: 'Materiales premium garantizados', en: 'Premium Materials Guaranteed' },
  { es: 'Instalación profesional incluida', en: 'Professional Installation Included' },
];

export const HeroSectionNew: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <section className="relative w-full bg-linear-to-br from-slate-50 via-white to-slate-100 pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-(--color-primary)/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-(--color-primary)/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-(--color-primary)/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-(--color-primary) rounded-full animate-pulse" />
            <span className="text-(--color-primary) text-sm font-semibold uppercase tracking-wider">
              {isSpanish ? 'Fabricación 100% Personalizada' : '100% Custom Manufacturing'}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-(--color-primary) text-white font-bold px-8 py-4 rounded-xl hover:bg-(--color-primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-(--color-primary)/25 hover:-translate-y-0.5"
            >
              {t('home.hero.cta')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={CONTACT_INFO.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-[#25D366] hover:text-[#25D366] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {isSpanish ? 'WhatsApp' : 'WhatsApp'}
            </a>
          </div>

          {/* Checkmarks */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {checkmarks.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{isSpanish ? item.es : item.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
