"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWifi = exports.getWifiById = exports.getWifi = exports.createWifi = void 0;
const database_1 = __importDefault(require("../../database/db_strategy/database"));
function createWifi(user) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(user.user_id);
        const wifi = yield database_1.default.wifi.create({ data: user });
        return wifi;
    });
}
exports.createWifi = createWifi;
function getWifi(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.wifi.findMany({
            where: {
                user_id: id
            }
        });
        return data;
    });
}
exports.getWifi = getWifi;
function getWifiById(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.wifi.findFirstOrThrow({
            where: {
                id: id,
                user_id: userId
            }
        });
        return [data];
    });
}
exports.getWifiById = getWifiById;
function deleteWifi(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.wifi.deleteMany({
            where: {
                id: id,
                user_id: userId
            }
        });
        return data;
    });
}
exports.deleteWifi = deleteWifi;
