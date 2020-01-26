/*
 * @Description: 生成测试随机数
 * @Author: 
 * @Date: 2020-01-22 17:54:45
 */


 class SortTestHelper {

    static generateRandomArray(n: number, rangeL: number, rangeR: number): Array<number> {
            const arr = [];
            for(let i = 0; i < n; i++) {
                arr.push(Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL));
            }
            return arr;
    }

    /**
     * @description: 生成近乎有序的数组
     */    
    static generateNealyOrderArray(n: number, swapTime: number = 0) {
        const arr = [];
        // 先生成一组有序数组
        for(let i = 0; i < n; i++) {
            arr.push(i);
        }
        // 在根据无序程度swapTime确定无需的程度,随机对swaptTime对元素交换位置
        for(let i = 0; i < swapTime; i++) {
            const a = Math.floor(Math.random() * i);
            const b = Math.floor(Math.random() * i);
            [arr[a], arr[b]] = [arr[b], arr[a]];
        }
        return arr;
    }

    static printArr(arr: Array<number>) {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            console.log(' ');
        }
    }

 }

 export default SortTestHelper;