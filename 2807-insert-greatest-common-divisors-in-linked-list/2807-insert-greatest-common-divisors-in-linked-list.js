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

const calcCommonDivisor = (head,nextHead) => {
    if(nextHead) {
       return calcCommonDivisor(nextHead, head % nextHead);
    } else {
       return head;
    }
}

var insertGreatestCommonDivisors = function(head) {
    const output = head;
    
    while(head && head.next) {
        const commonDivisor = calcCommonDivisor(head.val, head.next.val);
        head.next = new ListNode(commonDivisor, head.next);
        head = head.next.next;
    }
    return output;
};