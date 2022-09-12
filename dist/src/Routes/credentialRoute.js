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
const createCredential_1 = __importDefault(require("../Controllers/credentialController/createCredential"));
const deleteCredential_1 = require("../Controllers/credentialController/deleteCredential");
const getCredentials_1 = require("../Controllers/credentialController/getCredentials");
const getCredentialsById_1 = require("../Controllers/credentialController/getCredentialsById");
const checkTitle_1 = require("../Middleware/credentialMidd/checkTitle");
const jwtValidation_1 = require("../Middleware/jwtValidation");
const passwordUtils = __importStar(require("../Utils/passwordEncrypt"));
const router = (0, express_1.Router)();
router.post('/credential/new', jwtValidation_1.jwtValidation, checkTitle_1.checkTitle, passwordUtils.cryptrEncrypt, createCredential_1.default);
router.get('/credential', jwtValidation_1.jwtValidation, getCredentials_1.getCredentials);
router.get('/credential/:id', jwtValidation_1.jwtValidation, getCredentialsById_1.getCredentialsById);
router.delete('/credential/:id/delete', jwtValidation_1.jwtValidation, deleteCredential_1.deleteCredential);
exports.default = router;
