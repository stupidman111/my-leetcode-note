/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) return head;

  let dummy = new ListNode(),
    cur = dummy;

  while (head != null && head.next != null) {
    let p = head,
      q = head.next;
    head = head.next.next;
    cur.next = q;
    q.next = p;
    p.next = null;
    cur = p;
  }
  cur.next = head;

  return dummy.next;
};
