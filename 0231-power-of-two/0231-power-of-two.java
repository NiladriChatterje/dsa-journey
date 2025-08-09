class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n==1) return true;
        if(n<=0) return false;

       double x = Math.log10(n)/Math.log10(2);
       int a = (int)Math.floor(x);            
       int b = (int)Math.ceil(x);            

        return a==b;
    }
}