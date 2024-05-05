/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
    let str = '';
    
    while(head) {
        const isOne = head.val === 1 ? '1' : '0';
        str += isOne;
        head = head.next;
    }
    return parseInt(str,2);
};