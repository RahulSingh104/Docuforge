const Template = require("../models/Template");
const Document = require("../models/Document");

exports.getDashboardStats = async (req, res) => {

try {

const templateCount = await Template.countDocuments();

const documentCount = await Document.countDocuments({
user: req.user.id
});

const bulkCount = await Document.countDocuments({
user: req.user.id,
isBulk:true
});

res.json({
templates: templateCount,
documents: documentCount,
bulk: bulkCount
});

} catch (error) {

console.log("Dashboard stats error:", error);

res.status(500).json({
message:"Server error"
});

}

};