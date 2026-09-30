import { company } from '../config/site';

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Hero background image */}
      <div
        className="hero-background"
        aria-hidden="true"
      />

      {/* Dark cinematic overlay */}
      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      {/* Technical blue grid */}
      <div
        className="hero-grid"
        aria-hidden="true"
      />

      {/* SONAR rings */}
      <div className="sonar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="wrap hero-content">

        <div className="mark rev">
          {company.shortName}
          <small>{company.wordmarkSub}</small>
        </div>

        <div className="hero-kicker rev">
          <span className="hero-kicker-line" />
          MARINE • DEFENCE • TECHNOLOGY
        </div>

        <h1 className="rev">
          {company.headline}
        </h1>

        <p className="lead rev">
          {company.intro}
        </p>

        <div className="cta rev">
          <a href="#services" className="btn solid">
            Explore Our Services
          </a>

          <a href="#contact" className="btn ghost">
            Get in Touch
          </a>
        </div>

      </div>

      <div className="hero-side-label" aria-hidden="true">
        <span>SONAR</span>
        <span>RADAR</span>
        <span>AI</span>
        <span>EMBEDDED SYSTEMS</span>
      </div>

    </section>
  );
}
