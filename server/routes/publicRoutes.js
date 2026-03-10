const express = require("express");
const router = express.Router();
const { getPublicDocument } = require("../controllers/publicController");

router.get("/doc/:id", getPublicDocument);

module.exports = router;