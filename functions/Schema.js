const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  email: String,
  secText: String,
});

module.exports = mongoose.model("testData", testSchema);
