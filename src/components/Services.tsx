import { useState } from 'react';

const services = [
  {
    num: '01',
    title: 'Marine Acoustic Technologies',
    body:
      'Marine acoustic technologies, underwater sensing, acoustic surveillance, detection, tracking, classification, and related underwater acoustic systems.',
    image: '/images/marine-acoustic-technologies.png',
    label: 'MARINE ACOUSTICS',
  },
  {
    num: '02',
    title: 'Embedded Systems Design and Development',
    body:
      'Embedded systems design and development for specialized sensing, processing, control, instrumentation, and technology applications.',
    image: '/images/embedded-systems.png',
    label: 'EMBEDDED SYSTEMS',
  },
  {
    num: '03',
    title: 'RADAR and SONAR Algorithm Design and Development',
    body:
      'Design and development of RADAR and SONAR algorithms for signal processing, detection, tracking, classification, analysis, and advanced sensing applications.',
    image: '/images/radar-sonar-algorithms.png',
    label: 'RADAR / SONAR',
  },
  {
    num: '04',
    title: 'AI Powered Defence Technology Consultancy Services',
    body:
      'AI-powered defence technology consultancy services supporting advanced sensing, intelligent systems, data-driven solutions, research, and technology development.',
    image: '/images/ai-defence-consultancy.png',
    label: 'AI • DEFENCE TECHNOLOGY',
  },
  {
    num: '05',
    title: 'Professional Training and Capacity Building',
    body:
      'Professional training and capacity-building programs designed to develop specialized technical knowledge, practical skills, and expertise in advanced technology domains.',
    image: '/images/professional-training.png',
    label: 'TRAINING • CAPACITY BUILDING',
  },
];

function ServiceImage({
  image,
  label,
  title,
}: {
  image: string;
  label: string;
  title: string;
}) {
  const [src, setSrc] = useState(image);

  const handleError = () => {
    // The fifth image has previously had a filename/extension mismatch.
    // Try the common alternatives automatically.
    if (src.endsWith('professional-training.png')) {
      setSrc('/images/professional-training.jpg.png');
    } else if (src.endsWith('professional-training.jpg.png')) {
      setSrc('/images/professional-training.jpg');
    }
  };

  return (
    <div className="varunodhya-service-image-wrap">
      <img
        src={src}
        alt={title}
        className="varunodhya-service-image"
        onError={handleError}
      />

      <div className="varunodhya-service-image-overlay" />

      <div className="varunodhya-service-image-top">
        <span>VARUNODHYA</span>
        <span>{String(label)}</span>
      </div>

      <div className="varunodhya-service-image-label">
        {label}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <style>{`
        /* =====================================================
           VARUNODHYA — WHAT WE DO
           This styling is isolated to the services section.
           It does NOT modify the homepage / hero.
           ===================================================== */

        .varunodhya-services {
          position: relative;
          padding: 120px 0 130px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(24, 91, 119, 0.14),
              transparent 45%
            ),
            #02070d;
          overflow: hidden;
        }

        .varunodhya-services-inner {
          width: min(1240px, calc(100% - 80px));
          margin: 0 auto;
        }

        .varunodhya-services-eyebrow {
          margin: 0 0 18px;
          color: #4fd1e0;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .varunodhya-services-heading {
          max-width: 780px;
          margin: 0 0 60px;
          color: #edf7fa;
          font-family: Fraunces, Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .varunodhya-services-heading span {
          color: #4fd1e0;
        }

        .varunodhya-service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: rgba(79, 209, 224, 0.14);
          border: 1px solid rgba(79, 209, 224, 0.14);
        }

        .varunodhya-service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          background: #050a10;
          overflow: hidden;
        }

        .varunodhya-service-card:hover
        .varunodhya-service-image {
          transform: scale(1.045);
        }

        .varunodhya-service-image-wrap {
          position: relative;
          width: 100%;
          height: 275px;
          overflow: hidden;
          background: #07131b;
        }

        .varunodhya-service-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(.2,.7,.2,1);
        }

        .varunodhya-service-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(2, 7, 13, 0.12) 0%,
              rgba(2, 7, 13, 0.05) 35%,
              rgba(2, 7, 13, 0.82) 100%
            );
          pointer-events: none;
        }

        .varunodhya-service-image-top {
          position: absolute;
          top: 18px;
          left: 18px;
          right: 18px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: rgba(220, 246, 250, 0.82);
          font-family: Inter, sans-serif;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .varunodhya-service-image-label {
          position: absolute;
          left: 18px;
          bottom: 18px;
          padding: 7px 10px;
          border: 1px solid rgba(111, 231, 243, 0.25);
          background: rgba(2, 9, 15, 0.68);
          backdrop-filter: blur(8px);
          color: #a7f3fa;
          font-family: Inter, sans-serif;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .varunodhya-service-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 28px 28px 32px;
        }

        .varunodhya-service-number {
          margin: 0 0 18px;
          color: #4fd1e0;
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .varunodhya-service-title {
          margin: 0 0 16px;
          color: #edf7fa;
          font-family: Fraunces, Georgia, serif;
          font-size: clamp(1.45rem, 2vw, 2rem);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -0.025em;
        }

        .varunodhya-service-body {
          margin: 0;
          color: #8b9bab;
          font-family: Inter, sans-serif;
          font-size: 14px;
          line-height: 1.75;
        }

        /* Fifth card occupies the full width below the first four */
        .varunodhya-service-card:nth-child(5) {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
        }

        .varunodhya-service-card:nth-child(5)
        .varunodhya-service-image-wrap {
          height: 100%;
          min-height: 330px;
        }

        .varunodhya-service-card:nth-child(5)
        .varunodhya-service-content {
          justify-content: center;
        }

        @media (max-width: 1000px) {
          .varunodhya-service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .varunodhya-service-card:nth-child(5) {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .varunodhya-services {
            padding: 85px 0 95px;
          }

          .varunodhya-services-inner {
            width: calc(100% - 36px);
          }

          .varunodhya-services-heading {
            margin-bottom: 40px;
          }

          .varunodhya-service-grid {
            grid-template-columns: 1fr;
          }

          .varunodhya-service-card:nth-child(5) {
            grid-column: auto;
            display: flex;
          }

          .varunodhya-service-card:nth-child(5)
          .varunodhya-service-image-wrap {
            min-height: 0;
            height: 275px;
          }

          .varunodhya-service-content {
            padding: 24px 22px 28px;
          }
        }
      `}</style>

      <section
        id="services"
        className="varunodhya-services"
      >
        <div className="varunodhya-services-inner">

          <p className="varunodhya-services-eyebrow">
            What We Do
          </p>

          <h2 className="varunodhya-services-heading">
            Engineering expertise across
            <span> advanced technology domains.</span>
          </h2>

          <div className="varunodhya-service-grid">
            {services.map((service) => (
              <article
                className="varunodhya-service-card"
                key={service.num}
              >
                <ServiceImage
                  image={service.image}
                  label={service.label}
                  title={service.title}
                />

                <div className="varunodhya-service-content">

                  <p className="varunodhya-service-number">
                    {service.num}
                  </p>

                  <h3 className="varunodhya-service-title">
                    {service.title}
                  </h3>

                  <p className="varunodhya-service-body">
                    {service.body}
                  </p>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
