import express, { Request, Response, NextFunction } from "express";

const post__products = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    next();
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
    next();
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
    next();
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
    next();
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
    next();
  } catch (err) {
    next(err);
  }
};

const router = express.Router();
router.post("/", post__products);
router.get("/", get__products);
router.get("/:id", get__product_$id);
router.put("/:id", put__product_$id);
router.delete("/:id", delete__product_$id);
