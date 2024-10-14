var WebSocketServer = require('websocket').server;

var http = require('http');
var url = require('url');
var fs = require('fs');
console.log("Starting Server...")
var server = http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "./resources/web" + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        if (filename.endsWith('.html')) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
        }
        else if (filename.endsWith('.css')) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
        }
        res.write(data);
        return res.end();
    });
}).listen(8000, '0.0.0.0');

console.log("Server Started on Port 8000. Have fun!")

