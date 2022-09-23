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
const noteService_1 = require("../services/noteService");
class NoteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield noteService_1.default.create(req.body);
                res.json(note);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield noteService_1.default.getAll();
                return res.json(notes);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield noteService_1.default.getOne(req.params.id);
                return res.json(note);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateNote = yield noteService_1.default.update(req.body);
                return res.json(updateNote);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield noteService_1.default.delete(req.params.id);
                return res.json(note);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    stats(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stats = yield noteService_1.default.stats();
                return res.json(stats);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
}
exports.default = new NoteController();
//# sourceMappingURL=NoteController.js.map