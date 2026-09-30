const opportunities = [
  'Specialist recruitment',
  'Technical professionals',
  'Expert consultants',
  'Training opportunities',
  'Research collaboration',
  'Associate engagements',
];

export default function Careers() {
  return (
    <section className="alt" id="careers">
      <div className="wrap split">
        <div className="rev">
          <p className="eyebrow">Careers &amp; Collaboration</p>
          <h2 className="h2">For specialists who go deeper.</h2>
        </div>
        <div className="rev">
          <p className="lead">
            We work with technical professionals, expert consultants, and academic collaborators
            across our areas of practice. If your expertise sits in these domains — or you are
            interested in training and collaboration opportunities — we would welcome a conversation.
          </p>
          <ul className="vals">
            {opportunities.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="mt32">
            <a href="#contact" className="btn">
              Express Interest
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
