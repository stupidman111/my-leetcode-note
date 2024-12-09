/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(),
    cur = dummy;
  let flag = 0;

  while (l1 != null || l2 != null) {
    let sum = flag;
    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }
    cur.next = new ListNode();
    cur = cur.next;
    cur.val = sum % 10;
    flag = Math.floor(sum / 10);
  }

  if (flag != 0) {
    cur.next = new ListNode();
    cur = cur.next;
    cur.val = flag;
  }
  return dummy.next;
};
