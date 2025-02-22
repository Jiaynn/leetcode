//逆序对问题：在一个数组中，左边的数比右边的数大，则这两个数构成一个逆序对。请编写一个函数，统计一个数组中的逆序对个数。

function countInversionPair(arr) {
  if (!arr || arr.length < 2) {
    return 0;
  }
  return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, L, R) {
  if (L === R) {
    return 0;
  }
  let mid = L + ((R - L) >> 1);
  return (
    mergeSort(arr, L, mid) + //左边逆序对个数
    mergeSort(arr, mid + 1, R) + //右边逆序对个数
    merge(arr, L, mid, R)
  ); //合并过程中产生的逆序对个数
}

function merge(arr, L, mid, R) {
  let help = [];
  let p1 = L;
  let p2 = mid + 1;
  let res = 0;
  let i = 0;
  while (p1 <= mid && p2 <= R) {
    // 计算逆序对，左边数组的所有剩余元素都大于 arr[p2]
    res += arr[p1] > arr[p2] ? mid - p1 + 1 : 0;
    help[i++] = arr[p1] > arr[p2] ? arr[p2++] : arr[p1++];
  }
  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
  return res;
}
