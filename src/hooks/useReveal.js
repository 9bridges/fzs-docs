import { useEffect } from 'react';

/**
 * Scroll-triggered reveal system.
 *
 * useReveal() sets data-reveal="waiting" on elements below the fold, then
 * flips it to data-reveal="visible" as they enter the viewport (single
 * site-wide IntersectionObserver). REVEAL / STAGGER are the Tailwind utility
 * strings that key off that same data-reveal attribute to drive the actual
 * fade/blur-up animation — kept in this file so the attribute contract
 * between the JS and the styling stays in one place.
 *
 * REVEAL   — apply to a single element that should fade/blur up into view.
 * STAGGER  — apply to a container whose direct children should cascade in
 *            with a per-child delay (nth-child 1-8).
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

export const REVEAL =
  'motion-safe:transition-[opacity,transform,filter] motion-safe:duration-[800ms] motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] ' +
  'motion-safe:data-[reveal=waiting]:opacity-0 motion-safe:data-[reveal=waiting]:translate-y-[22px] motion-safe:data-[reveal=waiting]:blur-[6px] ' +
  'motion-safe:data-[reveal=visible]:opacity-100 motion-safe:data-[reveal=visible]:translate-y-0 motion-safe:data-[reveal=visible]:blur-none';

export const STAGGER =
  'motion-safe:[&>*]:transition-[opacity,transform,filter] motion-safe:[&>*]:duration-700 motion-safe:[&>*]:ease-[cubic-bezier(0.32,0.72,0,1)] ' +
  'motion-safe:data-[reveal=waiting]:[&>*]:opacity-0 motion-safe:data-[reveal=waiting]:[&>*]:translate-y-[22px] motion-safe:data-[reveal=waiting]:[&>*]:blur-[6px] ' +
  'motion-safe:data-[reveal=visible]:[&>*]:opacity-100 motion-safe:data-[reveal=visible]:[&>*]:translate-y-0 motion-safe:data-[reveal=visible]:[&>*]:blur-none ' +
  '[&>*:nth-child(1)]:delay-0 [&>*:nth-child(2)]:delay-[60ms] [&>*:nth-child(3)]:delay-[120ms] [&>*:nth-child(4)]:delay-[180ms] ' +
  '[&>*:nth-child(5)]:delay-[240ms] [&>*:nth-child(6)]:delay-[300ms] [&>*:nth-child(7)]:delay-[360ms] [&>*:nth-child(8)]:delay-[420ms]';
