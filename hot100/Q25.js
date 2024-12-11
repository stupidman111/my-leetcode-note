/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let cur = head,
    n = 0;
  for (; cur != null; n++, cur = cur.next);

  let dummy = new ListNode(),
    pre = dummy;
  cur = head;

  while (n - k >= 0) {
    let tmpDummy = new ListNode(),
      nextPre = cur;
    for (let i = 1; i <= k; i++) {
      let tmp = cur.next;
      cur.next = tmpDummy.next;
      tmpDummy.next = cur;
      cur = tmp;
    }
    pre.next = tmpDummy.next;
    pre = nextPre;
    n -= k;
  }
  pre.next = cur;
  return dummy.next;
};
