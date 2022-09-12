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
exports.checkEmail = exports.checkUser = exports.createUser = void 0;
const database_1 = __importDefault(require("../../database/db_strategy/database"));
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.users.create({ data: user });
        console.log(data);
        return data;
    });
}
exports.createUser = createUser;
function checkUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield database_1.default.users.findUniqueOrThrow({ where: { email: email } });
        return user;
    });
}
exports.checkUser = checkUser;
function checkEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield database_1.default.users.findUnique({ where: { email: email } });
        return user;
    });
}
exports.checkEmail = checkEmail;
