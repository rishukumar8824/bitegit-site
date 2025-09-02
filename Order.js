const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["buy", "sell"], required: true },
  coin: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "open" }
});

module.exports = mongoose.model("Order", orderSchema);