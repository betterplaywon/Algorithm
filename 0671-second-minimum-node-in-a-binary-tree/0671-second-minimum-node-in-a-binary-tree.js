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
var findSecondMinimumValue = function(root) {
    
    let arr = [];
    
    const dfs = (root) => {
       if(root) {
           dfs(root.left);
           arr.push(root.val);
           dfs(root.right);
       }
}
    dfs(root);
    
    const set = new Set(arr);
    const spreadSet = Array.from(set)
    const sorting = spreadSet.sort();
    
    return sorting[1] ? sorting[1] : -1
};