var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

var server = app.listen(<%= 3000 + Math.floor(Math.random() * 7000) %>, function() {
	console.log('Express server listening on port ' + server.address().port);
});
