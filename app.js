var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var clients = require('./routes/clients');

var app = express();
//Setup
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Routes
app.use('/', index);
app.use('/clients', clients);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send('Accenture Test API');
});

module.exports = app;
