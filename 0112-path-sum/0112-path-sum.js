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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    
    const verifytargetSum = targetSum - root.val;
    
    if(!root.left && !root.right) {
        if(verifytargetSum === 0) return true;
        return false;
    }
    
    return hasPathSum(root.left,verifytargetSum) || hasPathSum(root.right,verifytargetSum);
};