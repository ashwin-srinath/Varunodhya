import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company, navItems } from '../config/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

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
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={24} strokeWidth={1.4} />
          ) : (
            <Menu size={24} strokeWidth={1.4} />
          )}
        </button>

        <nav
          className={open ? 'links open' : 'links'}
          id="menu"
          onClick={() => setOpen(false)}
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
                active === item.href ? 'active' : ''
              }
            >
              {item.label}
            </a>
          ))}

          <a href="#contact" className="btn solid">
            Get in Touch
          </a>
        </nav>

      </div>
    </header>
  );
}
