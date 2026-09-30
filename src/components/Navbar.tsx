import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company, navItems } from '../config/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        <nav className={open ? 'links open' : 'links'} id="menu" onClick={() => setOpen(false)}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
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
