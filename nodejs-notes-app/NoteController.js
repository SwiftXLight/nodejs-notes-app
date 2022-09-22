import NoteSchema from "./helpers/NoteSchema.js";

class NoteController {
    async create(req,res) {
        try {
            const { title, category, description } = req.body;
            const post =  await NoteSchema.create({title, category, description});
            console.log(req.body);
            res.json(post);
        } catch(e) {
            res.status(500).json(e);
        }
    }
}

export default new NoteController();