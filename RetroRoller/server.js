var http = require('http');
const util = require('util');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
var fs = require('fs');
const dns = require('node:dns');
const os = require('node:os');
const options = { family: 4 };
function makeid(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

//var player_token_bool = 0;
//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//});
//rl.question(`Player Tokens? (Y/N) `, answer => {
//    if (answer == 'Y') {
//        player_token_bool = 1;
//        rl.close();
//    }
//    else if (answer == 'N') {
//        rl.close();
//    }
//    else {
//        console.log('Improper Input');
//    }
//});

console.log("Starting Server...")
const tokens = {
    host: makeid(5),
    player: makeid(5),
};
const jsonData = JSON.stringify(tokens);
fs.writeFile("./web/startup/tokens.json", jsonData, function (err, result) {
    if (err) console.log('error', err);
});
console.log("Host Token: " + tokens.host);
console.log("Player Token: " + tokens.player);
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
        let temp = addr;
        let log_dump = 'Server Started at http://' + temp + ':8000/startup/welcome.html . Address has been copied to clipboard. Have fun!'
        console.log(log_dump);
        require('child_process').spawn('clip').stdin.end(util.inspect("http://" + temp + ":8000/startup/welcome.html"));
    }
});




