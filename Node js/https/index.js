const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url =="/") {
        res.write("<h1>Welcome to Home Page</h1>");
    } else if (req.url == '/about') {
    res.write("this is about page")
            
    }
    else{
       res.write("$04 page not found")
    }
    res.end();

});
server.listen(2000,()=>{
    console.log("Server is running on port http://localhost:2000");
    
})