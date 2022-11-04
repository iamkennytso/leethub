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
var middleNode = function(head) {
  let length = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    length++
  }
  const mid = Math.ceil(length / 2) + (length % 2 === 0 ? 1 : 0)
  cur = head
  for (let i = 1; i < mid; i++) {
    cur = cur.next
  }
  return cur
};