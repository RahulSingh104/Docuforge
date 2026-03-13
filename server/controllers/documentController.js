const Template = require("../models/Template");
const Document = require("../models/Document");
const replaceVariables = require("../utils/replaceVariables");
const { generatePDF } = require("../services/pdfService");
const { v4: uuidv4 } = require("uuid");

const sendEmail = require("../services/emailService");
const path = require("path");
const puppeteer = require("puppeteer");
const fs = require("fs");

// exports.generateDocument = async (req, res) => {
//   try {
//     const { templateId, data, email } = req.body;

//     const template = await Template.findById({ name: templateId });

//     if (!template) {
//       return res.status(404).json({ message: "Template not found" });
//     }

//     const html = replaceVariables(template.html, data);

//     const filename = `${uuidv4()}.pdf`;

//     const pdfPath = await generatePDF(html, filename);

//     const publicId = uuidv4();

//     const document = await Document.create({
//       template: templateId,
//       data,
//       pdfUrl: pdfPath,
//       publicId,
//     });

//     if (email) {
//       await sendEmail(
//         email,
//         "Your Generated Document",
//         "Please find the attached PDF document.",
//         pdfPath,
//       );
//     }

//     res.json({
//       message: "PDF generated and email sent",
//       document,
//       shareLink: `/doc/${publicId}`,
//     });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

exports.generateDocument = async (req, res) => {
  try {
    const { templateId, data, email } = req.body;

    // FIX 1: find template correctly
    const template = await Template.findOne({ name: templateId });

    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    console.log("templateId:", templateId);
    console.log("template:", template);

    const html = replaceVariables(template.html, data);

    const filename = `${uuidv4()}.pdf`;

    // FIX 2: ensure pdf folder exists
    const outputDir = path.join(__dirname, "../generated");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const fileName = `${uuidv4()}.pdf`;

    const fullPath = path.join(__dirname, "../generated-pdfs", fileName);

    await generatePDF(html, fullPath);

    // This is the URL path stored in DB
    const pdfUrl = `generated-pdfs/${fileName}`;

    const publicId = uuidv4();

    const document = await Document.create({
      user: req.user.id,
      template: template._id,
      data,
      pdfUrl,
      publicId,
    });

    if (email) {
      await sendEmail(
        email,
        "Your Generated Document",
        "Please find the attached PDF document.",
        pdfPath,
      );
    }

    res.json({
      message: "PDF generated successfully",
      document,
      shareLink: `/doc/${publicId}`,
    });
  } catch (error) {
    // FIX 3: better error logging
    console.error("PDF generation error:", error);

    res.status(500).json({
      message: "PDF generation failed",
    });
  }
};

exports.downloadDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    if (document.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const filePath = path.resolve(document.pdfUrl);

    res.download(filePath);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.migrateDocuments = async (req, res) => {
  try {
    const docs = req.body.docs;

    for (let doc of docs) {
      await Document.create({
        user: req.user.id,
        template: doc.template,
        data: doc.data,
        pdfUrl: doc.pdfUrl,
      });
    }

    res.json({ message: "Documents migrated" });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUserDocuments = async (req, res) => {
  try {
    const documents = await Document.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: "Error fetching documents" });
  }
};
