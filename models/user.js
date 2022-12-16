const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  PhoneNumber: { type: Number, require: true },
  timeDelay: { type: Number, require: true },
});

mongoose.Model("User", userSchema);
