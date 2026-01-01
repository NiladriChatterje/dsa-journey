class Solution {
    public int[] plusOne(int[] digits) {
        int i = digits.length-1;
        int carry = 0;
        digits[i] += 1;
        while(i >= 0){
            digits[i] += carry;
            carry = digits[i]/10;
            digits[i] %= 10;
            i--;
        }

        if(carry == 1){
            int[] newDigits = new int[digits.length+1];
            newDigits[0] = carry;
            for(int j=1;j<newDigits.length;j++)
                newDigits[j] = digits[j-1];
            return newDigits;
        }

        return digits;
    }
}