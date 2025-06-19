const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res)=>{
  if(req.url==="/"){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = fs.readFileSync(path.join(__dirname,'./tools/index.html'));
    res.end(html);
  }
  else{
    res.writeHead(404);
    res.end(JSON.stringify({message:"invalid route!!"}));
  }
})

server.listen(3000, ()=>{
  console.log("server is running at port 3000");
})
