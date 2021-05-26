class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            count = nums.count(nums[i])
            if count ==1 :
                return nums[i]

