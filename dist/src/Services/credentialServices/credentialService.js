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
exports.deleteCredential = exports.getCredentialsbyId = exports.getCredentialsTitle = exports.getCredentials = exports.createCredential = void 0;
const credentialRepository = __importStar(require("../../Repository/credentialRepository"));
const password = __importStar(require("../../Utils/passwordEncrypt"));
function createCredential(credential) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield credentialRepository.createCredential(credential);
        if (!response) {
            throw { type: "bad_request", message: "could not create" };
        }
        return response;
    });
}
exports.createCredential = createCredential;
function getCredentials(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield credentialRepository.getCredentials(id);
        if (!credentials) {
            throw { type: "err_not_found", message: "no credentials found" };
        }
        credentials.forEach(e => {
            return e.password = password.cryptrDecrypt(e.password);
        });
        return credentials;
    });
}
exports.getCredentials = getCredentials;
function getCredentialsTitle(id, title) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield credentialRepository.getCredentialsByTitle(id, title);
        console.log(credentials);
        if (credentials[0]) {
            console.log(credentials[0]);
            throw { type: "forbidden", message: "title already in use" };
        }
    });
}
exports.getCredentialsTitle = getCredentialsTitle;
function getCredentialsbyId(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield credentialRepository.getCredentialsById(id, userId);
        if (!credentials) {
            throw { type: "err_not_found", message: "no credentials found" };
        }
        credentials.forEach(e => {
            return e.password = password.cryptrDecrypt(e.password);
        });
        return credentials[0];
    });
}
exports.getCredentialsbyId = getCredentialsbyId;
function deleteCredential(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const { count } = yield credentialRepository.deleteCredential(id, userId);
        if (count === 0) {
            throw { type: "error_not_found", message: "no credentials found" };
        }
    });
}
exports.deleteCredential = deleteCredential;
