const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

require("./db.js");

const expenseRoutes = require("./routes/expenseRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const savingsRoutes = require("./routes/savingsRoute");

app.use("/expenses", expenseRoutes);
app.use("/income", incomeRoutes);
app.use("/savings", savingsRoutes);

app.get("/", (req, res) => {
  res.send("Finance Management App");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
