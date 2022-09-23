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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const router_1 = require("./routes/router");
const PORT = 5000;
const DB_URL = "mongodb+srv://SwiftXLight:user1@cluster0.ccifhb8.mongodb.net/?retryWrites=true&w=majority";
const app = express();
app.use(express.json());
app.use("", router_1.default);
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
        }
        catch (e) {
            console.log(e);
        }
    });
}
startApp();
//# sourceMappingURL=index.js.map