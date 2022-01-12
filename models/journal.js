const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
});

const Entries = mongoose.model("Entries", journalSchema);

module.exports = Entries;
