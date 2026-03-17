const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const {  loginUser ,verifyOtp,sendOtp} = require("../controllers/authController");


const rateLimit = require("express-rate-limit");

const otpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: "Too many OTP requests, please try again later"
});

 // Send OTP for registration
router.post(
  "/send-otp",
  otpLimiter,
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  sendOtp
); 

router.post("/login", loginUser);

router.post("/verify-otp", verifyOtp);


module.exports = router;