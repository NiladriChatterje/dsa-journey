`leetcode 2181`
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const head = new ListNode(0);
let temp = head;
const arr = [3, 1, 0, 4, 5, 2, 0];
for (let i of arr) {
    temp.next = new ListNode(i);
    temp = temp.next;
}
var mergeNodes = function (head) {
    let temp = head.next;
    let forMerge = head;
    let sum = 0;
    while (temp) {
        if (temp.val === 0) {
            forMerge.val = sum;
            forMerge.next = null;
            if (temp.next) {
                forMerge.next = new ListNode(sum);
                forMerge = forMerge.next;
            }
            sum = 0;
        }
        else
            sum += temp.val
        temp = temp.next;
    }

    return head;
};

console.log(mergeNodes(head))