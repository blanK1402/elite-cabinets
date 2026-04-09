import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/config/constants';
import heroImg from '../assets/images/Gallery/IMG_4551.jpeg';
import storyImg from '../assets/images/Gallery/876037b3-6195-49b2-a2c8-90b82de3bf5e.jpeg';

export default function AboutPage() {
  const { t } = useTranslation();

  const materials = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: t('about.value1_title'),
      description: t('about.value1_text'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('about.value2_title'),
      description: t('about.value2_text'),
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('about.value3_title'),
      description: t('about.value3_text'),
    },
  ];

  return (
    <Layout>
      <SEOHead title={t('about.seo_title')} description={t('about.seo_description')} pathname="/about" />
      
      {/* Hero Section */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elite Custom Cabinets Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-(--color-primary) font-semibold tracking-[0.2em] uppercase mb-4 text-sm">
            {t('about.hero_badge', 'Conocenos')}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={storyImg}
                alt="Our craftsmanship"
                className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-(--color-primary) font-semibold tracking-[0.2em] uppercase text-sm">
                {t('about.story_badge', 'Nuestra Historia')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {t('about.mission_title')}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {t('about.mission_text')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('about.vision_text')}
              </p>
              <div className="pt-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-(--color-primary) font-semibold hover:gap-3 transition-all"
                >
                  {t('about.see_work', 'Ver nuestro trabajo')}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-(--color-primary) font-semibold tracking-[0.2em] uppercase mb-3 text-sm">
              {t('about.materials_badge', 'Calidad Premium')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('about.values_title')}
            </h2>
            <p className="text-slate-600">
              {t('about.materials_desc', 'Utilizamos los mejores materiales del mercado para garantizar durabilidad y belleza en cada proyecto.')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {materials.map((material, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 rounded-xl bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary) mb-6 group-hover:scale-110 transition-transform">
                  {material.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{material.title}</h3>
                <p className="text-slate-600 leading-relaxed">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-(--color-bg-dark)">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('about.cta_title', '¿Listo para transformar tu espacio?')}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('about.cta_desc', 'Contáctanos hoy y comienza a diseñar los gabinetes de tus sueños. Cotización gratuita.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-(--color-primary) text-white px-8 py-4 rounded-xl font-semibold hover:bg-(--color-primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-(--color-primary)/25 hover:-translate-y-0.5"
            >
              {t('about.cta_primary', 'Solicitar Cotización')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={CONTACT_INFO.PHONE_CALL}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT_INFO.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}