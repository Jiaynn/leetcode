function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swap(arr, i, minIndex);
    console.log('测试提交');
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [3, 2, 5, 6, 3, 7, 2];
console.log(selectSort(arr));