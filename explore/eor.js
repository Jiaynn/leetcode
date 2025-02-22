//题目：有a、b两个数，且a不等于b，他俩出现了奇数次，其他所有数都出现了偶数次，求a、b
function findOdd(arr) {
  let xorResult = 0;

  // 先对数组所有元素进行异或，得到 a^b
  for (let num of arr) {
    xorResult ^= num;
  }

  // 找到 xorResult 中最低位为 1 的那一位
  let rightOne = xorResult & -xorResult;

  // 利用该位将元素分为两组，分别求出 a 和 b
  let a = 0,
    b = 0;
  for (let num of arr) {
    if (num & rightOne) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
}

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
console.log(findOdd(arr)); // 输出：[9, 10] 或 [10, 9]
