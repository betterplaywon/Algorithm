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
var evaluateTree = function(root) {
    
    const traverse = (node) => {
        if(node.val === 0) return false;
        if(node.val === 1) return true;
        
        const left = traverse(node.left);
        const right = traverse(node.right);
        
        if(node.val === 3) {
           return left && right;
        } else if(node.val === 2) {
           return left || right;
        }
    }
    return traverse(root);
};