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
var reverseList = function (head) {
  //1. 带头节点版本
  // let dummy = new ListNode();
  // let cur = head, pre = null;
  // while (cur != null) {
  //     let tmp = cur.next;
  //     cur.next = pre;
  //     dummy.next = cur;
  //     pre = cur;
  //     cur = tmp;
  // }
  // return dummy.next;

  //2. 不带头节点版本
  let cur = head,
    pre = null;
  while (cur != null) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  return pre;
};
