class Solution {
    public int repeatedNTimes(int[] nums) {
        Map<Integer,Integer> map = new HashMap<>();
        int getCount;
        for(int num: nums){
            getCount = map.getOrDefault(num,0);
            map.put(num,getCount+1);
            if(getCount + 1 == nums.length/2)
                return num;
        }
        return 0;
    }
}