const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const { registerUser, loginUser } = require("../controllers/authController");

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  registerUser
);
router.post("/login", loginUser);

module.exports = router;