const compressString = (str) => {
  let res = "";
  let count = 1;
  for (let i = 0; i < str.length; i += count) {
    let j = i;
    count = 1;
    let curStr = str.charAt(j);
    let nextStr = str.charAt(j + 1);
    while (curStr === nextStr) {
      count++;
      j++;
      curStr = str.charAt(j);
      nextStr = str.charAt(j + 1);
    }
    res += `${count}${curStr}`;
  }
  return res;
};

console.log(compressString("aaabbcdefffg").replace(/1/g, ''));
