import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

//dotenv configuration
dotenv.config({ path: "../backend/config/.env" });

//database configuration
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRouter);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommerce app",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on ${process.env.MODE} mode on port ${port}`);
});
