export class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

class SortingStrategy {
  sort(data) {}
}

export class BubbleSortStrategy extends SortingStrategy {
  sort(data) {
    let length = data.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (data[j] > data[j + i]) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
    return data;
  }
}

export class InsertSortStrategy extends SortingStrategy {
  sort(data) {
    for (let i = 0; i < data.length; i++) {
      let insertElement = data[i];
      let insertPosition = i;
      for (let j = insertPosition - 1; j >= 0; j--) {
        if (insertElement < data[j]) {
          data[j + 1] = data[j];
          insertPosition--;
        }
      }
      data[insertPosition] = insertElement;
    }
    return data;
  }
}

export class SelectSortStrategy extends SortingStrategy {
  sort(data) {
    let length = data.length;
    let minIndex;
    for (let i = 0; i < length; i++) {
      minIndex = i;
      let minValue = data[minIndex];
      for (let j = i; j < length; j++) {
        if (minValue > data[j + 1]) {
          minValue = data[j + 1];
          minIndex = j + 1;
        }
      }
      if (i != minIndex) {
        let temp = data[i];
        data[i] = data[minIndex];
        data[minIndex] = temp;
      }
    }
    return data;
  }
}

export class ShellSortStrategy extends SortingStrategy {
  sort(data) {
    const swap = (arr, a, b) => {
      arr[a] = arr[a] + arr[b];
      arr[b] = arr[a] - arr[b];
      arr[a] = arr[a] - arr[b];
    };

    let mid = parseInt(data.length / 2);
    for (let gap = mid; gap > 0; gap = parseInt(gap / 2)) {
      for (let i = gap; i < data.length; i++) {
        let j = i;
        while (j - gap >= 0 && data[j] < data[j - gap]) {
          swap(data, j, j - gap);
          j = j - gap;
        }
      }
    }
    return data;
  }
}
