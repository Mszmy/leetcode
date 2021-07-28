var getIntersectionNode = function(headA, headB) {
    // 遍历a 的同时 也遍历 b 然后 找出第一个公共节点返回
    var visited  = new Set();
    var temp = headA;
    // 遍历 a 链表
    while(temp != null){
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    // 遍历 b 链表
    while(temp != null){
        // 如果visited当中存在当前temp，说明这是两者的公共节点，则返回
        if(visited.has(temp)){
            return temp;
        }
        temp = temp.next;
    }
    return null;
};
