import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.config";
import urlRoutes from "./routes/url.routes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/url", urlRoutes);
app.use("/", urlRoutes);

export default app;
