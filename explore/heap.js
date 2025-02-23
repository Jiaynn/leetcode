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

function heapSortK(arr, k) {
  let minHeap = new MinHeap();

  // 首先，将数组的前k+1个元素构建成最小堆
  for (let i = 0; i <= k && i < arr.length; i++) {
    minHeap.insert(arr[i]);
  }

  let index = 0;

  // 继续遍历剩余元素，将元素依次插入堆中，并提取最小值
  for (let i = k + 1; i < arr.length; i++) {
    arr[index++] = minHeap.extractMin();
    minHeap.insert(arr[i]);
  }

  // 提取剩余的元素
  while (minHeap.size() > 0) {
    arr[index++] = minHeap.extractMin();
  }

  return arr;
}
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 向堆中插入一个元素
  insert(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  // 删除堆顶元素并返回
  extractMin() {
    if (this.size() === 1) return this.heap.pop(); // 只有一个元素时直接返回
    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // 将最后一个元素放到根节点
    this._heapifyDown(); // 恢复堆的性质
    return min;
  }

  // 获取堆的大小
  size() {
    return this.heap.length;
  }

  // 上浮操作，保证堆序
  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 下沉操作，保证堆序
  _heapifyDown() {
    let index = 0;
    const size = this.size();
    while (index < size) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild < size && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < size && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }
}
