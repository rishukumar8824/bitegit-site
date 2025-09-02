const mongoose = require("mongoose");

const p2pAdSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["buy", "sell"], required: true },
  coin: { type: String, required: true },
  price: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("P2PAd", p2pAdSchema);