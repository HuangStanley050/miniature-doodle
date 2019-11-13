"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var Auth_1 = __importDefault(require("./controllers/Auth"));
var mongoose_1 = __importDefault(require("mongoose"));
var authController = new Auth_1.default();
var mongoURI = "mongodb://heroku_zgs22sg7:5b8hv4cl7p45sn67jq43v1sc5c@ds029817.mlab.com:29817/heroku_zgs22sg7";
var port = process.env.PORT || 3000;
var app = new App_1.App(port, [authController]);
mongoose_1.default.connect(mongoURI).then(function () {
    app.listen();
});
