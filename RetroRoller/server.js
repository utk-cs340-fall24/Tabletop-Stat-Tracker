var http = require('http');
const util = require('util');
var fs = require('fs');
const dns = require('node:dns');
const os = require('node:os');
const options = { family: 4 };


console.log("Starting Server...")
function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

let host_token = makeid(5);
console.log("Host Token: " + host_token);
let player_token = makeid(5);
console.log("Player Token: " + player_token);
var server = http.createServer(function (req, res) {
    var q = require('url').parse(req.url, true);
    var filename = "./web" + q.pathname;
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

dns.lookup(os.hostname(), options, (err, addr) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server Started at http://${addr}:8000/startup/welcome.html . Address has been copied to clipboard. Have fun!`)
        require('child_process').spawn('clip').stdin.end(util.inspect(`http://${addr}:8000/startup/welcome.html`));
    }
});




