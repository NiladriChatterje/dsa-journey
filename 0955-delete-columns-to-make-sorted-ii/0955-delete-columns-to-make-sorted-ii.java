class Solution {
    public int minDeletionSize(String[] strs) {
        int n = strs.length;
        int m = strs[0].length();
        StringBuilder[] built = new StringBuilder[n];

        for (int i = 0; i < n; i++) 
            built[i] = new StringBuilder();
        

        for (int col = 0; col < m; col++) {
            for (int row = 0; row < n; row++) 
                built[row].append(strs[row].charAt(col));
            boolean isSorted = true;
            for (int row = 1; row < n; row++) 
                if (built[row].toString().compareTo(built[row - 1].toString()) < 0) {
                    isSorted = false;
                    break;
                }
            

            if (!isSorted) 
                for (int row = 0; row < n; row++) 
                    built[row].deleteCharAt(built[row].length() - 1);
                
            
        }

        return m - built[0].length();
    }
}
