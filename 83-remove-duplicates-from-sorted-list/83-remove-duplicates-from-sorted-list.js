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
// Set 활용 안됨.
var deleteDuplicates = function(head) {
    if(head === null) return null;
    
    let prevHead = head, nextHead = head.next;
    
 while(prevHead != null && nextHead != null) {
     if(prevHead.val === nextHead.val) {
         prevHead.next = nextHead.next;
     } else {
         prevHead = prevHead.next;
     }
     nextHead = nextHead.next
 }
    return head;
};