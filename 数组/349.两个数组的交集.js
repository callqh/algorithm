/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例：
 *  输入：nums1 = [1,2,2,1], nums2 = [2,2]
 *  输出：[2]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//  方法一： 利用集合Set的方法求交集
// 时间复杂度： O(n^2)；空间复杂度：O(n)
var intersection = function (nums1, nums2) {
  // 利用set将数组1去重
  // 利用过滤方法筛选出nums2中出现的nums1中也有的数字
  // 返回新的交集数组
  return [...new Set(nums1)].filter((n) => nums2.includes(n));
};

// 方法二： 利用字典的方式求交集
var intersection2 = function (nums1, nums2) {
  // 创建新的字典，用来存放nums1数组中的每一项
  const m = new Map();
  // 遍历nums1，放入字典中。字典也是一个唯一且无序的数据结构，重复的值在存放的时候会直接进行覆盖
  for (let i of nums1) {
    m.set(i, true);
  }
  // 创建缓存数组，用来存放最后的交集数组
  const res = [];
  // 遍历nums2中的每一项
  for (let j of nums2) {
    // 查看字典中是否存在该值
    if (m.has(j)) {
      // 存在就放入缓存数组中
      res.push(j);
      // 从字典中删除匹配过的项，避免重复匹配
      m.delete(j);
    }
  }
  // 返回交集数组
  return res;
};
