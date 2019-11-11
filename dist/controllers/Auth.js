"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.path = "/auth";
        this.router = express_1.default.Router();
        this.initializeRoutes = function () {
            _this.router.get("/", _this.rootRoute);
            _this.router.post(_this.path + "/login", _this.loginRoute);
            _this.router.post(_this.path + "/register", _this.registerRoute);
        };
        this.rootRoute = function (req, res) {
            res.send("Auth route");
        };
        this.loginRoute = function (req, res, next) {
            res.send("login route");
        };
        this.registerRoute = function (req, res, next) {
            res.send("register route");
        };
        this.initializeRoutes();
    }
    return AuthController;
}());
exports.default = AuthController;
