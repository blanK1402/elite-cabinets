import { useState } from 'react';
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
  { id: 1, src: img1, alt: 'Proyecto de gabinetes personalizado' },
  { id: 2, src: img2, alt: 'Diseño de cocina a medida' },
  { id: 3, src: img3, alt: 'Closet organizado personalizado' },
  { id: 4, src: img4, alt: 'Vanity de baño moderno' },
  { id: 5, src: img5, alt: 'Gabinetes con iluminación LED' },
  { id: 6, src: img6, alt: 'Proyecto de carpintería personalizada' },
  { id: 7, src: img7, alt: 'Cocina con acabados premium' },
  { id: 8, src: img8, alt: 'Closet walk-in diseñado' },
  { id: 9, src: img9, alt: 'Detalles de carpintería' },
  { id: 10, src: img10, alt: 'Muebles a medida' },
  { id: 11, src: img11, alt: 'Proyecto completado' },
  { id: 12, src: img12, alt: 'Diseño interior personalizado' },
  { id: 13, src: img13, alt: 'Gabinetes de calidad' },
  { id: 14, src: img14, alt: 'Instalación profesional' },
  { id: 15, src: img15, alt: 'Trabajo finalizado' },
];

export const GalleryGrid: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-(--color-primary) font-semibold mb-2 uppercase tracking-wider text-sm">
            {t('gallery.badge') || 'Nuestro trabajo'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {t('gallery.title') || 'Proyectos realizados'}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('gallery.subtitle') || 'Cada proyecto es único, diseñado a las necesidades específicas de nuestros clientes.'}
          </p>
        </div>

        {/* Square Grid 5x3 = 15 images */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-(--color-bg-dark)/50 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === image.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-(--color-primary) text-white px-6 py-3 rounded-lg font-semibold hover:bg-(--color-primary-hover) transition-colors duration-200"
          >
            {t('gallery.cta') || 'Ver todos los servicios'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};
