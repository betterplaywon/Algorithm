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
var deleteDuplicates = function(head) {
      if(!head) return null;
    
    let prevHead = head;
    let nextHead = head.next;

    while(prevHead && nextHead) {
         if(prevHead.val === nextHead.val) {
             prevHead.next = nextHead.next
            }else{
               prevHead = prevHead.next; 
            }
        nextHead = nextHead.next
    }
    return head;
};