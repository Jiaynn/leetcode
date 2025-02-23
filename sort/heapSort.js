//堆排序：先将数组变成小根堆。然后堆顶与最后一个元素交换，输出最后一个元素，堆尺寸减小
//再调整堆为小根堆，重复上述操作，直到堆尺寸为1
function heapSort(arr) {
  let len = arr.length;
  //构建小根堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    adjustHeap(arr, i, len);
  }
  //交换堆顶和最后一个元素，输出最后一个元素，堆尺寸减小
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    adjustHeap(arr, 0, i);
  }
}
function adjustHeap(arr, i, len) {
  let temp = arr[i];
  for (let j = 2 * i + 1; j < len; j = 2 * j + 1) {
    if (j + 1 < len && arr[j] > arr[j + 1]) {
      j++;
    }
  }
  if (arr[j] < temp) {
    arr[i] = arr[j];
    i = j;
  }
  arr[i] = temp;
}
