var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', handleRoot);

function handleRoot(req, res){
  res.send({
    epoch: Math.floor(new Date().getTime() / 1000)
  })
}

module.exports = { 
  router, 
  handlers: {
    handleRoot
  }
};
