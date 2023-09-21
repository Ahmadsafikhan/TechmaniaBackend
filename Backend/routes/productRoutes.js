import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// get all the product data in json format
// router.get("/", asyncHandler(async(req, res) => {
//   res.json(products);
// }));

router
  .route("/")
  .get(getProducts)
  .post(protect, admin, createProduct);

// get specific product
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
  router.route('/:id/reviews').post(protect, createProductReview)

export default router;
