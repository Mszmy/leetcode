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
    //获取到叶值序列，然后进行比较两个叶值序列是否完全相同，相同返回true，否则返回false
    let arr1 = []
    let arr2 = []
    
    yezi(root1,arr1)
    yezi(root2,arr2)
    
    //如果两者数组长度不同，肯定不相似，因此直接返回false
    if(arr1.length != arr2.length) return false;
    //遍历数组，判断两个数组是否完全相同
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] != arr2[i])return false;
    }
    return true; 
};

var yezi = function(node,arr){
    if(node == null)return
    // 如果该节点的左右子树都为空，则判断为叶子结点；否则分别遍历左右子树
    if(node.left == null && node.right == null)arr.push(node.val)
    else{
        yezi(node.left,arr)
        yezi(node.right,arr)
    }
}
