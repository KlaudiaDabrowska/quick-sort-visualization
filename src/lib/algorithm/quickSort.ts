import { RecordedSortingStep, RecordingSortAlgorithm } from "../types";

export class QuickSort implements RecordingSortAlgorithm {
  private sortingSteps: RecordedSortingStep[] = [];

  getRecordedSteps = () => {
    return this.sortingSteps;
  };

  sort = (numbers: number[]) => this.quickSort(numbers);

  quickSort(arr: number[], left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
      const index = this.partition(arr, left, right);

      if (left < index - 1) {
        this.quickSort(arr, left, index - 1);
      }

      if (index < right) {
        this.quickSort(arr, index, right);
      }
    }

    return arr;
  }

  partition(arr: number[], left: number, right: number) {
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      if (i <= j) {
        this.swap(arr, i, j);
        i++;
        j--;
      }
    }

    return i;
  }

  swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    this.sortingSteps.push({ changedIndexes: [i, j], currentValue: [...arr] });
  }
}
