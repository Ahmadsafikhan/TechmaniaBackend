import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
  checkoutSession,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

// @desc Create a checkout session
// @route POST /api/orders/create-checkout-session
// @access Private
router.route("/create-checkout-session").post(protect, checkoutSession);

// router.route("/create-checkout-session").post(protect, paymentOrder)
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
