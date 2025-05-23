"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
// PARSERS
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: [
        'https://rittikadev.vercel.app',
        'https://portfolio-dashboard-six-lime.vercel.app',
        'http://localhost:3000',
        'http://localhost:3001',
    ],
    credentials: true,
}));
// ROUTES
app.use('/api/', routes_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to Rittika Dev Portfolio api server!');
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
