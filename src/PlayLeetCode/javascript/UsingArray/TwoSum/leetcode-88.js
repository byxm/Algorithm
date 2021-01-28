function mergeTwoArray(num1, num2) {
    const retArray = []
    let l = 0;
    let r = 0;
    for(let i = 0; i < num1.length; i++) {
        if(num1[l] > num2[r]) {
            retArray.push(num2[r])
            r++
        }
        if(num1[l] < num2[r]) {
            retArray.push(num1[l])
            l++
        }
        if(num1[l] === num2[r]) {
            retArray.push(num1[l])
            retArray.push(num2[r])
            l++
            r++
        }
    }
    return retArray
}


console.log('mergeTwoArray', mergeTwoArray([1,3,8,45,56], [2,4,8,10,88]));






