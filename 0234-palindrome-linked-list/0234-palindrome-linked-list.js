/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
    
//     // let element = [];
//     // let reverseElement = [];
    
//     let element='';
//     let reverseElement='';
    
//     while(head.val) {
//         // element.push(head.val);
//         element+=head.val;
//         if(!head.next) {
//             break;
//         } else {
//             head = head.next;
//         }
//     }
//     reverseElement = element.split('').reverse().join('');
//     return element === reverseElement;
    
//    //  reverseElement = element.reverse();
//    // const result = element.every((value, idx) => value === reverseElement[idx]);
//    //  return result;
// };


// var isPalindrome = function(head) {
//     let element = [];
//     let reverseElement = [];
    
//     while(head.val) {
//         element.push(head.val);
//         if(!head.next) {
//             break;
//         } else {
//             head = head.next;
//         }
//     } 
//     reverseElement = element.reverse();
//    const result = element.every((value, idx) => value === reverseElement[idx]);
//     return result;
// };

var isPalindrome = function(head) {
    let stack = "";
    let reverse = "";
    
    while(head.val != undefined){
        stack+=head.val;
        if(!head.next) break;
        else {head= head.next;}
    }
    
    reverse = stack.split('').reverse().join('');

    return stack === reverse;
};
