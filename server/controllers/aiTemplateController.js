const Template = require("../models/Template");
const { generateTemplate } = require("../services/aiTemplateService");

exports.createTemplateWithAI = async (req,res)=>{

try{

const { prompt } = req.body;

const aiResult = await generateTemplate(prompt);

if(!aiResult){
return res.status(500).json({message:"AI generation failed"});
}

/* FIX: ensure aiResult is string */
const html = typeof aiResult === "string" ? aiResult : aiResult.html;

/* Extract fields like {{name}} */
const fieldMatches = html.match(/{{(.*?)}}/g) || [];

const fields = fieldMatches.map(f =>
f.replace("{{","").replace("}}","")
);

/* remove duplicates */
const uniqueFields = [...new Set(fields)];

/* generate template name */
// Generate clean template name
let name = prompt
.toLowerCase()

// remove {{fields}}
.replace(/{{.*?}}/g,"")

// remove special characters
.replace(/[^a-z\s]/g,"")

// remove filler words
.replace(/\b(create|a|an|the|template|professional|include|placeholders|design|should|be|and|like|document)\b/g,"")

.trim()

// split words
.split(/\s+/)

// take first 3 words
.slice(0,3)

// join with dash
.join("-");

const template = await Template.create({
name,
fields: uniqueFields,
html
});

res.json({
message:"AI Template Created",
template
});

}catch(err){

console.log(err);

res.status(500).json({
message:"Server error"
});

}

};