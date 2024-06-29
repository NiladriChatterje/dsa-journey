from typing import List    
      
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
      i:int=0
      j:int=0
      k:int = 0

      new_arr:List[int]=[]

      while i<m and j<n:
        if(nums1[i]<nums2[j]):
          new_arr.append(nums1[i])
          i += 1
        else:  
          new_arr.append(nums2[j])
          j += 1
      
      while(i<m):
         new_arr.append(nums1[i])
         i += 1

      while(j<n):
         new_arr.append(nums2[j])
         j += 1
    
      while(k<len(nums1)):
        nums1[k] = new_arr[k]
        k += 1
   

obj = Solution()
obj.merge([1,2,3,0,0,0],3,[2,5,6],3)
obj.merge([2,0],1,[1],1)
