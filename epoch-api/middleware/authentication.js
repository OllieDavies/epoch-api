const apiKey = require("../config.js").API_KEY

module.exports = function(req, res, next){
  // Check api key in authorization header is correct
  if(req.headers && req.headers.authorization === apiKey){
    return next()
  }

  // Return HTTP 403
  return res.status(403).send()
}