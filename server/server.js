const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

connectDB();

const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");
const bulkRoutes = require("./routes/bulkRoutes");
const publicRoutes = require("./routes/publicRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(limiter);

app.use("/api/auth", authRoutes);
app.use("/api/document", documentRoutes);
app.use("/api/bulk", bulkRoutes);
app.use("/api/public", publicRoutes);

app.get("/", (req, res) => {
  res.send("DocuForge API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});