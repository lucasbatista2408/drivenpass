"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.cardSchema = joi_1.default.object({
    number: joi_1.default.string().required(),
    cardholder: joi_1.default.string().required(),
    cvv: joi_1.default.number().required(),
    expiration: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    is_virtual: joi_1.default.boolean().required(),
    type: joi_1.default.string().required(),
    title: joi_1.default.string().required(),
});
