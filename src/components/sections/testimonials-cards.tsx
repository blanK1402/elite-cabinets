import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  project: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María G.',
    location: 'Hialeah, FL',
    project: 'Cocina completa',
    rating: 5,
    text: 'Excelente trabajo, superaron nuestras expectativas. La calidad de los materiales es superior y el acabado impecable.',
    avatar: 'MG',
  },
  {
    id: 2,
    name: 'Carlos R.',
    location: 'Miami Gardens, FL',
    project: 'Closet master',
    rating: 5,
    text: 'Profesionales de principio a fin. Cumplieron con los tiempos y el diseño quedó exactamente como lo imaginamos.',
    avatar: 'CR',
  },
  {
    id: 3,
    name: 'Ana L.',
    location: 'Doral, FL',
    project: 'Vanities de baño',
    rating: 5,
    text: 'Los recomiendo al 100%. Atención personalizada, precios justos y un trabajo de artesanía verdaderamente.',
    avatar: 'AL',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const TestimonialsCards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-(--color-primary) font-semibold mb-2 uppercase tracking-wider text-sm">
            {t('testimonials.badge') || 'Testimonios'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {t('testimonials.title') || 'Clientes Satisfechos'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle') || 'Descubre por qué cientos de clientes confían en nuestros servicios cada día.'}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 border-l-4 border-(--color-primary) shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8 text-(--color-primary)/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Text */}
              <p className="text-slate-700 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary) font-bold text-sm">
                  {testimonial.avatar}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>

                {/* Project Badge */}
                <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600 font-medium">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:border-(--color-primary) hover:text-(--color-primary) transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            {t('testimonials.cta') || 'Ver más reseñas en Google'}
          </a>
        </div>
      </div>
    </section>
  );
};
