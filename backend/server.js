import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { connectDB } from "./config/db.js";
import bookingRoutes from "./routes/bookings.js";
import contactRoutes from "./routes/contact.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const port = process.env.PORT || 5000;

await connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "Luxury Hotel API" });
});

app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Luxury Hotel API running on http://localhost:${port}`);
});
