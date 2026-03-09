const fs = require("fs");
const csv = require("csv-parser");
const Template = require("../models/Template");
const replaceVariables = require("../utils/replaceVariables");
const { generatePDF } = require("../services/pdfService");
const { v4: uuidv4 } = require("uuid");

exports.bulkGenerate = async (req, res) => {

  const results = [];

  const template = await Template.findById(req.body.templateId);

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {

      const pdfLinks = [];

      for (let row of results) {

        const html = replaceVariables(template.html, row);

        const filename = `${uuidv4()}.pdf`;

        const pdf = await generatePDF(html, filename);

        pdfLinks.push(pdf);

      }

      res.json({
        message: "Bulk PDFs generated",
        files: pdfLinks
      });

    });

};