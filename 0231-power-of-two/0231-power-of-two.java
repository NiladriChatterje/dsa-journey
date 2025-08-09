class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n==1) return true;
        if(n==0) return false;
        
        while(n%2==0){
            n /= 2;
            System.out.println(n);
            }

        return n==1;
    }
}