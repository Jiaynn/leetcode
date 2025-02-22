//荷兰国旗问题
//1、给定一个数组arr,和一个num，请把小于等于num的数放在数组的左边，大于num的数放在数组的右边。空间复杂度O(1)，时间复杂度O(n)
//2、给定一个数组arr,和一个num，请把小于num的数放在数组的左边，等于num的数放在数组的中间，大于num的数放在数组的右边。空间复杂度O(1)，时间复杂度O(n)

function dutchFlag(arr, num) {
  let low = -1; // low 指向小于 num 元素的最后位置
  let high = arr.length; // high 指向大于 num 元素的开始位置

  for (let i = 0; i < high; ) {
    if (arr[i] < num) {
      low++;
      [arr[low], arr[i]] = [arr[i], arr[low]]; // 交换
      i++; // 继续检查下一个元素
    } else if (arr[i] === num) {
      i++; // 等于 num，不需要交换，直接右移
    } else {
      high--; // 大于 num，交换并将 high 左移
      [arr[i], arr[high]] = [arr[high], arr[i]]; // 交换
    }
  }

  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
let arr = [1, 4, 3, 4, 5, 6, 8, 8, 3, 10];
console.log(dutchFlag(arr, 5));
