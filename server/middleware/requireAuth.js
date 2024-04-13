const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  console.log("in middleware");
  next()
}

module.exports = requireAuth;