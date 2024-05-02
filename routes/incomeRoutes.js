const express = require("express");
const { Income } = require("../models/transactionSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const incomeData = await Income.find({});
    res.status(200).json(incomeData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const income = new Income(req.body);
    const newIncome = await income.save();
    res.status(201).json(newIncome);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedIncome = await Income.findByIdAndDelete(req.params.id);
    if (deletedIncome) {
      res.status(200).json({
        deletedIncomeId: deletedIncome._id,
        message: "Income deleted successfully",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
