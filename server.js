import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config({ path: "../backend/config/.env" });

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommerce app",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on ${process.env.MODE} mode on port ${port}`);
});
