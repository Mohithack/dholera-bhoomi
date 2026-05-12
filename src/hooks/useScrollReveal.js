import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTOR =
  '.card, .plot-card, .amenity-item, .usp-item, .gallery-card, .faq-item';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return undefined;

    const style = document.createElement('style');
    style.textContent =
      '.reveal-visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(SELECTOR).forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      style.remove();
    };
  }, [pathname]);
}
