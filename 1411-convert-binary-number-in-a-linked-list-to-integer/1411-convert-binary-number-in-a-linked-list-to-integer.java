/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
// class Solution {
//     public int getDecimalValue(ListNode head) {
//         long number = 0;
//         while(head != null){
//             number = number *10 + head.val;
//             head = head.next;
//         }

//         long result = 0;
//         int digit = (int)Math.log10(number)+1;
//         int i = 0;
        
//         while(i<digit){
//             result = (number%10)+(long)(Math.pow(2,i));
//             System.out.println(number);
//             number /= 10;
//             i++;
//         }

//         return (int)result;
//     }
// }

class Solution {
    public int getDecimalValue(ListNode head) {
        int number = head.val;
        while(head.next != null){
            number = (number << 1) | (head.next.val);
            head = head.next;
        }

        return number;
    }
}