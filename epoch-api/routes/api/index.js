var express = require('express');
var router = express.Router();

var timeRouter = require("./time").router;

/* Time router */
router.use("/v1/time", timeRouter);

module.exports = router;
