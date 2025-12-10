class Solution {
    public int countPermutations(int[] complexity) {
        long count = 1;

        for(int i=complexity.length -1; i>0;i--){
            if(complexity[i] <= complexity[0]) return 0;

            count = (count * i) % 1000000007;
        }

        return (int)count;
    }
}