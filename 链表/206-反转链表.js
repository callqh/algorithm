/**
 * Definition for singly-linked list.
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 1. 迭代大法
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  // 保存当前节点的指针
  let p = head;
  // 保存上一节点指针
  let prev = null;
  // 当前节点不为null进行遍历
  while (p) {
    // 暂存当前节点的next节点
    const tmp = p.next;
    // 将next节点翻转为上一节点
    p.next = prev;
    // 将上一节点更新为当前节点
    prev = p;
    // 更新当前节点
    p = tmp;
  }
  // 返回翻转后的头结点。因为为null的时候就没进入while循环了，所以prev就是翻转后的头结点
  return prev;
};
/**
 * 2. 递归大法
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  /**
   * @param {*} prev 上一个节点
   * @param {*} cur 当前节点
   * @returns {*} 翻转之后的当前节点
   */
  function innerReverseaList(prev, cur) {
    // 如果当前节点为null，则结束递归，返回prev
    if (!cur) return prev;
    const tmp = cur.next;
    cur.next = prev;
    // 递归
    return (cur = innerReverseaList(cur, tmp));
  }
  return innerReverseaList(null, head);
};
