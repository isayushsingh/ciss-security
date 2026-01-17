'use client';

import { useState, useEffect, useRef } from 'react';

const IMAGES_COUNT = 15; // Assuming 15 images for now as placeholder
const IMAGES = Array.from({ length: IMAGES_COUNT }, (_, i) => `/gallery/${i + 1}.png`);

export default function Carousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    // Speed: pixels per frame. 0.5 is slow and smooth.
    const scrollSpeed = 0.5; 

    const scroll = () => {
      if (!isPaused) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
           // Reset to start for infinite loop effect (assuming we double the content)
           container.scrollLeft = 0;
        } else {
           container.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % IMAGES.length : 0));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + IMAGES.length) % IMAGES.length : 0));
    }
  };

  return (
    <>
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="carousel-track" ref={scrollContainerRef}>
          {/* Duplicate images to create seamless infinite scroll */}
          {[...IMAGES, ...IMAGES].map((src, index) => {
            // Map the extended index back to original image index
            const originalIndex = index % IMAGES.length;
            return (
              <div 
                key={index} 
                className="carousel-item"
                onClick={() => openModal(originalIndex)}
              >
                <img src={src} alt={`Gallery Image ${originalIndex + 1}`} loading="lazy" />
                <div className="carousel-overlay">
                    <i className="fas fa-expand-alt"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="lightbox-modal" onClick={closeModal}>
          <button className="lightbox-close" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-nav prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <img 
              src={IMAGES[selectedImageIndex]} 
              alt={`Gallery Fullscreen ${selectedImageIndex + 1}`} 
            />
            
            <button className="lightbox-nav next" onClick={nextImage}>
               <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="lightbox-caption">
            Image {selectedImageIndex + 1} of {IMAGES.length}
          </div>
        </div>
      )}
    </>
  );
}
