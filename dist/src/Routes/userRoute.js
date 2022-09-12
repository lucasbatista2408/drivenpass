"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../Controllers/userController/createUser"));
const signinUser_1 = require("../Controllers/userController/signinUser");
const joiValidation_1 = __importDefault(require("../Middleware/joiValidation"));
const checkEmail_1 = __importDefault(require("../Middleware/userMidd/checkEmail"));
const checkUser_1 = __importDefault(require("../Middleware/userMidd/checkUser"));
const userSChema_1 = require("../Schema/userSChema");
const passwordUtils = __importStar(require("../Utils/passwordEncrypt"));
const router = (0, express_1.Router)();
//creates new user
router.post('/signup', (0, joiValidation_1.default)(userSChema_1.userSchema), checkEmail_1.default, passwordUtils.passwordEncrypt, createUser_1.default);
//signs user into the app 
router.post('/signin', (0, joiValidation_1.default)(userSChema_1.userSchema), checkUser_1.default, passwordUtils.passwordValidation, signinUser_1.signinUser);
exports.default = router;
