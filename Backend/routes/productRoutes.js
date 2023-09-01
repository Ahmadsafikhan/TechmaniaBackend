import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// get all the product data in json format
// router.get("/", asyncHandler(async(req, res) => {
//   res.json(products);
// }));

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.status(200).json(products);
  })
);

// get specific product
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "product not found" });
  })
);

export default router;
