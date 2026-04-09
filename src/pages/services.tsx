import { Layout } from '@/components/layout';
import { ServicesSection } from '@/components/sections';
import { SEOHead } from '@/components/common';

export default function ServicesPage() {
  return (
    <Layout>
      <SEOHead title="Nuestros Servicios | Elite Custom Cabinets" description="Gabinetes de cocina, closets y vanities personalizados. Diseño a tu medida con materiales Pladeva y MDF de alta calidad en Hialeah Gardens, FL." pathname="/services" />
      <ServicesSection />
    </Layout>
  );
};