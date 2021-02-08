/**
 * Definition for singly-linked list.
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 整体思路就是将传入的当前节点完全替换为下一个节点
  // 替换步骤：
  // 1. 替换val值
  // 2. 替换next指针
  node.val = node.next.val;
  node.next = node.next.next;
};
