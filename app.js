#!/usr/bin/env node

var express = require('express');
var app = express();
var port = 8086;

app.use('/libs', express.static(__dirname + '/libs'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/views', express.static(__dirname + '/views'));

app.get('/', function(req, res){
	res.render('tiny-pubsub.ejs');
});

app.listen(port);
console.log('Express http server is listening at localhost:' + port + ' ...');

