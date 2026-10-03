import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company, navItems } from '../config/site';
import useScrollSpy from '../hooks/useScrollSpy';
import { magneticMove, magneticLeave } from '../utils/interactions';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const hrefs = navItems.map((n) => n.href);
  const active = useScrollSpy(hrefs);

  const linksRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [slider, setSlider] = useState({ width: 0, x: 0, opacity: 0 });

  useEffect(() => {
    function move() {
      const activeEl = linkRefs.current[active];
      const container = linksRef.current;
      if (!activeEl || !container || window.innerWidth <= 900) {
        setSlider((s) => ({ ...s, opacity: 0 }));
        return;
      }
      const lr = activeEl.getBoundingClientRect();
      const pr = container.getBoundingClientRect();
      setSlider({ width: lr.width, x: lr.left - pr.left, opacity: 1 });
    }
    move();
    window.addEventListener('resize', move);
    return () => window.removeEventListener('resize', move);
  }, [active]);

  return (
    <header>
      <div className="wrap nav">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          {company.shortName}
          <span>{company.wordmarkSub}</span>
        </a>

        <button
          className="burger"
          id="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} strokeWidth={1.4} /> : <Menu size={24} strokeWidth={1.4} />}
        </button>

        <nav className={open ? 'links open' : 'links'} id="menu" ref={linksRef} onClick={() => setOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? 'active' : undefined}
              ref={(el) => {
                linkRefs.current[item.href] = el;
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn solid"
            onMouseMove={magneticMove}
            onMouseLeave={magneticLeave}
          >
            Get in Touch
          </a>
          <span
            className="nav-slider"
            style={{ width: slider.width, transform: `translateX(${slider.x}px)`, opacity: slider.opacity }}
          />
        </nav>
      </div>
    </header>
  );
}
