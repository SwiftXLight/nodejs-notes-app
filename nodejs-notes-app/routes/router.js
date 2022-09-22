"use strict";
exports.__esModule = true;
var express = require("express");
var NoteController_js_1 = require("../repositories/NoteController.js");
var router = express.Router();
router.post("/notes", NoteController_js_1["default"].create);
router.get("/notes", NoteController_js_1["default"].getAll);
router.get("/notes/stats", NoteController_js_1["default"].stats);
router.get("/notes/:id", NoteController_js_1["default"].getOne);
router.patch("/notes/:id", NoteController_js_1["default"].update);
router["delete"]("/notes/:id", NoteController_js_1["default"]["delete"]);
exports["default"] = router;
