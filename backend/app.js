const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
