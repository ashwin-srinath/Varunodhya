import {
  Waves,
  Cpu,
  Radar,
  ShieldCheck,
  GraduationCap,
  FlaskConical,
} from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Underwater & Marine Acoustic Technologies',
    body: 'Technologies for underwater sensing, acoustic measurement, detection, monitoring, and marine applications.',
    image: '/images/service-01.jpg',
    href: '#expertise',
    Icon: Waves,
  },
  {
    num: '02',
    title: 'Embedded & Real-Time Systems',
    body: 'Design and development of specialized embedded hardware, firmware, electronics, real-time systems, and system integration.',
    image: '/images/service-02.jpg',
    href: '#expertise',
    Icon: Cpu,
  },
  {
    num: '03',
    title: 'Signal Processing & Intelligent Sensing Algorithms',
    body: 'Development of algorithms for RADAR, SONAR, and other sensing systems, including signal processing, detection, tracking, classification, and data interpretation.',
    image: '/images/service-03.jpg',
    href: '#expertise',
    Icon: Radar,
  },
  {
    num: '04',
    title: 'AI for Defence & Security',
    body: 'AI-driven technologies and technical solutions for intelligent sensing, data analysis, automation, decision support, and advanced defence and security applications.',
    image: '/images/service-04.jpg',
    href: '#expertise',
    Icon: ShieldCheck,
  },
  {
    num: '05',
    title: 'Professional Training & Technical Capacity Building',
    body: 'Specialized training and knowledge-transfer programs in marine technology, acoustics, signal processing, embedded systems, AI, and related technical disciplines.',
    image: '/images/service-05.jpg',
    href: '#training',
    Icon: GraduationCap,
  },
  {
    num: '06',
    title: 'Applied Research & Engineering Solutions',
    body: 'Research, experimental studies, modelling, testing, field investigations, technical analysis, and specialized engineering solutions for complex marine, environmental, underwater, and infrastructure challenges.',
    image: '/images/service-06.jpg',
    href: '#projects',
    Icon: FlaskConical,
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="wrap">

        {/* Section heading */}
        <p className="eyebrow rev">What We Do</p>

        <h2 className="rev h2 mw20">
          Engineering capabilities for complex technical challenges.
        </h2>

        <p className="lead rev services-intro">
          From underwater sensing and embedded systems to intelligent
          algorithms, defence technology, technical training, and applied
          research, Varunodhya brings together specialized engineering
          capabilities across advanced technology domains.
        </p>

        {/* SIX SERVICE CARDS */}
        <div className="services-grid">

          {services.map(
            ({ num, title, body, image, href, Icon }) => (
              <article
                className="service-card rev"
                key={num}
              >

                {/* Image */}
                <div className="service-image">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                  />

                  <div className="service-image-overlay" />

                  <div className="service-image-label">
                    <Icon
                      className="service-image-icon"
                      aria-hidden="true"
                    />

                    <span>
                      {num === '01' && 'MARINE • ACOUSTICS'}
                      {num === '02' && 'EMBEDDED • REAL-TIME'}
                      {num === '03' && 'SIGNAL • INTELLIGENCE'}
                      {num === '04' && 'AI • DEFENCE • SECURITY'}
                      {num === '05' && 'TRAINING • CAPACITY BUILDING'}
                      {num === '06' && 'RESEARCH • ENGINEERING'}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="service-content">

                  <div className="service-number">
                    {num}
                  </div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {body}
                  </p>

                  <a
                    className="service-link"
                    href={href}
                  >
                    Explore capability
                    <span aria-hidden="true">→</span>
                  </a>

                </div>

              </article>
            )
          )}

        </div>
      </div>
    </section>
  );
}
