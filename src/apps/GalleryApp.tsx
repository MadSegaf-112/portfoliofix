import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  aspectClass: string;
  type: 'portrait' | 'landscape' | 'square' | 'tall';
  title: string;
}

// All 33 curated local photos from /images/me1.jpeg to /images/me33.jpeg
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 1, src: '/images/me1.jpeg', alt: 'Life Dump Photo 1', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 01' },
  { id: 18, src: '/images/me18.jpeg', alt: 'Life Dump Photo 18', aspectClass: 'aspect-[16/10]', type: 'landscape', title: 'Moment 18' },
  { id: 3, src: '/images/me3.jpeg', alt: 'Life Dump Photo 3', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 03' },
  
  { id: 10, src: '/images/me10.jpeg', alt: 'Life Dump Photo 10', aspectClass: 'aspect-[16/10]', type: 'landscape', title: 'Moment 10' },
  { id: 2, src: '/images/me2.jpeg', alt: 'Life Dump Photo 2', aspectClass: 'aspect-[4/5]', type: 'portrait', title: 'Moment 02' },
  { id: 6, src: '/images/me6.jpeg', alt: 'Life Dump Photo 6', aspectClass: 'aspect-square', type: 'square', title: 'Moment 06' },
  
  { id: 4, src: '/images/me4.jpeg', alt: 'Life Dump Photo 4', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 04' },
  { id: 26, src: '/images/me26.jpeg', alt: 'Life Dump Photo 26', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 26' },
  { id: 20, src: '/images/me20.jpeg', alt: 'Life Dump Photo 20', aspectClass: 'aspect-[16/10]', type: 'landscape', title: 'Moment 20' },
  
  { id: 5, src: '/images/me5.jpeg', alt: 'Life Dump Photo 5', aspectClass: 'aspect-square', type: 'square', title: 'Moment 05' },
  { id: 25, src: '/images/me25.jpeg', alt: 'Life Dump Photo 25', aspectClass: 'aspect-[16/10]', type: 'landscape', title: 'Moment 25' },
  { id: 7, src: '/images/me7.jpeg', alt: 'Life Dump Photo 7', aspectClass: 'aspect-square', type: 'square', title: 'Moment 07' },
  
  { id: 12, src: '/images/me12.jpeg', alt: 'Life Dump Photo 12', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 12' },
  { id: 13, src: '/images/me13.jpeg', alt: 'Life Dump Photo 13', aspectClass: 'aspect-[4/5]', type: 'portrait', title: 'Moment 13' },
  { id: 14, src: '/images/me14.jpeg', alt: 'Life Dump Photo 14', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 14' },
  
  { id: 23, src: '/images/me23.jpeg', alt: 'Life Dump Photo 23', aspectClass: 'aspect-[16/9]', type: 'landscape', title: 'Moment 23' },
  { id: 8, src: '/images/me8.jpeg', alt: 'Life Dump Photo 8', aspectClass: 'aspect-square', type: 'square', title: 'Moment 08' },
  { id: 31, src: '/images/me31.jpeg', alt: 'Life Dump Photo 31', aspectClass: 'aspect-[16/10]', type: 'landscape', title: 'Moment 31' },
  
  { id: 17, src: '/images/me17.jpeg', alt: 'Life Dump Photo 17', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 17' },
  { id: 15, src: '/images/me15.jpeg', alt: 'Life Dump Photo 15', aspectClass: 'aspect-[4/5]', type: 'portrait', title: 'Moment 15' },
  { id: 16, src: '/images/me16.jpeg', alt: 'Life Dump Photo 16', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 16' },
  
  { id: 28, src: '/images/me28.jpeg', alt: 'Life Dump Photo 28', aspectClass: 'aspect-[16/10]', type: 'landscape', title: 'Moment 28' },
  { id: 29, src: '/images/me29.jpeg', alt: 'Life Dump Photo 29', aspectClass: 'aspect-[16/10]', type: 'landscape', title: 'Moment 29' },
  { id: 21, src: '/images/me21.jpeg', alt: 'Life Dump Photo 21', aspectClass: 'aspect-[9/16]', type: 'tall', title: 'Moment 21' },
  
  { id: 22, src: '/images/me22.jpeg', alt: 'Life Dump Photo 22', aspectClass: 'aspect-[4/5]', type: 'portrait', title: 'Moment 22' },
  { id: 32, src: '/images/me32.jpeg', alt: 'Life Dump Photo 32', aspectClass: 'aspect-[9/16]', type: 'tall', title: 'Moment 32' },
  { id: 24, src: '/images/me24.jpeg', alt: 'Life Dump Photo 24', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 24' },
  
  { id: 30, src: '/images/me30.jpeg', alt: 'Life Dump Photo 30', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 30' },
  { id: 19, src: '/images/me19.jpeg', alt: 'Life Dump Photo 19', aspectClass: 'aspect-[9/16]', type: 'tall', title: 'Moment 19' },
  { id: 27, src: '/images/me27.jpeg', alt: 'Life Dump Photo 27', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 27' },
  
  { id: 33, src: '/images/me33.jpeg', alt: 'Life Dump Photo 33', aspectClass: 'aspect-[3/4]', type: 'portrait', title: 'Moment 33' },
  { id: 9, src: '/images/me9.jpeg', alt: 'Life Dump Photo 9', aspectClass: 'aspect-[4/5]', type: 'portrait', title: 'Moment 09' },
  { id: 11, src: '/images/me11.jpeg', alt: 'Life Dump Photo 11', aspectClass: 'aspect-[9/16]', type: 'tall', title: 'Moment 11' },
];

export const GalleryApp: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1) : null
    );
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1) : null
    );
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="gallery-panel-container">
      {/* Editorial Header */}
      <header className="gallery-app-header">
        <h1 className="gallery-app-title">{t('gallery.title')}</h1>
      </header>

      {/* Editorial Masonry Flow */}
      <div className="gallery-masonry-flow">
        {GALLERY_PHOTOS.map((photo, index) => (
          <div
            key={photo.id}
            className="gallery-card-wrapper"
            onClick={() => openLightbox(index)}
          >
            <div className={`gallery-photo-card ${photo.aspectClass}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-photo-img"
                loading="lazy"
              />
              <div className="gallery-photo-hover-overlay">
                <div className="gallery-expand-pill">
                  <Maximize2 size={13} />
                  <span>{t('gallery.view')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal Image Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Lightbox Controls Toolbar */}
            <div
              className="gallery-lightbox-toolbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="gallery-lightbox-counter">
                <span className="current-num">{selectedIndex + 1}</span>
                <span className="divider">/</span>
                <span className="total-num">{GALLERY_PHOTOS.length}</span>
              </div>

              <button
                type="button"
                className="gallery-lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation Button - Prev */}
            <button
              type="button"
              className="gallery-nav-btn prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Lightbox Image View */}
            <motion.div
              key={selectedIndex}
              className="gallery-lightbox-image-container"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_PHOTOS[selectedIndex].src}
                alt={GALLERY_PHOTOS[selectedIndex].alt}
                className="gallery-lightbox-img"
              />
            </motion.div>

            {/* Navigation Button - Next */}
            <button
              type="button"
              className="gallery-nav-btn next-btn"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
