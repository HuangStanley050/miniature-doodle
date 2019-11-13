import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";

export interface Controller {
  path: string;
  router: express.IRouter;
}
export interface Error {
  status: number;
  message: string;
}
const dataBaseURI = "mongodb://mongo/users";
const mongoURI =
  "mongodb://heroku_zgs22sg7:5b8hv4cl7p45sn67jq43v1sc5c@ds029817.mlab.com:29817/heroku_zgs22sg7";

export class App {
  public app: express.Application;
  public port: number;

  constructor(port: number, controllers: Controller[]) {
    this.app = express();
    this.port = port;
    this.connectDatabase();
    this.initializeMiddleware();
    this.intializeControllers(controllers);
    this.errorHandler();
  }
  private errorHandler = () => {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        const status = err.status || 500;
        const message = err.message || "Something went wrong";
        res.status(status).send({
          status,
          message
        });
      }
    );
  };
  private connectDatabase = () => {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: false
    });
  };
  private initializeMiddleware = () => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  };
  private intializeControllers = (controllers: Controller[]) => {
    controllers.forEach(controller => {
      this.app.use("/api", controller.router);
    });
  };
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`server running on ${this.port}`);
    });
  }
}
