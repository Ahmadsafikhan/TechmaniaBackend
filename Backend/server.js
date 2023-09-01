import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"


const port = process.env.PORT || 5000;

connectDB(); //connect to mongodb

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
