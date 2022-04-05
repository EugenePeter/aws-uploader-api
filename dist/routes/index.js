"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import cookieSession from "cookie-session";
var express_1 = __importDefault(require("express"));
var controller_1 = require("../controller");
var router = express_1.default.Router();
router.get("/", function (req, res) {
    res.send("welcome");
});
router.post("/login", controller_1.login);
router.get("/logout", function (req, res) {
    res
        .clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    })
        .json({});
    console.log("logging out >>>>>>>>>>>>>>>>>");
});
router.get("/currentuser", controller_1.isAuthorize);
router.get("/image", controller_1.uploadImage);
// router.
exports.default = router;
//# sourceMappingURL=index.js.map