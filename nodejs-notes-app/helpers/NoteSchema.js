import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    createdAt: {
        type: String,
        default: new Date().toJSON().slice(0,10),
    },
    isArchived: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("NoteSchema", NoteSchema);