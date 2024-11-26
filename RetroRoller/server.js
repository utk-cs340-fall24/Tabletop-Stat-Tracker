var http = require('http');
const util = require('util');
const WebSocket = require('ws');
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
            res.writeHead(302, { 'Location': '/startup/welcome.html' });
            return res.end();
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
})

const wss = new WebSocket.Server({ server });
class PostCard {
    constructor(code, ip, icon, name, attributes = {}, items = []) {
        this.Code = code;
        this.IP = ip;
        this.Icon = icon;
        this.Name = name;
        this.Attributes = attributes;
        this.Items = items;
    }
}
wss.on('connection', function connection(ws) {
    console.log("New client connected! on " + ws._socket.remoteAddress);
    ws.id = ws._socket.remoteAddress;

    ws.on("message", data => {
        //console.log(`Recieved Signal ${data} from ${ws._socket.remoteAddress}`);
        if (data == 0) {
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(1);
                }
            });
        }
        else if (data == 1) {
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    const Test = new PostCard(1, ws._socket.remoteAddress, 0, "");
                    Letter = JSON.stringify(Test);
                    //console.log(Letter);
                    client.send(Letter);
                    client.send(1);
                }
            });
        }
        else if (data == 2) {
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    const Test = new PostCard(2, ws._socket.remoteAddress); // UTILITY CARD
                    Letter = JSON.stringify(Test);
                    //console.log(Letter);
                    client.send(Letter);
                }
            });
        }
        else if (data == -1) {
            process.exit(1);
        }
        else {
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    IPadd = JSON.parse(data);
                    IPadd.IP = ws._socket.remoteAddress;
                    data = JSON.stringify(IPadd);
                    client.send(data);
                }
            });
        }
    });

    ws.on('close', () => {
        console.log("Client has disconnected! " + ws._socket.remoteAddress);
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                const Test = new PostCard(2, ws._socket.remoteAddress);
                Letter = JSON.stringify(Test);
                //console.log(Letter);
                client.send(Letter);
            }
        });
    });
});


server.listen(8000, '0.0.0.0');

dns.lookup(os.hostname(), options, (err, addr) => {
    if (err) {
        console.error(err);
    } else {
        let temp = addr;
        let log_dump = 'Server Started at http://' + temp + ':8000 . Address has been copied to clipboard. Have fun!'
        console.log(log_dump);
        require('child_process').spawn('clip').stdin.end(util.inspect("http://" + temp + ":8000"));
    }
});