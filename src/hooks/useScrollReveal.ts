import { useEffect } from 'react';

/**
 * Adds the `in` class to every `.rev` element as it scrolls into view.
 * Mirrors the IntersectionObserver behaviour of the original HTML page.
 * Elements are revealed immediately when the user prefers reduced motion.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rev'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
