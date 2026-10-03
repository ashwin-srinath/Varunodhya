const values = [
  'Technical Excellence',
  'Professional Integrity',
  'Interdisciplinary Collaboration',
  'Knowledge Transfer',
  'Innovation',
  'Reliable Project Support',
];

export default function About() {
  return (
    <section className="alt" id="about">
      <div className="wrap split rev-img">
        <div className="rev">
          <p className="eyebrow">About Varunodhya</p>
          <h2 style={{ fontSize: 'clamp(1.9rem,4vw,3rem)' }}>Knowledge. Precision. Possibility.</h2>
          <p className="lead" style={{ marginTop: 18 }}>
            Varunodhya Consultancy Services is a knowledge-driven consultancy connecting experienced
            professionals, emerging technologies, and practical project requirements. We work across
            scientific, engineering, environmental, and defence-related domains — bringing specialist
            understanding to problems that rarely sit within a single discipline.
          </p>
          <p className="lead" style={{ marginTop: 18 }}>
            Our approach is deliberately interdisciplinary: technical depth where it matters, clear
            documentation, and transfer of knowledge that outlasts the engagement.
          </p>
          <ul className="vals">
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
        <div className="rev" aria-hidden="true">
          <div className="quote-panel">
            <span className="qmark">&ldquo;</span>
            <p className="qtext">Knowledge. Precision. Possibility.</p>
            <span className="qrule" />
          </div>
        </div>
      </div>
    </section>
  );
}
