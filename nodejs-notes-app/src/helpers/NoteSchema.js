"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var reg = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;
var NoteSchema = new mongoose_1["default"].Schema({
    title: { type: String, required: true },
    category: {
        type: String,
        "enum": ["Task", "Idea", "Random Thought"],
        required: true
    },
    description: { type: String, required: true },
    createdAt: {
        type: String,
        "default": new Date().toJSON().slice(0, 10),
        immutable: true,
        readonly: true
    },
    isArchived: {
        type: Boolean,
        "default": false
    },
    datesMatch: {
        type: Array,
        "default": function () {
            // @ts-ignore: Unreachable code error
            if (this.description.match(reg)) {
                // @ts-ignore: Unreachable code error
                return this.description.match(reg).join(", ");
            }
            return [];
        },
        readonly: true
    }
});
exports["default"] = mongoose_1["default"].model("NoteSchema", NoteSchema);
