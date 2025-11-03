class Solution {
    public int minCost(String colors, int[] neededTime) {
        int count = 0;

        for(int i=1; i<neededTime.length;i++)
            while(i<colors.length() && colors.charAt(i)==colors.charAt(i-1)){
                
                if(neededTime[i]<neededTime[i-1]){
                    count += neededTime[i];
                    neededTime[i] = neededTime[i-1];
                }
                else
                    count += neededTime[i-1];

                i++;
            }

        return count;
    }
}