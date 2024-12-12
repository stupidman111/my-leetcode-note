/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return partition(lists, 0, lists.length - 1);
};

function partition(lists, left, right) {
  if (left > right) return null;
  if (left === right) return lists[left];

  let mid = left + Math.floor((right - left) / 2);
  return merge(partition(lists, left, mid), partition(lists, mid + 1, right));
}

function merge(headA, headB) {
  let dummy = new ListNode(),
    cur = dummy;

  while (headA !== null && headB !== null) {
    if (headA.val <= headB.val) {
      cur.next = headA;
      headA = headA.next;
    } else {
      cur.next = headB;
      headB = headB.next;
    }
    cur = cur.next;
  }
  if (headA !== null) cur.next = headA;
  if (headB !== null) cur.next = headB;
  return dummy.next;
}
