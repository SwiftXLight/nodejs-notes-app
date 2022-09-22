import NoteSchema from "../helpers/NoteSchema.js";

class noteService {
    async create(note) {
        const createdNote = await NoteSchema.create(note);
        return createdNote;
    }

    async getAll() {
        const notes = await NoteSchema.find();
        return notes;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Id not found");
        }
        const note = await NoteSchema.findById(id);
        return note;
    }

    async update(note) {
        if (!note._id) {
            throw new Error("Id not found");
        }
        const updateNote = await NoteSchema.findByIdAndUpdate(note._id, note, {new: true});
        return updateNote;
    }

    async delete(id) {
        if (!id) {
            throw new Error("Id not found");
        }
        const note = await NoteSchema.findByIdAndDelete(id);
        return note;
    }
}

export default new noteService();