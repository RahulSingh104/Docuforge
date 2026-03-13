const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const {  loginUser ,verifyOtp,sendOtp} = require("../controllers/authController");

 // Send OTP for registration
router.post(
  "/send-otp",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  sendOtp
); 

router.post("/login", loginUser);

router.post("/verify-otp", verifyOtp);


module.exports = router;