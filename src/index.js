import {
  BubbleSortStrategy,
  InsertSortStrategy,
  SelectSortStrategy,
  ShellSortStrategy,
  Sorter,
} from "./Sorter";

const data = [5, 2, 9, 1, 5, 6];
const bubbleSorter = new Sorter(new BubbleSortStrategy());
const insertSorter = new Sorter(new InsertSortStrategy());
const selectSorter = new Sorter(new SelectSortStrategy());
const shellSorter = new Sorter(new ShellSortStrategy());

const sortedDataBubble = bubbleSorter.sort(data);
const sortedDataInsert = insertSorter.sort(data);
const sortedDataSelect = selectSorter.sort(data);
const sortedDataShell = shellSorter.sort(data);

console.log(sortedDataBubble);
console.log(sortedDataInsert);
console.log(sortedDataSelect);
console.log(sortedDataShell);
