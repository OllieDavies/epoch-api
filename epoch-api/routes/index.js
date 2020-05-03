var express = require('express');
var router = express.Router();

var timeRouter = require("./api/time").router;

/* GET home page. */
router.use("/api/v1/time", timeRouter);

module.exports = router;
