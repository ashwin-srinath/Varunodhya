const expertise = [
  {
    number: '01',
    category: 'ACOUSTIC SYSTEMS',
    title: 'Marine Acoustic Technologies',
    image: '/images/marine-acoustic-technologies.png',
    description:
      'Specialized technologies and engineering support for underwater acoustics, acoustic sensing, detection, tracking, classification, and marine surveillance applications.',
  },
  {
    number: '02',
    category: 'EMBEDDED ENGINEERING',
    title: 'Embedded Systems Design and Development',
    image: '/images/embedded-systems.png',
    description:
      'Design and development of embedded hardware and software systems, including real-time processing, firmware, microcontrollers, system integration, and specialized electronic platforms.',
  },
  {
    number: '03',
    category: 'SIGNAL PROCESSING',
    title: 'RADAR and SONAR Algorithm Design and Development',
    image: '/images/radar-sonar-algorithms.png',
    description:
      'Development of advanced algorithms for RADAR and SONAR applications, including signal processing, detection, tracking, classification, and intelligent sensing systems.',
  },
  {
    number: '04',
    category: 'AI + DEFENCE',
    title: 'AI Powered Defence Technology Consultancy Services',
    image: '/images/ai-defence-consultancy.png',
    description:
      'Technical consultancy supporting the application of artificial intelligence, intelligent sensing, data-driven systems, and advanced technologies for defence and security applications.',
  },
  {
    number: '05',
    category: 'KNOWLEDGE TRANSFER',
    title: 'Professional Training and Capacity Building',
    image: '/images/professional-training.png',
    description:
      'Professional training and capacity-building programs focused on marine technology, acoustic systems, signal processing, embedded systems, algorithms, and emerging defence technologies.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="wrap">

        <p className="eyebrow rev">Areas of Expertise</p>

        <h2 className="rev h2 mw20">
          Advanced technology for marine
          <br />
          and defence applications.
        </h2>

        <div className="expertise-grid">

          {expertise.map((item) => (
            <article className="expertise-card rev" key={item.number}>

              {/* IMAGE */}
              <div className="expertise-image">
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="expertise-image-overlay" />
              </div>

              {/* CARD CONTENT */}
              <div className="expertise-content">

                <div className="expertise-top">
                  <span className="expertise-number">
                    {item.number}
                  </span>
                </div>

                <p className="expertise-category">
                  {item.category}
                </p>

                <h3>
                  {item.title}
                </h3>

                <p className="expertise-description">
                  {item.description}
                </p>

                <a href="#contact" className="expertise-link">
                  Explore Capability
                  <span>↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
