/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;
  let p = list1,
    q = list2;
  while (p != null && q != null) {
    if (p.val <= q.val) {
      cur.next = p;
      p = p.next;
    } else {
      cur.next = q;
      q = q.next;
    }
    cur = cur.next;
  }

  if (p != null) cur.next = p;
  if (q != null) cur.next = q;
  return dummy.next;
};
