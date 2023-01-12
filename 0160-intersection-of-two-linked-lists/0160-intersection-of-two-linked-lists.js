/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let h1 = headA;
     while(h1){
          let h2 = headB;
        while(h2){
            if(h1 === h2) {
                return h1 // or h2
            }
            h2 = h2.next;
        }
        h1 = h1.next;
      }
    return null;
};