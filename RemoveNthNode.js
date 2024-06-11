function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    let temp = head;
    let length = 0;
    while (temp !== null) {
        length++;
        temp = temp.next;
    }
    let indexToBeRemoved = length - n;
    let j = 0;
    temp = head;
    while (j++ !== indexToBeRemoved - 1)
        temp = temp.next;
    temp.next = temp.next.next;
    return head
};