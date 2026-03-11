// const express = require("express");
// const router = express.Router();
// const { generateDocument } = require("../controllers/documentController");

// router.post("/generate", generateDocument);

// module.exports = router;


const express = require("express");
const router = express.Router();

const {
  generateDocument,
  downloadDocument
} = require("../controllers/documentController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/generate", authMiddleware, generateDocument);

router.get("/download/:id", authMiddleware, downloadDocument);

module.exports = router;