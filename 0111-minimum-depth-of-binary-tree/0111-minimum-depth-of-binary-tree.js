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

const d = (root) => {
     if(!root) return 0;
    
     const left = d(root.left);
     const right = d(root.right);
    
    if(!left) return right + 1;
    if(!right) return left + 1;
    
    return Math.min(left,right) + 1;
    
}

var minDepth = function(root) {
    
   const result = d(root);
    return result;
    
};