const User = require('../models/user')

async function signup(req, res) {
  // get email and password from req body
  const {email, password} = req.body
  
  // create user with data
  await User.create({email, password})

  // response
  res.sendStatus(200);
}

function login(req, res) {

}

function logout(req, res) {

}

module.exports = {
  signup, login, logout
}