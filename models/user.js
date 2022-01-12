const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: { type: String, require: true },
  plants: [
    {
      name: { type: String, required: true },
      botanical_name: { type: String, required: true },
      height: { type: String, required: true },
      usda_zones: { type: String, required: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
      next_water: { type: Date },
    },
  ],
  journals: [
    {
      title: { type: String, require: true },
      note: { type: String, require: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
