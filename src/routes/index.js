import { Router } from "express";

// Middlewares
import { verifyToken, isAdmin } from "../middlewares/authMiddleware.js";

// Route modules
import productRoutes from "./product.js";
import discountRoutes from "./discount.js";
import categoryRoutes from "./category.js";
import orderRoutes from "./order.js";
import variantRoutes from "./variant.js";
import cartRoutes from "./cart.js";

const routes = Router();

// API resource routes
routes.use("/products", productRoutes);
routes.use("/discounts", discountRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/orders", orderRoutes);
routes.use("/variants", variantRoutes);
routes.use("/cart", cartRoutes);



export default routes;
