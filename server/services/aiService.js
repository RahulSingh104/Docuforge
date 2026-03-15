// const axios = require("axios");



// exports.generateText = async (templateId, data) => {

// try{

// if(templateId === "certificate"){

// return `This certificate is proudly awarded to ${data.name} for successfully completing the ${data.course} program on ${data.date}.`;

// }

// if(templateId === "invoice"){

// return `This invoice is issued to ${data.name} for the services related to ${data.course}. Payment date: ${data.date}.`;

// }

// if(templateId === "offer"){

// return `Dear ${data.name},

// We are pleased to offer you the position related to ${data.course}. Your joining date will be ${data.date}.`;

// }

// if(templateId === "biodata"){

// return `${data.name} is a dedicated professional with expertise in ${data.course}.`;

// }

// return "AI content generated successfully.";

// }catch(err){

// console.log(err);

// return "AI generation failed";

// }

// };

const axios = require("axios");

exports.generateText = async (templateId, data) => {

try{

if(templateId === "certificate"){

return `This certificate is proudly awarded to ${data.name} for successfully completing the ${data.course} program on ${data.date}.`;

}

if(templateId === "invoice"){

return `This invoice is issued to ${data.name} for services related to ${data.course}. Payment date: ${data.date}.`;

}

if(templateId === "offer"){

return `Dear ${data.name},

We are pleased to offer you the position related to ${data.course}. Your joining date will be ${data.date}.`;

}

if(templateId === "biodata"){

return `${data.name} is a dedicated professional with expertise in ${data.course}.`;

}

return "AI content generated successfully.";

}catch(err){

console.log(err);
return "AI generation failed";

}

};