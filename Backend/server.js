import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";

const port = process.env.PORT || 5000;

connectDB();  //connect to mongodb

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});
// get all the product data in json format
app.get("/api/products", (req, res) => {
  res.json(products);
});
// get specific product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => {
    console.log(typeof p, " and ", req.params.id);
    return p.id == req.params.id;
  });
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
