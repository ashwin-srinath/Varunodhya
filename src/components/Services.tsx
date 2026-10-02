import { Waves, Cpu, Radio, ShieldCheck, GraduationCap } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Marine Acoustic Technologies',
    Icon: Waves,
    image: '/images/marine-acoustic-technologies.png',
    body: 'Marine acoustic technologies, underwater sensing, acoustic surveillance, detection, tracking, classification, and related underwater acoustic systems.',
  },
  {
    num: '02',
    title: 'Embedded Systems Design and Development',
    Icon: Cpu,
    image: '/images/embedded-systems.png',
    body: 'Embedded systems design and development for specialized sensing, processing, control, instrumentation, and technology applications.',
  },
  {
    num: '03',
    title: 'RADAR and SONAR Algorithm Design and Development',
    Icon: Radio,
    image: '/images/radar-sonar-algorithms.png',
    body: 'Design and development of RADAR and SONAR algorithms for signal processing, detection, tracking, classification, analysis, and advanced sensing applications.',
  },
  {
    num: '04',
    title: 'AI Powered Defence Technology Consultancy Services',
    Icon: ShieldCheck,
    image: '/images/ai-defence-consultancy.png',
    body: 'AI-powered defence technology consultancy services supporting advanced sensing, intelligent systems, data-driven solutions, research, and technology development.',
  },
  {
    num: '05',
    title: 'Professional Training and Capacity Building',
    Icon: GraduationCap,
    image: '/images/professional-training.jpg.png',
    body: 'Professional training and capacity-building programs designed to develop specialized technical knowledge, practical skills, and expertise in advanced technology domains.',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow rev">What We Do</p>

        <h2 className="rev h2 services-heading">
          Advanced technology, engineering and expertise for the underwater and defence domain.
        </h2>

        <p className="lead rev services-intro">
          Varuondhya provides specialized technology solutions, consultancy,
          engineering expertise, and professional training across marine
          acoustics, embedded systems, RADAR, SONAR, artificial intelligence,
          and defence technologies.
        </p>

        <div className="services-grid">
          {services.map(({ num, title, body, Icon, image }) => (
            <article className="service-card rev" key={num}>
              <div className="service-image-wrap">
                <img
                  src={image}
                  alt={title}
                  className="service-image"
                  loading="lazy"
                />

                <div className="service-image-overlay" />
              </div>

              <div className="service-content">
                <div className="service-top">
                  <Icon className="ico" aria-hidden="true" />
                  <span className="service-number">{num}</span>
                </div>

                <h3>{title}</h3>

                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
