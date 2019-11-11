import express from "express";
import cors from "cors";
import mongoose from "mongoose";

export interface Controller {
  path: string;
  router: express.IRouter;
}
const dataBaseURI = "mongodb://mongo/users";

export class App {
  public app: express.Application;
  public port: number;

  constructor(port: number, controllers: Controller[]) {
    this.app = express();
    this.port = port;
    this.connectDatabase();
    this.initializeMiddleware();
    this.intializeControllers(controllers);
  }
  private connectDatabase = () => {
    mongoose.connect(dataBaseURI, { useNewUrlParser: true });
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
