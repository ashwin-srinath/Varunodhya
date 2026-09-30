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
      <div className="wrap split">
        <div className="rev">
          <p className="eyebrow">About Varuna</p>
          <h2 className="h2">Knowledge. Precision. Possibility.</h2>
        </div>
        <div className="rev">
          <p className="lead">
            Varuna Consultancy Services LLP is a knowledge-driven consultancy connecting experienced
            professionals, emerging technologies, and practical project requirements. We work across
            scientific, engineering, environmental, and defence-related domains — bringing specialist
            understanding to problems that rarely sit within a single discipline.
          </p>
          <p className="lead mt18">
            Our approach is deliberately interdisciplinary: technical depth where it matters, clear
            documentation, and transfer of knowledge that outlasts the engagement.
          </p>
          <ul className="vals">
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
