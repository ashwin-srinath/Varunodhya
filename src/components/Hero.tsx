import { useRef, type MouseEvent } from 'react';
import { company } from '../config/site';
import useReducedMotion from '../hooks/useReducedMotion';
import { magneticMove, magneticLeave } from '../utils/interactions';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    if (reduced || !glowRef.current || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    glowRef.current.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    glowRef.current.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  return (
    <section className="hero" id="home" ref={heroRef} onMouseMove={onMouseMove}>
      <div className="beams" aria-hidden="true" />
      <div className="hero-glow" ref={glowRef} aria-hidden="true" />
      <div className="sonar" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="depth-rule" aria-hidden="true">
        <span>0m</span><i /><span>100</span><i /><span>250</span><i /><span>500</span><i />
      </div>
      <div className="side-caps" aria-hidden="true">
        <span>MAP</span><span>MONITOR</span><span>PROTECT</span>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span className="pill" /><span>SCROLL TO EXPLORE</span>
      </div>
      <div className="wrap">
        <p className="eyebrow-hero rev">{company.eyebrowHero}</p>
        <div className="mark rev">
          {company.shortName}
          <small>{company.wordmarkSub}</small>
        </div>
        <h1 className="rev">{company.headline}</h1>
        <p className="lead rev">{company.intro}</p>
        <div className="cta rev">
          <a href="#services" className="btn solid" onMouseMove={magneticMove} onMouseLeave={magneticLeave}>
            Explore Our Services
          </a>
          <a href="#contact" className="btn ghost" onMouseMove={magneticMove} onMouseLeave={magneticLeave}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
