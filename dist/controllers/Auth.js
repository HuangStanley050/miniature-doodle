"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.path = "/auth";
        this.router = express_1.default.Router();
        this.initializeRoutes = function () {
            _this.router.get("/", _this.rootRoute);
            _this.router.post(_this.path + "/login", _this.loginRoute);
            _this.router.post(_this.path + "/register", [
                express_validator_1.check("name")
                    .isAlpha()
                    .isLength({ min: 3 }),
                express_validator_1.check("email")
                    .isEmail()
                    .withMessage("Not a valid email address"),
                express_validator_1.check("password")
                    .isLength({ min: 8 })
                    .withMessage("password not long enough")
                    .isAlphanumeric()
                    .withMessage("password must container letters and numbers")
            ], _this.registerRoute);
        };
        this.rootRoute = function (req, res) {
            res.send("Auth route");
        };
        this.loginRoute = function (req, res, next) {
            res.send("login route");
        };
        this.registerRoute = function (req, res, next) {
            var errors = express_validator_1.validationResult(req);
            var salt = bcryptjs_1.default.genSaltSync(10);
            var hash = bcryptjs_1.default.hashSync("B4c0//", salt);
            console.log(hash);
            if (!errors.isEmpty()) {
                var error = { status: 402, message: "Unable to register" };
                return next(error);
            }
            return res.send("register route");
        };
        this.initializeRoutes();
    }
    return AuthController;
}());
exports.default = AuthController;
