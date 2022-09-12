"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute_1 = __importDefault(require("./userRoute"));
const credentialRoute_1 = __importDefault(require("./credentialRoute"));
const safeNotesRoute_1 = __importDefault(require("./safeNotesRoute"));
const cardRoute_1 = __importDefault(require("./cardRoute"));
const wifiRoute_1 = __importDefault(require("./wifiRoute"));
const router = (0, express_1.Router)();
router.use(userRoute_1.default);
router.use(credentialRoute_1.default);
router.use(safeNotesRoute_1.default);
router.use(cardRoute_1.default);
router.use(wifiRoute_1.default);
exports.default = router;
