import express, { Request, Response } from "express";
import cors from "cors";
import config, { routeConfig } from "./config";
import mongoose from "mongoose";
import productsRoute from "./routers/products.router";
import authRoute from "./routers/auth.router";

const app = express();
const PORT = config.port || 3000;
const MONGO_URI = process.env.MONGO_URI as string;

mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to MongoDB successfully!");
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get(`/`, (_req: Request, res: Response) => {
  res.send("Hello, This is Products App!");
});
app.use(`${routeConfig.v1ContextApi}/auth`, authRoute);
app.use(`${routeConfig.v1ContextApi}/products`, productsRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
