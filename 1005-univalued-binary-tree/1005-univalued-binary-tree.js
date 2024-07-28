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
var isUnivalTree = function(root) {

const traverse = (root,fixedVal) => {
    if(!root) return true;
    if(root.val !== fixedVal) return false;
    return traverse(root.left,fixedVal) && traverse(root.right,fixedVal);
}
return traverse(root,root.val);
};