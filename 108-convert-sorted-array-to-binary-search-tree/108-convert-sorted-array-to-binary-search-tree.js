/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

//이분탐색의 개념? 아직 완전히 숙지하지 못함.
var sortedArrayToBST = function(nums = []) {
  const aux = (start, end) => {
    if (start <= end) {
      const mid = Math.floor((start + end) / 2) // 중간값 찾기
      // const node = {val: nums[mid]};
        const node = new TreeNode(nums[mid]); // 노드 할당
      node.left = aux(start, mid - 1) 
      node.right = aux(mid + 1, end) 
      return node
    }
    return null
  }
  return aux(0, nums.length - 1)
};