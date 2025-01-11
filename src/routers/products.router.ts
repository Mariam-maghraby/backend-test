import express, { Request, Response, NextFunction } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { Product } from "../models/Product";

const post__products = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body } = req;
    const newProduct = await Product.create(body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

const get__products = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const get__product_$id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const put__product_$id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true,
      upsert: true,
    });
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

const delete__product_$id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

const router = express.Router();
router.use(authMiddleware);
router.post("/", post__products);
router.get("/", get__products);
router.get("/:id", get__product_$id);
router.put("/:id", put__product_$id);
router.delete("/:id", delete__product_$id);

export default router;
