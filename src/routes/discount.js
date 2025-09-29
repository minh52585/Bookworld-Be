import { Router } from "express";
import {
  getAllDiscounts,
  getDiscountById,
  addDiscount,
  updateDiscount,
  deleteDiscount,
} from "../controllers/discountController.js";

const discountRoutes = Router();

// API discount
discountRoutes.get("/", getAllDiscounts);
discountRoutes.get("/:id", getDiscountById);
discountRoutes.post("/add", addDiscount);
discountRoutes.put("/:id", updateDiscount);
discountRoutes.delete("/:id", deleteDiscount);

export default discountRoutes;