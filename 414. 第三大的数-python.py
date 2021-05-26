class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        # 先去重
        nums = list(set(nums))
        nums.sort()
        if len(nums)<3:
            return nums[-1]
        else:
            return nums[-3]
