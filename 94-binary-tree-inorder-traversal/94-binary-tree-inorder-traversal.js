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

// 재귀 함수와 중위 순회 응용, 전위 순회인 줄 알았지만 아녔음.

var inorderTraversal = function(root) {
    
    const arr = [];
    
  const inOrder = (root) => {
       if(root === null) return ;
       
        inOrder(root.left);
        arr.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return arr;
    
};