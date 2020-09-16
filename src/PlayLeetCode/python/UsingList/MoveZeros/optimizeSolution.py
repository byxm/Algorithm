class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        # 空间复杂度O(1)解法，当遍历到不为0的数字和为0的元素交换位置
        # 保证在[0, k)区间内的元素都不为0
        # 在[k,i]的元素为0

        notZeroIndex = 0
        for i in range(0, len(nums)):
            if nums[i] != 0:
                if notZeroIndex != i:
                    nums[i],nums[notZeroIndex] = nums[notZeroIndex],nums[i]
                    notZeroIndex += 1
                else:
                    notZeroIndex += 1
                        
                        