//主要思想就是每一轮会确定基准元素的最终位置，
//一轮后，比基准值小的在左边，比基准值大的在右边
//然后递归处理基准元素左右两边的元素
//时间复杂度：O(nlogn)
function quickSort(arr, L, R) {
  if (L < R) {
    //随机选择一个基准元素
    swap(arr, Math.floor(Math.random() * (R - L + 1)) + L, R);
    let p = partition(arr, L, R);
    quickSort(arr, L, p[0] - 1);
    quickSort(arr, p[1] + 1, R);
  }
}

function partition(arr, L, R) {
  let less = L - 1;
  let more = R;
  while (L < more) {
    if (arr[L] < arr[R]) {
      swap(arr, ++less, L++);
    } else if (arr[L] > arr[R]) {
      swap(arr, --more, L);
    } else {
      L++;
    }
  }
  swap(arr, more, R);
  return [less + 1, more];
}
