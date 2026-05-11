class Solution {
    public int[] separateDigits(int[] nums) {

        int total_digits = 0;

        for (int i : nums)
            total_digits += (int)Math.log10(i) + 1;

        int[] res = new int[total_digits];

        int index = 0;
        int digits ;

        for (int i : nums) {

            digits = (int)Math.log10(i) + 1;
           
            while (digits > 0) {
                int divisor = (int)Math.pow(10, digits - 1);
                res[index++] = i / divisor;
                i = i % divisor;
                digits--;
            }

        }

        return res;
    }
}