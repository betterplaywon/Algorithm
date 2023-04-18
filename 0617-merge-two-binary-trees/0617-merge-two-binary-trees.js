/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // 각 루트마다 왼쪽 오른쪽 접근하면서 각 left끼리 더하고 right끼리 더한다.
    // root.val 기준으로 왼쪽값을 배열에 넣고 오른쪽 값을 배열에 넣어주며 진행한다.
    
    if(!root1 || !root2) return root2 || root1;
    
    root1.val+=root2.val;
    
   root1.left = mergeTrees(root1.left,root2.left);
   root1.right = mergeTrees(root1.right,root2.right);
    return root1;
};