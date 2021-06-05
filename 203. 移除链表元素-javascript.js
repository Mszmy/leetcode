var removeElements = function(head, val) {
    // 思路 如果空链表，则直接返回[]； 否则就进行单链表的删除
    // 先创建一个新的空节点，让它等于头节点，然后在删除
    var newHead = new ListNode(0);
    newHead.next = head;
    var temp = newHead;
    while (temp.next !== null) {
        if (temp.next.val == val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return newHead.next;
};
