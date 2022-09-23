import NoteSchema from "../helpers/NoteSchema.js";
import INote from "../helpers/INote.js";

class noteService {
    async create(note: INote) {
        const createdNote = await NoteSchema.create(note);
        return createdNote;
    }

    async getAll() {
        const notes = await NoteSchema.find();
        return notes;
    }

    async getOne(id: String) {
        if (!id) {
            throw new Error("Id not found");
        }
        const note = await NoteSchema.findById(id);
        return note;
    }

    async update(note: INote) {
        if (!note._id) {
            throw new Error("Id not found");
        }
        const updateNote = await NoteSchema.findByIdAndUpdate(note._id, note, {new: true, runValidators: true, overwrite: true});
        return updateNote;
    }

    async delete(id: String) {
        if (!id) {
            throw new Error("Id not found");
        }
        const note = await NoteSchema.findByIdAndDelete(id);
        return note;
    }

    async stats() {
        const notes = await NoteSchema.find();

        let activeIdea = 0;
        let activeTask = 0;
        let activeRandomThought = 0;
        let archiveIdea = 0;
        let archiveTask = 0;
        let archiveRandomThoughtArc = 0;

        for (let i = 0; i < notes.length; i++) {
            if (notes[i].category === "Idea" && !notes[i].isArchived) {
              activeIdea++;
            } else if (notes[i].category === "Idea" && notes[i].isArchived) {
              archiveIdea++;
            } else if (notes[i].category === "Task" && !notes[i].isArchived) {
              activeTask++;
            } else if (notes[i].category === "Task" && notes[i].isArchived) {
              archiveTask++;
            } else if (notes[i].category === "Random Thought" && !notes[i].isArchived) {
              activeRandomThought++;
            } else if (notes[i].category === "Random Thought" && notes[i].isArchived) {
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
    }

}

export default new noteService();
