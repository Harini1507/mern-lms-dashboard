const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();
// ✅ root route

app.get("/", (req, res) => {
  res.status(200).send("LMS Backend Running");
});

app.use("/courses", courseRoutes);
app.use("/lessons", lessonRoutes);
app.use("/dashboard", dashboardRoutes);

// server start
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
