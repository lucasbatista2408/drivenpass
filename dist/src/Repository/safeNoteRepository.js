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
exports.deleteSafeNote = exports.getSafeNotesbyId = exports.getCredentials = exports.createSafeNote = exports.getNotesByTitle = void 0;
const database_1 = __importDefault(require("../../database/db_strategy/database"));
function getNotesByTitle(id, title) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.safe_notes.findMany({
            where: {
                user_id: id,
                title: title
            }
        });
        return data;
    });
}
exports.getNotesByTitle = getNotesByTitle;
function createSafeNote(safenote) {
    return __awaiter(this, void 0, void 0, function* () {
        const note = yield database_1.default.safe_notes.create({ data: safenote });
        return note;
    });
}
exports.createSafeNote = createSafeNote;
function getCredentials(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.safe_notes.findMany({
            where: {
                user_id: id
            }
        });
        return data;
    });
}
exports.getCredentials = getCredentials;
function getSafeNotesbyId(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.safe_notes.findFirstOrThrow({
            where: {
                id: id,
                user_id: userId
            }
        });
        return data;
    });
}
exports.getSafeNotesbyId = getSafeNotesbyId;
function deleteSafeNote(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.safe_notes.deleteMany({
            where: {
                id: id,
                user_id: userId
            }
        });
        return data;
    });
}
exports.deleteSafeNote = deleteSafeNote;
