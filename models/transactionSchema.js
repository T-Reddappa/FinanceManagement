const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["income", "expense", "savings"],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Income = mongoose.model("Income", transactionSchema);
const Expenses = mongoose.model("Expenses", transactionSchema);
const Savings = mongoose.model("Savings", transactionSchema);

module.exports = {
  Income,
  Expenses,
  Savings,
};
