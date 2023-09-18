import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// get all the product data in json format
// router.get("/", asyncHandler(async(req, res) => {
//   res.json(products);
// }));

router.route("/").get(getProducts).post(protect, admin, createProduct);

// get specific product
router.route("/:id").get(getProductById).put(protect, admin, updateProduct);

export default router;
