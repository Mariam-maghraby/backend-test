import express from "express";
import {
  post__auth_login,
  post__auth_signup,
} from "../controllers/users.controller";
import {
  validateUser,
  validateUserCreate,
} from "../middleware/userValidation.middleware";

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     description: Allows a user to log in by providing username and password.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "access_token"
 *       400:
 *         description: Bad request (validation errors)
 *       401:
 *         description: Invalid username or password
 */
router.post("/login", validateUser, post__auth_login);
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Signup user
 *     description: Allows a user to create a new account by providing username, password, email, and role.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *               - email
 *               - role
 *     responses:
 *       200:
 *         description: Successfully signed up
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "access_token"
 *       400:
 *         description: Bad request (validation errors)
 */
router.post("/signup", validateUserCreate, post__auth_signup);

export default router;
