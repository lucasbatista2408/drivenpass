"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandlingMiddleware_1 = __importDefault(require("./Middleware/errorHandlingMiddleware"));
const routes_1 = __importDefault(require("./Routes/routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = Number(process.env.PORT) || 5000;
app.use(routes_1.default);
app.use(errorHandlingMiddleware_1.default);
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`SERVER UP ON PORT ${PORT}`);
});
