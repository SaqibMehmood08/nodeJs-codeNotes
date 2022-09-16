
const path = require("path");
console.log(path.sep);
const filepath = path.join("/text file/text.js");
console.log(filepath);
const base = path.basename(filepath);
console.log(base);
const pathresult = path.resolve(__dirname, "/text file/text.js");
console.log(pathresult);
