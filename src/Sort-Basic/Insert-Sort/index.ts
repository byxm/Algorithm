/*
 * @Description: 插入排序法
 * @Author: 
 * @Date: 2020-01-26 11:12:13
 */
import SortHelper from '../Selection-Sort/sortTestHelper';


export default class InsertSort<T> {

    /**
     * @description: 插入排序法，思路就像是整理手中的扑克牌一样，每次拿到一个新的数据就往前进行比较如果不符合条件就交换位置
     * 这种方式的优点就在于，内层循环的逻辑并不会执行n次，当满足条件后就退出了。所以如果对于一个近乎有序的数据来说插入排序法
     * 的时间复杂度接近于O(n)
     */
    static sort<T>(arr: Array<T>) {
        for(let i = 1; i < arr.length; i++) {
            // 写法一：
            // for(let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            //     /**
            //      * 这里印证了我的一个猜想，因为我使用的是js的解构赋值，看起来也只有一次赋值操作，实际上解构赋值
            //      * 只是将那三次操作简化了写法而已，实际上肯定还是没有一次赋值快的
            //     */
            //         this.swap(arr, j, j - 1);
            // }

            // 写法二：这是一个优化的写法，为了避免交换时候的三次赋值。为了达到一次赋值的目的，只需要再每次满足条件的时候记录下索引
            // 然后在最后一次交换的时候在该索引处赋值即可
            let e = arr[i];
            let j = i;
            for(; j > 0 && e < arr[j - 1]; j--) {
                    arr[j] = arr[j-1];
            }
            arr[j] = e;
        }
    }

    static swap(args, minIndex: number, index: number) {
        [args[minIndex], args[index]] = [args[index], args[minIndex]];
      }

}

const n = 100000;
// const arr = SortHelper.generateRandomArray(n, 0, 100000);
const arr = SortHelper.generateNealyOrderArray(n, 5);
console.time('Insert-sort');
InsertSort.sort(arr);
console.timeEnd('Insert-sort');
// SortHelper.printArr(arr);