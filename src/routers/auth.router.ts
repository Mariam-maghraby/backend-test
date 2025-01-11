import express, { Request, Response, NextFunction } from "express";
import { generateAccessToken } from "../utils/tokenUtils";

const post__auth_login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    //TODO: Implement fetching user from database
    // const user = users[username] ;
    const user = { username: "admin", password: "admin" };
    if (user.username === username && user.password === password) {
      const token = generateAccessToken({username: req.body.username});
      res.json(token);
    } else {
      res.status(401).json("Invalid username or password");
    }
  } catch (err) {
    next(err);
  }
};

const router = express.Router();
router.post("/login", post__auth_login);

export default router;
