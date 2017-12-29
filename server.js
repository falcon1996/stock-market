'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = process.cwd();
var http = require('http');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
require('dotenv').load();

app.use(cookieParser());
//app.set('view engine', 'html');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {                   
    res.sendFile(__dirname + '/public/simple.html');			
});

http.createServer(app).listen(8081, function(){
    console.log("Example of app listning on port 8081");
});
