//堆排序
function heapSort(arr) {
  const n = arr.length;

  // 1. 构建最大堆
  buildMaxHeap(arr, n);

  // 2. 交换根节点和最后一个元素，然后重新调整堆
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i); // 将最大值放到数组末尾
    maxHeapify(arr, i, 0); // 重新调整堆
  }

  return arr;
}

// 建立最大堆
function buildMaxHeap(arr, n) {
  // 从最后一个非叶子节点开始，逐步调整每个节点
  // 完全二叉树的叶子节点从 n/2 开始 (n 是数组长度)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }
}

// 调整堆（以i为根的子树）保证它是一个最大堆
function maxHeapify(arr, n, i) {
  let largest = i; // 初始化最大的元素为根节点
  let left = 2 * i + 1; // 左子节点
  let right = 2 * i + 2; // 右子节点

  // 如果左子节点大于根节点
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // 如果右子节点大于当前最大的元素
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大元素不是根节点，交换并递归调整
  if (largest !== i) {
    swap(arr, i, largest);
    maxHeapify(arr, n, largest); // 递归调整
  }
}

// 交换数组中两个元素的位置
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 示例用法
const array = [5, 3, 8, 4, 2, 7, 6, 1];
console.log(heapSort(array)); // 输出排序后的数组
