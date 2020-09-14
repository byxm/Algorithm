import random

class UtilHelper():

    # 生成近乎有序的列表，先初始化顺序序列，然后根据交换频次随机交换两个索引的位置
    @staticmethod
    def generalNearlyOrderList(n, swapTime = 0):
        elementList = []
        for num in range(n):
            elementList.append(num) 
        if swapTime > 0:
            for st in range(swapTime):
                firstIndex = random.randint(0, n)
                secondIndex = random.randint(0, n)
                elementList[firstIndex], elementList[secondIndex] = elementList[secondIndex], elementList[firstIndex]
            
            print('生成的随机数组', elementList)



        







