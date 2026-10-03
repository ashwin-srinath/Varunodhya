import { useState } from 'react';
import { trainingTopics } from '../config/training';

/** Event name dispatched when the visitor carries selected topics into the enquiry form. */
export const USE_TOPICS_EVENT = 'varunodhya:use-topics';

export default function Training() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(label: string) {
    setSelected((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));
  }

  function useInEnquiry() {
    const list = selected
      .map((label) => {
        const t = trainingTopics.find((x) => x.label === label);
        return t ? `${t.label} (${t.status})` : label;
      })
      .join('; ');
    window.dispatchEvent(new CustomEvent<string>(USE_TOPICS_EVENT, { detail: list }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="alt" id="training">
      <div className="wrap split">
        <div className="rev">
          <p className="eyebrow">Training</p>
          <h2 style={{ fontSize: 'clamp(1.9rem,4vw,3rem)' }}>Expert-led programs, shaped to your requirement.</h2>
          <p className="lead" style={{ marginTop: 22 }}>
            Training programs are customized according to client requirements — scope, depth, and
            delivery format are agreed before each engagement.
          </p>
          <p className="lead" style={{ marginTop: 14, fontSize: 13, color: 'var(--mut)' }}>
            Select the topics relevant to you — this builds a short summary you can carry straight into
            the enquiry form.
          </p>
          <div className="chips" role="group" aria-label="Training topics">
            {trainingTopics.map((t) => (
              <button
                key={t.label}
                type="button"
                className={selected.includes(t.label) ? 'chip on' : 'chip'}
                onClick={() => toggle(t.label)}
              >
                <span className="dotc" />
                {t.label}
              </button>
            ))}
          </div>
          <p className="program">
            {selected.length === 0 ? (
              'No topics selected yet — choose one or more above.'
            ) : (
              <>
                <b>
                  {selected.length} topic{selected.length > 1 ? 's' : ''} selected:
                </b>{' '}
                {selected.join('; ')} —{' '}
                <a
                  href="#contact"
                  style={{ color: 'var(--cy)', textDecoration: 'underline' }}
                  onClick={(e) => {
                    e.preventDefault();
                    useInEnquiry();
                  }}
                >
                  use this in your enquiry →
                </a>
              </>
            )}
          </p>
        </div>
        <div className="grid" style={{ marginTop: 0, gridTemplateColumns: '1fr' }}>
          {trainingTopics.map((t) => (
            <div className="cell rev" key={t.label}>
              <h3 style={{ fontSize: '1.05rem', margin: 0 }}>
                {t.label} <span className="tag">{t.status}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
