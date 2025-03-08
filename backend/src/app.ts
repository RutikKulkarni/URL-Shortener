import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.config";
import urlRoutes from "./routes/url.routes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  message: { error: "Rate limit exceeded. Try again after an hour." },
  headers: true,
});

app.use("/api/url", limiter, urlRoutes);
app.use("/", urlRoutes);

export default app;
