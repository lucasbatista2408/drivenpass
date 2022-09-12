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
exports.deleteCard = exports.getCardsById = exports.getCards = exports.createCard = exports.getCardsByTitle = void 0;
const database_1 = __importDefault(require("../../database/db_strategy/database"));
function getCardsByTitle(id, title) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.cards.findMany({
            where: {
                user_id: id,
                title: title
            }
        });
        return data;
    });
}
exports.getCardsByTitle = getCardsByTitle;
function createCard(user) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(user.user_id);
        const card = yield database_1.default.cards.create({ data: user });
        return card;
    });
}
exports.createCard = createCard;
function getCards(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.cards.findMany({
            where: {
                user_id: id
            }
        });
        return data;
    });
}
exports.getCards = getCards;
function getCardsById(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.cards.findFirstOrThrow({
            where: {
                id: id,
                user_id: userId
            }
        });
        return [data];
    });
}
exports.getCardsById = getCardsById;
function deleteCard(id, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield database_1.default.cards.deleteMany({
            where: {
                id: id,
                user_id: userId
            }
        });
        return data;
    });
}
exports.deleteCard = deleteCard;
