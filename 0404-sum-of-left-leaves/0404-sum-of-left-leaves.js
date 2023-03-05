/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    // 현재 root에 왼쪽이 있고, 왼쪽의 왼쪽과 오른쪽이 없다면 result에 추가
    let result = 0;
    function plusNode(root){
        if(!root) return;
        if(root.left && !root.left.left && !root.left.right) result+=root.left.val;
            
        plusNode(root.left);
        plusNode(root.right);
    }
    plusNode(root)
    return result;
};