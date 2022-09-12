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
exports.deleteSafeNote = exports.getSafeNotesbyId = exports.getSafeNotes = exports.createSafeNote = exports.getNotesByTitle = void 0;
const safeNoteRepository = __importStar(require("../Repository/safeNoteRepository"));
function getNotesByTitle(id, title) {
    return __awaiter(this, void 0, void 0, function* () {
        const note = yield safeNoteRepository.getNotesByTitle(id, title);
        if (note[0]) {
            throw { type: "forbidden", message: "note exists" };
        }
    });
}
exports.getNotesByTitle = getNotesByTitle;
function createSafeNote(safenote) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield safeNoteRepository.createSafeNote(safenote);
        if (!response) {
            throw { type: "bad_request", message: "could not create" };
        }
        return response;
    });
}
exports.createSafeNote = createSafeNote;
function getSafeNotes(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const safenote = yield safeNoteRepository.getCredentials(id);
        if (!safenote) {
            throw { type: "err_not_found", message: "no credentials found" };
        }
        return safenote;
    });
}
exports.getSafeNotes = getSafeNotes;
function getSafeNotesbyId(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const safenote = yield safeNoteRepository.getSafeNotesbyId(id, userId);
        if (!safenote) {
            throw { type: "err_not_found", message: "no credentials found" };
        }
        return safenote;
    });
}
exports.getSafeNotesbyId = getSafeNotesbyId;
function deleteSafeNote(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const { count } = yield safeNoteRepository.deleteSafeNote(id, userId);
        if (count === 0) {
            throw { type: "error_not_found", message: "no credentials found" };
        }
    });
}
exports.deleteSafeNote = deleteSafeNote;
