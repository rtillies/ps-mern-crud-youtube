const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
  } catch (e) {
    // probably duplicate email
    console.log(e.message);
    res.sendStatus(400); // Bad Request
  }
}

async function login(req, res) {
  try {
    // get email and password from req body
    const { email, password } = req.body;

    // find user with email
    // if no user, return error
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(401); // unauthorized

    // compare passwords
    // if passwords do not match, return error
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401); // unauthorized

    // create jwt token
    // const exp = Date.now() + 1000 * 5 // 5 seconds
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // 30 days
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    // set cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    // send token
    // res.json({token})
    res.sendStatus(200); // ok
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

function logout(req, res) {
  try {
    res.clearCookie("Authorization");
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
}

function checkAuth(req, res) {
  try {
    console.log(req.user);
    res.sendStatus(200);
  } catch (error) {
    console.log(e);
    res.sendStatus(400);
  }
}

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};
