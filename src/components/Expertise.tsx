import { expertiseItems, type ExpertiseItem } from '../config/expertise';

function Icon({ name }: { name: ExpertiseItem['icon'] }) {
  switch (name) {
    case 'wave':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M2 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0M2 20c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
          <path d="M12 3v10" />
        </svg>
      );
    case 'defence':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
        </svg>
      );
    case 'systems':
      return (
        <svg viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      );
    case 'geo':
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      );
    case 'research':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M4 20 10 6l4 8 3-5 3 11" />
        </svg>
      );
    case 'docs':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 3h9l5 5v13H6z" />
          <path d="M9 12h6M9 16h6M9 8h3" />
        </svg>
      );
    case 'training':
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 3 2 8l10 5 10-5-10-5Z" />
          <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        </svg>
      );
    case 'network':
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="2.4" />
          <circle cx="18" cy="6" r="2.4" />
          <circle cx="12" cy="18" r="2.4" />
          <path d="M6 8.4V12l6 4M18 8.4V12l-6 4" />
        </svg>
      );
  }
}

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="depth-grid" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow rev">Areas of Expertise</p>
        <h2 className="rev" style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', maxWidth: '18ch' }}>
          Depth across domains that intersect.
        </h2>
        <div className="icon-strip rev">
          {expertiseItems.map((item) => (
            <div key={item.label}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
