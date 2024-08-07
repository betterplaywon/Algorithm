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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
const arr1=[],arr2=[];

const searchTree = (root,array) => {
    if(!root) return;

    if(!root.left && !root.right) array.push(root.val);

    searchTree(root.left,array);
    searchTree(root.right,array);
}

searchTree(root1,arr1);
searchTree(root2,arr2);

const isSameLeaf = (array1,array2) => {
if(array1.length !== array2.length) return false;
   return array1.every((leaf,index)=> leaf === array2[index]);
}

return isSameLeaf(arr1,arr2);
};