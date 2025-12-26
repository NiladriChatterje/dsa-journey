class Solution {
    public int bestClosingTime(String customers) {
        int yCount = 0;
        int nCount = 0;
        int length = customers.length();
        for(int customer = 0;customer<length;customer++){
            if(customers.charAt(customer) == 'Y')
                yCount++;
        }

        int minTime = 0;
        int penalty = Integer.MAX_VALUE;
        int customer = 0;
        for(;customer<length;customer++){
            if(yCount+nCount<penalty){
                minTime = customer;
                penalty = yCount + nCount;
            }

            if(customers.charAt(customer)=='Y')
                yCount = Math.max(0,yCount-1);
            else
                nCount++;            
        }
        if(yCount+nCount<penalty)
            minTime=customer;
            
        return minTime;
    }
}