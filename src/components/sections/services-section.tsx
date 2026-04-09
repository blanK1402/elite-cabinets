import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { APP_SERVICES, BUSINESS_INFO } from '../../config/constants';

const getFeatures = (t: (key: string) => string) => [
  { icon: 'custom', title: t('services.feature_custom_title'), desc: t('services.feature_custom_desc') },
  { icon: 'quality', title: t('services.feature_quality_title'), desc: t('services.feature_quality_desc') },
  { icon: 'install', title: t('services.feature_install_title'), desc: t('services.feature_install_desc') },
];

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (serviceKey: string) => {
    navigate(`/contact?service=${serviceKey}`);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="relative w-full bg-(--color-bg-light) overflow-hidden">
      {/* Hero Header with Background */}
      <div className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={BUSINESS_INFO.HERO_IMAGE}
            alt="Elite Custom Cabinets Services"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60" />
          <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-light) via-transparent to-slate-900/20" />
        </div>

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center pt-32 pb-20">
          <p className="text-(--color-primary) font-semibold mb-4 uppercase tracking-wider text-sm">
            {t('services.hero_badge')}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t('services.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {t('services.subtitle')}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-(--color-primary)">10+</p>
              <p className="text-gray-300 text-sm">{t('services.years')}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-(--color-primary)">500+</p>
              <p className="text-gray-300 text-sm">{t('services.projects')}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-(--color-primary)">100%</p>
              <p className="text-gray-300 text-sm">{t('services.custom_percent')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="relative z-20 -mt-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-(--color-primary)/10 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {getFeatures(t).map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center shrink-0">
                    {feature.icon === 'custom' && (
                      <svg className="w-6 h-6 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    )}
                    {feature.icon === 'quality' && (
                      <svg className="w-6 h-6 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {feature.icon === 'install' && (
                      <svg className="w-6 h-6 text-(--color-primary)" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-(--color-bg-dark) text-lg mb-1">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Content */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-bg-dark) mb-4">
              {t('services.offer_title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('services.offer_subtitle')}
            </p>
          </div>

          {/* Lista de servicios alternados */}
          <div className="flex flex-col gap-16 sm:gap-20 md:gap-28">
            {APP_SERVICES.map((service, index) => {
              const isImageLeft = index % 2 === 0;
              return (
                <div
                  key={service.key}
                  id={service.key}
                  className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}
                >
                  {/* Imagen */}
                  <div className="w-full md:w-1/2">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl group border border-(--color-primary)/5 hover:border-(--color-primary)/20 transition-all duration-500">
                      <img
                        src={service.image}
                        alt={t(`services.${service.key}.title`)}
                        className="w-full h-auto aspect-4/3 object-cover block transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-dark)/50 via-transparent to-transparent" />

                      {/* Service Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-(--color-primary) font-semibold text-sm">
                          {index === 0 ? t('services.badge_main') : index === 1 ? t('services.badge_popular') : t('services.badge_new')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-(--color-primary)/10 flex items-center justify-center">
                        <span className="text-(--color-primary) font-bold">0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--color-bg-dark)">
                        {t(`services.${service.key}.title`)}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                      {t(`services.${service.key}.description`)}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3 mb-8">
                      {[
                        t('services.feature_1'),
                        t('services.feature_2'),
                        t('services.feature_3'),
                        t('services.feature_4'),
                        t('services.feature_5'),
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <svg className="w-5 h-5 text-(--color-primary) shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleClick(service.key)}
                      className="inline-flex items-center gap-2 bg-(--color-primary) text-white px-6 py-3 rounded-xl font-semibold hover:bg-(--color-primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-(--color-primary)/25 hover:-translate-y-0.5"
                    >
                      {t('services.cta') || 'Solicitar información'}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-(--color-bg-dark) py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.final_cta_title')}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('services.final_cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-(--color-primary) text-white font-bold px-8 py-4 rounded-xl hover:bg-(--color-primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-(--color-primary)/25 hover:-translate-y-0.5"
            >
              {t('services.final_cta_button')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-200"
            >
              {t('services.final_cta_secondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};