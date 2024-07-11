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
var diameterOfBinaryTree = function(root) {
    let output = 0;

// node의 존재 유무로 count해 depth 파악하기.
    const dfs = (root) => {
        if(!root) return 0;
        
        let left = dfs(root.left);
        let right = dfs(root.right);
        output = Math.max(output, left+right);
        return Math.max(left,right) + 1;
    }
    dfs(root);
    return output;
};