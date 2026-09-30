import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company, navItems } from '../config/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  /*
   * Detect which section is currently visible.
   */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const home = document.querySelector('#home');

    if (home && !sections.includes(home as HTMLElement)) {
      sections.unshift(home as HTMLElement);
    }

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /*
   * Move the single underline underneath
   * whichever navigation item is active.
   */
  useEffect(() => {
    const nav = document.querySelector('.links');

    if (!nav) return;

    const indicator =
      nav.querySelector<HTMLElement>(
        '.nav-active-indicator'
      );

    const activeLink =
      nav.querySelector<HTMLAnchorElement>(
        `a[href="${active}"]:not(.btn)`
      );

    if (!indicator || !activeLink) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    indicator.style.left =
      `${linkRect.left - navRect.left}px`;

    indicator.style.width =
      `${linkRect.width}px`;
  }, [active]);

  /*
   * Recalculate the underline if the browser
   * is resized.
   */
  useEffect(() => {
    const handleResize = () => {
      const nav = document.querySelector('.links');

      if (!nav) return;

      const indicator =
        nav.querySelector<HTMLElement>(
          '.nav-active-indicator'
        );

      const activeLink =
        nav.querySelector<HTMLAnchorElement>(
          `a[href="${active}"]:not(.btn)`
        );

      if (!indicator || !activeLink) return;

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      indicator.style.left =
        `${linkRect.left - navRect.left}px`;

      indicator.style.width =
        `${linkRect.width}px`;
    };

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      );
  }, [active]);

  return (
    <header>
      <div className="wrap nav">

        <a
          href="#home"
          className="brand"
          onClick={() => setOpen(false)}
        >
          {company.shortName}
          <span>{company.wordmarkSub}</span>
        </a>

        <button
          className="burger"
          aria-label={
            open ? 'Close menu' : 'Open menu'
          }
          aria-expanded={open}
          aria-controls="menu"
          onClick={() =>
            setOpen((value) => !value)
          }
        >
          {open ? (
            <X
              size={24}
              strokeWidth={1.4}
            />
          ) : (
            <Menu
              size={24}
              strokeWidth={1.4}
            />
          )}
        </button>

        <nav
          className={
            open ? 'links open' : 'links'
          }
          id="menu"
          onClick={(event) => {
            const target =
              event.target as HTMLElement;

            if (
              target.closest('a')
            ) {
              setOpen(false);
            }
          }}
        >

          <span
            className="nav-active-indicator"
            aria-hidden="true"
          />

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                active === item.href
                  ? 'active'
                  : ''
              }
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="btn solid"
          >
            Get in Touch
          </a>

        </nav>
      </div>
    </header>
  );
}
