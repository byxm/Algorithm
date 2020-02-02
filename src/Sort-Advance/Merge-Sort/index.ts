/*
 * @Description: 归并排序
 * @Author: 
 * @Date: 2020-01-29 11:25:22
 */
 import SortHelper from '../../Sort-Basic/Selection-Sort/sortTestHelper';
 import InsertSort from '../../Sort-Basic/Insert-Sort/index'


class MergeSort {

    /**
     * @description: 归并操作：在这一步的排序里面需要要维持三个索引，存放排序数组的索引，左半部分当前元素索引和右半部分当前元素索引
     */    
    static merge<T>(arr: Array<T>, l: number, mid: number, r: number) {
        const aux = [];
        // 根据当前元素的左右位置拷贝到新的数组里面
        for(let i = l; i < r + 1; i++) {
            aux.push(arr[i]);
        }
        
        let i = l, j = mid + 1;
        for(let k = i; k <= r; k++) {
            if(i > mid) {// 此时证明左边部分比较完毕，填入右边剩余的元素
                arr[k] = aux[j - l];
                j++;
            }else if(j > r) {// 此时右边元素比较完毕，填入左边剩余的元素
                arr[k] = aux[i - l];
                i++
            }else if(aux[i - l] < aux[j - l]) {// 按照从小到大的顺序放入元素
                arr[k] = aux[i - l];
                i++;
            }else {
                arr[k] = aux[j - l];
                j++;
            }
        }
    }

    /**
     * @description: 思路：归并排序是利用二分法先将一组数据不停地左右划分，直到每个部分只剩下一个元素，那么它必然是有序。
     * 然后在反向左右合并两边的元素。这种分离的方式类似于一颗完全二叉树，完全二叉树的二分操作时间复杂度是logn，合并排序是n
     * 所以能够达到nlogn的时间复杂度
     */
    static sort<T>(arr: Array<T>, l: number, r: number) {

        // 终止条件，左边界不能超过右边界
        /**
         * 这个地方有个优化我就没写了，如果数组元素比较小，比如10以内的话就直接可以使用插入排序了
         * 因为元素越少说明有序的可能就越大，那么使用插入排序效率就更高
         * pseudo code:
         * if(r - l < 15) { InsertSort(arr); return; }
        */
        if(l >= r) {
            return;
        }

        // 左右二分递归，将一组元素二分成单个元素
        const mid = Math.floor((l + r) / 2);
        this.sort(arr, l, mid);
        this.sort(arr, mid + 1, r);
        if(arr[mid] < arr[mid + 1]) {// 如果arr[mid]小于arr[mid + 1]说明归并的数组本生就是有序的了，因为左子数组和右子数组都是已经排好序了的
            this.merge<T>(arr, l, mid, r);
        }
    }

    /**
     * @description: 自底向上的归并排序，这种方式就是先将元素进行分组排序，先两个一组，再4个一组，再8个一组....依次下去
     * 这种就需要再去递归分隔元素了，直接向上归并然后合并数组
     */    
    static sortBU<T>(arr: Array<T>) {
        const n = arr.length;
        for(let sz = 1; sz <= n; sz *= 2) {
            for(let i = 0; i + sz < n; i+= (sz * 2)) {// 这里要考虑越界情况，左边界不能越界
                this.merge<T>(arr, i, i + sz - 1, Math.min(i + (sz * 2) - 1, n - 1)); // 右边界不能越界
            }
        }
    }

}


const n = 3;
const arr = SortHelper.generateRandomArray(n, 0, 3);
// const arr = SortHelper.generateNealyOrderArray(n, 10);
// console.time('Merge-sort');
// MergeSort.sort(arr, 0, arr.length - 1);
// console.timeEnd('Merge-sort');

console.time('Merge-advanceSort');
MergeSort.sortBU(arr);
console.timeEnd('Merge-advanceSort');

SortHelper.printArr(arr);