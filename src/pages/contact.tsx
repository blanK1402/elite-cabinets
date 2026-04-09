import { Layout } from '@/components/layout';
import { ContactSection } from '@/components/sections';
import { SEOHead } from '@/components/common';

export default function ContactPage() {
  return (
    <Layout>
      <SEOHead title="Contáctanos | Elite Custom Cabinets" description="Solicita tu cotización gratuita. Fabricación e instalación de gabinetes personalizados en Hialeah Gardens, FL. Tel: (786) 945-5265." pathname="/contact" />
      <ContactSection isHomePage={false} />
    </Layout>
  );
};