var express = require('express');
var app = express()
var morgan = require('morgan');

app.use(express.static('public'));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/views/index.html');
}).listen(8000)