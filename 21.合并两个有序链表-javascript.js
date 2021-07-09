var mergeTwoLists = function(l1, l2) {
    //  边合并边排序
    // 如果l1 或者 l2 任意一个为空，则返回另一个
    if(l1 == null)return l2
    else if(l2 == null)return l1
    // 哪个值更小，就递归合并在哪个后面
    else if(l1.val <l2.val){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l2.next,l1)
        return l2
    }

};

