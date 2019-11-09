"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App(port, controllers) {
        var _this = this;
        this.initializeMiddleware = function () {
            _this.app.use(express_1.default.json());
        };
        this.intializeControllers = function (controllers) {
            controllers.forEach(function (controller) {
                _this.app.use("/", controller.router);
            });
        };
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddleware();
        this.intializeControllers(controllers);
    }
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("server running on " + _this.port);
        });
    };
    return App;
}());
exports.App = App;
