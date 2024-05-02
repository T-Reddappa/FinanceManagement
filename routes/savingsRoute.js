const express = require("express");
const { Savings } = require("../models/transactionSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const savingsData = await Savings.find({});
    res.status(200).json(savingsData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const savings = new Savings(req.body);
    const newSavings = await savings.save();
    if (newSavings) {
      res.status(201).json(newSavings);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedSavings = await Savings.findByIdAndDelete(req.params.id);
    if (deletedSavings) {
      res.status(200).json({
        deletedSavingId: deletedSavings._id,
        message: "Savings deleted successfully",
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
