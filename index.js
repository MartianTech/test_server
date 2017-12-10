var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var config = require('./config.json');
bodyParser = require('body-parser');

// middleware to handle request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router module
var balance = require('./balance');
app.use('/balance', balance);

app.listen(port);
console.log('RESTful API server started on: ' + port);
