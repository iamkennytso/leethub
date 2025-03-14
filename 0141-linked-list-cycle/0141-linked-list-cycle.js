/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const dummyHead = {next: head}
  let slow = dummyHead
  let fast = head
  while (fast && fast.next) {
    if (slow === fast) return true
    slow = slow.next
    fast = fast.next.next
  }
  return false
};