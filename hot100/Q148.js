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
var sortList = function (head) {
  return partition(head, null);
};
//划分链表
function partition(head, tail) {
  if (head === null) return null;
  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow = head,
    fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) fast = fast.next;
  }

  let mid = slow;
  let a = partition(head, mid),
    b = partition(mid, tail);
  let sorted = merge(a, b);
  return sorted;
}

function merge(headA, headB) {
  let dummy = new ListNode(),
    cur = dummy;
  while (headA !== null && headB != null) {
    if (headA.val <= headB.val) {
      cur.next = headA;
      headA = headA.next;
    } else {
      cur.next = headB;
      headB = headB.next;
    }
    cur = cur.next;
  }
  if (headA !== null) {
    cur.next = headA;
  }
  if (headB != null) {
    cur.next = headB;
  }
  return dummy.next;
}
