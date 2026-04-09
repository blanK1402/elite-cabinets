import { useTranslation } from 'react-i18next';

export const TrustBar: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '500+', label: t('trust.stats.projects') },
    { value: '15+', label: t('trust.stats.experience') },
    { value: '98%', label: t('trust.stats.satisfaction') },
  ];

  const trustLogos = [
    { name: 'Pladeva', abbr: 'PL' },
    { name: 'MDF Premium', abbr: 'MD' },
    { name: 'Hafele', abbr: 'HF' },
    { name: 'Blum', abbr: 'BL' },
  ];

  return (
    <section className="w-full bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5">
        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-(--color-primary)">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Logos Row */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <span className="text-xs text-slate-400 uppercase tracking-wider hidden md:block">
            {t('trust.materials') || 'Materiales de confianza'}
          </span>
          <div className="flex items-center gap-4 md:gap-6">
            {trustLogos.map((logo, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={logo.name}
              >
                {logo.abbr}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
