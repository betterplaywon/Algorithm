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
 * @return {boolean}
 */

const heightCheck = (root, depth) => {
    if(!root) return depth;
    
    const left = heightCheck(root.left, depth + 1);
    const right = heightCheck(root.right, depth + 1);
    
    const differenceHeight = Math.abs(left - right) > 1;
    
    if(differenceHeight) return -1;
    
    return Math.max(left, right);
}


var isBalanced = function(root) {
    
   const result = heightCheck(root, 0);
   return result !== -1;
    
};

