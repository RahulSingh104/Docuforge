const express = require("express");
const router = express.Router();
const { getPublicDocument } = require("../controllers/publicController");
const Template = require("../models/Template");

router.get("/doc/:id", getPublicDocument);
router.get("/template/:name", async (req, res) => {
  try {

    const template = await Template.findOne({
      name: req.params.name
    });

    if(!template){
      return res.status(404).json({message:"Template not found"});
    }

    res.json(template);

  } catch (error) {

    console.error("Template fetch error:", error);

    res.status(500).json({
      message:"Server error"
    });

  }
});

module.exports = router;