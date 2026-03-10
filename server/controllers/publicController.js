const Document = require("../models/Document");

exports.getPublicDocument = async (req, res) => {

  try {

    const document = await Document.findOne({
      publicId: req.params.id
    });

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json(document);

  } catch (error) {
    res.status(500).json(error);
  }

};