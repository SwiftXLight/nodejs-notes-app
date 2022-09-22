import noteService from "../services/noteService.js";

class NoteController {
    async create(req, res) {
        try {
            const note = await noteService.create(req.body);
            res.json(note);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async getAll(req, res) {
        try {
            const notes = await noteService.getAll();
            return res.json(notes);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async getOne(req, res) {
        try {
            const note = await noteService.getOne(req.params.id);
            return res.json(note);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async update(req, res) {
        try {
            const updateNote = await noteService.update(req.body);
            return res.json(updateNote);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const note = await noteService.delete(req.params.id);
            return res.json(note);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async stats(req, res) {
        try {
            const stats = await noteService.stats();
            return res.json(stats);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }
}

export default new NoteController();