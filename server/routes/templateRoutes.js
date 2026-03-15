// const express = require("express");
// const router = express.Router();

// const Template = require("../models/Template");

// router.get("/all", async (req,res)=>{

// try{

// const templates = await Template.find().select("name");

// res.json(templates);

// }catch(err){

// console.log(err);

// res.status(500).json({message:"Error fetching templates"});

// }

// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Template = require("../models/Template");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/all", authMiddleware, async (req,res)=>{

try{

const templates = await Template.find({

$or:[
{isPublic:true},
{createdBy:req.user.id}
]

}).select("name createdBy");

res.json(templates);

}catch(err){

console.log(err);

res.status(500).json({message:"Error fetching templates"});

}

});

router.delete("/:id",authMiddleware,async(req,res)=>{

try{

const template = await Template.findById(req.params.id);

if(!template){
return res.status(404).json({message:"Template not found"});
}

if(template.createdBy?.toString() !== req.user.id){
return res.status(403).json({message:"Not allowed"});
}

await template.deleteOne();

res.json({message:"Template deleted"});

}catch(err){

console.log(err);

res.status(500).json({message:"Delete failed"});

}

});

module.exports = router;