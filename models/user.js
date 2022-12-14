const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  userPhoneNumber: { type: Number, require: true },
  waitTime: { type: Date, require: true },
});

mongoose.Model("User", userSchema);
