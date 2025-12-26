class Solution {
    public int bestClosingTime(String customers) {
        int yCount = 0;
        int nCount = 0;
        for(int customer = 0;customer<customers.length();customer++){
            if(customers.charAt(customer) == 'Y')
                yCount++;
        }

        int minTime = 0;
        int penalty = Integer.MAX_VALUE;
        int customer = 0;
        for(;customer<customers.length();customer++){
            if(yCount+nCount<penalty){
                minTime = customer;
                penalty = yCount + nCount;
            }

            if(customers.charAt(customer)=='Y')
                yCount = yCount <= 0?0:yCount-1;
            else
                nCount++;            
        }
        if(yCount+nCount<penalty)
            minTime=customer;
            

        return minTime;

    }
}