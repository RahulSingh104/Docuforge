// const mongoose = require("mongoose");

// const templateSchema = new mongoose.Schema({

//   name: {
//     type: String,
//     required: true
//   },

//   description: String,

//   html: {
//     type: String,
//     required: true
//   },

//   variables: [
//     {
//       type: String
//     }
//   ]

// }, { timestamps: true });

// module.exports = mongoose.model("Template", templateSchema);


const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({

name:String,

fields:[String],

html:String,

isPublic:{
type:Boolean,
default:true
},

createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
default:null
}

});

module.exports = mongoose.model("Template",templateSchema);