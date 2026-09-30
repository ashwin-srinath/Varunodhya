import { company } from '../config/site';

export default function Hero() {
  return (
    <section
      className="hero sonar-hero"
      id="home"
    >

      {/* Cursor-following cyan light */}
      <div
        className="hero-cursor-glow"
        aria-hidden="true"
      />

      {/* Cinematic underwater background */}
      <div
        className="sonar-hero-background"
        aria-hidden="true"
      />

      {/* Dark cinematic overlay */}
      <div
        className="sonar-hero-gradient"
        aria-hidden="true"
      />

      {/* Technical grid */}
      <div
        className="sonar-grid-overlay"
        aria-hidden="true"
      />

      {/* Existing sonar animation */}
      <div
        className="beams"
        aria-hidden="true"
      />

      <div
        className="sonar"
        aria-hidden="true"
      >
        <i />
        <i />
        <i />
      </div>

      <div className="sonar-hero-content">

        <div className="hero-kicker rev">
          <span className="hero-kicker-line" />
          MARINE · DEFENCE · TECHNOLOGY
        </div>

        <div className="hero-main">

          <div className="hero-copy">

            <div className="hero-system-label rev">
              <span className="hero-system-dot" />
              VARUNA CONSULTANCY SERVICES LLP
              <span className="hero-system-divider" />
              SYSTEMS / RESEARCH / TRAINING
            </div>

            <div className="mark rev">
              {company.shortName}
              <small>
                {company.wordmarkSub}
              </small>
            </div>

            <h1 className="rev">
              {company.headline}
            </h1>

            <p className="lead rev">
              {company.intro}
            </p>

            <div className="cta rev">

              <a
                href="#services"
                className="btn solid"
              >
                Explore Our Services
              </a>

              <a
                href="#contact"
                className="btn ghost"
              >
                Get in Touch
              </a>

            </div>

            <a
              href="#services"
              className="scroll-indicator rev"
            >
              Scroll to explore
              <span>↓</span>
            </a>

          </div>

          {/* Technical sonar display */}
          <div
            className="hero-tech-panel rev"
            aria-hidden="true"
          >

            <div className="hero-tech-header">
              <span>
                ACOUSTIC FIELD
              </span>

              <span>
                ACTIVE
              </span>
            </div>

            <div className="hero-sonar-display">

              <div className="sonar-ring sonar-ring-1" />
              <div className="sonar-ring sonar-ring-2" />
              <div className="sonar-ring sonar-ring-3" />

              <div className="sonar-crosshair horizontal" />
              <div className="sonar-crosshair vertical" />

              <div className="sonar-sweep" />

              <div className="sonar-target sonar-target-1">
                <span />
              </div>

              <div className="sonar-target sonar-target-2">
                <span />
              </div>

              <div className="sonar-center">
                +
              </div>

            </div>

            <div className="hero-tech-data">

              <div>
                <span>
                  RANGE
                </span>
                <strong>
                  04.82 NM
                </strong>
              </div>

              <div>
                <span>
                  STATUS
                </span>
                <strong>
                  NOMINAL
                </strong>
              </div>

              <div>
                <span>
                  MODE
                </span>
                <strong>
                  ACTIVE
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="hero-side-label">
        UNDERWATER
        TECHNOLOGIES
      </div>

      <div className="hero-bottom-line">
        <span>
          TECHNICAL CONSULTANCY
        </span>

        <span className="hero-bottom-status">
          <span className="hero-system-dot" />
          SYSTEM ONLINE
        </span>

        <span>
          KNOWLEDGE · PRECISION · DEPTH
        </span>
      </div>

    </section>
  );
}
