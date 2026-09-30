import { company } from '../config/site';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-simple">

        <div className="hero-company-name">
          <div className="hero-logo-name">
            VARUONDHYA
          </div>

          <div className="hero-subtitle">
            CONSULTANCY SERVICES LLP
          </div>
        </div>

        <div className="hero-line" />

        <p className="hero-intro">
          {company.intro}
        </p>

        <div className="cta">
          <a href="#services" className="btn solid">
            Explore Our Services
          </a>

          <a href="#contact" className="btn ghost">
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
