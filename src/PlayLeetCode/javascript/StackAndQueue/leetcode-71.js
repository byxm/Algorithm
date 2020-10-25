/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathData = path.split("/");
  const stack = [];
  for (let i = 0; i < pathData.length; i++) {
    if (pathData[i] !== "" && pathData[i] !== ".." && pathData[i] !== ".") {
      stack.push(pathData[i]);
    }
    if (pathData[i] === "..") {
      stack.pop();
    }
  }
  stack[0] = `/${stack[0] || ''}`;
  return stack.join("/");
};

console.log(simplifyPath("/a//b////c/d//././/.."));
