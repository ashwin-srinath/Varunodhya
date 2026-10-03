import useBackToTop from '../hooks/useBackToTop';
import useReducedMotion from '../hooks/useReducedMotion';

export default function BackToTop() {
  const { show, scrollToTop } = useBackToTop();
  const reduced = useReducedMotion();

  return (
    <button
      className={show ? 'top-btn show' : 'top-btn'}
      aria-label="Back to top"
      onClick={() => scrollToTop(reduced)}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
