const express = require("express");
const { Expenses } = require("../models/transactionSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const expenseData = await Expenses.find({});
    res.status(200).json(expenseData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const expense = new Expenses(req.body);
    const newExpense = await expense.save();
    if (newExpense) {
      res.status(201).json(newExpense);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedExpense = await Expenses.findByIdAndDelete(req.params.id);
    if (deletedExpense) {
      res.status(200).json({
        deletedExpenseId: deletedExpense._id,
        message: "Expense deleted successfully",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
