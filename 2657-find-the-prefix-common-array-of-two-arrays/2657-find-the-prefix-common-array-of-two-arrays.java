class Solution {
    public int[] findThePrefixCommonArray(int[] A, int[] B) {
        Set<Integer> set = new HashSet<Integer>();
        int len = A.length;
        int[] C = new int[len];
        int prevCount = 0;

        for(int i=0; i<len; i++){
         
                if(!set.add(A[i]))
                    prevCount++;
                if(!set.add(B[i]))
                    prevCount++;
            
            C[i] = prevCount;
        }

        return C;
    }
}