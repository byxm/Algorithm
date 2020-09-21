/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    // 基本解法以字典做映射统计不同颜色数字出现的次数
    var colors = new Map();
    colors.set(0, 0);
    colors.set(1, 0);
    colors.set(2, 0);
    for (var i = 0; i < nums.length; i++) {
        colors.set(nums[i], colors.get(nums[i]) + 1);
    }
    var index = 0;
    for (var i = 0; i < colors.get(0); i++) {
        nums[index++] = 0;
    }
    for (var i = 0; i < colors.get(1); i++) {
        nums[index++] = 1;
    }
    for (var i = 0; i < colors.get(2); i++) {
        nums[index++] = 2;
    }
}
sortColors([2, 0, 2, 1, 1, 0]);
