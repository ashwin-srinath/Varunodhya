import { company } from '../config/site';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content wrap">

        <div className="hero-label">
          MARINE • DEFENCE • TECHNOLOGY
        </div>

        <h1>
          {company.shortName}
        </h1>

        <div className="hero-subtitle">
          {company.wordmarkSub}
        </div>

        <div className="hero-divider" />

        <p className="hero-description">
          {company.intro}
        </p>

        <div className="hero-buttons">
          <a href="#services" className="btn solid">
            Explore Our Services
          </a>

          <a href="#contact" className="btn ghost">
            Get in Touch
          </a>
        </div>

        <div className="hero-bottom">
          <span>UNDERWATER TECHNOLOGY</span>
          <span>SONAR / RADAR</span>
          <span>EMBEDDED SYSTEMS</span>
          <span>AI & DEFENCE</span>
        </div>

      </div>
    </section>
  );
}
