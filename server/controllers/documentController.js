const Template = require("../models/Template");
const Document = require("../models/Document");
const replaceVariables = require("../utils/replaceVariables");
const { generatePDF } = require("../services/pdfService");
const { v4: uuidv4 } = require("uuid");

// exports.generateDocument = async (req, res) => {

//   try {

//     const { templateId, data } = req.body;

//     const template = await Template.findById(templateId);

//     if (!template) {
//       return res.status(404).json({ message: "Template not found" });
//     }

//     const html = replaceVariables(template.html, data);

//     const filename = `${uuidv4()}.pdf`;

//     const pdfPath = await generatePDF(html, filename);

//     const document = await Document.create({
//       template: templateId,
//       data,
//       pdfUrl: pdfPath
//     });

//     res.json({
//       message: "PDF generated",
//       document
//     });

//   } catch (error) {
//     res.status(500).json(error);
//   }

// };

exports.generateDocument = async (req, res) => {

  try {

    const { templateId, data } = req.body;

    const template = await Template.findById(templateId);

    const html = replaceVariables(template.html, data);

    const filename = `${uuidv4()}.pdf`;

    const pdfPath = await generatePDF(html, filename);

    const publicId = uuidv4();

    const document = await Document.create({
      template: templateId,
      data,
      pdfUrl: pdfPath,
      publicId
    });

    res.json({
      message: "PDF generated",
      document,
      shareLink: `/doc/${publicId}`
    });

  } catch (error) {
    res.status(500).json(error);
  }

};