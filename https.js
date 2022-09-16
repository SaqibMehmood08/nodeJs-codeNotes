// https
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page ");
  }
  if (req.url === "/about") {
    res.end(`
   <h1>oops</h1> 
  <a href="/">Home return</a>`);
  }
});
server.listen(5000);
