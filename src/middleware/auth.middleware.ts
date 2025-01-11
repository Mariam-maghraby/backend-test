import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      // res.status(401).json("Unauthorized: Invalid Token");
      throw new Error("Unauthorized: Invalid Token");
    }
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      res.status(401).json("Unauthorized: Invalid Token");
      // throw new Error("Unauthorized: Invalid Token");
    }
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_SECRET as string,
    ) as User;
    if (!decoded) {
      // throw new Error("Unauthorized: Invalid Token");
      res.status(401).json("Unauthorized: Invalid Token");
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json((err as Error).message);
    next(err);
  }
};
