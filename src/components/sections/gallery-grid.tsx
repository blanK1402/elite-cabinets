import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Import all gallery images
import img1 from '../../assets/images/Gallery/04933b1b-515a-409f-9f04-f4bfd6f1c6df.jpeg';
import img2 from '../../assets/images/Gallery/0cd69cd8-00a5-431b-87db-0aa52fdd4f09.jpeg';
import img3 from '../../assets/images/Gallery/33bed0ca-c04b-4c70-acec-eb81f3d0fea4.jpeg';
import img4 from '../../assets/images/Gallery/598ee6c0-0a5d-4550-be8f-f2c397ae9dc2.jpeg';
import img5 from '../../assets/images/Gallery/5b6ad781-20d5-429c-99c3-9200e8273300.jpeg';
import img6 from '../../assets/images/Gallery/876037b3-6195-49b2-a2c8-90b82de3bf5e.jpeg';
import img7 from '../../assets/images/Gallery/IMG_3579.jpeg';
import img8 from '../../assets/images/Gallery/IMG_3580.jpeg';
import img9 from '../../assets/images/Gallery/IMG_4550.jpeg';
import img10 from '../../assets/images/Gallery/IMG_4551.jpeg';
import img11 from '../../assets/images/Gallery/IMG_4555.jpeg';
import img12 from '../../assets/images/Gallery/a98086ee-d307-443d-aba6-eb73465ff087.jpeg';
import img13 from '../../assets/images/Gallery/aaebcfbe-4553-4883-a76f-cd57302d27ce.jpeg';
import img14 from '../../assets/images/Gallery/c6debf05-e115-46a2-90ac-05669a0b2c3f.jpeg';
import img15 from '../../assets/images/Gallery/image0000.jpeg';

const galleryImages = [
  { id: 1, src: img1, category: 'kitchen' },
  { id: 2, src: img2, category: 'closet' },
  { id: 3, src: img3, category: 'kitchen' },
  { id: 4, src: img4, category: 'vanity' },
  { id: 5, src: img5, category: 'kitchen' },
  { id: 6, src: img6, category: 'closet' },
  { id: 7, src: img7, category: 'kitchen' },
  { id: 8, src: img8, category: 'vanity' },
  { id: 9, src: img9, category: 'kitchen' },
  { id: 10, src: img10, category: 'closet' },
  { id: 11, src: img11, category: 'kitchen' },
  { id: 12, src: img12, category: 'vanity' },
  { id: 13, src: img13, category: 'kitchen' },
  { id: 14, src: img14, category: 'closet' },
  { id: 15, src: img15, category: 'kitchen' },
];

export const GalleryGrid: React.FC = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex].src : null;

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrevious = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex]);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, goToPrevious, goToNext]);

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    setTouchStart(null);
  };

  return (
    <section id="gallery" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-(--color-primary) font-semibold mb-2 uppercase tracking-wider text-sm">
            {t('gallery.badge') || 'Nuestro trabajo'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            {t('gallery.title') || 'Proyectos realizados'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            {t('gallery.subtitle') || 'Cada proyecto es único, diseñado a las necesidades específicas de nuestros clientes.'}
          </p>
        </div>

        {/* Optimized Grid - only images that fit perfectly */}
        {(() => {
          // Calculate how many images fit perfectly in all breakpoints
          // Desktop (3 cols): 12 images with pattern = 15 cells (3×5)
          // Tablet (2 cols): 12 images = 12 cells (2×6)
          // Mobile (1 col): 12 images = 12 cells (1×12)
          const totalCells = 15; // Desktop is the limiting factor
          let usedCells = 0;
          const fittingImages = [];
          
          for (let i = 0; i < galleryImages.length; i++) {
            const isLarge = i % 4 === 0;
            const cellsNeeded = isLarge ? 2 : 1;
            
            if (usedCells + cellsNeeded <= totalCells) {
              fittingImages.push({ ...galleryImages[i], index: i, isLarge });
              usedCells += cellsNeeded;
            } else {
              break; // Stop adding images once grid is full
            }
          }
          
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px] sm:auto-rows-[280px]">
              {fittingImages.map((image) => {
                // Large images only on desktop (lg+), all same size on smaller screens
                const rowSpanClass = image.isLarge ? 'lg:row-span-2 row-span-1' : 'row-span-1';
                return (
              <div
                key={image.id}
                className={`${rowSpanClass} relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300 bg-slate-100`}
                onClick={() => openLightbox(image.index)}
              >
                <img
                  src={image.src}
                  alt={t('gallery.image_alt')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-(--color-bg-dark)/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        );
      })()}

      {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-(--color-primary) text-white px-6 py-3 rounded-lg font-semibold hover:bg-(--color-primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-(--color-primary)/25"
          >
            {t('gallery.cta') || 'Ver todos los servicios'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Enhanced Lightbox with Navigation */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex"
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-[90vw] max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt=""
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              draggable={false}
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {selectedIndex !== null ? selectedIndex + 1 : 0} / {galleryImages.length}
          </div>

          {/* Mobile swipe hint */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/50 text-xs md:hidden">
            {t('gallery.swipe_hint')}
          </div>
        </div>
      )}
    </section>
  );
};
