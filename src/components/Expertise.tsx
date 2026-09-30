const expertise = [
  {
    number: '01',
    title: 'Marine Acoustic Technologies',
    image: '/images/marine-acoustic-technologies.png',
    description:
      'Advanced marine acoustic technologies for underwater sensing, detection, ranging, surveillance, signal analysis and marine research applications.',
  },
  {
    number: '02',
    title: 'Embedded Systems Design and Development',
    image: '/images/embedded-systems.png',
    description:
      'Design and development of specialized embedded hardware and software systems for sensing, instrumentation, marine and defence applications.',
  },
  {
    number: '03',
    title: 'RADAR and SONAR Algorithm Design and Development',
    image: '/images/radar-sonar-algorithms.png',
    description:
      'Development of advanced RADAR and SONAR algorithms for signal processing, detection, tracking, classification and analysis.',
  },
  {
    number: '04',
    title: 'AI Powered Defence Technology Consultancy Services',
    image: '/images/ai-defence-consultancy.png',
    description:
      'Technology consultancy integrating artificial intelligence, sensing, surveillance and advanced decision-support capabilities for defence applications.',
  },
  {
    number: '05',
    title: 'Professional Training and Capacity Building',
    image: '/images/professional-training.png',
    description:
      'Professional training and capacity-building programs covering marine acoustics, SONAR, RADAR, embedded systems, signal processing and defence technologies.',
  },
];

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="wrap">

        <div className="expertise-heading">
          <p className="eyebrow rev">Areas of Expertise</p>

          <h2 className="expertise-title rev">
            Technology. Engineering.
            <br />
            <span>Marine Defence.</span>
          </h2>

          <p className="expertise-intro rev">
            VARUONDHYA provides specialized technical expertise across
            marine acoustics, embedded systems, RADAR and SONAR algorithms,
            artificial intelligence and professional training.
          </p>
        </div>

        <div className="expertise-grid">

          {expertise.map((item) => (
            <article
              className="expertise-card rev"
              key={item.number}
            >

              <div className="expertise-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="expertise-image"
                />

                <div className="expertise-overlay" />

                <span className="expertise-number">
                  {item.number}
                </span>
              </div>

              <div className="expertise-card-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="expertise-accent" />

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
