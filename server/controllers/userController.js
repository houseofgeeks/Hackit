const asyncHandler = require("express-async-handler");
const generateToken = require("../config/token");
const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const fs=require('fs');
const fileContent=fs.readFileSync('index.html');
//creating a new user
const registerUser = asyncHandler(async (req, res) => {
  // const {name,email,password} = req.body
  const { name, email, password } = req.body;
  //if all the fields are empty
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please fill in all the input fields" });
  }

  //if email is already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res
      .status(400)
      .json({ message: "User with this email already exists" });
  }

  //salting the password
  var salt = bcrypt.genSaltSync(10);

  //if there is no error while signing up then a create a new user model
  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, salt),
    team: null,
  });
  //saving the user
  const result = user.save();
  const url = `https://houseofhackers-server.vercel.app/verify/${email}`;
  var transporter = nodemailer.createTransport({
    host: process.env.TRANS_EMAIL,
    port: process.env.TRANS_PORT,
    secure: process.env.BOOL,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.KEY,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verification",
    text: `Please Click on the below URL to verify your email ${url}`,
  };

  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      return res.status(500).json({ message: `Couldn't find email:${email}` });
    } else {
      res
        .status(200)
        .json({ message: `Verification mail has been sent to ${email}` });
    }
  });

  //if the user does not gets registered for any reason
});

//verifying a user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //finding the email
  const userFound = await User.findOne({ email });
  //comparing the password
  if (!userFound) {
    res.status(400).json({ message: "Invalid credentials" });
    return;
  }
  if (
    bcrypt.compareSync(password, userFound.password) &&
    userFound.isVerified
  ) {
    res.status(201).json({
      _id: userFound.id,
      name: userFound.name,
      email: userFound.email,
      isAdmin: userFound.isAdmin,
      password: userFound.password,
      team: userFound.team,
      token: generateToken(userFound.id),
    });
  } else if (!userFound.isVerified) {
    res.status(400).json({ message: "Please verify your email" });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

const verifyUser = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  if (user) {
    user.isVerified = true;
    await user.save();
    res.writeHead(200,{'Content-Type':'text/html'});
    
    res.end(fileContent);
  } else {
    res.status(400).json({ message: "User not found" });
  }
});
module.exports = { registerUser, authUser, verifyUser };
