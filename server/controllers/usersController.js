const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

async function signup(req, res) {
  try {
    // get email and password from req body
    const { email, password } = req.body;

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // create user with data
    await User.create({ email, password: hashedPassword });

    // response
    res.sendStatus(200); // OK
  } catch (e) { // probably duplicate email
    console.log(e.message);
    res.sendStatus(400); // Bad Request
  }
}

async function login(req, res) {
  // get email and password from req body
  const { email, password } = req.body;

  // find user with email
  // if no user, return error
  const user = await User.findOne({email})
  if (!user) return res.sendStatus(401) // unauthorized
  
  // compare passwords
  // if passwords do not match, return error
  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) return res.sendStatus(401) // unauthorized
  
  // create jwt token
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // 30 days
  const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

  // send token
  res.json({token})
}

function logout(req, res) {}

module.exports = {
  signup,
  login,
  logout,
};
