const express = require("express");
const router = express.Router();

const { createTemplateWithAI } = require("../controllers/aiTemplateController");

router.post("/create-template", createTemplateWithAI);

module.exports = router;