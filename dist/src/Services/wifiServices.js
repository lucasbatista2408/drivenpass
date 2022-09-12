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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWifi = exports.getWifibyId = exports.getWifi = exports.createWifi = void 0;
const wifiRepository = __importStar(require("../Repository/wifiRepository"));
const password = __importStar(require("../Utils/passwordEncrypt"));
function createWifi(wifi) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield wifiRepository.createWifi(wifi);
        if (!response) {
            throw { type: "bad_request", message: "could not create" };
        }
        return response;
    });
}
exports.createWifi = createWifi;
function getWifi(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const wifi = yield wifiRepository.getWifi(id);
        if (!wifi) {
            throw { type: "err_not_found", message: "no credentials found" };
        }
        wifi.forEach(e => {
            return e.password = password.cryptrDecrypt(e.password);
        });
        return wifi;
    });
}
exports.getWifi = getWifi;
function getWifibyId(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const wifi = yield wifiRepository.getWifiById(id, userId);
        if (!wifi) {
            throw { type: "err_not_found", message: "no credentials found" };
        }
        wifi.forEach(e => {
            return e.password = password.cryptrDecrypt(e.password);
        });
        return wifi[0];
    });
}
exports.getWifibyId = getWifibyId;
function deleteWifi(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const { count } = yield wifiRepository.deleteWifi(id, userId);
        if (count === 0) {
            throw { type: "error_not_found", message: "no credentials found" };
        }
    });
}
exports.deleteWifi = deleteWifi;
