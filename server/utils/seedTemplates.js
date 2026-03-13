const Template = require("../models/Template");

async function seedTemplates(){

const count = await Template.countDocuments();

if(count > 0){
console.log("Templates already seeded");
return;
}

const templates = [

{
name:"certificate",
fields:["name","course","date"],
html:"<html><body style='text-align:center;font-family:Arial'><h1>Certificate of Completion</h1><p>This certificate is awarded to</p><h2>{{name}}</h2><p>For completing the course</p><h3>{{course}}</h3><p>Date: {{date}}</p></body></html>"
},

{
name:"invoice",
fields:["name","item","amount","date"],
html:"<html><body style='font-family:Arial'><h1>Invoice</h1><p>Customer: {{name}}</p><p>Item: {{item}}</p><p>Amount: {{amount}}</p><p>Date: {{date}}</p></body></html>"
},

{
name:"offer",
fields:["name","position","salary","date"],
html:"<html><body style='font-family:Arial'><h1>Offer Letter</h1><p>Dear {{name}},</p><p>We are pleased to offer you the position of {{position}} with salary {{salary}}.</p><p>Date: {{date}}</p></body></html>"
},

{
name:"biodata",
fields:["name","dob","education","skills"],
html:"<html><body style='font-family:Arial'><h1>Bio Data</h1><p>Name: {{name}}</p><p>DOB: {{dob}}</p><p>Education: {{education}}</p><p>Skills: {{skills}}</p></body></html>"
}

];

await Template.insertMany(templates);

console.log("Templates seeded successfully");

}

module.exports = seedTemplates;