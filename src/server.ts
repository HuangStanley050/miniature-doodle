import { App } from "./App";
import AuthController from "./controllers/Auth";
const authController = new AuthController();
declare var process: {
  env: {
    PORT: number;
  };
};
const port: number = process.env.PORT || 3000;
const app = new App(port, [authController]);

app.listen();
