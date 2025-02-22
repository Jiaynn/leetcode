// 题目：在一个有序数组中，找大于等于某个数左侧的位置
function dichotomy(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

let arr = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9];
console.log(dichotomy(arr, 3)); // 2
