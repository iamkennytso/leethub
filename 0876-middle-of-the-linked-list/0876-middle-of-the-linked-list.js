/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let length = 1
  let cur = head
  while (cur.next) {
    length++
    cur = cur.next
  }

  const mid = (Math.ceil(length / 2)) + (length % 2 === 0 ? 1 : 0)
  cur = head

  for (let i = 1; i < mid; i++) {
    cur = cur.next
  }
  return cur
};