import express from "express";

interface Controller {
  path: string;
  router: express.IRouter;
}

export class App {
  public app: express.Application;
  public port: number;

  constructor(port: number, controllers: Controller[]) {
    this.app = express();
    this.port = port;
    this.initializeMiddleware();
    this.intializeControllers(controllers);
  }
  private initializeMiddleware = () => {
    this.app.use(express.json());
  };
  private intializeControllers = (controllers: Controller[]) => {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  };
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`server running on ${this.port}`);
    });
  }
}
