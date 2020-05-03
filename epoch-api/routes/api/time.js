var express = require('express');
var router = express.Router();

/* GET root */
router.get('/', handleRoot);

// Return epoch seconds as json object
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
