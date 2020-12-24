// 将 '10000000000' 形式的字符串，以每 3 位进行分隔展示 '10.000.000.000'


function splitStr(str, splitNum) {
    const strArr = str.split('');
    const arr = [];
    let splitFreq = 0;
    while(strArr.length) {
        const lastEle = strArr.pop();
        arr.unshift(lastEle)
        if(splitFreq === splitNum - 1) {
            arr.unshift('.')
            splitFreq = 0;
        }else {
            splitFreq++
        }
    }
   return arr.join('');
}

console.log(splitStr('8977000000000088771121', 3));


