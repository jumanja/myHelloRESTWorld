/*
* myHelloRESTWorld - jumanja
*/

//Dependencies
var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){

  var parsed   = url.parse(req.url,true);
  var path     = parsed.pathname.toLowerCase();
  var method   = req.method.toLowerCase();

  path = (path.charAt(path.length-1) == "\\" ? path.charAt(path.length-1) : path);

  if(path == "/hello" && method == "post"){
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end('{"message": "Hello REST World using method POST"}');
  };
})

server.listen(7373,function(){
  console.log("Server running in 7373");
})
