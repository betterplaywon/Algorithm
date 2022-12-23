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

const treeDepth = (root, depth) => {
    
    const left = root.left !== null ? treeDepth(root.left, depth+1) : depth;
    const right = root.right !== null ? treeDepth(root.right,depth+1) : depth;
    
   return Math.max(left,right)
    
}

var maxDepth = function(root) {
  if(!root) return null;
    
   const result = treeDepth(root, 1)
    return result;
};