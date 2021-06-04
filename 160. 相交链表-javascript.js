var getIntersectionNode = function(headA, headB) {
    // 判断两个链表第一个相同的点
    var visited = new Set()
    let tmp = headA
    while(tmp !=null){
        visited.add(tmp)
        tmp = tmp.next
    }
    tmp = headB
    while(tmp !=null){
        if(visited.has(tmp))return tmp;
        tmp = tmp.next;
    }
    return null
};
