import { useTranslation } from 'react-i18next';
import { REVIEWS_WIDGET_ID } from '../../config/constants';

const ReviewsWidget: React.FC = () => (
  <div className="rounded-2xl overflow-hidden h-full min-h-100">
    {REVIEWS_WIDGET_ID ? (
      <iframe
        className='lc_reviews_widget min-h-100'
        src={`https://reputationhub.site/reputation/widgets/review_widget/${REVIEWS_WIDGET_ID}`}
        frameBorder='0'
        scrolling='auto'
        style={{ minWidth: '100%', width: '100%', height: '100%' }}
        title="Customer Reviews"
      />
    ) : (
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 h-full min-h-64 bg-(--color-bg-light) border border-(--color-primary)/10 text-(--color-bg-dark) rounded-2xl">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-(--color-primary)/10 flex items-center justify-center text-(--color-primary)">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-lg font-medium text-(--color-bg-dark)">Testimonials coming soon</p>
          <p className="text-sm text-(--color-text-muted) mt-2">Be the first to share your experience with us</p>
        </div>
      </div>
    )}
  </div>
);

export const TestimonialsSection: React.FC<{ showTitle?: boolean; fullWidth?: boolean }> = ({ showTitle = true, fullWidth = false }) => {
  const { t } = useTranslation();
  
  return (
    <section id="testimonials" className={`relative w-full ${fullWidth ? '' : 'bg-(--color-bg-light)'} overflow-hidden ${showTitle ? 'py-20 md:py-32' : 'py-0'}`}>
      {showTitle && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-(--color-primary)/30 to-transparent"></div>
      )}
      
      <div className={`mx-auto relative ${fullWidth ? 'px-0' : 'px-4 md:px-8 max-w-7xl'}`}>
        {showTitle && (
          <div className="text-center mb-16">
            <p className="text-(--color-primary) font-semibold mb-3 uppercase tracking-wider text-sm">
              {t('testimonials.badge') || 'Testimonios'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-(--color-bg-dark) mb-4">
              {t('testimonials.title') || 'Clientes Satisfechos'}
            </h2>
            <p className="text-lg text-[rgb(100,98,92)] max-w-2xl mx-auto">
              {t('testimonials.subtitle') || 'Descubre por qué cientos de clientes confían en nuestros servicios cada día.'}
            </p>
          </div>
        )}

        <ReviewsWidget />
      </div>
    </section>
  );
};
