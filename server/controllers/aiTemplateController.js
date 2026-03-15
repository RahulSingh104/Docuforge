// const Template = require("../models/Template");
// const { generateTemplate } = require("../services/aiTemplateService");

// exports.createTemplateWithAI = async (req,res)=>{

// try{

// const { prompt } = req.body;

// const aiTemplate = generateTemplate(prompt);

// const existing = await Template.findOne({
// name: aiTemplate.name
// });

// if(existing){

// return res.json({
// message:"Template already exists",
// template:existing
// });

// }

// const template = await Template.create(aiTemplate);

// res.json({
// message:"AI Template Created",
// template
// });

// }catch(err){

// console.log(err);

// res.status(500).json({
// message:"Template generation failed"
// });

// }

// };


// const Template = require("../models/Template");
// const { generateTemplate } = require("../services/aiTemplateService");

// exports.createTemplateWithAI = async (req,res)=>{

// try{

// const { prompt } = req.body;

// const aiTemplate = generateTemplate(prompt);

// const existing = await Template.findOne({
// name: aiTemplate.name,
// createdBy: req.user.id
// });

// if(existing){

// return res.json({
// message:"Template already exists",
// template:existing
// });

// }

// const template = await Template.create({

// name: aiTemplate.name,

// fields: aiTemplate.fields,

// html: aiTemplate.html,

// isPublic:false,

// createdBy:req.user.id

// });

// res.json({
// message:"AI Template Created",
// template
// });

// }catch(err){

// console.log(err);

// res.status(500).json({
// message:"Template generation failed"
// });

// }

// };


const Template = require("../models/Template");
const { generateTemplate } = require("../services/aiTemplateService");

exports.createTemplateWithAI = async (req,res)=>{

try{

const { prompt } = req.body;

const aiResult = await generateTemplate(prompt);

if(!aiResult){
return res.status(500).json({message:"AI generation failed"});
}

// create template name
const name = prompt.toLowerCase().replace(/\s+/g,"-");

// extract fields from html {{field}}
const fieldMatches = aiResult.match(/{{(.*?)}}/g) || [];

const fields = fieldMatches.map(f => f.replace("{{","").replace("}}",""));

// remove duplicates
const uniqueFields = [...new Set(fields)];

const template = await Template.create({
name,
fields: uniqueFields,
html: aiResult
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