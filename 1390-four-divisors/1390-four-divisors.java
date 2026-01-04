// class Solution {
//     public int sumFourDivisors(int[] nums) {
//         Map<Integer,Integer> setOfNoHaving4Divisors = new HashMap<>();
//         Set<Integer> set = new HashSet<>();
//         int sum = 0;
//         int j;
//         int count;
//         int tempSum;

//         for(int num : nums){
//             if(setOfNoHaving4Divisors.containsKey(num)){
//                 sum += setOfNoHaving4Divisors.get(num);
//                 continue;
//             }

//             if(set.contains(num))
//                 continue;
            
//             j=1;
//             count = 0;
//             tempSum = 0;
//             while(j <= num/2){
//                 if(num%j == 0){
//                     tempSum += j;
//                     count++;
//                 }
//                 if(count >= 4)
//                     break;
//                 j++;
//             }

//             if(count == 3){
//                 setOfNoHaving4Divisors.put(num,tempSum+num);
//                 sum += tempSum + num;
//                 }
//             else
//                 set.add(num);
//         }

//         return sum;
//     }
// }

class Solution {
    private int factors(int n) {
        int sum = 0, c = 0;
        int j;
        for(int i = 2; i*i <= n; i++) {
            if(n % i == 0) {
                j = n / i;
                if(j == i || c > 0) return 0;
                sum += i + j;
                c++;
            }
        }
        if(c == 0) return 0;
        return 1 + sum + n;
    }
    public int sumFourDivisors(int[] nums) {
        int sum = 0;
        for(int i = 0; i < nums.length; i++) {
            sum += factors(nums[i]);
        }
        return sum;
    }
}