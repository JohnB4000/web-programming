var http = require("http");

var svr = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World");
}).listen(8080);