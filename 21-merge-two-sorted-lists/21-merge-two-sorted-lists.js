/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
   if (!list1) return list2;
  if (!list2) return list1;

    // applying linked list 
  if(list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2); // 다음 배열의 값을 비교
    return list1; // 결과값으로 이전의 값을 추가
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};