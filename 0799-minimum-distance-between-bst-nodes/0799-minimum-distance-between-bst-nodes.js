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
var minDiffInBST = function(root) {
    const arr = [];
    let min = Infinity;
    const traverse = (root) => {
      if(!root) return;
      traverse(root.left);
      arr.push(root.val);
      traverse(root.right);
      }
    traverse(root);
    
    for(let i=1; i<arr.length; i++) {
        min = Math.min(min, arr[i]-arr[i-1]);
    }
    return min;
};