class Solution:
    def minimumDeletions(self, s: str) -> int:
        cntA, ans=0, 0
        for c in s[::-1]:
            if c=='a': cntA+=1
            else: ans=min(ans+1, cntA)
        return ans
        