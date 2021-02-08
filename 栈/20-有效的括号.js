/**
 * 描述：
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 题解：
 *    1. 最后入栈的左括号，必定是与匹配到的第一个右括号相互匹配
 *    2. 所以整体思路就是遇到左括号就入栈，遇到右括号就出栈比较是否能正常组合成一对
 *    3. 否，直接返回false
 *    4. 是，继续遍历下一项
 *    5. 遍历完成，返回栈的长度是否为0
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 如果数组长度为奇数，直接返回false；
  if (s.length % 2 !== 0) return false;
  // 创建字典表
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  // 创建缓存栈
  const stack = [];
  // 遍历字符串
  for (let str of s) {
    // 左括号，入栈
    if (str === '(' || str === '{' || str === '[') {
      stack.push(str);
    } else {
      // 右括号出栈，检查是否能够组合
      // 如果无法匹配，直接返回false
      // 否则继续遍历
      if (map.get(str) !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
