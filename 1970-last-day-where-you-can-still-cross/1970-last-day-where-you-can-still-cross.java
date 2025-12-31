class Solution {
    private static final int[][] DIRECTIONS = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
    
    public int latestDayToCross(int row, int col, int[][] cells) {
        int lo = 0, hi = cells.length - 1;
        int result = 0;
        
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (canCross(mid, cells, row, col)) {
                result = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        
        return result+1;
    }
    
    private boolean canCross(int days, int[][] cells, int row, int col) {
        boolean[][] flooded = new boolean[row][col];
        
        for (int i = 0; i <= days; i++) {
            flooded[cells[i][0] - 1][cells[i][1] - 1] = true;
        }
        
        Queue<int[]> queue = new ArrayDeque<>();
        boolean[][] visited = new boolean[row][col];
        
        for (int j = 0; j < col; j++) {
            if (!flooded[0][j]) {
                queue.offer(new int[]{0, j});
                visited[0][j] = true;
            }
        }
        
        if (queue.isEmpty()) return false;
        
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int x = curr[0], y = curr[1];
            
            if (x == row - 1) return true;
            
            for (int[] dir : DIRECTIONS) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                
                if (nx >= 0 && nx < row && ny >= 0 && ny < col 
                    && !visited[nx][ny] && !flooded[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.offer(new int[]{nx, ny});
                }
            }
        }
        
        return false;
    }
}