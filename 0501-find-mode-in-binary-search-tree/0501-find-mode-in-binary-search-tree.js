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
 * @return {number[]}
 */
var findMode = function(root) {
      const map = {};
    
    const dfs = (root) => {
        if(!root)   return;
        
        map[root.val] = map[root.val] ? map[root.val] + 1 : 1; // 1, null, 1, 2, null
        dfs(root.left);
        dfs(root.right);
    }
    
     dfs(root);
    
    const modeFrequency = Math.max(...Object.values(map)); // 2
    
    return Object.keys(map).filter(key => map[key] == modeFrequency);
};