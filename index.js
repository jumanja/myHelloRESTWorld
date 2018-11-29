/*
* myHelloRESTWorld - jumanja
*/

//Dependencies
var http = require('http');
var server = http.createServer(function(req,res){
  res.end('Hello REST World\n');
})

server.listen(7373,function(){
  console.log("Server running in 7373");
})
