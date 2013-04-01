var fileServer = require('node-static');
var http = require('http');

var file = new (fileServer.Server)('./client');

http.createServer(function (request, response) {
	if (request.url == "/") {
		file.serveFile('/index.htm', 200, {}, request, response);
	}
	else {
		file.serve(request, response);
	}
}).listen(80);