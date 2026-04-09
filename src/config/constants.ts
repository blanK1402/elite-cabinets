/**
 * Reusable constants and environmental variables access layer.
 * This is a standard template for landing pages.
 *
 * CENTRALIZED CONFIGURATION: Edit this file to update business info,
 * contact details, services, and SEO metadata across the entire site.
 */

// ============================================
// BUSINESS INFORMATION
// ============================================
export const BUSINESS_INFO = {
  /** Business name used across the site */
  NAME: 'Elite Custom Cabinets',
  /** Short tagline displayed in header/footer */
  TAGLINE: 'Artesanía que transforma tu espacio',
  /** Full business description for SEO and footer */
  DESCRIPTION: 'Fabricación e instalación de gabinetes de cocina, closets y vanities personalizados en Hialeah Gardens, FL. Materiales premium, acabados de alta calidad.',
  /** Business logo path */
  LOGO: '/src/assets/images/logo.png',
  /** Hero image for SEO and meta tags */
  HERO_IMAGE: '/src/assets/images/hero-kitchen-cabinets.jpg',
  /** Website URL (no trailing slash) */
  URL: 'https://elitecustomcabinets.com',
  /** Copyright year auto-updates */
  get COPYRIGHT_YEAR() { return new Date().getFullYear(); },
} as const;

// ============================================
// SEO DEFAULTS
// ============================================
export const SEO_DEFAULTS = {
  /** Default page title template: `{page} | {site}` */
  TITLE_TEMPLATE: (pageTitle: string) => `${pageTitle} | ${BUSINESS_INFO.NAME}`,
  /** Default meta description */
  DESCRIPTION: BUSINESS_INFO.DESCRIPTION,
  /** Default OG/Twitter image */
  IMAGE: BUSINESS_INFO.HERO_IMAGE,
  /** Default keywords */
  KEYWORDS: 'gabinetes de cocina Miami, closets personalizados Hialeah, vanities a medida, carpintería personalizada, gabinetes Pladeva, cocinas a medida Florida',
  /** Author meta tag */
  AUTHOR: BUSINESS_INFO.NAME,
} as const;

// ============================================
// CONTACT INFORMATION
// ============================================
const phoneRaw = '(786) 945-5265';
const whatsappRaw = '17869455265';

export const CONTACT_INFO = {
  // Email
  EMAIL: 'randyortega870317@gmail.com',

  // Phone
  PHONE_DISPLAY: phoneRaw,
  PHONE_CALL: `tel:${phoneRaw.replace(/[^\d]/g, '')}`,

  // WhatsApp
  WHATSAPP_DISPLAY: phoneRaw,
  WHATSAPP_URL: `https://wa.me/${whatsappRaw}`,

  // Social Media URLs
  SOCIAL: {
    INSTAGRAM: 'https://instagram.com/elitecustomcabinets',
    FACEBOOK: 'https://facebook.com/elitecustomcabinets',
    GOOGLE: 'https://g.co/kgs/example',
  },

  // Physical Location
  LOCATION: '9809 NW 80th Ave, Suite 9-G, Hialeah Gardens, FL 33016',

  // Business Hours
  HOURS: 'Lunes - Sábado: 9:00 AM - 6:00 PM',

  // Supported Languages
  LANGUAGES: ['Inglés', 'Español'] as const,

  // Marketing Agency
  AGENCY_URL: 'https://crescendodigitalmarketingagency.com/en/',
  AGENCY_NAME: 'CDM Marketing',
} as const;

// ============================================
// SERVICES CONFIGURATION
// ============================================
export interface ServiceConfig {
  key: string;
  image: string;
  /** Optional: override icon for service cards */
  icon?: string;
}

export const APP_SERVICES: ServiceConfig[] = [
  { key: 'kitchen', image: '/src/assets/images/service-1-kitchen.jpg' },
  { key: 'closets', image: '/src/assets/images/service-2-closet.jpg' },
  { key: 'vanities', image: '/src/assets/images/service-3-vanity.jpg' },
] as const;

// ============================================
// THIRD-PARTY INTEGRATIONS
// ============================================
export const REVIEWS_WIDGET_ID = 'tTphfPFRGfNi1BaKGo69';

// ============================================
// NAVIGATION CONFIGURATION
// ============================================
export const NAV_LINKS = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'about', path: '/about' },
  { key: 'faq', path: '/faq' },
  { key: 'contact', path: '/contact' },
] as const;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get service options for contact form select
 * Includes all services + "General Contact" + "Other"
 */
export const getServiceOptions = (t: (key: string) => string) => [
  ...APP_SERVICES.map(s => ({ value: s.key, label: t(`services.${s.key}.title`) })),
  { value: 'info', label: t('contact.form.service_info') },
  { value: 'other', label: t('contact.form.service_other') },
];

/**
 * Get navigation links with translated labels
 */
export const getNavLinks = (t: (key: string) => string) =>
  NAV_LINKS.map(link => ({
    ...link,
    label: t(`common.${link.key}`),
  }));

/**
 * Get service links for dropdown navigation
 */
export const getServiceLinks = (t: (key: string) => string) =>
  APP_SERVICES.map(s => ({
    key: s.key,
    label: t(`services.${s.key}.title`),
    path: `/services#${s.key}`,
  }));