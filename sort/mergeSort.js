function mergeSort(arr, L, R) {
  //归并排序
  //先把左侧排好序和右侧排好序，然后合并
  if (L == R) return;
  let mid = L + ((R - L) >> 1);
  mergeSort(arr, L, mid);
  mergeSort(arr, mid + 1, R);
  merge(arr, L, mid, R);
}

function merge(arr, L, mid, R) {
  let help = [];
  let i = 0;
  let p1 = L;
  let p2 = mid + 1; //从左到右依次比较，小的放前面
  while (p1 <= mid && p2 <= R) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
    // if(arr[p1]<=arr[p2]){
    //   help[i]=arr[p1];
    //   i++;
    //   p1++;
    // }else{
    //   help[i]=arr[p2];
    //   i++;
    //   p2++;
    // }
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
  return arr;
}
