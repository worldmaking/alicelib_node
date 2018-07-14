const { exec, execSync, spawn, spawnSync, fork } = require('child_process')
const ip = require('ip')


var http = require("http"), terminal = require("web-terminal");
 
    var app = http.createServer(function (req, res) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello World\n");
    });
    
    app.listen(1337);
    console.log("Server running at http://127.0.0.1:1337/");
    
    terminal(app);
    console.log('Web-terminal accessible at http://' + ip.address() + ':8088/terminal');