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
var countNodes = function(root) {
let count = 0;

const traverse = (root,num) => {
if(!root) return 0;
count+=1;
traverse(root.left,num);
traverse(root.right,num);
}
traverse(root,count);

return count;
};