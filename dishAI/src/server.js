import { VertexAI } from "@google-cloud/vertexai";
import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import mealRouter from "./routers/mealRouter.js";


if (!process.env.PROJECT_ID) {
  throw new Error("Missing PROJECT_ID in .env");
}


const app = express();
const upload = multer();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("AI MealSnap backend is running.");
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});
app.use("/api/", mealRouter);

const port = process.env.PORT || 8080; 

app.listen(port, () => {
  console.log("Server running on port:", port);
});
