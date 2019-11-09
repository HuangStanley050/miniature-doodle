import { Request, Response, NextFunction } from "express";
export default {
  register: async (req: Request, res: Response, next: NextFunction) => {
    res.send("register route");
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    res.send("login route");
  }
};
