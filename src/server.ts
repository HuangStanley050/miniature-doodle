import { App } from "./App";
import AuthController from "./controllers/Auth";
import mongoose from "mongoose";
const authController = new AuthController();

declare var process: {
  env: {
    PORT: number;
    MONGODB_URI: string;
  };
};

const port: number = process.env.PORT || 3000;
const app = new App(port, [authController]);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen();
});
