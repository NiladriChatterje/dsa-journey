/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null) 
        return null;
    
    if(k==0)
        return head;

    const arr = new Array();
    let temp = head;
    let length = 0;

    while(temp!=null){
        arr.push(temp);
        length++;
        temp = temp.next;
    }

    k = (k)%length;

    if(k == 0)
        return head;
        
    let index = length - k - 1;
    arr[length-1].next = arr[0];
    arr[index].next = null;

    return arr[(index+1)];

};