import mongoose from "mongoose";
const reg = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

const NoteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {
        type: String,
        enum: ["Task", "Idea", "Random Thought"],
        required: true
    },
    description: {type: String, required: true},
    createdAt: {
        type: String,
        default: new Date().toJSON().slice(0,10),
        immutable: true,
        readonly: true
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    datesMatch: {
        type: Array,
        default: function() {
            if (this.description.match(reg)) {
                return this.description.match(reg).join(", ");
            }
            return [];
        },
        readonly: true
    }
});

export default mongoose.model("NoteSchema", NoteSchema);