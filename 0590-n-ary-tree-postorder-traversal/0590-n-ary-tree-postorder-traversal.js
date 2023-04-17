/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let arr = [];
    
    const dfs = (root) => {
        if(!root) return;
        for(let child of root.children) {
            dfs(child);
        }
        arr.push(root.val);
    }
        dfs(root);
    return arr;
};