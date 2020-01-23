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

    static printArr(arr: Array<number>) {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            console.log(' ');
        }
    }

 }

 export default SortTestHelper;