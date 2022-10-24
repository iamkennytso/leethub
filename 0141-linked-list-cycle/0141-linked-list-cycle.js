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
  let dummyHead = {next: head}
  let slow = dummyHead
  let fast = dummyHead.next
  while (fast && fast.next && fast.next.next) {
    if (slow === fast) {
      return true
    }
    slow = slow.next
    fast = fast.next.next
  }
  return false
};