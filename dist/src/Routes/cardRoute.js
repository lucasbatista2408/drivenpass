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
const createCard_1 = __importDefault(require("../Controllers/cardController/createCard"));
const deleteCard_1 = require("../Controllers/cardController/deleteCard");
const getCards_1 = require("../Controllers/cardController/getCards");
const getCardsById_1 = require("../Controllers/cardController/getCardsById");
const checkCardTitle_1 = require("../Middleware/cardMidd/checkCardTitle");
const joiValidation_1 = __importDefault(require("../Middleware/joiValidation"));
const jwtValidation_1 = require("../Middleware/jwtValidation");
const cardSchema_1 = require("../Schema/cardSchema");
const validation = __importStar(require("../Utils/passwordEncrypt"));
const router = (0, express_1.Router)();
router.post('/card/new', jwtValidation_1.jwtValidation, (0, joiValidation_1.default)(cardSchema_1.cardSchema), checkCardTitle_1.checkCardTitle, validation.cryptrEncrypt, createCard_1.default);
router.get('/card', jwtValidation_1.jwtValidation, getCards_1.getCards);
router.get('/card/:id', jwtValidation_1.jwtValidation, getCardsById_1.getCardsById);
router.delete('/card/:id/delete', jwtValidation_1.jwtValidation, deleteCard_1.deleteCard);
exports.default = router;
