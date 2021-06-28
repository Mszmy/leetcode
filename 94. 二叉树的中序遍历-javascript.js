var inorderTraversal = function(root) {
    if(!root)return []
    let res = []
    if(root.left) res = res.concat(inorderTraversal(root.left))
    res.push(root.val)
    if(root.right) res = res.concat(inorderTraversal(root.right))
    return res
};
