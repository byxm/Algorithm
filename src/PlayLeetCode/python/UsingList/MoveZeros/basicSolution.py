class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nonZerosList = []
        for originNum in nums:
            if originNum:
                nonZerosList.append(originNum)
        for i in range(len(nonZerosList), len(nums)):
            nonZerosList.append(0)
        for i in range(0, len(nums)):
            nums[i] = nonZerosList[i]


solute = Solution()
solute.moveZeroes([0,1,0,3,12])