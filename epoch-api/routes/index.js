var express = require('express');
var router = express.Router();

var timeRouter = require("./api/time")

/* GET home page. */
router.use("/api/v1", timeRouter);

module.exports = router;
