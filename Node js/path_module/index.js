const path = require('path')

const file = path.basename("./path_module/index.js")
console.log(file);

const dir = path.dirname("./Path_name/index.js")
console.log(dir);
const ext = path.extname("./Path_name/index.js")
console.log(ext);
const fullpath = path.join("public","upload","index.js")
console.log(fullpath);
const abc = path.resolve("index.js")
console.log(abc);


