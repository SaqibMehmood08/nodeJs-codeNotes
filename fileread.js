//use non blocking request or aysnc pattren 
const { readFileSync, writeFileSync } = require("fs");

const firstfile = readFileSync("./text file/subfolder/textone.txt", "utf8");
const firstfiletwo = readFileSync("./text file/subfolder/textstwo.txt", "utf8");
console.log(firstfile, firstfiletwo);
writeFileSync(
  "./text file/result.txt",
  `here is the result ${firstfile} ,${firstfiletwo}`,
  { flag: "a" }
);
const { readFile } = require("fs");

readFile("./text file/subfolder/textone.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
