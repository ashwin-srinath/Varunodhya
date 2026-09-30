const services = [
  {
    num: '01',
    category: 'ACOUSTIC SYSTEMS',
    title: 'Marine Acoustic Technologies',
    image: '/images/marine-acoustic-technologies.png',
    body:
      'Specialized technologies and engineering support for underwater acoustics, acoustic sensing, detection, tracking, classification, and marine surveillance applications.',
    href: '#contact',
  },

  {
    num: '02',
    category: 'EMBEDDED ENGINEERING',
    title: 'Embedded Systems Design and Development',
    image: '/images/embedded-systems.png',
    body:
      'Design and development of embedded hardware and software systems, including real-time processing, firmware, microcontrollers, system integration, and specialized electronic platforms.',
    href: '#contact',
  },

  {
    num: '03',
    category: 'SIGNAL PROCESSING',
    title: 'RADAR and SONAR Algorithm Design and Development',
    image: '/images/radar-sonar-algorithms.png',
    body:
      'Development of advanced algorithms for RADAR and SONAR applications, including signal processing, detection, tracking, classification, and intelligent sensing systems.',
    href: '#contact',
  },

  {
    num: '04',
    category: 'AI + DEFENCE',
    title: 'AI Powered Defence Technology Consultancy Services',
    image: '/images/ai-defence-consultancy.png',
    body:
      'Technical consultancy supporting the application of artificial intelligence, intelligent sensing, data-driven systems, and advanced technologies for defence and security applications.',
    href: '#contact',
  },

  {
    num: '05',
    category: 'KNOWLEDGE TRANSFER',
    title: 'Professional Training and Capacity Building',
    image: '/images/professional-training.png',
    body:
      'Professional training and capacity-building programs focused on marine technology, acoustic systems, signal processing, embedded systems, algorithms, and emerging defence technologies.',
    href: '#training',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="services-section"
    >
      <div className="wrap">

        <div className="services-intro">

          <div>
            <p className="eyebrow rev">
              What We Do
            </p>

            <h2 className="rev h2 mw20">
              Engineering expertise for complex
              marine and defence challenges.
            </h2>
          </div>

          <p className="lead rev">
            VARUNA brings together specialized
            engineering, technology consultancy
            and professional training across
            marine acoustics, embedded systems,
            sensing, algorithms and defence
            technologies.
          </p>

        </div>

        <div className="service-grid">

          {services.map((service) => (
            <article
              className="service-card-image rev"
              key={service.num}
            >

              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="service-image-overlay" />

              <div className="service-image-number">
                {service.num}
              </div>

              <div className="service-card-content">

                <div className="service-card-body">

                  <span className="service-tag">
                    {service.category}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.body}
                  </p>

                  <a
                    className="more"
                    href={service.href}
                  >
                    Explore Capability
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
