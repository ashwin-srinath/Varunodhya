import { useEffect } from 'react';

export default function usePremiumInteractions() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const touchDevice = window.matchMedia(
      '(hover: none), (pointer: coarse)'
    ).matches;

    /*
     * Accessibility:
     * Do not run the interactive effects when
     * the user has requested reduced motion.
     */
    if (reducedMotion) {
      return;
    }

    /*
     * ========================================================
     * HERO CURSOR GLOW
     * ========================================================
     */

    const hero =
      document.querySelector<HTMLElement>(
        '.sonar-hero'
      );

    const handleHeroMove = (
      event: PointerEvent
    ) => {
      if (!hero || touchDevice) return;

      const rect =
        hero.getBoundingClientRect();

      hero.style.setProperty(
        '--cursor-x',
        `${event.clientX - rect.left}px`
      );

      hero.style.setProperty(
        '--cursor-y',
        `${event.clientY - rect.top}px`
      );

      hero.classList.add(
        'hero-cursor-active'
      );
    };

    const handleHeroLeave = () => {
      hero?.classList.remove(
        'hero-cursor-active'
      );
    };

    if (hero && !touchDevice) {
      hero.addEventListener(
        'pointermove',
        handleHeroMove
      );

      hero.addEventListener(
        'pointerleave',
        handleHeroLeave
      );
    }

    /*
     * ========================================================
     * MAGNETIC BUTTONS
     * ========================================================
     */

    const buttons =
      Array.from(
        document.querySelectorAll<HTMLElement>(
          '.btn'
        )
      );

    const buttonCleanups:
      (() => void)[] = [];

    if (!touchDevice) {
      buttons.forEach((button) => {

        const handleMove = (
          event: PointerEvent
        ) => {
          const rect =
            button.getBoundingClientRect();

          const x =
            event.clientX -
            (rect.left + rect.width / 2);

          const y =
            event.clientY -
            (rect.top + rect.height / 2);

          /*
           * Keep the movement deliberately subtle.
           */
          const strength = 0.12;

          button.style.transform =
            `translate3d(${x * strength}px, ${y * strength}px, 0)`;
        };

        const reset = () => {
          button.style.transform = '';
        };

        button.addEventListener(
          'pointermove',
          handleMove
        );

        button.addEventListener(
          'pointerleave',
          reset
        );

        buttonCleanups.push(() => {
          button.removeEventListener(
            'pointermove',
            handleMove
          );

          button.removeEventListener(
            'pointerleave',
            reset
          );
        });
      });
    }

    /*
     * ========================================================
     * CLEANUP
     * ========================================================
     */

    return () => {

      if (hero && !touchDevice) {
        hero.removeEventListener(
          'pointermove',
          handleHeroMove
        );

        hero.removeEventListener(
          'pointerleave',
          handleHeroLeave
        );
      }

      buttonCleanups.forEach(
        (cleanup) => cleanup()
      );
    };
  }, []);
}
