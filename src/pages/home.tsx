import { Layout } from '@/components/layout';
import { HeroSection } from '@/components/sections';
import { ServicesSection } from '@/components/sections';
import { FAQSection } from '@/components/sections';
import { ContactSection } from '@/components/sections';
import { SEOHead } from '@/components/common';

export default function HomePage() {
  return (
    <Layout>
      <SEOHead title="Elite Custom Cabinets Miami | Gabinetes de Cocina y Closets a Medida" description="Fabricación e instalación de gabinetes de cocina, closets y vanities personalizados en Hialeah Gardens, FL. Materiales premium, acabados de alta calidad." pathname="/" />
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection isHomePage={true} />
    </Layout>
  );
};