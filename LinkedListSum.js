class ListNode {
    constructor(val, next,carry) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        this.carry = (carry === undefined? 0 : carry);
    }
}

var length = (L) =>{
    let temp = L;
let length = 0;
while(L){
    length++;
    L = L.next;
}
return length;
}

 var addTwoNumbers = function(l1, l2) {
    let addedList = new ListNode();
    let c =0;
    let tail=addedList;
    let head = addedList;
    while(length(l1)>length(l2)?l1:l2){ 
        if(length(l1)>length(l2) && (l2.next === null)){
            l2.next = new ListNode();
        }
        if(length(l1)<length(l2) && (l1.next === null)){
            l1.next = new ListNode();
        }
        
        addedList.val = (l1.val + l2.val+addedList.carry)%10;
        
        if(length(l1)>length(l2)?l1:l2.next !== null)
        {
            addedList.next = new ListNode(undefined,undefined,addedList.carry);
            addedList.next.carry = Math.trunc((l1.val + l2.val+addedList.carry)/10);
            tail = tail.next;
        }
        c=Math.trunc((l1.val + l2.val+addedList.carry)/10);
        addedList = addedList.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    if(c !== 0)
       tail.next = new ListNode(c);

    return head;
};

l1 = new ListNode(9,new ListNode(9,new ListNode(2)));
l2 = new ListNode(9,new ListNode(9,new ListNode(4)));
var checking = addTwoNumbers(l1,l2)

while(checking){
    console.log(checking.val);
    checking = checking.next;
}
