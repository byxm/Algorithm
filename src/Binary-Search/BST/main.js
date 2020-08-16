"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var splitWord_1 = require("./splitWord");
var bst_1 = require("./bst");
var bst = new bst_1["default"]();
var text = fs.readFileSync(path.join(__dirname, "./bible.txt")).toString();
var words = splitWord_1.splitWords(text);
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    var res = bst.search(word);
    if (res == null) {
        bst.insert(word, 1);
    }
    else {
        bst.insert(word, res + 1);
    }
}
console.time("统计圣经中 god 出现的次数");
var god = bst.search("god");
console.log("圣经中 god 出现次数", god);
console.timeEnd("统计圣经中 god 出现的次数");
