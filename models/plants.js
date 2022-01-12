const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  botanical_name: { type: String, required: true },
  height: { type: String, required: true },
  usda_zones: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
});

const Plants = mongoose.model("Plants", plantSchema);

module.exports = Plants;