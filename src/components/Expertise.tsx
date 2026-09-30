const areas = [
  'Underwater and marine technologies',
  'Defence technologies',
  'Scientific and engineering systems',
  'Geospatial and environmental studies',
  'Research and technology development',
  'Technical documentation and assessment',
  'Professional education and training',
  'Interdisciplinary project support',
];

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="wrap">
        <p className="eyebrow rev">Areas of Expertise</p>
        <h2 className="rev h2 mw18">Depth across domains that intersect.</h2>
        <div className="exp rev">
          {areas.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
