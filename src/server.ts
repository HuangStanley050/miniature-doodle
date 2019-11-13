import { App } from "./App";
import AuthController from "./controllers/Auth";
import mongoose from "mongoose";
const authController = new AuthController();

declare var process: {
  env: {
    PORT: number;
  };
};
const mongoURI =
  "mongodb://heroku_zgs22sg7:5b8hv4cl7p45sn67jq43v1sc5c@ds029817.mlab.com:29817/heroku_zgs22sg7";
const port: number = process.env.PORT || 3000;
const app = new App(port, [authController]);

mongoose.connect(mongoURI).then(() => {
  app.listen();
});
