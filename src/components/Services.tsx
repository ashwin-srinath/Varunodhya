import { services } from '../config/services';
import { tiltMove, tiltLeave } from '../utils/interactions';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow rev">What We Do</p>
        <h2 className="rev" style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', maxWidth: '28ch' }}>
          Six disciplines, one standard of rigour.
        </h2>
        <div className="grid g6">
          {services.map((s) => (
            <article
              className="cell rev has-img"
              key={s.num}
              onMouseMove={tiltMove}
              onMouseLeave={tiltLeave}
            >
              <div className="cell-img">
                <img src={s.image} alt={`${s.title} — illustrative visual`} loading="lazy" />
              </div>
              <div className="cell-body">
                <div className="badge">
                  <span className="num" style={{ margin: 0 }}>{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a className="arrow" href={s.href} aria-label={`Learn more about ${s.title}`}>
                  →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
