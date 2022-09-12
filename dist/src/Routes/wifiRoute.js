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
const createWifi_1 = __importDefault(require("../Controllers/wifiController/createWifi"));
const deleteWifi_1 = require("../Controllers/wifiController/deleteWifi");
const getWifi_1 = require("../Controllers/wifiController/getWifi");
const getWifiById_1 = require("../Controllers/wifiController/getWifiById");
const joiValidation_1 = __importDefault(require("../Middleware/joiValidation"));
const jwtValidation_1 = require("../Middleware/jwtValidation");
const wifiSchema_1 = require("../Schema/wifiSchema");
const validation = __importStar(require("../Utils/passwordEncrypt"));
const router = (0, express_1.Router)();
router.post('/wifi/new', jwtValidation_1.jwtValidation, (0, joiValidation_1.default)(wifiSchema_1.wifiSchema), validation.cryptrEncrypt, createWifi_1.default);
router.get('/wifi', jwtValidation_1.jwtValidation, getWifi_1.getWifi);
router.get('/wifi/:id', jwtValidation_1.jwtValidation, getWifiById_1.getWifiById);
router.delete('/wifi/:id/delete', jwtValidation_1.jwtValidation, deleteWifi_1.deleteWifi);
exports.default = router;
