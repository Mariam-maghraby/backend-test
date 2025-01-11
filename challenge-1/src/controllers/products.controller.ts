import { Request, Response, NextFunction } from "express";
import { Product } from "../models/Product";
import { validationResult } from "express-validator";

export const post__products = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { body } = req;
    const newProduct = await Product.create(body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

export const get__products = async (
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

export const get__product_$id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const put__product_$id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
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

export const delete__product_$id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
