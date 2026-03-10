const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Template"
  },

  data: {
    type: Object
  },

  pdfUrl: String,

  publicId:{
    type:String,
    unique:true,
  }

}, { timestamps: true });

module.exports = mongoose.model("Document", documentSchema);