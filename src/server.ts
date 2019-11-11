import { App } from "./App";
import AuthController from "./controllers/Auth";
const authController = new AuthController();
const app: any = new App(3000, [authController]);

app.listen();
