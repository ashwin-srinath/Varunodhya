/**
 * Availability is shown exactly as supplied: either "On request" or "Planned".
 * Do not mark a programme as currently running unless that is confirmed.
 */
const topics: { title: string; status: 'On request' | 'Planned' }[] = [
  { title: 'Underwater surveillance', status: 'On request' },
  { title: 'Detection, tracking & classification', status: 'On request' },
  { title: 'SONAR / RADAR signal processing', status: 'On request' },
  { title: 'Surveillance-system concepts', status: 'Planned' },
  { title: 'Technical knowledge transfer', status: 'On request' },
  { title: 'Expert-led workshops & specialist development', status: 'Planned' },
];

export default function Training() {
  return (
    <section className="alt" id="training">
      <div className="wrap split">
        <div className="rev">
          <p className="eyebrow">Training</p>
          <h2 className="h2">Expert-led programs, shaped to your requirement.</h2>
          <p className="lead mt22">
            Training programs are customized according to client requirements — scope, depth, and
            delivery format are agreed before each engagement.
          </p>
        </div>
        <div className="grid g1">
          {topics.map(({ title, status }) => (
            <div className="cell rev" key={title}>
              <h3 className="tr-h">
                {title} <span className="tag">{status}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
