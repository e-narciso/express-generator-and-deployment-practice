const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: String
});

const Color = mongoose.model('Color', colorSchema);
module.exports = Color;