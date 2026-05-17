class Solution {
    public boolean canReach(int[] arr, int start) {
        Set<Integer> visited = new HashSet<>();
        return dfs(arr, start, visited);
    }

    private boolean dfs(int[] arr, int i, Set<Integer> visited) {
        if (i < 0 || i >= arr.length || !visited.add(i)) 
            return false;
        if (arr[i] == 0) 
            return true;
        return dfs(arr, i + arr[i], visited) 
            || dfs(arr, i - arr[i], visited);
    }
}