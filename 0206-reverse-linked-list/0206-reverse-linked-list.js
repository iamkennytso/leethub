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

 // null 4 3 2 1
var reverseList = function(head) {
  let prev = null
  let cur = head
  while (cur) {
    const hold = cur.next
    cur.next = prev
    prev = cur
    cur = hold
  }
  return prev
};