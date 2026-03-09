import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/conn.js";
import { logReq, globalErr } from "./middleware/middlewares.js";

// Route Imports
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logReq);

// Routes - THIS IS THE IMPORTANT PART
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/problems", problemRoutes);
app.use("/submissions", submissionRoutes);
app.use("/feedback", feedbackRoutes);

// Global Error Handler
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`🚀 Server Listening on PORT: ${PORT}`);
});