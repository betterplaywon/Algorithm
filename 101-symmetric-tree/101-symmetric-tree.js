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

const isMirrorTreeNode = (left, right) => {
    if(left===null && right===null) return true;
    if((left !== null && right === null) || (left === null && right !== null)) return false;
    if(left.val !== right.val) return false;
    
    return isMirrorTreeNode(left.left, right.right) && isMirrorTreeNode(left.right, right.left);
}

var isSymmetric = function(root) { 
  if(!root) return true;
    return isMirrorTreeNode(root.left, root.right);
}