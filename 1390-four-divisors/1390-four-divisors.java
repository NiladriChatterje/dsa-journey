class Solution {
    public int sumFourDivisors(int[] nums) {
        Map<Integer,Integer> setOfNoHaving4Divisors = new HashMap<>();
        Set<Integer> set = new HashSet<>();
        int sum = 0;
        int j;
        int count;
        int tempSum;

        for(int num : nums){
            if(setOfNoHaving4Divisors.containsKey(num)){
                sum += setOfNoHaving4Divisors.get(num);
                continue;
            }

            if(set.contains(num))
                continue;
            
            j=1;
            count = 0;
            tempSum = 0;
            while(j <= num/2){
                if(num%j == 0){
                    tempSum += j;
                    count++;
                }
                if(count >= 4)
                    break;
                j++;
            }

            if(count == 3){
                setOfNoHaving4Divisors.put(num,tempSum+num);
                sum += tempSum + num;
                }
            else
                set.add(num);
        }

        return sum;
    }
}