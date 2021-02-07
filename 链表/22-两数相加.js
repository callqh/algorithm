/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 创建一个需要返回的新链表
  const l3 = new ListNode();
  // 保存每个链表的节点指针
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  // 创建变量来存储进位
  let carry = 0;
  // 遍历 p1 和 p2 每个节点的val值进行相加
  // 这里需要注意： 因为p1和p2可能长度不同，所以当其中一个有值时都需要相加，没有值的那个用0代替
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    // 计算和，要加上前一个数字相加的进位
    const sum = v1 + v2 + carry;
    // 计算进位，这里需要注意要将进位向下取整
    carry = Math.floor(sum / 10);
    // 将个位数字放入l3链表中
    p3.next = new ListNode(sum % 10);

    // 更新指针
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }
  // 遍历结束后，判断进位，如果扔有进位放入l3链表中
  if (carry) p3.next = new ListNode(carry);
  // 因为我们在创建新链表时，首位是0，所以我们要从头节点的下一位开始
  return l3.next;
};
