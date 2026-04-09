import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/common';
import {
  HeroSectionNew,
  TrustBar,
  BenefitsGrid,
  ProcessTimeline,
  GalleryGrid,
  TestimonialsCards,
  FAQCompact,
  ContactSection,
  StickyCTA,
} from '@/components/sections';

export default function HomePageNew() {
  return (
    <Layout>
      <SEOHead
        title="Elite Custom Cabinets Miami | Gabinetes de Cocina y Closets a Medida"
        description="Fabricación e instalación de gabinetes de cocina, closets y vanities personalizados en Hialeah Gardens, FL. Materiales premium, acabados de alta calidad."
        pathname="/"
      />

      {/* 1. Trust Bar - Social proof first */}
      <TrustBar />

      {/* 2. Hero with embedded form */}
      <HeroSectionNew />

      {/* 3. Benefits Grid - 4 card grid */}
      <BenefitsGrid />

      {/* 4. Process Timeline - 3 steps */}
      <ProcessTimeline />

      {/* 5. Gallery Mini - Masonry grid */}
      <GalleryGrid />

      {/* 6. Testimonials - Card style */}
      <TestimonialsCards />

      {/* 7. FAQ - Compact with tabs */}
      <FAQCompact />

      {/* 8. Contact with form */}
      <ContactSection isHomePage={true} />

      {/* 9. Sticky CTA - Always visible */}
      <StickyCTA />
    </Layout>
  );
}
