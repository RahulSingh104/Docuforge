const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  description: String,

  html: {
    type: String,
    required: true
  },

  variables: [
    {
      type: String
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("Template", templateSchema);