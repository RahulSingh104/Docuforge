const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { bulkGenerate } = require("../controllers/bulkController");

router.post("/generate", upload.single("file"), bulkGenerate);

module.exports = router;