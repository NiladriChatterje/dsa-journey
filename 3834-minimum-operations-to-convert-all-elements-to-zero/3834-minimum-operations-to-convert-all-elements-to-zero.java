class Solution {
    public int minOperations(int[] nums) {
        int count = 0;
        List<Integer> s = new ArrayList<>();
        for (int a : nums) {
            while (!s.isEmpty() && s.get(s.size() - 1) > a) {
                s.remove(s.size() - 1);
            }
            if (a == 0) continue;
            if (s.isEmpty() || s.get(s.size() - 1) < a) {
                count++;
                s.add(a);
            }
        }
        return count;
    }
}