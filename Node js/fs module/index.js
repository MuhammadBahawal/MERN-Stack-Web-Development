const fs = require("fs");
// fs.writeFile(
//   "hello.txt",
//   "hello this is my first start and i am learning fs module ",
//   (err) => {
//     err
//       ? console.log(err.message, "task not done")
//       : console.log("task successfull");
//   }
// );
// fs.appendFile( "hello.txt", "how are you everyone", (err) => {
//   err
//     ? console.log(err.message, "task not done")
//     : console.log("task successfull");
// });
// fs.rename("hello.txt", "startup.txt", (err) => {
//   err
//     ? console.log(err.message, "task not done")
//     : console.log("task successfull");
// });

// fs.copyFile("startup.txt", "./copy/copy.txt", (err) => {
//   err
//     ? console.log(err.message, "task not done")
//     : console.log("task successfull");
// });

// fs.unlink("hello.txt", (err) => {
//   err
//     ? console.log(err.message, "task not done")
//     : console.log("task successfull");
// });
// fs.readFile("startup.txt", "utf-8", (err, data) => {
//   err ? console.log(err.message, "task not done") : console.log(data);
// });
// fs.rmdir("./copy", { recursive: true }, (err) => {
//   err ? console.log(err.message, "task not done") : console.log("task successfull");
// });
// fs.mkdir("./copy1", (err) => {
//   err ? console.log(err.message, "task not done") : console.log("task successfull");
// });
// fs.rm("./copy1", { recursive: true }, (err) => {
//   err ? console.log(err.message, "task not done") : console.log("task successfull");
// });

// fs.readdir("../Day2", (err, data) =>
//   err
//     ? console.log(" Folder read error:", err.message)
//     : console.log(" Folder contents:", data)
// );

// fs.existsSync("../Day2/index.js")
//   ? console.log(" File exists")
//   : console.log(" File does not exist");

fs.stat("index.js", (err, state) => {
  if (err) {
    //  Error handling ke liye ternary ka use kiya tha, lekin usme multiple lines thi, is wajah se galti ho rahi thi.
    console.log("File not exist:", err.message);
  } else {
    //  Ye block tab chalega jab error nahi hoga. Yahan multiple values print karne ke liye if...else use karna sahi hai.
    console.log("File size:", state.size, "bytes"); // file size
    console.log("Created at:", state.birthtime); // file creation date
    console.log("Last Modified:", state.mtime); // last modified date
    console.log("Is it a file?", state.isFile()); // check if it is a file
    console.log("Is it a directory?", state.isDirectory()); // check if it is a folder
  }
});
