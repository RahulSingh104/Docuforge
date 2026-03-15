const Template = require("../models/Template");
const { generateText } = require("../services/aiService");

exports.generateAIContent = async (req, res) => {

try {

const { templateId, data } = req.body;

console.log("AI REQUEST DATA:", templateId, data);

const template = await Template.findOne({
name: templateId
});

if (!template) {
return res.status(404).json({ message: "Template not found" });
}


const text = await generateText(templateId, data);

res.json({
text
});

} catch (err) {

console.log(err);

res.status(500).json({
message: "AI generation failed"
});

}

};