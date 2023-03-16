const asyncHandler = require("express-async-handler");
const generateToken = require("../config/token");
const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
// const fs=require('fs');

// const fileContent=fs.readFileSync('index.html');
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
    html: `<!DOCTYPE html><html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Document</title> </head> <body> <p style="text-align: center; font-family: 'candara', sans-serif"> <span style="font-size: 20px; font-weight: bold">Welcome to</span> <br /><b style=" font-size: xx-large; color: rgba(240, 26, 133, 0.766); font-family: monospace; " >House of Hackers Hackathon 2023!</b ><br /><br /> We are excited to have you join us for this electrifying event. <b>House of Hackers</b> promises to be an experience like no other. </p> <p style="font-family: 'candara', sans-serif; text-align: center"> We look forward to welcoming you to the Indian Institute of Information Technology, Ranchi, and witnessing your ideas come to life. </p> <p style=" text-align: center; font-size: 20px; font-family: 'candara', sans-serif; " > Please click on this link to verify your account <b style="font-weight: bolder; font-size: 24px" ><a href=${url}><button style=" background-color: rgba(240, 26, 133, 0.766); border-radius: 12px; padding: 8px 16px; border: none; outline: none; color: black; cursor: pointer;" >Verify</button></a></b > </p> <p style="font-family: 'candara', sans-serif"> Thank you for your cooperation, and we look forward to seeing you at the hackathon. If you have any questions or concerns, please do not hesitate to reach out📨 to us. <br /> <br /> Get ready to hack🧑‍💻 your way to success🎖️! <br /> <br /> <span style="color: #a8a6a6">Best regards,</span> <br /> House of Geeks, Technical Society <br /> Indian Institute of Information Technology, Ranchi </p> </body></html>`,
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
    // res.writeHead(200,{'Content-Type':'text/html'});
    res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="refresh" content="1 ;url=https://houseofhackers.vercel.app/verify"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .main_div {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: rgb(0, 40, 134);
            height: 100vh;
          }
          button {
            background-color: white;
            border-radius: 12px;
            padding: 8px 16px;
            border: none;
            outline: none;
            color: black;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="main_div">
          <h1>Verified Successfully</h1>
          <a href="https://houseofhackers.vercel.app/login"
            ><button>Back to home</button></a
          >
        </div>
      </body>
    </html>
    `);

    // res.end(fileContent);
  } else {
    res.status(400).json({ message: "User not found" });
  }
});
module.exports = { registerUser, authUser, verifyUser };
