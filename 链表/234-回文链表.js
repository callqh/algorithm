/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * 请判断一个链表是否为回文链表。
 * 示例1：
 *  输入: 1->2
 *  输出: false
 * 示例2：
 *  输入: 1->2->2->1
 *  输出: true
 */

/**
 * 方法一：将链表的值放入数组中，然后通过双指针判断数组是否符合回文的规则
 * 时间复杂度： o(n)； 空间复杂度O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 创建一个数组，用来存放链表的值
  const res = [];
  // 遍历链表
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  // 通过双指针判断是否符合规则
  for (let i = 0, j = res.length - 1; i < j; i++, j--) {
    // 如果有一个不符合则直接返回false
    if (res[i] !== res[j]) {
      return false;
    }
  }
  // 否则返回true
  return true;
};
const head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = null;
// 翻转链表
function revereList(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    const tmpCurr = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmpCurr;
  }
  return prev;
}
// 找出前半部分链表的尾元素
function endOfFirstList(head) {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome2 = function (head) {
  // 找到前半部分的链表尾节点
  const firstHalfEnd = endOfFirstList(head);
  // 翻转后半部分
  let secondHalfStart = revereList(firstHalfEnd.next);
  // 暂存指针
  let p1 = secondHalfStart;
  let p2 = head;
  let result = true;
  while (result && p1) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEnd.next = revereList(secondHalfStart);
  return result;
};
isPalindrome2(head);
