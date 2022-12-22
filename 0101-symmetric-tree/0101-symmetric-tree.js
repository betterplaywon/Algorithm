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
    if(left===null && right===null) {
        return true;
    }
    
    if((left !== null && right === null) || (left === null && right !== null)){             return false;
    }  
    
    if(left.val !== right.val) {
        return false;
    }
    
    const outTree = isMirrorTreeNode(left.left, right.right);
    const inTree = isMirrorTreeNode(left.right, right.left);
    
    return outTree && inTree;
}

var isSymmetric = function(root) { 
    return isMirrorTreeNode(root.left, root.right);
}