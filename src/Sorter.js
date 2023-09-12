class Sorter {
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
