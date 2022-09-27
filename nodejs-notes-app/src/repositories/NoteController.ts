import noteService from "../services/noteService";
import { Request, Response } from 'express';

class NoteController {
    async create(req: Request, res: Response) {
        try {
            const note = await noteService.create(req.body);
            res.json(note);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const notes = await noteService.getAll();
            return res.json(notes);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const note = await noteService.getOne(req.params.id);
            return res.json(note);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updateNote = await noteService.update(req.body);
            return res.json(updateNote);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const note = await noteService.delete(req.params.id);
            return res.json(note);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async stats(req: Request, res: Response) {
        try {
            const stats = await noteService.stats();
            return res.json(stats);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }
}

export default new NoteController();