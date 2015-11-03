#!/usr/bin/env node

var express = require('express');
var app = express();
var port = 8086;

app.use('/libs', express.static(__dirname + '/libs'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/views', express.static(__dirname + '/views'));

app.all('*', function(req, res, next){
	res.locals = {
		tinyPSPath: 'dist',
		testFilePath: 'views/tiny-pubsub_test.js'
	};
	next();
});

app.get('/', function(req, res){
	res.render('tiny-pubsub.ejs');
});

app.listen(port);
console.log('Express http server is listening at localhost:' + port + ' ...');

