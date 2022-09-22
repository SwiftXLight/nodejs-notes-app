import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true}
});

export default mongoose.model("NoteSchema", NoteSchema);