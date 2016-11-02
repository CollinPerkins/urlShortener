var mongoose = require("mongoose");

var UrlSchema = new mongoose.Schema({
    url: String
});

module.exports = mongoose.model("Url", UrlSchema);
