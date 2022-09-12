"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptrDecrypt = exports.cryptrEncrypt = exports.passwordValidation = exports.passwordEncrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const cryptr_1 = __importDefault(require("cryptr"));
const cryptr = new cryptr_1.default('myTotallySecretKey');
function passwordEncrypt(req, res, next) {
    const password = req.body.password;
    const encrypted_password = bcrypt_1.default.hashSync(password, 10);
    res.locals.encrypted = encrypted_password;
    next();
}
exports.passwordEncrypt = passwordEncrypt;
function passwordValidation(req, res, next) {
    const localpw = req.body.password;
    const password_db = res.locals.password;
    const validation = bcrypt_1.default.compareSync(localpw, password_db);
    if (!validation) {
        throw { type: "forbidden", message: "wrong password" };
    }
    next();
}
exports.passwordValidation = passwordValidation;
function cryptrEncrypt(req, res, next) {
    const pw = String(req.body.password);
    const password = cryptr.encrypt(pw);
    res.locals.password = password;
    next();
}
exports.cryptrEncrypt = cryptrEncrypt;
function cryptrDecrypt(password) {
    const decrypted = cryptr.decrypt(password);
    return decrypted;
}
exports.cryptrDecrypt = cryptrDecrypt;
