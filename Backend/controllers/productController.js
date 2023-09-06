import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all Products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
});
// @desc Fetch Product by id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});
export { getProducts, getProductById };
