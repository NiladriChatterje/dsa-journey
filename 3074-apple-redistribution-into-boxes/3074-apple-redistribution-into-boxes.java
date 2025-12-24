class Solution {
    public int minimumBoxes(int[] apple, int[] capacity) {
        Arrays.sort(capacity);
        int count = 0;
        int sum = 0;
        for(int i:apple)
            sum += i;

        int i = capacity.length-1;
        while(sum>0){
            sum -= capacity[i]; 
            count++;           
            i--;
        }

        return count;
    }
}