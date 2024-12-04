/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true; // 空链表或单节点链表

  // 1. 计算链表长度
  let cnt = 0;
  let cur = head;
  while (cur !== null) {
    cnt++;
    cur = cur.next;
  }

  // 2. 翻转前半部分链表
  let halfLen = Math.floor(cnt / 2);
  cur = head;
  let pre = null;
  while (halfLen > 0) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
    halfLen--;
  }

  // 3. 跳过中间节点（如果链表长度为奇数）
  let headA = pre; // 翻转后的前半部分
  let headB = cnt % 2 === 1 ? cur.next : cur;

  while (headA != null) {
    if (headA.val != headB.val) {
      return false;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return true;
};
