// const puppeteer = require("puppeteer");

// exports.generatePDF = async (html, filePath) => {

// const browser = await puppeteer.launch({
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     headless: true
// });

// const page = await browser.newPage();

// await page.setContent(html);

// await page.pdf({
// path: filePath,
// format: "A4"
// });

// await browser.close();

// return filePath;

// };


const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

exports.generatePDF = async (html, fileName) => {

try{

// ✅ correct folder path
const dir = path.join(__dirname, "../generated-pdfs");

// ✅ create folder if not exists
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// ✅ correct file path
const filePath = path.join(dir, `${fileName}.pdf`);

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  headless: true
});

console.log("Puppeteer starting....");

const page = await browser.newPage();

await page.setContent(html, { waitUntil: "networkidle0" });

await page.pdf({
  path: filePath,
  format: "A4"
});


await browser.close(); 



return filePath;

}catch(err){
console.log("PDF ERROR:", err);
console.log("Error details:", {
message: err.message,
stack: err.stack
});
throw err;
}

};
