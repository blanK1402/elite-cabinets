import { Layout } from '@/components/layout';
import { FAQSection } from '@/components/sections';
import { SEOHead } from '@/components/common';

export default function FAQPage() {
  return (
    <Layout>
      <SEOHead title="Preguntas Frecuentes | Elite Custom Cabinets" description="Resolvemos tus dudas sobre nuestros servicios de fabricación e instalación de gabinetes de cocina, closets y vanities en Miami." pathname="/faq" />
      <FAQSection />
    </Layout>
  );
};