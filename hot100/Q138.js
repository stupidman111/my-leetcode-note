/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  const map = new Map();
  let cur = head;

  while (cur !== null) {
    map.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;
  while (cur !== null) {
    map.get(cur).next = map.get(cur.next) || null; //map.get(null) 返回 undefined。
    map.get(cur).random = map.get(cur.random) || null; //map.get(null) 返回 undefined。
    cur = cur.next;
  }

  return map.get(head) || null;
};
