import { company, navItems } from '../config/site';

export default function Footer() {
  const links = navItems.filter((n) => !['Home', 'Contact'].includes(n.label));

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="brand" style={{ fontSize: 18 }}>
              {company.shortName}
              <span>{company.wordmarkSub}</span>
            </div>
            <p className="lead" style={{ marginTop: 20, fontSize: 14, maxWidth: '40ch' }}>
              {company.description}
            </p>
          </div>
          <div>
            <b
              style={{
                font: '500 11px/1 Inter',
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--mut)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Navigate
            </b>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <b
              style={{
                font: '500 11px/1 Inter',
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--mut)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Contact
            </b>
            <a href="#contact">{company.email}</a>
            <a href="#contact">{company.phone}</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="copy">
          <span>© {new Date().getFullYear()} Varunodhya Consultancy Services. All rights reserved.</span>
          <span>{company.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
