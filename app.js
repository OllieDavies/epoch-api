var express = require('express');
var logger = require('morgan');

var authenticationMiddleware = require("./middleware/authentication")
var prometheusMiddleware = require("./middleware/prometheus")
var apiRouter = require('./routes/api');

var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());

// Custom middlewares
app.use(authenticationMiddleware)
app.use(prometheusMiddleware)

// Routes
app.use('/api', apiRouter);

module.exports = app;
