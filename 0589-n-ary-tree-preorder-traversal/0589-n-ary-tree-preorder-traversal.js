/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = [];
    
    const traverse = (root) => {
        if(root) {
        result.push(root.val);
        
        for(const child of root.children) {
            traverse(child);
        }
            }
    }
     traverse(root);
    return result;
    
};