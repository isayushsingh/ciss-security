'use client';

import { useState, useEffect, useRef } from 'react';

// Data Model for Bento-style Carousel
interface CarouselItemData {
  src: string;
  title: string;
  subtitle: string;
  width: 'normal' | 'wide';
}

const CAROUSEL_ITEMS: CarouselItemData[] = [
  {
    src: '/gallery/1.png',
    title: 'Industrial Protection',
    subtitle: 'Comprehensive perimeter security for large-scale facilities.',
    width: 'wide',
  },
  {
    src: '/gallery/2.png',
    title: 'Manned Guarding',
    subtitle: '24/7 on-site presence.',
    width: 'normal',
  },
  {
    src: '/gallery/3.png',
    title: 'Event Security',
    subtitle: 'Crowd control and VIP safety management.',
    width: 'normal',
  },
  {
    src: '/gallery/4.png',
    title: 'Electronic Surveillance',
    subtitle: 'Advanced monitoring systems integration.',
    width: 'wide',
  },
  {
    src: '/gallery/5.png',
    title: 'Risk Assessment',
    subtitle: 'Identifying vulnerabilities before they become threats.',
    width: 'normal',
  },
  {
      src: '/gallery/6.png',
      title: 'Rapid Response',
      subtitle: 'Immediate action mobile units.',
      width: 'wide',
    },
];

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
      setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % CAROUSEL_ITEMS.length : 0));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length : 0));
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
          {/* Duplicate items to create seamless infinite scroll */}
          {[...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS].map((item, index) => {
            // Map the extended index back to original item index
            const originalIndex = index % CAROUSEL_ITEMS.length;
            return (
              <div 
                key={index} 
                className={`carousel-item ${item.width}`}
                onClick={() => openModal(originalIndex)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="carousel-overlay">
                    <div className="overlay-content">
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
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
              src={CAROUSEL_ITEMS[selectedImageIndex].src} 
              alt={CAROUSEL_ITEMS[selectedImageIndex].title}
            />
            
            <button className="lightbox-nav next" onClick={nextImage}>
               <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="lightbox-caption">
            <h3>{CAROUSEL_ITEMS[selectedImageIndex].title}</h3>
            <p>{CAROUSEL_ITEMS[selectedImageIndex].subtitle}</p>
          </div>
        </div>
      )}
    </>
  );
}

