const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String },
  Email: { type: String, require: true },
  Mno: { type: Number, require: true },
});

module.exports = mongoose.model("user", userSchema);
