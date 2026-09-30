import { company, navItems } from '../config/site';

export default function Footer() {
  const links = navItems.filter((n) => !['Home', 'Contact'].includes(n.label));

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="brand sm">
              {company.shortName}
              <span>{company.wordmarkSub}</span>
            </div>
            <p className="lead flead">{company.description}</p>
          </div>
          <div>
            <b className="fh">Navigate</b>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <b className="fh">Contact</b>
            <a href="#contact">{company.email}</a>
            <a href="#contact">{company.phone}</a>
            {/* Replace '#' with real policy pages when they exist. */}
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="copy">
          <span>
            © {new Date().getFullYear()} Varuna Consultancy Services LLP. All rights reserved.
          </span>
          <span>{company.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
