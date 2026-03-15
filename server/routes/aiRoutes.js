const express = require("express");
const router = express.Router();

const { generateAIContent } = require("../controllers/aiController");

router.post("/generate", generateAIContent);

module.exports = router;