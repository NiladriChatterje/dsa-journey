class Solution {
    public int nonSpecialCount(int l, int r) {
        // Calculate the limit up to which we need to find prime numbers
        int lim = (int) Math.sqrt(r);
        boolean[] isPrime = new boolean[lim + 1];
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false;
        for (int i = 2; i * i <= lim; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= lim; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        int specialCount = 0;
        for (int i = 2; i <= lim; i++) {
            if (isPrime[i]) {
                int square = i * i;
                if (square >= l && square <= r) {
                    specialCount++;
                }
            }
        }
        int totalCount = r - l + 1;

        return totalCount - specialCount;
    }
}