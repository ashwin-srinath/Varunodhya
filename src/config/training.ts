export interface TrainingTopic {
  label: string;
  status: 'On request' | 'Planned';
}

export const trainingTopics: TrainingTopic[] = [
  { label: 'Underwater surveillance', status: 'On request' },
  { label: 'Detection, tracking & classification', status: 'On request' },
  { label: 'SONAR / RADAR signal processing', status: 'On request' },
  { label: 'Surveillance-system concepts', status: 'Planned' },
  { label: 'Technical knowledge transfer', status: 'On request' },
  { label: 'Expert-led workshops & specialist development', status: 'Planned' },
];
