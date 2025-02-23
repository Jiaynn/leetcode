//主要思想就是每一轮会确定基准元素的最终位置，
//一轮后，比基准值小的在左边，比基准值大的在右边
//然后递归处理基准元素左右两边的元素
//时间复杂度：O(nlogn)
function quickSort(arr, L, R) {
  if (L < R) {
    //随机选择一个基准元素
    swap(arr, Math.floor(Math.random() * (R - L + 1)) + L, R);
    let p = partition(arr, L, R);
    quickSort(arr, L, p - 1);
    quickSort(arr, p + 1, R);
  }
}
function partition(arr, L, R) {
  let pivot = arr[R]; // 选择基准元素为数组的最后一个元素
  let i = L - 1; // i 是小于基准元素区域的最后一个元素的索引

  for (let j = L; j < R; j++) {
    if (arr[j] < pivot) {
      i++; // 找到一个小于基准元素的元素
      swap(arr, i, j); // 交换元素
    }
  }

  // 将基准元素放到正确的位置，即i+1的位置
  swap(arr, i + 1, R);
  return i + 1; // 返回基准元素的索引
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
