"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const NoteController_1 = require("../repositories/NoteController");
const router = express.Router();
router.post("/notes", NoteController_1.default.create);
router.get("/notes", NoteController_1.default.getAll);
router.get("/notes/stats", NoteController_1.default.stats);
router.get("/notes/:id", NoteController_1.default.getOne);
router.patch("/notes/:id", NoteController_1.default.update);
router.delete("/notes/:id", NoteController_1.default.delete);
exports.default = router;
//# sourceMappingURL=router.js.map