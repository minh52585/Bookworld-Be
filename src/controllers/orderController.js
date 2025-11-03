import Order from "../models/order.js";
import handleAsync from "../utils/handleAsync.js";
import createError from "../utils/createError.js";

// Tạo đơn hàng
export const createOrder = handleAsync(async (req, res) => {
  const { products, totalAmount } = req.body;
  if (!products || products.length === 0) {
    return res.status(400).json({ message: "Products are required" });
  }

  const order = new Order({
    userId: req.user.id,
    products,
    totalAmount,
  });

  const savedOrder = await order.save();
  res.status(201).json(savedOrder);
});

// Lấy tất cả đơn hàng của user
export const getOrders = handleAsync(async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.status(200).json(orders);
});

// Lấy chi tiết đơn hàng
export const getOrderById = handleAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) return next(createError(404, "Order not found"));
  if (order.userId.toString() !== req.user.id) return next(createError(403, "Forbidden"));
  res.status(200).json(order);
});

// Cập nhật trạng thái đơn hàng (admin)
export const updateOrderStatus = handleAsync(async (req, res, next) => {
  if (!req.user.isAdmin) return next(createError(403, "Only admin can update order"));

  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(order);
});
