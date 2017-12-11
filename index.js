var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
bodyParser = require('body-parser');

// middleware to handle request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router module
var balance = require('./src/balance');
app.use('/balance', balance);

var general = require('./src/general');
app.use('/general', general);

app.listen(port);
console.log('RESTful API server started on: ' + port);
