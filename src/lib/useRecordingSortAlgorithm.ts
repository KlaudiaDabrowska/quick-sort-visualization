import { useCallback, useEffect, useState } from "react";
import { QuickSort } from "./algorithm/quickSort";
import { RecordedSortingStep } from "./types";

const initialArrayLength = 20;

export const useRecordingSortAlgorithm = () => {
  const [arrayLength, setArrayLength] = useState<number>(initialArrayLength);

  const generateNumbers = useCallback(
    () =>
      Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * arrayLength + 1)
      ),
    [arrayLength]
  );

  const [unsortedNumbers, setUnsortedNumbers] = useState<Array<number>>(
    generateNumbers()
  );
  const [recordedSteps, setRecordedSteps] = useState<RecordedSortingStep[]>();

  const regenerateNumbers = useCallback(() => {
    setRecordedSteps(undefined);
    setUnsortedNumbers(generateNumbers());
  }, [generateNumbers]);

  useEffect(() => {
    regenerateNumbers();
  }, [arrayLength, regenerateNumbers]);

  const defaultAlgorithm = new QuickSort();

  const sort = () => {
    defaultAlgorithm.sort([...unsortedNumbers]);
    setRecordedSteps(defaultAlgorithm.getRecordedSteps());
  };

  return {
    sort,
    regenerateNumbers,
    setArrayLength,
    arrayLength,
    unsortedNumbers,
    recordedSteps,
  };
};
