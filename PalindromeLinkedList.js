function ListNode(val, next, prev) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.prev = (prev===undefined?null:prev);
    
    return this;
}
function reverse(head){
    let temp = head
    let tail;
  while(temp){
    if(temp != head)
      temp.prev = temp;
    tail = temp;
    temp = temp.next;
  }
  return tail;
}

var isPalindrome = function(head) {
  let temp = head;
  let tail = reverse(head);
  console.log(tail.prev)
  while(temp){
    if(temp.val !== tail?.val)
      return false

    temp = temp.next;
    tail = tail.prev;
  }
  return true;
};

l1 =new ListNode(1,new ListNode(2,new ListNode(2,new ListNode(1))));
console.log(isPalindrome(l1));