/**
 * The six core services ("What We Do"). Each image lives in
 * public/images/services/ — see src/config/images.ts for how to replace them.
 */
export interface Service {
  num: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Underwater & Marine Acoustic Technologies',
    description:
      'Technologies for underwater sensing, acoustic measurement, detection, monitoring, and marine applications.',
    image: '/images/services/marine-acoustic-technologies.jpg',
    href: '#expertise',
  },
  {
    num: '02',
    title: 'Embedded & Real-Time Systems',
    description:
      'Design and development of specialized embedded hardware, firmware, electronics, real-time systems, and system integration.',
    image: '/images/services/embedded-systems.jpg',
    href: '#expertise',
  },
  {
    num: '03',
    title: 'Signal Processing & Intelligent Sensing Algorithms',
    description:
      'Development of algorithms for RADAR, SONAR, and other sensing systems, including signal processing, detection, tracking, classification, and data interpretation.',
    image: '/images/services/radar-sonar-algorithms.jpg',
    href: '#training',
  },
  {
    num: '04',
    title: 'AI for Defence & Security',
    description:
      'AI-driven technologies and technical solutions for intelligent sensing, data analysis, automation, decision support, and advanced defence and security applications.',
    image: '/images/services/ai-defence-consultancy.jpg',
    href: '#contact',
  },
  {
    num: '05',
    title: 'Professional Training & Technical Capacity Building',
    description:
      'Specialized training and knowledge-transfer programs in marine technology, acoustics, signal processing, embedded systems, AI, and related technical disciplines.',
    image: '/images/services/professional-training.jpg',
    href: '#training',
  },
  {
    num: '06',
    title: 'Applied Research & Engineering Solutions',
    description:
      'Research, experimental studies, modelling, testing, field investigations, technical analysis, and specialized engineering solutions for complex marine, environmental, underwater, and infrastructure challenges.',
    image: '/images/services/applied-research-engineering.jpg',
    href: '#projects',
  },
];
