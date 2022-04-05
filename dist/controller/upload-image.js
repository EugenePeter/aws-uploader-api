"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var dotenv_1 = __importDefault(require("dotenv"));
var uuid_1 = require("uuid");
dotenv_1.default.config();
var _a = process.env, ACCESSKEYID = _a.ACCESSKEYID, SECRETACCESKEY = _a.SECRETACCESKEY;
var s3 = new aws_sdk_1.default.S3({
    // region: "ap-southeast-1",
    accessKeyId: ACCESSKEYID,
    secretAccessKey: SECRETACCESKEY,
});
var uploadImage = function (req, res) {
    var key = "clevergene/" + (0, uuid_1.v4)() + ".jpeg";
    var params = {
        Bucket: "clever-gene-bucket",
        ContentType: "image/jpeg",
        Key: key,
        // region: "ap-southeast-1",
    };
    s3.getSignedUrl("putObject", {
        Bucket: "clever-gene-bucket",
        ContentType: "image/jpeg",
        Key: key,
        // region: "ap-southeast-1",
    }, function (err, url) {
        console.log("ERR:", err);
        console.log("URL:", url);
        // err ? res.status(404).json({ ERROR: err }) :
        res.status(201).json({ key: key, url: url });
        // res.json({ message: "success" });
    });
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=upload-image.js.map