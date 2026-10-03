import { useEffect, useState } from 'react';

/** Returns the href ("#id") of the section currently in view. */
export default function useScrollSpy(hrefs: string[]): string {
  const [active, setActive] = useState(hrefs[0] ?? '');

  useEffect(() => {
    const sections = hrefs
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [hrefs]);

  return active;
}
