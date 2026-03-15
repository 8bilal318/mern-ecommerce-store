import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth/auth-routes.js";
import adminProductRouter from "./routes/auth/admin/Products-routes.js";

dotenv.config();

// create db connection
mongoose
  .connect("mongodb+srv://bilalmalikbm02950_db_user:z580xMdbQvcf0O77@cluster0.domb2zo.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "cache-control",
      "expires",
      "pragma",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});