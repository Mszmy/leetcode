var preorderTraversal = function(root) {
    if(!root) return [];
    let stack = [root];
    let res = [];

    while (stack.length) {

        let item = stack.pop();
        res.push(item.val);
        item.right && stack.push(item.right);
        item.left && stack.push(item.left);
        }
    return res;
};
