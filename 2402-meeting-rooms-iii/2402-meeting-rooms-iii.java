import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public int mostBooked(int n, int[][] meetings) {
        Arrays.sort(meetings, (a, b) -> Integer.compare(a[0], b[0]));
        int[] used = new int[n];
        PriorityQueue<Integer> avail = new PriorityQueue<>();

        PriorityQueue<long[]> busy = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0]) {
                return Long.compare(a[0], b[0]);
            }
            return Long.compare(a[1], b[1]);
        });
        
        for (int i = 0; i < n; i++) {
            avail.offer(i);
        }
        
        for (int[] meeting : meetings) {
            long start = meeting[0];
            long end = meeting[1];
            long duration = end - start;
            
            while (!busy.isEmpty() && busy.peek()[0] <= start) {
                long[] freed = busy.poll();
                avail.offer((int) freed[1]);
            }
            
            if (!avail.isEmpty()) {
                int room = avail.poll();
                used[room]++;
                busy.offer(new long[]{end, room});
            } else {
                long[] finished = busy.poll();
                int room = (int) finished[1];
                used[room]++;
                busy.offer(new long[]{finished[0] + duration, room});
            }
        }
        
        int maxRoom = 0;
        int maxCount = used[0];
        for (int i = 1; i < n; i++) {
            if (used[i] > maxCount) {
                maxCount = used[i];
                maxRoom = i;
            }
        }
        
        return maxRoom;
    }
}

class SolutionOptimized {
    static class BusyRoom {
        long endTime;
        int index;
        
        BusyRoom(long endTime, int index) {
            this.endTime = endTime;
            this.index = index;
        }
    }
    
    public int mostBooked(int n, int[][] meetings) {
        Arrays.sort(meetings, (a, b) -> Integer.compare(a[0], b[0]));
        
        int[] used = new int[n];
        
        PriorityQueue<Integer> avail = new PriorityQueue<>();
        PriorityQueue<BusyRoom> busy = new PriorityQueue<>((a, b) -> {
            if (a.endTime != b.endTime) {
                return Long.compare(a.endTime, b.endTime);
            }
            return Integer.compare(a.index, b.index);
        });
        
        for (int i = 0; i < n; i++) {
            avail.offer(i);
        }
        
        for (int[] m : meetings) {
            long start = m[0];
            long end = m[1];
            long duration = end - start;
            
            while (!busy.isEmpty() && busy.peek().endTime <= start) {
                avail.offer(busy.poll().index);
            }
            
            if (!avail.isEmpty()) {
                int room = avail.poll();
                used[room]++;
                busy.offer(new BusyRoom(end, room));
            } else {
                BusyRoom finished = busy.poll();
                used[finished.index]++;
                busy.offer(new BusyRoom(finished.endTime + duration, finished.index));
            }
        }
        
        int maxRoom = 0;
        for (int i = 1; i < n; i++) {
            if (used[i] > used[maxRoom]) {
                maxRoom = i;
            }
        }
        
        return maxRoom;
    }
}