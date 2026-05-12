import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDES = Array.from({ length: 13 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { src: `/gallery/img-${n}.jpeg`, alt: `Dholera Site ${i + 1}` };
});

const AUTO_MS = 3500;

export function GallerySlider() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const autoRef = useRef(null);

  const total = SLIDES.length;

  const goTo = useCallback((n) => {
    setIndex(((n % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setIndex((c) => (c + 1) % total);
    }, AUTO_MS);
  }, [total]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, [resetAuto]);

  const handleNext = () => {
    next();
    resetAuto();
  };
  const handlePrev = () => {
    prev();
    resetAuto();
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-track-outer">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          role="region"
          aria-roledescription="carousel"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) handleNext();
              else handlePrev();
            }
          }}
        >
          {SLIDES.map((slide) => (
            <div className="slide" key={slide.src}>
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="slider-btn slider-prev" onClick={handlePrev} aria-label="Previous slide">
        &#8592;
      </button>
      <button type="button" className="slider-btn slider-next" onClick={handleNext} aria-label="Next slide">
        &#8594;
      </button>

      <div className="slider-counter">
        <span>{index + 1}</span> / {total}
      </div>

      <div className="slider-dots">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`dot${i === index ? ' active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => {
              goTo(i);
              resetAuto();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goTo(i);
                resetAuto();
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
