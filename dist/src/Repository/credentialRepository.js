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
exports.deleteCredential = exports.getCredentialsById = exports.getCredentialsByTitle = exports.getCredentials = exports.createCredential = void 0;
const database_1 = __importDefault(require("../../database/db_strategy/database"));
function createCredential(user) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(user.user_id);
        const credential = yield database_1.default.credentials.create({ data: user });
        return credential;
    });
}
exports.createCredential = createCredential;
function getCredentials(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.credentials.findMany({
            where: {
                user_id: id
            }
        });
        return data;
    });
}
exports.getCredentials = getCredentials;
function getCredentialsByTitle(id, title) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.credentials.findMany({
            where: {
                user_id: id,
                title: title
            }
        });
        return data;
    });
}
exports.getCredentialsByTitle = getCredentialsByTitle;
function getCredentialsById(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.credentials.findFirstOrThrow({
            where: {
                id: id,
                user_id: userId
            }
        });
        return [data];
    });
}
exports.getCredentialsById = getCredentialsById;
function deleteCredential(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.credentials.deleteMany({
            where: {
                id: id,
                user_id: userId
            }
        });
        return data;
    });
}
exports.deleteCredential = deleteCredential;
// client.$queryRaw(Prisma.sql`DELETE FROM credentials WHERE (id=$1 AND user_id=$2)`, [id,userId])
