/*
 * @Description: 希尔排序 https://www.programiz.com/dsa/shell-sort
 * @Author:
 * @Date: 2020-01-27 18:48:50
 */

import SortHelper from '../Selection-Sort/sortTestHelper';

class ShellSort {
  /**
   * @description: 按照希尔增量将一组元素分组，然后再分别对每组进行插入排序，当元素间隔足够小之后达到排序的目的
   */

  static sort<T>(arr: Array<T>) {
    const n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      // 进行插入排序
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j = i;
        /**
         * 这里需要注意的是比较条件的变化，对于插入排序来说需要从后往前比较，在这个地方由于我们进行了分组每组分别进行插入排序
         * 也就说元素之间隔了gap的间隔，间隔差值就是gap,元素再往回递减的时候就要减去gap
        */
        for (; j >= gap && temp < arr[j - gap]; j -= gap) {
          arr[j] = arr[j - gap];
        }
        arr[j] = temp;
      }
    }
  }
}

const n = 100000;
const arr = SortHelper.generateRandomArray(n, 0, 100000);
// const arr = SortHelper.generateNealyOrderArray(n, 5);
console.time("Shell-sort");
ShellSort.sort<number>(arr);
console.timeEnd("Shell-sort");
SortHelper.printArr(arr);
