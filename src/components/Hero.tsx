import { ArrowDown, ArrowRight, Radio, Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero sonar-hero" id="home">
      {/* Atmospheric background layers */}
      <div className="sonar-hero-background" aria-hidden="true" />
      <div className="sonar-hero-gradient" aria-hidden="true" />
      <div className="sonar-grid-overlay" aria-hidden="true" />

      {/* Cursor-following acoustic glow */}
      <div className="sonar-cursor-glow" aria-hidden="true" />

      <div className="wrap sonar-hero-content">
        <div className="hero-kicker rev">
          <span className="hero-kicker-line" />
          MARINE TECHNOLOGY · AI · DEFENCE SYSTEMS
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <div className="hero-system-label rev">
              <span className="hero-system-dot" />
              SYSTEMS ONLINE
              <span className="hero-system-divider" />
              ACQUISITION / ANALYSIS / INTELLIGENCE
            </div>

            <h1 className="rev">
              Engineering
              <br />
              Intelligence
              <br />
              <span>Beneath the Surface.</span>
            </h1>

            <p className="lead rev">
              Advanced marine acoustic technologies, embedded systems,
              RADAR and SONAR algorithms, AI-powered defence technology,
              and professional technical training.
            </p>

            <div className="cta rev">
              <a href="#services" className="btn solid magnetic-btn">
                Explore Our Capabilities
                <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn ghost magnetic-btn">
                Talk to Our Team
              </a>
            </div>
          </div>

          {/* Technical SONAR information panel */}
          <div className="hero-tech-panel rev" aria-hidden="true">
            <div className="hero-tech-header">
              <span>ACOUSTIC FIELD</span>
              <span>LIVE</span>
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
                <Waves size={19} strokeWidth={1.4} />
              </div>
            </div>

            <div className="hero-tech-data">
              <div>
                <span>MODE</span>
                <strong>PASSIVE</strong>
              </div>

              <div>
                <span>RANGE</span>
                <strong>ACTIVE</strong>
              </div>

              <div>
                <span>SIGNAL</span>
                <strong>ANALYSING</strong>
              </div>
            </div>
          </div>
        </div>

        <a href="#services" className="scroll-indicator rev">
          <span>Scroll to explore</span>
          <ArrowDown size={16} />
        </a>
      </div>

      {/* Side technical marker */}
      <div className="hero-side-label" aria-hidden="true">
        <span>MARINE</span>
        <span>ACOUSTICS</span>
        <span>AI / DEFENCE</span>
        <span>ENGINEERING</span>
      </div>

      {/* Bottom technical status line */}
      <div className="hero-bottom-line" aria-hidden="true">
        <span>VARUNODHYA CONSULTANCY SERVICES</span>

        <span className="hero-bottom-status">
          <Radio size={13} />
          ADVANCED TECHNOLOGY · REAL-WORLD IMPACT
        </span>
      </div>
    </section>
  );
}
