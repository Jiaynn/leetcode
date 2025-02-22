function insertionSort(arr) {
  if (arr.length < 2) return;
  for (let i = 1; i < arr.length; i++) {
    for (j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [3, 2, 5, 6, 3, 7, 2];
console.log(insertionSort(arr));
