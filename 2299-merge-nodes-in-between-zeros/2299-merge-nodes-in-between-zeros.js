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
var mergeNodes = function(head) {
    let node = head;

    while(node.next) {
        node.val += node.next.val;
        node.next = node.next.next;

        if(!node.next.next) {
            node.next = null;
            break;
        }

        if(node.next.val === 0) {
            node = node.next;
        }
    }
    return head;
};