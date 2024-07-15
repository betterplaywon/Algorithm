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
var sumRootToLeaf = function(root) {

const dfs = (root,str) => {
if(!root) return 0;

str += root.val;
if(!root.left && !root.right) {
return parseInt(str,2);
}

return dfs(root.left,str) + dfs(root.right,str);
}
return dfs(root,'');
};