const User = require("../Models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const generateToken = async function (user) {
  const token = jwt.sign({ _id: user._id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60,
  });
  return token;
};

exports.register = async function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pas username and password" });
  } else {
    console.log(req.body.password);
    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });
    //const token = await generateToken(newUser);
    await newUser.save();
    res.json({
      success: true,
      msg: "successfully created user",
      newUser,
      token,
    });
  }
};

exports.login = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    const token = await generateToken(user);
    if (!isMatch) {
      throw new Error("Unable to login");
    }

    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).send("user not found");
  }
};
exports.authCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, `${process.env.SECRET}`);
    const user = await User.findOne({
      _id: decoded._id,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user; //route handler now will not have to fetch the user account
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};
