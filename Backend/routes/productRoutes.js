import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// get all the product data in json format
// router.get("/", asyncHandler(async(req, res) => {
//   res.json(products);
// }));

router.route("/").get(getProducts);

// get specific product
router.route("/:id").get(getProductById);

export default router;
