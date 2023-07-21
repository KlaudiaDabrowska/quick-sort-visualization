import { QuickSort } from "./quickSort";

describe("QuickSort", () => {
  it("should sort an array of multiple elements", () => {
    const quickSort = new QuickSort();
    const input: number[] = [7, 3, 1, 9, 5];
    const expectedOutput: number[] = [1, 3, 5, 7, 9];
    const result = quickSort.sort(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should sort an array with duplicate elements", () => {
    const quickSort = new QuickSort();
    const input: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expectedOutput: number[] = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    const result = quickSort.sort(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should sort a large array of random elements", () => {
    const quickSort = new QuickSort();
    const input: number[] = [];
    const n = 1000;
    for (let i = 0; i < n; i++) {
      input.push(Math.floor(Math.random() * n));
    }
    const expectedOutput = [...input].sort((a, b) => a - b);
    const result = quickSort.sort(input);
    expect(result).toEqual(expectedOutput);
  });

  it("should record steps", () => {
    const quickSort = new QuickSort();
    const input: number[] = [7, 3, 1, 9, 5];

    const expectedSteps = [
      {
        changedIndexes: [0, 2],
        currentValue: [1, 3, 7, 9, 5],
      },
      {
        changedIndexes: [2, 4],
        currentValue: [1, 3, 5, 9, 7],
      },
      {
        changedIndexes: [1, 1],
        currentValue: [1, 3, 5, 9, 7],
      },
      {
        changedIndexes: [3, 4],
        currentValue: [1, 3, 5, 7, 9],
      },
    ];

    quickSort.sort(input);
    const recordedSteps = quickSort.getRecordedSteps();

    expect(recordedSteps).toEqual(expectedSteps);
  });

  it("should clear recorded steps between sorts", () => {
    const quickSort = new QuickSort();
    const input: number[] = [7, 3, 1, 9, 5];

    const expectedSteps = [
      {
        changedIndexes: [0, 2],
        currentValue: [1, 3, 7, 9, 5],
      },
      {
        changedIndexes: [2, 4],
        currentValue: [1, 3, 5, 9, 7],
      },
      {
        changedIndexes: [1, 1],
        currentValue: [1, 3, 5, 9, 7],
      },
      {
        changedIndexes: [3, 4],
        currentValue: [1, 3, 5, 7, 9],
      },
    ];

    quickSort.sort([...input]);
    //perform sort second time to check if steps won't be duplicated
    quickSort.sort([...input]);
    const recordedSteps = quickSort.getRecordedSteps();

    expect(recordedSteps).toEqual(expectedSteps);
  });
});
