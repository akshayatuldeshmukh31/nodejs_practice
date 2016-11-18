var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var dbRouter = require('./DB/dbRouter')

app.use(bodyParser.urlencoded({extended: false}));
app.use('/mongo', )
app.get('/', function(req, res){
	console.log('Received GET request');
	res.send('You have reached the index...');
});

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Server running at " + host + ":" + port)
});