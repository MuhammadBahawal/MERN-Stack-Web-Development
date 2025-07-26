console.log("we learn the node js ")

console.log(__dirname);    // current folder ka path
console.log(__filename);   // current file ka full path
console.log(process);      // system info


const add = require("./demo")
console.log(add(4,5))
// module import