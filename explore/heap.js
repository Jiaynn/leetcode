//已知一个几乎有序的数组，几乎有序是指，如果把数组排好顺序的话，每个元素移动的距离可以不超过k，并且k相对于数组来说比较小。请选择一个合适的排序算法针对这个数据进行排序。
function heapSortK(arr, k) {
  let heap = [];

  let index = 0;

  // 构建最小堆，插入前k+1个元素
  for (let i = 0; i <= k && i < arr.length; i++) {
    heap.push(arr[i]);
  }

  // 排序当前的堆
  heap.sort((a, b) => a - b);

  // 处理剩下的元素
  for (let i = k + 1; i < arr.length; i++) {
    // 弹出堆顶最小元素并插入新的元素
    arr[index++] = heap.shift(); // 弹出最小元素
    heap.push(arr[i]); // 插入新元素
    heap.sort((a, b) => a - b); // 保证堆序
  }

  // 处理剩下的堆中的元素
  while (heap.length > 0) {
    arr[index++] = heap.shift();
  }

  return arr;
}
