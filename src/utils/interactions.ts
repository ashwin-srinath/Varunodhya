import type { MouseEvent as ReactMouseEvent } from 'react';

function reduced(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Magnetic-pull effect for buttons: nudges toward the cursor on hover. */
export function magneticMove(e: ReactMouseEvent<HTMLElement>): void {
  if (reduced()) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const mx = (e.clientX - r.left - r.width / 2) * 0.25;
  const my = (e.clientY - r.top - r.height / 2) * 0.35;
  el.style.setProperty('--tx', `${mx}px`);
  el.style.setProperty('--ty', `${my}px`);
}

export function magneticLeave(e: ReactMouseEvent<HTMLElement>): void {
  const el = e.currentTarget;
  el.style.setProperty('--tx', '0px');
  el.style.setProperty('--ty', '0px');
}

/** Subtle 3D cursor-tilt for service cards. */
export function tiltMove(e: ReactMouseEvent<HTMLElement>): void {
  if (reduced()) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.transform = `perspective(800px) rotateY(${px * 6}deg) rotateX(${py * -6}deg)`;
}

export function tiltLeave(e: ReactMouseEvent<HTMLElement>): void {
  e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
}
