/**
 * Created by PhpStorm.
 * User: marcelo.teixeira
 * Date: 19/01/16
 * Time: 1:56
 * This is Server
 */

var http = require('http');
var express = require('express');
var app = express();
var fs =  require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.end('test server\n');
});
console.log('Server running at http://localhost:8080/');

// Add headers for access client
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // Pass to next layer of middleware
    next();
});
app.get('/read-json', function(req, res) {
    fs.readFile('./js/data/prods.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(obj);

    });
});
app.listen(80);
console.log('Listening on port 8080...')
