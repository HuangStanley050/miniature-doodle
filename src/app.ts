import * as express from "express";

export class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;
    this.initializeMiddleware();
    this.intializeControllers(controllers);
  }
  private initializeMiddleware = () => {
    this.app.use(express.json());
  };
  private intializeControllers = controllers => {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  };
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`server running on ${port}`);
    });
  }
}
