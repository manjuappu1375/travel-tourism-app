"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    mongoUri: process.env.MONGO_URI,
    postgresUrl: process.env.POSTGRES_URL,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 5000,
};
