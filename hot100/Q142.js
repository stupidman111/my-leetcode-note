/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  /** 
        找数量关系：slow 走 1 步，fast 走 2 步；
        slow 与 fast 相遇时：slow 走了 a+b 步，fast 走了 a+n(b+c)+b 步
        因为快慢原因，有：2(a+b) = a+n(b+c)+b
        则：a = (n-1)(b+c) + c ==> 从相遇点出发走 (n-1)(b+c) + c 步刚好等于 a 的长度
        此时再定义两个节点：p 从 head 开始，q 从相遇点开始，一次走一步，一定能相遇
    */

  if (head === null || head.next === null) return null;
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let p = head,
        q = slow;
      while (p != q) {
        p = p.next;
        q = q.next;
      }
      return p;
    }
  }

  return null;
};
