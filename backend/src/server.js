const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

/* Database */
connectDB();

/* Middlewares — MUST BE BEFORE ROUTES */
app.use(cors());
app.use(express.json());

/* Routes */
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/assignments", assignmentRoutes);

/* Health Check */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Campus Track backend is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
