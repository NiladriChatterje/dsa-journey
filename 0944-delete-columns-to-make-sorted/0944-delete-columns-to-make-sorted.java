class Solution {
    public int minDeletionSize(String[] strs) {
        int count = 0;
        int j;
        for(int i=0;i<strs[0].length();i++){
            j=0;
            while(j<strs.length-1){
                if(((int)strs[j].charAt(i)>(int)strs[j+1].charAt(i))){
                    count++;
                    break;
                }
                j++;
                }
            
        }

        return count;
    }
}