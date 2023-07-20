export interface RecordingSortAlgorithm {
  sort: (numbers: number[]) => number[];
  getRecordedSteps: () => RecordedSortingStep[];
}

export interface RecordedSortingStep {
  changedIndexes: number[];
  currentValue: number[];
}

export interface INavbarProps {
  regenerateNumbers: () => void;
  startStopVisualization: () => void;
  resetToFirstStep: () => void;
  previousStep: () => void;
  nextStep: () => void;
  setArrayLength: (arg: number) => void;
  arrayLength: number;
  isPlaying: boolean;
  setSpeed: (arg: number) => void;
  speed: number;
}
