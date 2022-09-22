import Router from "express";
import NoteSchema from "../helpers/NoteSchema.js";
import NoteController from "../NoteController.js";

const router = new Router();

router.post("/notes", NoteController.create);
router.get("/notes");
router.get("/notes/:id");
router.get("/notes/stats");
router.patch("/notes/:id");
router.delete("/notes/:id");

export default router;
