class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var addTwoNumbers = function (l1, l2) {
    if (l1 === null || l2 === null) return null;
    let head = new ListNode((l1.val + l2.val) % 10);
    let carry = parseInt((l1.val + l2.val) / 10)
    let temp = head;
    l1 = l1.next;
    l2 = l2.next;

    while (l1 !== null && l2 !== null) {
        temp.next = new ListNode((l1.val + l2.val + carry) % 10);
        carry = parseInt((l1.val + l2.val + carry) / 10);
        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1 !== null) {
        temp.next = new ListNode((l1.val + carry) % 10);
        carry = parseInt((l1.val + carry) / 10);
        temp = temp.next;
        l1 = l1.next;
    }

    while (l2 !== null) {
        temp.next = new ListNode((l2.val + carry) % 10);
        carry = parseInt((l2.val + carry) / 10);
        temp = temp.next;
        l2 = l2.next;
    }

    if (carry !== 0)
        temp.next = new ListNode(carry);

    return head;
};