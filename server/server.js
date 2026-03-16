const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const seedTemplates = require("./utils/seedTemplates");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

const otpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // only 5 OTP requests allowed
  message: "Too many OTP requests, please try again later"
});


connectDB().then(()=>{
seedTemplates();
});

const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");
const bulkRoutes = require("./routes/bulkRoutes");
const publicRoutes = require("./routes/publicRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const templateRoutes = require("./routes/templateRoutes");
const aiRoutes = require("./routes/aiRoutes");
const aiTemplateRoutes = require("./routes/aiTemplateRoutes");

const app = express();

app.use(cors({
  origin: ["http://localhost:5173",
    "https://docuforge-one.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use("/api/auth/send-otp", otpLimiter);

app.use("/generated-pdfs", express.static("generated-pdfs"));

app.use("/generated", express.static("generated"));

app.use("/api/auth", authRoutes);
app.use("/api/document", documentRoutes);
app.use("/api/bulk", bulkRoutes);
app.use("/api/public", publicRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/ai", aiTemplateRoutes);
app.get("/", (req, res) => {
  res.send("DocuForge API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});