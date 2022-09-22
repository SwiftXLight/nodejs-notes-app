import NoteSchema from "./helpers/NoteSchema.js";

class NoteController {
    async create(req, res) {
        try {
            const { title, category, description } = req.body;
            const note =  await NoteSchema.create({title, category, description});
            console.log(req.body);
            res.json(note);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const notes = await NoteSchema.find();
            return res.json(notes);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: "Id not found"});
            }
            const note = await NoteSchema.findById(id);
            return res.json(note);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const note = req.body;
            if (!note._id) {
                res.status(400).json({message: "Id not found"});
            }
            const updateNote = await NoteSchema.findByIdAndUpdate(note._id, note, {new: true});
            return res.json(updateNote);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: "Id not found"});
            }
            const note = await NoteSchema.findByIdAndDelete(id);
            return res.json(note);
        } catch(e) {
            res.status(500).json(e);
        }
    }
}

export default new NoteController();