const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isMerchant: { type: Boolean, default: false },
  merchantDeposit: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", userSchema);