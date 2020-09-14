import math
from ....python.utilHelper import UtilHelper

def BinarySearchLoop(targetArr, targetElement):
    l = 0
    r = len(targetArr) - 1 # 定义了[l.....r]左闭又闭的查找范围

    while l <= r:
        mid = math.floor((l + r) / 2)
        if targetArr[mid] == targetElement:
            return mid
        if targetArr[mid] > targetElement:   # 如果中间元素大于目标元素说明查找元素在左边
            r = mid - 1
        if targetArr[mid] < targetElement:   # 如果中间元素小于目标元素说明查找元素在右边
            l = mid + 1
        
    return -1


def BinarySearchByRecursion(targetArr, targetElement, left, right):
    l = left
    r = right
    mid = math.floor((l + r) / 2)

    if targetArr[mid] == targetElement:
        return mid
    if l == r:
        return -1
    if targetArr[mid] > targetElement:
        r = mid - 1
    if targetArr[mid] < targetElement:
        l = mid + 1

    return BinarySearchByRecursion(targetArr, targetElement, l, r)



arr = UtilHelper.generalNearlyOrderList(1000000)

index = BinarySearchLoop(arr, 10)

print('循环二分查找索引', index)


# indexR = BinarySearchByRecursion(arr, 3, 0, len(arr) - 1)
# print('递归查找二分索引', indexR)



