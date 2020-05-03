var express = require('express');
var logger = require('morgan');

var authenticationMiddleware = require("./middleware/authentication")
var prometheusMiddleware = require("./middleware/prometheus")
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(authenticationMiddleware)
app.use(prometheusMiddleware)
app.use('/', indexRouter);

module.exports = app;
