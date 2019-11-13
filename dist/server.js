"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var Auth_1 = __importDefault(require("./controllers/Auth"));
var authController = new Auth_1.default();
var port = process.env.PORT || 3000;
var app = new App_1.App(port, [authController]);
app.listen();
