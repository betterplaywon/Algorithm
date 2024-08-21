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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0;

    const traverse = (root) => {
        if(!root) return;
        const {left, right} = root;
        traverse(right);
        sum += root.val;
        root.val = sum;
        traverse(left);
    }
    traverse(root);
    return root;
};