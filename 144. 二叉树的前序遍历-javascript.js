var preorderTraversal = function(root) {
    if (!root) return []
    let res = [];
    res.push(root.val); 
    if (root.left) res = res.concat(preorderTraversal(root.left))
    if (root.right) res = res.concat(preorderTraversal(root.right))
    return res;
};
// 递归
