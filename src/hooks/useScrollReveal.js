import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Omit .faq-item: accordion height changes confuse intersection, and injecting
   reveal CSS that is later removed caused FAQ rows to vanish until re-scroll. */
const SELECTOR =
  '.card, .plot-card, .amenity-item, .usp-item, .gallery-card';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    const nodes = document.querySelectorAll(SELECTOR);

    nodes.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      nodes.forEach((el) => {
        el.classList.remove('reveal-visible');
        el.style.removeProperty('opacity');
        el.style.removeProperty('transform');
        el.style.removeProperty('transition');
      });
    };
  }, [pathname]);
}
