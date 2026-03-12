import { useEffect } from 'react';

/**
 * Adds scroll-triggered reveal animations to elements marked with
 * data-reveal="". Sets data-reveal="waiting" on elements below the fold,
 * then transitions them to data-reveal="visible" as they enter the viewport.
 * CSS in custom.css drives the actual animation.
 */
export default function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.dataset.reveal = 'visible';
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -24px 0px' }
    );
    const targets = document.querySelectorAll('[data-reveal]');
    targets.forEach(el => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.dataset.reveal = 'waiting';
      }
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}
