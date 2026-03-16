// const puppeteer = require("puppeteer");
// const fs = require("fs");
// const path = require("path");

// exports.generatePDF = async (html, filename) => {

//   const dirPath = path.join(__dirname, "../generated-pdfs");

//   // create folder if not exists
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
//   }

//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.setContent(html);

//   const filePath = path.join(dirPath, filename);

//   await page.pdf({
//     path: filePath,
//     format: "A4",
//     printBackground: true
//   });

//   await browser.close();

//   return filePath;
// };

const puppeteer = require("puppeteer");

exports.generatePDF = async (html, filePath) => {

const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

await page.setContent(html);

await page.pdf({
path: filePath,
format: "A4"
});

await browser.close();

return filePath;

};
