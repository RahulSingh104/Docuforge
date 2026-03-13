// const express = require("express");
// const router = express.Router();
// const { generateDocument } = require("../controllers/documentController");

// router.post("/generate", generateDocument);

// module.exports = router;


const express = require("express");
const router = express.Router();

const {
  generateDocument,
  downloadDocument,
  migrateDocuments,
  getUserDocuments
} = require("../controllers/documentController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/generate", authMiddleware, generateDocument);

router.get("/download/:id", authMiddleware, downloadDocument);

router.post("/migrate", authMiddleware, migrateDocuments);

router.get("/my-documents", authMiddleware, getUserDocuments);

module.exports = router;