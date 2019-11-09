import express, { Request, Response } from "express";

const router = express.Router();

router.get("/auth", (req: Request, res: Response) => {
  res.send("auth route");
});

export default router;
