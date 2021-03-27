// TODO：待完善整体思路
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true 。 否则，返回 false 。
 * @param {ListNode} head
 * @return {boolean}
 */

//  整体思路：利用快慢指针。
//  快慢指针的思路很想生活中的一个案例： 两个人跑步，一个人跑得慢一个人跑得快，在一个操场上跑的快的人会比跑的慢的人多跑一两圈，这时候他们必定会相遇。
//  我们也是利用这个原理去判断这两个指针相遇的情况，相遇了就证明是一个环
var hasCycle = function (head) {
  // 创建两个指针，分别代表一块一慢
  let p1 = head;
  let p2 = head;
  // 遍历链表，注意边界情况：p1，p2需要有值，不为值就证明为null，也就是走到了链表的末尾，不是闭环
  // p2.next是为了保证我们在给快指针p2赋值时需要能取到next值，否则会报错next未定义
  while (p1 && p2 && p2.next) {
    // 慢指针，一次走一格
    p1 = p1.next;
    // 快指针，一次走两格
    p2 = p2.next.next;
    // 判断两个指针是否相遇
    // 相遇就为闭环
    if (p1 === p2) {
      return true;
    }
  }
  // 遍历完毕，有一方为null就返回false，不是一个闭环的链表
  return false;
};
