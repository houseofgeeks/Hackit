const express = require("express");

// const {protect}=require("../middleware/authMiddleware");
// const otpValidator = require("../auth/otpValidator");
const {registerUser,authUser,verifyUser}=require("../controllers/userController");
const router = express.Router();
//post routing for creating a new user
router.route("/").post(registerUser);
//post route for checking otp
// router.route("/validate").post( registerUser);
//post routing for authenticating a user
router.post("/login", authUser);
router.route("/:email").get(verifyUser);
module.exports = router;
