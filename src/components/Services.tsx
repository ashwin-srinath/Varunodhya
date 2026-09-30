import {
  Waves,
  Cpu,
  RadioTower,
  ShieldCheck,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Marine Acoustic Technologies',
    Icon: Waves,
    tag: 'ACOUSTIC SYSTEMS',
    body: 'Specialized technologies and engineering support for underwater acoustics, acoustic sensing, detection, tracking, classification, and marine surveillance applications.',
    href: '#expertise',
  },
  {
    num: '02',
    title: 'Embedded Systems Design and Development',
    Icon: Cpu,
    tag: 'EMBEDDED ENGINEERING',
    body: 'Design and development of embedded hardware and software systems, including real-time processing, firmware, microcontrollers, system integration, and specialized electronic platforms.',
    href: '#expertise',
  },
  {
    num: '03',
    title: 'RADAR and SONAR Algorithm Design and Development',
    Icon: RadioTower,
    tag: 'SIGNAL PROCESSING',
    body: 'Development of advanced algorithms for RADAR and SONAR applications, including signal processing, detection, tracking, classification, and intelligent sensing systems.',
    href: '#expertise',
  },
  {
    num: '04',
    title: 'AI Powered Defence Technology Consultancy Services',
    Icon: ShieldCheck,
    tag: 'AI + DEFENCE',
    body: 'Technical consultancy supporting the application of artificial intelligence, intelligent sensing, data-driven systems, and advanced technologies for defence and security applications.',
    href: '#contact',
  },
  {
    num: '05',
    title: 'Professional Training and Capacity Building',
    Icon: GraduationCap,
    tag: 'KNOWLEDGE TRANSFER',
    body: 'Professional training and capacity-building programs focused on marine technology, acoustic systems, signal processing, embedded systems, algorithms, and emerging defence technologies.',
    href: '#training',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <div className="services-intro rev">
          <div>
            <p className="eyebrow">What We Do</p>

            <h2 className="h2">
              Engineering intelligence
              <br />
              beneath the surface.
            </h2>
          </div>

          <p className="lead">
            We combine marine technology, acoustic engineering, embedded
            systems, advanced algorithms, artificial intelligence, and
            professional expertise to support technically demanding
            applications.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ num, title, body, href, Icon, tag }) => (
            <article className="service-card rev" key={num}>
              <div className="service-card-glow" />

              <div className="service-card-content">
                <div className="service-card-top">
                  <span className="num">{num}</span>

                  <div className="service-icon-wrap">
                    <Icon
                      className="ico"
                      size={26}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="service-card-body">
                  <span className="service-tag">{tag}</span>

                  <h3>{title}</h3>

                  <p>{body}</p>
                </div>

                <a className="more" href={href}>
                  <span>Explore capability</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
