'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = process.cwd();
var http = require('http');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var yahooFinance = require('yahoo-finance');

var app = express();
require('dotenv').load();

app.use(cookieParser());
//app.set('view engine', 'html');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/myapi', function(req, res) {    
    
    //res.sendFile(__dirname + '/public/simple.html');
    /*
    yahooFinance.historical({
        symbol: 'AAPL',
        from: '2017-01-01',
        to: '2017-12-30',
        period: 'm'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
        console.log(quotes);
        res.send(quotes);
    });
    */
    console.log('Got it!');
    res.json({insert: "success"});
    
});

http.createServer(app).listen(8081, function(){
    console.log("Example of app listning on port 8081");
});
