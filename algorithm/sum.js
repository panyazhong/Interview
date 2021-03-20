/**
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9

 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

function computed(arr, target) {
  let map = new Map();

  for (let i = 0; i <= arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i <= arr.length; i++) {
    let val = map.get(target - arr[i]);
    if (val && val != i) return [i, val];
  }
}

let arr = [2, 7, 11, 15];
let target = 9;

console.log(computed(arr, target));
