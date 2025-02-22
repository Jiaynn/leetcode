//小和问题：在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组 的小和。
//例子:[1,3,4,2,5] 1左边比1小的数，没有;3左边比3小的数，1:4左边比4小的数，1、3;2左边比2小的数，1;5左边比5小的数，1、3、4、2;所以小和为1+1+3+1+1+3+4+2=16.
//转换思路：右边比当前数大的加起来。
function smallNum(arr) {
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
    mergeSort(arr, L, mid) + //左边小和
    mergeSort(arr, mid + 1, R) + //右边小和
    merge(arr, L, mid, R)
  ); //合并小和
}
function merge(arr, L, mid, R) {
  let help = [];
  let p1 = L;
  let p2 = mid + 1;
  let res = 0;
  let i = 0;
  while (p1 <= mid && p2 <= R) {
    res += arr[p1] < arr[p2] ? (R - p2 + 1) * arr[p1] : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
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
