import { useEffect, useRef } from 'react';

export default function SubmarineCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    document.body.classList.add('submarine-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let lastX = mouseX;
    let lastY = mouseY;

    let angle = 0;
    let animationFrame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;

      if (Math.abs(dx) + Math.abs(dy) > 0.5) {
        angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      }

      lastX = mouseX;
      lastY = mouseY;

      // Keeps the existing Hero acoustic glow synchronized
      document.documentElement.style.setProperty(
        '--cursor-x',
        `${mouseX}px`
      );

      document.documentElement.style.setProperty(
        '--cursor-y',
        `${mouseY}px`
      );
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.14;
      currentY += (mouseY - currentY) * 0.14;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0) ` +
          `translate(-50%, -50%) rotate(${angle}deg)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrame);

      document.body.classList.remove('submarine-cursor-active');

      document.documentElement.style.removeProperty('--cursor-x');
      document.documentElement.style.removeProperty('--cursor-y');
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="submarine-cursor"
      aria-hidden="true"
    >
      <div className="submarine-wake" />

      <div className="submarine-sonar-pulse" />

      <svg
        className="submarine-svg"
        viewBox="0 0 120 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SONAR beam */}
        <path
          className="submarine-sonar-beam"
          d="M108 35 L72 17 L72 53 Z"
        />

        {/* Propeller wake */}
        <g className="submarine-propeller">
          <circle cx="14" cy="35" r="5" />
          <path d="M10 27 C2 22 1 29 9 34" />
          <path d="M10 43 C2 48 1 41 9 36" />
        </g>

        {/* Main submarine hull */}
        <path
          className="submarine-hull"
          d="
            M14 36
            C19 24 34 18 55 18
            L82 18
            C94 18 104 24 108 35
            C104 46 94 52 82 52
            L55 52
            C34 52 19 47 14 36 Z
          "
        />

        {/* Lower hull shadow */}
        <path
          className="submarine-shadow"
          d="
            M18 38
            C29 47 43 50 58 50
            L82 50
            C94 50 102 45 107 37
            C100 47 91 53 80 54
            L52 54
            C34 52 23 47 18 38 Z
          "
        />

        {/* Conning tower */}
        <path
          className="submarine-tower"
          d="
            M52 19
            L57 9
            L72 9
            L77 19
            Z
          "
        />

        {/* Periscope */}
        <path
          className="submarine-periscope"
          d="
            M63 9
            L63 4
            L70 4
            L70 7
          "
        />

        {/* Portholes */}
        <circle className="submarine-window" cx="58" cy="29" r="4" />
        <circle className="submarine-window" cx="72" cy="29" r="4" />
        <circle className="submarine-window" cx="86" cy="29" r="4" />

        {/* Hull highlight */}
        <path
          className="submarine-highlight"
          d="M27 33 C40 24 58 23 79 23"
        />

        {/* Front sonar emitter */}
        <circle
          className="submarine-sonar-emitter"
          cx="105"
          cy="35"
          r="3"
        />

        {/* Rudder / fins */}
        <path
          className="submarine-fin"
          d="M35 50 L29 61 L42 53"
        />

        <path
          className="submarine-fin"
          d="M39 20 L32 10 L45 18"
        />
      </svg>
    </div>
  );
}
