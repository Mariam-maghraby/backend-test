import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  post__products,
  get__products,
  get__product_$id,
  put__product_$id,
  delete__product_$id,
} from "../controllers/products.controller";
import {
  validateId,
  validateProduct,
  validateProductUpdate,
} from "../middleware/productValidation.middle";
import { adminMiddleware } from "../middleware/admin.auth.middle";

const router = express.Router();

router.use(authMiddleware);
router.get("/", get__products);
router.get("/:id", validateId, get__product_$id);

router.use(adminMiddleware);
router.post("/", validateProduct, post__products);
router.put("/:id", validateId, validateProductUpdate, put__product_$id);
router.delete("/:id", validateId, delete__product_$id);

export default router;
