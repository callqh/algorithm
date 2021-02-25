/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const t = target - n;
    if (m.has(t)) {
      return [m.get(t), i];
    }
    m.set(n, i);
  }
};
