// import path from "path"


// const filepath = path.join("class","student","data");
// console.log(filepath);

// console.log(path.basename(filepath));
// console.log(path.dirname(filepath));
// console.log(path.resolve(filepath));
// console.log(path.extname(filepath));
// console.log(path.parse  (filepath));



// now we wil learn the https module 

import http from 'http' // first import http module 

const server = http.createServer((req , res)=>{
switch (req.url) {
    case ("/"):
        res.setHeader("Content-type" , "text/html")
        res.write("<h1> hello this is home page <h1/> ")
        res.end()
        break;
    case ("/about"):
        res.write("hello this is about page ")
        res.end()
        break;

    default:
        res.write("404 Page")
        res.end()
        break;
}
})

server.listen(3000, ()=>{
    console.log("Server is listen on port 3000");
})