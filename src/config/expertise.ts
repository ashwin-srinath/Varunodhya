export interface ExpertiseItem {
  label: string;
  icon: 'wave' | 'defence' | 'systems' | 'geo' | 'research' | 'docs' | 'training' | 'network';
}

export const expertiseItems: ExpertiseItem[] = [
  { label: 'Underwater & Marine Technologies', icon: 'wave' },
  { label: 'Defence Technologies', icon: 'defence' },
  { label: 'Scientific & Engineering Systems', icon: 'systems' },
  { label: 'Geospatial & Environmental Studies', icon: 'geo' },
  { label: 'Research & Technology Development', icon: 'research' },
  { label: 'Technical Documentation & Assessment', icon: 'docs' },
  { label: 'Professional Education & Training', icon: 'training' },
  { label: 'Interdisciplinary Project Support', icon: 'network' },
];
