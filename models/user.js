const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  timeDelay: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
