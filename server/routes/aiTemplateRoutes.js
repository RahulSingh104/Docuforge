const express = require("express");
const router = express.Router();

const { createTemplateWithAI } = require("../controllers/aiTemplateController");

const authMiddleware = require("../middleware/authMiddleware");


router.post("/create-template",authMiddleware, createTemplateWithAI);

module.exports = router;