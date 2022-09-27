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
const NoteSchema_1 = require("../helpers/NoteSchema");
class noteService {
    create(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdNote = yield NoteSchema_1.default.create(note);
            return createdNote;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield NoteSchema_1.default.find();
            return notes;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("Id not found");
            }
            const note = yield NoteSchema_1.default.findById(id);
            return note;
        });
    }
    update(note) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!note._id) {
                throw new Error("Id not found");
            }
            const updateNote = yield NoteSchema_1.default.findByIdAndUpdate(note._id, note, { new: true, runValidators: true, overwrite: true });
            return updateNote;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error("Id not found");
            }
            const note = yield NoteSchema_1.default.findByIdAndDelete(id);
            return note;
        });
    }
    stats() {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield NoteSchema_1.default.find();
            let activeIdea = 0;
            let activeTask = 0;
            let activeRandomThought = 0;
            let archiveIdea = 0;
            let archiveTask = 0;
            let archiveRandomThoughtArc = 0;
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].category === "Idea" && !notes[i].isArchived) {
                    activeIdea++;
                }
                else if (notes[i].category === "Idea" && notes[i].isArchived) {
                    archiveIdea++;
                }
                else if (notes[i].category === "Task" && !notes[i].isArchived) {
                    activeTask++;
                }
                else if (notes[i].category === "Task" && notes[i].isArchived) {
                    archiveTask++;
                }
                else if (notes[i].category === "Random Thought" && !notes[i].isArchived) {
                    activeRandomThought++;
                }
                else if (notes[i].category === "Random Thought" && notes[i].isArchived) {
                    archiveRandomThoughtArc++;
                }
            }
            const stats = {
                activeIdea: activeIdea,
                activeTask: activeTask,
                activeRandomThought: activeRandomThought,
                archiveIdea: archiveIdea,
                archiveTask: archiveTask,
                archiveRandomThoughtArc: archiveRandomThoughtArc
            };
            return stats;
        });
    }
}
exports.default = new noteService();
//# sourceMappingURL=noteService.js.map