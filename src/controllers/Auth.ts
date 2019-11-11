import express, { Request, Response, NextFunction, IRouter } from "express";
import { Controller } from "../App";

class AuthController implements Controller {
  public path: string = "/auth";
  public router: IRouter = express.Router();
  constructor() {
    this.initializeRoutes();
  }
  initializeRoutes = () => {
    this.router.get("/", this.rootRoute);
    this.router.post(`${this.path}/login`, this.loginRoute);
    this.router.post(`${this.path}/register`, this.registerRoute);
  };
  private rootRoute = (req: Request, res: Response) => {
    res.send("Auth route");
  };
  private loginRoute = (req: Request, res: Response, next: NextFunction) => {
    res.send("login route");
  };
  private registerRoute = (req: Request, res: Response, next: NextFunction) => {
    res.send("register route");
  };
}

export default AuthController;
