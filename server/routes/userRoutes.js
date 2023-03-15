const express = require("express");
const {
  otpGenerator,
}= require("../auth/otpgenerator");
// const {protect}=require("../middleware/authMiddleware");
// const otpValidator = require("../auth/otpValidator");
const {registerUser,authUser,protect}=require("../controllers/userController");
const router = express.Router();
//post routing for creating a new user
router.route("/").post(otpGenerator);
//post route for checking otp
router.route("/validate").post( registerUser);
//post routing for authenticating a user
router.post("/login", authUser);
module.exports = router;
