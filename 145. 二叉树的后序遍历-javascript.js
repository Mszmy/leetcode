var postorderTraversal = function(root) {
    // 左右根
    if (!root) return []
    let res = [];
    if (root.left) res = res.concat(postorderTraversal(root.left))
    if (root.right) res = res.concat(postorderTraversal(root.right))
    res.push(root.val); 
    return res;
};
