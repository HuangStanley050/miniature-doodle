import express, { Request, Response, NextFunction } from "express";
import AuthController from "../controllers/auth";

const router = express.Router();

router
  .get("/auth", (req: Request, res: Response) => {
    res.send("auth route");
  })
  .post("/register", AuthController.register)
  .post("/login", AuthController.login);

export default router;
