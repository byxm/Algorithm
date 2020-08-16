import * as fs from "fs";
import * as path from "path";
import { splitWords } from "./splitWord";
import BST from "./bst";

const bst = new BST();
const text = fs.readFileSync(path.join(__dirname, "./bible.txt")).toString();
const words = splitWords(text);
for (const word of words) {
  const res = bst.search(word);
  if (res == null) {
    bst.insert(word, 1);
  } else {
    bst.insert(word, res + 1);
  }
}

console.time("统计圣经中 god 出现的次数");
const god = bst.search("god");
console.log("圣经中 god 出现次数", god);

console.timeEnd("统计圣经中 god 出现的次数");
