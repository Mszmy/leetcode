var sumOfLeftLeaves = function(root) {
    // 用一个标记找到所有的左子树，累加
    var isLeft = false
    return dfs(root,isLeft)
};
var dfs = function(root,isLeft){
    if(root == null)return 0
    if(root.left == null && root.right == null){
        if(isLeft)return root.val
        return 0
    }
    return dfs(root.left,true) + dfs(root.right,false)
}

