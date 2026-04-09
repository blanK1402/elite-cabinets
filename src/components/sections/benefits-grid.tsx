import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const benefits = [
  {
    key: 'design',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.077-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.048 4.025a3 3 0 01-4.293 0l1.414-1.415a.75.75 0 111.06 1.06l-1.414 1.414zm13.662-11.297a.75.75 0 11-1.06 1.06 11.215 11.215 0 00-5.162 3.451 11.215 11.215 0 00-2.65 5.163.75.75 0 11-1.495.15 12.715 12.715 0 013.003-5.849 12.721 12.721 0 015.85-3.003z" />
      </svg>
    ),
  },
  {
    key: 'materials',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    key: 'led',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-2.25 0c-.622.044-1.25-.038-1.868-.225a10.057 10.057 0 01-1.549-.6.75.75 0 11.612-1.366c.37.165.753.299 1.145.4.498.128 1.01.193 1.528.193.517 0 1.03-.065 1.528-.193.392-.101.775-.235 1.145-.4a.75.75 0 01.612 1.366 10.057 10.057 0 01-1.549.6c-.618.187-1.246.27-1.868.225m3.75-11.92v-2.25M12 9.75V6.75m0 2.25c.517 0 1.03-.065 1.528-.193.392-.101.775-.235 1.145-.4a.75.75 0 11.612 1.366 10.057 10.057 0 01-1.549.6c-.618.187-1.246.27-1.868.225m0 0V6.75m0 2.25c-.622.044-1.25-.038-1.868-.225a10.057 10.057 0 01-1.549-.6.75.75 0 01.612-1.366c.37.165.753.299 1.145.4.498.128 1.01.193 1.528.193" />
      </svg>
    ),
  },
  {
    key: 'hardware',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export const BenefitsGrid: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-(--color-primary) font-semibold mb-2 uppercase tracking-wider text-sm">
            {t('benefits.badge') || 'Por qué elegirnos'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {t('benefits.title') || 'Calidad en cada detalle'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('benefits.subtitle') || 'Materiales premium, acabados impecables y diseño personalizado para tu hogar.'}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.key}
              className="group bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-(--color-primary)/30 hover:shadow-lg hover:shadow-(--color-primary)/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary) mb-4 group-hover:bg-(--color-primary) group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {t(`benefits.${benefit.key}.title`)}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {t(`benefits.${benefit.key}.description`)}
              </p>

              {/* Link */}
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-1 text-(--color-primary) font-semibold text-sm hover:gap-2 transition-all duration-200"
              >
                {t('benefits.cta') || 'Saber más'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
