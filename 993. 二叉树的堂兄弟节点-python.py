class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        # 如果根节点为空，或者x值为根节点，或者y值为根节点，这些都为false
        if (root is None or x == root.val or y == root.val): return False
        
        parent = {}
        depth = {}

        # 获取到深度和父节点 字典
        def dfs(node, par=None):
            if node:
                depth[node.val] = 1 + depth[par.val] if par else 0
                parent[node.val] = par
                dfs(node.left,node)
                dfs(node.right,node)

        dfs(root)
        # 只有当两个深度相同，但父节点不同的时候才是true
        return depth[x] == depth[y] and parent[x]!=parent[y]
