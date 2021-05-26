var count = 0;
var maxDepth = function(root) {
    // 递归的，分别计算左子树与右子树的深度，之后比较两个子树的最大值，使其加1（根节点），得出最大深度。
    if(root == null) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left,right) + 1
};

