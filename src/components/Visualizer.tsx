import { useEffect, useState } from "react";
import { Bar, VisualizerWrapper } from "../styles/Visualizer.styles";
import useInterval from "react-useinterval";
import { RecordedSortingStep } from "../lib/types";
import { Navbar } from "./Navbar";
import { useRecordingSortAlgorithm } from "../lib/useRecordingSortAlgorithm";
import { theme } from "../styles/theme";

export const Visualizer = () => {
  const {
    sort,
    regenerateNumbers,
    unsortedNumbers,
    recordedSteps,
    setArrayLength,
    arrayLength,
  } = useRecordingSortAlgorithm();

  const [currentSortingStep, setCurrentSortingStep] =
    useState<RecordedSortingStep>();
  const [stepIndex, setStepIndex] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setCurrentSortingStep(undefined);
    setStepIndex(0);
    setIsPlaying(false);
  }, [arrayLength]);

  useInterval(
    () => {
      if (!recordedSteps) {
        return;
      }

      const step = recordedSteps[stepIndex];
      if (!step) {
        setIsPlaying(false);
        return;
      }
      setCurrentSortingStep(step);
      setStepIndex(stepIndex + 1);
    },
    isPlaying ? 3020 - speed : null
  );

  const startStopVisualization = () => {
    if (!currentSortingStep) {
      sort();
    }
    setIsPlaying(!isPlaying);
  };

  const resetNumbers = () => {
    setCurrentSortingStep(undefined);
    setStepIndex(0);
    regenerateNumbers();
    setIsPlaying(false);
  };

  const resetToFirstStep = () => {
    if (!recordedSteps) {
      return;
    }
    setCurrentSortingStep(recordedSteps[0]);
    setStepIndex(0);
  };

  const previousStep = () => {
    const step = recordedSteps?.[stepIndex - 1];
    if (!step) {
      return;
    }
    setStepIndex(stepIndex - 1);
    setCurrentSortingStep(step);
  };

  const nextStep = () => {
    const step = recordedSteps?.[stepIndex + 1];
    if (!step) {
      return;
    }
    setStepIndex(stepIndex + 1);
    setCurrentSortingStep(step);
  };

  return (
    <>
      <Navbar
        regenerateNumbers={resetNumbers}
        startStopVisualization={startStopVisualization}
        resetToFirstStep={resetToFirstStep}
        previousStep={previousStep}
        nextStep={nextStep}
        setArrayLength={setArrayLength}
        arrayLength={arrayLength}
        isPlaying={isPlaying}
        setSpeed={setSpeed}
        speed={speed}
      />
      <VisualizerWrapper>
        {currentSortingStep
          ? currentSortingStep?.currentValue?.map((number, idx) => (
              <Bar
                $height={number}
                $backgroundColor={
                  currentSortingStep.changedIndexes.includes(idx)
                    ? theme.colors.changedIndexColor
                    : theme.colors.indexColor
                }
                key={`${number}-${idx}`}
              />
            ))
          : unsortedNumbers.map((number, idx) => {
              return (
                <Bar
                  $height={number}
                  $backgroundColor={theme.colors.indexColor}
                  key={`${number}-${idx}`}
                />
              );
            })}
      </VisualizerWrapper>
    </>
  );
};
