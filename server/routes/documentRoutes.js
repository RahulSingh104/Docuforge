const express = require("express");
const router = express.Router();
const { generateDocument } = require("../controllers/documentController");

router.post("/generate", generateDocument);

module.exports = router;