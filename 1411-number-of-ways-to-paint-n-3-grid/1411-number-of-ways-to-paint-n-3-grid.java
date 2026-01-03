class Solution {
    private static final int MOD = (int)1e9 + 7;
    
    private static class Matrix {
        int[][] data;
        
        Matrix(int rows, int cols) {
            data = new int[rows][cols];
        }
        
        static Matrix multiply(Matrix A, Matrix B) {
            int m = A.data.length;
            int n = A.data[0].length;
            int p = B.data[0].length;
            
            Matrix C = new Matrix(m, p);
            
            for (int i = 0; i < m; i++) {
                for (int k = 0; k < n; k++) {
                    if (A.data[i][k] == 0) continue;
                    for (int j = 0; j < p; j++) {
                        C.data[i][j] = (int)((C.data[i][j] + (long)A.data[i][k] * B.data[k][j]) % MOD);
                    }
                }
            }
            
            return C;
        }
        
        static Matrix power(Matrix M, int n) {
            Matrix ans = identity();
            Matrix P = new Matrix(M.data.length, M.data[0].length);
            
            for (int i = 0; i < M.data.length; i++) {
                for (int j = 0; j < M.data[0].length; j++) {
                    P.data[i][j] = M.data[i][j];
                }
            }
            
            for (; n > 0; n >>= 1) {
                if ((n & 1) == 1) {
                    ans = multiply(ans, P);
                }
                P = multiply(P, P);
            }
            
            return ans;
        }
        
        static Matrix identity() {
            Matrix I = new Matrix(2, 2);
            I.data[0][0] = 1;
            I.data[1][1] = 1;
            return I;
        }
    }
    
    public int numOfWays(int n) {
        if (n == 1) return 12;
        
        Matrix M = new Matrix(2, 2);
        M.data[0][0] = 3;
        M.data[0][1] = 2;
        M.data[1][0] = 2;
        M.data[1][1] = 2;
        
        Matrix A = Matrix.power(M, n - 1);
        
        long sum = ((long)A.data[0][0] + A.data[0][1] + A.data[1][0] + A.data[1][1]) % MOD;
        return (int)(6L * sum % MOD);
    }
}