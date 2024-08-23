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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xDepth=0, yDepth=0;
    let xParent=null, yParent=null;

    const traverse = (root,depth,parent) => {
        if(!root) return;

        if(root.val === x) {
            xDepth = depth;
            xParent = parent;
        } else if(root.val === y){
            yDepth = depth;
            yParent = parent;
        }
       traverse(root.left,depth+1,root);
       traverse(root.right,depth+1,root);
    }
    traverse(root,0,null);

    return (xDepth === yDepth) && (xParent !== yParent);
};