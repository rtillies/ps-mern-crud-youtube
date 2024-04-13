const bcrypt = require("bcryptjs");
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

function login(req, res) {}

function logout(req, res) {}

module.exports = {
  signup,
  login,
  logout,
};
