import { Router } from "express";
import { verifyToken, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = Router();

// Tạo đơn hàng
router.post("/", verifyToken, createOrder);

// Lấy tất cả đơn hàng user
router.get("/", verifyToken, getOrders);

// Lấy chi tiết đơn hàng
router.get("/:id", verifyToken, getOrderById);

// Cập nhật trạng thái (admin)
router.put("/:id", verifyToken, isAdmin, updateOrderStatus);

export default router;
