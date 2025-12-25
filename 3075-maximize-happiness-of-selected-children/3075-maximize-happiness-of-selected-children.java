class Solution {
    public long maximumHappinessSum(int[] happiness, int k) {
        Arrays.sort(happiness);
        int happ = 0;

        int i = happiness.length-1;
        long sum = 0;
        while(k>0){
            if(happiness[i]-(happiness.length-1-i)<=0)
                break;
            sum += Math.max(0,(happiness[i]-(happiness.length-1-i)));
            i--;
            k--;
        }

        return sum;
    }
}