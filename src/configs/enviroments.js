import dotenv from "dotenv";

dotenv.config();

// Normalize and provide safe fallbacks for environment variables.
// Some deployments or local setups may use `MONGO_URI` while code expects `DB_URI`.
export const PORT = process.env.PORT || 5000;
export const DB_URI = process.env.DB_URI || process.env.MONGO_URI || "mongodb://localhost:27017/bookworld";
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
export const NODE_ENV = process.env.NODE_ENV;
export const SUB_CATEGORY_DEFAULT = process.env.SUB_CATEGORY_DEFAULT;
export const CATEGOGY_DEFAULT = process.env.CATEGOGY_DEFAULT;
export const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const RESET_PASSWORD_SECRET = process.env.RESET_PASSWORD_SECRET;
export const RESET_PASSWORD_EXPIRES = process.env.RESET_PASSWORD_EXPIRES;
export const FRONTEND_URL = process.env.FRONTEND_URL;
