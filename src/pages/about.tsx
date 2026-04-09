import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEOHead title={t('about.seo_title')} description={t('about.seo_description')} pathname="/about" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark) mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-[rgb(100,98,92)] max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-(--color-bg-dark)">{t('about.mission_title')}</h3>
            <p className="text-[rgb(100,98,92)] leading-relaxed">
              {t('about.mission_text')}
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-(--color-bg-dark)">{t('about.vision_title')}</h3>
            <p className="text-[rgb(100,98,92)] leading-relaxed">
              {t('about.vision_text')}
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-(--color-bg-dark)">{t('about.values_title')}</h3>
            <ul className="space-y-3 text-[rgb(100,98,92)]">
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium">{t('about.value1_title')}</p>
                  <p className="text-sm">{t('about.value1_text')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium">{t('about.value2_title')}</p>
                  <p className="text-sm">{t('about.value2_text')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-(--color-primary)/20 flex items-center justify-center text-(--color-primary) text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium">{t('about.value3_title')}</p>
                  <p className="text-sm">{t('about.value3_text')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};