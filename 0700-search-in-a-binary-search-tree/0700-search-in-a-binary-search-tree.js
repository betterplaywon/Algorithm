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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // 현재 노드와 val이 같다면 val과 val.left, val.right를 array에 추가
    // 현재 노드와 val 비교시 없다면 깡통 return
    
    let result;
    const traverse = (root) => {
        // 하나의 if문으로 처리 시 최상단의 if문만 순회 후 빠짐.
        // 개별적인 if문 처리가 필요.
        
        // if(root.val === val) {
        //      result = root;
        // } else if(root?.left) {
        //       traverse(root.left);
        // } else if(root?.right) {
        //         traverse(root.right);
        // }
        
         if(root.val === val) {
             result = root;
        };
        if(root?.left) {
              traverse(root.left);
        };
    if(root?.right) {
                traverse(root.right);
        };
    }
    
    traverse(root);
    return result || null;
};