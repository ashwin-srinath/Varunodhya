const services = [
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
    image: '/images/professional-training.jpg.png',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow rev">What We Do</p>

        <h2 className="rev h2 mw20">
          Advanced technology for the maritime and defence domain.
        </h2>

        <div className="grid g3 service-grid">
          {services.map(({ num, title, image }) => (
            <article className="cell rev service-card" key={num}>
              <div className="service-image">
                <img src={image} alt={title} />
              </div>

              <p className="num">{num}</p>

              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
