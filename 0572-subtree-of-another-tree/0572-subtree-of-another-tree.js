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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
      if(!root) return false;
    //순회하면서 해당 root가 있는가 && root.left와 root.right는 없는가.
    
    const traverse = (root,subRoot) => {
        if(!root && !subRoot) return true;
        if(!root || !subRoot) return false;
        // null일 경우 false로 빠져야 하기 때문에 false 설정.
        // if(root.val === subRoot.val) return true;
        if(root.val !== subRoot.val) return false;
        
        return traverse(root.left, subRoot.left) && traverse(root.right, subRoot.right);
    }
    if(traverse(root, subRoot)) return true;
  
  // traverse를 반복적으로 호출하기 위해 isSubtree를 재귀함수로 사용  
  return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot);
};