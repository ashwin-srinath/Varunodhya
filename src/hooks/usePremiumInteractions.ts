import { useEffect } from 'react';

export default function usePremiumInteractions() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const coarsePointer = window.matchMedia(
      '(hover: none), (pointer: coarse)'
    ).matches;

    if (reducedMotion) return;

    /*
     * ---------------------------------------------------------
     * HERO CURSOR GLOW
     * ---------------------------------------------------------
     */
    const hero = document.querySelector<HTMLElement>('.hero');

    const handleHeroMove = (event: PointerEvent) => {
      if (!hero || coarsePointer) return;

      const rect = hero.getBoundingClientRect();

      hero.style.setProperty(
        '--hero-mouse-x',
        `${event.clientX - rect.left}px`
      );

      hero.style.setProperty(
        '--hero-mouse-y',
        `${event.clientY - rect.top}px`
      );

      hero.classList.add('hero-cursor-active');
    };

    const handleHeroLeave = () => {
      hero?.classList.remove('hero-cursor-active');
    };

    if (hero && !coarsePointer) {
      hero.addEventListener('pointermove', handleHeroMove);
      hero.addEventListener('pointerleave', handleHeroLeave);
    }

    /*
     * ---------------------------------------------------------
     * MAGNETIC BUTTONS
     * ---------------------------------------------------------
     */
    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>('.btn')
    );

    const cleanups: (() => void)[] = [];

    if (!coarsePointer) {
      buttons.forEach((button) => {
        const handleMove = (event: PointerEvent) => {
          const rect = button.getBoundingClientRect();

          const x =
            event.clientX -
            (rect.left + rect.width / 2);

          const y =
            event.clientY -
            (rect.top + rect.height / 2);

          const strength = 0.14;

          button.style.transform = `
            translate3d(
              ${x * strength}px,
              ${y * strength}px,
              0
            )
          `;
        };

        const reset = () => {
          button.style.transform = '';
        };

        button.addEventListener('pointermove', handleMove);
        button.addEventListener('pointerleave', reset);

        cleanups.push(() => {
          button.removeEventListener('pointermove', handleMove);
          button.removeEventListener('pointerleave', reset);
        });
      });
    }

    /*
     * ---------------------------------------------------------
     * CLEANUP
     * ---------------------------------------------------------
     */
    return () => {
      if (hero && !coarsePointer) {
        hero.removeEventListener('pointermove', handleHeroMove);
        hero.removeEventListener('pointerleave', handleHeroLeave);
      }

      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}
