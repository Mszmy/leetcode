class Solution:
    def twoSum(self, nums, target) :
        dic=dict()
        for key,values in enumerate(nums):
            sub=target-values
            if sub in dic:
                return [dic[sub],key]
            else:
                dic[values]=key
        
