/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteNode = (head,set) => {
    let prev,next,newHead=null;
    while(head != null){
        if(set.has(head.val)){
            if(prev)
                prev.next = head.next;
        }
        else{
            if(!newHead)
                newHead = head;
            prev = head;
        }
        head = head.next
    }

    return newHead
}


const modifiedList = function(nums, head) {
    const set = new Set();
    for (let i of nums)
        set.add(i);
    
    return deleteNode(head,set)
};