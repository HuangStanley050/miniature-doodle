import express, { Request, Response, NextFunction, IRouter } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { Controller } from "../App";
import { Error } from "../App";

class AuthController implements Controller {
  public path: string = "/auth";
  public router: IRouter = express.Router();
  constructor() {
    this.initializeRoutes();
  }
  initializeRoutes = () => {
    this.router.get("/", this.rootRoute);
    this.router.post(`${this.path}/login`, this.loginRoute);
    this.router.post(
      `${this.path}/register`,
      [
        check("name")
          .isAlpha()
          .isLength({ min: 3 }),
        check("email")
          .isEmail()
          .withMessage("Not a valid email address"),
        check("password")
          .isLength({ min: 8 })
          .withMessage("password not long enough")
          .isAlphanumeric()
          .withMessage("password must container letters and numbers")
      ],
      this.registerRoute
    );
  };
  private rootRoute = (req: Request, res: Response) => {
    res.send("Auth route");
  };
  private loginRoute = (req: Request, res: Response, next: NextFunction) => {
    res.send("login route");
  };
  private registerRoute = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0//", salt);
    console.log(hash);
    if (!errors.isEmpty()) {
      let error: Error = { status: 402, message: "Unable to register" };
      return next(error);
    }
    return res.send("register route");
  };
}

export default AuthController;
