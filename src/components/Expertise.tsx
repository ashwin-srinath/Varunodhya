const expertise = [
  {
    num: '01',
    title: 'Marine Acoustic Technologies',
    image: '/images/marine-acoustic-technologies.png',
  },
  {
    num: '02',
    title: 'Embedded Systems Design and Development',
    image: '/images/embedded-systems.png',
  },
  {
    num: '03',
    title: 'RADAR and SONAR Algorithm Design and Development',
    image: '/images/radar-sonar-algorithms.png',
  },
  {
    num: '04',
    title: 'AI-Powered Defence Technology Consultancy Services',
    image: '/images/ai-defence-consultancy.png',
  },
  {
    num: '05',
    title: 'Professional Training and Capacity Building',
    image: '/images/professional-training.png',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="alt">
      <div className="wrap">
        <p className="eyebrow rev">Our Expertise</p>

        <h2 className="rev h2 mw18">
          Advanced technology for complex maritime and defence challenges.
        </h2>

        <div className="exp">
          {expertise.map(({ num, title, image }) => (
            <article className="exp-card rev" key={num}>
              <div className="exp-image">
                <img src={image} alt={title} />
              </div>

              <div className="exp-content">
                <span className="exp-num">{num}</span>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
