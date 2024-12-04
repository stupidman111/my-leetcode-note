/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA,
    pB = headB;
  while (pA != pB) {
    if (pA.next == null && pB.next == null) {
      return null;
    }
    pA = pA.next == null ? headB : pA.next;
    pB = pB.next == null ? headA : pB.next;
  }
  return pA;
};

//Example1
