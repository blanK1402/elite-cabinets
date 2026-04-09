import { useTranslation } from 'react-i18next';

const steps = [
  {
    key: 'consultation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    key: 'design',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.077-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.048 4.025a3 3 0 01-4.293 0l1.414-1.415a.75.75 0 111.06 1.06l-1.414 1.414zm13.662-11.297a.75.75 0 11-1.06 1.06 11.215 11.215 0 00-5.162 3.451 11.215 11.215 0 00-2.65 5.163.75.75 0 11-1.495.15 12.715 12.715 0 013.003-5.849 12.721 12.721 0 015.85-3.003z" />
      </svg>
    ),
  },
  {
    key: 'installation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export const ProcessTimeline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-(--color-primary) font-semibold mb-2 uppercase tracking-wider text-sm">
            {t('process.badge') || 'Cómo trabajamos'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {t('process.title') || 'Tu proyecto en 3 pasos'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('process.subtitle') || 'Desde la primera consulta hasta la instalación final, te acompañamos en cada etapa.'}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-(--color-primary)/30 to-transparent" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.key} className="relative">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 md:flex-col md:text-center md:gap-0">
                  {/* Number Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-(--color-primary) text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-(--color-primary)/25 shrink-0">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="md:mt-6">
                    <div className="flex items-center gap-2 md:justify-center mb-1">
                      <span className="text-xs font-bold text-(--color-primary) uppercase tracking-wider">
                        Paso {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {t(`process.${step.key}.title`)}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t(`process.${step.key}.description`)}
                    </p>
                  </div>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 w-0.5 h-8 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">
            {t('process.cta_text') || '¿Listo para comenzar tu proyecto?'}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-(--color-primary) text-white font-semibold px-6 py-3 rounded-lg hover:bg-(--color-primary-hover) transition-colors duration-200"
          >
            {t('process.cta_button') || 'Agendar consulta gratis'}
          </a>
        </div>
      </div>
    </section>
  );
};
