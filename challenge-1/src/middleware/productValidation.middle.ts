import { body, param } from "express-validator";

export const validateId = [
  param("id").isMongoId().withMessage("Id is not valid"),
];

// Validation rules for the product
export const validateProduct = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),
  body("category")
    .isString()
    .withMessage("Category must be a string")
    .notEmpty()
    .withMessage("Category is required"),
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isInt({ gt: 0 })
    .withMessage("Quantity must be a positive integer"),
];

export const validateProductUpdate = [
  body("name").isString().withMessage("Name must be a string").optional(),
  body("category")
    .isString()
    .withMessage("Category must be a string")
    .optional(),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number")
    .optional(),
  body("quantity")
    .isInt({ gt: 0 })
    .withMessage("Quantity must be a positive integer")
    .optional(),
];
