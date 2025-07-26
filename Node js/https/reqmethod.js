const http = require("http");

let server = http.createServer((req, res) => {
    res.setHeader('Content-Type',"text/html")
  if (req.url == "/" && req.method === "GET") {
    res.statusCode == 200;
    res.write("<h1>Welcome to home page</h1>");
  } else if (req.url == "/about" && req.method == "POST") {
    res.statusCode == 200;
    res.write("<h1>Data send to about page</h1>");
  } else {
    res.statusCode == 404;
    res.write("<h1>404 paage not found</h1>");
  }
  res.end();
});
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
