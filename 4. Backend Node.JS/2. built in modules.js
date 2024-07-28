// built in module - file system

const fs = require("fs");
let text = fs.readFileSync("read.txt", "utf-8");
text = text.replace("reading", "writing");

console.log("contents in file are : ");
console.log(text);

console.log("creating a new file ");
fs.writeFileSync("write.txt", text);