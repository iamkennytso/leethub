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
var swapPairs = function(head) {
  if (!head || !head.next) return head
  const dummyHead = head.next
  let cur = head
  let prev = null

  while (cur && cur.next) {
    const firstNode = cur
    const secondNode = cur.next
    const thirdNode = cur.next.next
    firstNode.next = secondNode.next
    secondNode.next = firstNode
    if (prev) {
      prev.next = secondNode
    }
    prev = firstNode
    cur = thirdNode
  }

  return dummyHead
};