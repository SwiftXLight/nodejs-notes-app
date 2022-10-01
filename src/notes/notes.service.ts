import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './notes.model';

@Injectable()
export class NotesService {

    constructor(@InjectModel(Note) private noteRepository: typeof Note) {}

    async createNote(dto: CreateNoteDto) {
        try {
            const note = await this.noteRepository.create(dto);
            return note;
        } catch(e) {
            return e.message;
        }
    }

    async getAllNotes() {
        try {
            const notes = await this.noteRepository.findAll();
            return notes;
        } catch(e) {
            return e.message;
        }
    }

    async getNote(id: number) {
        if (!id) {
            throw new Error("Id not found");
        }
        try {
            const note = await this.noteRepository.findOne({where: {id}});
            return note;
        } catch(e) {
            return e.message;
        }
    }

    async deleteNote(id: number) {
        if (!id) {
            throw new Error("Id not found");
        }
        try {
            const note = await this.noteRepository.destroy({where: {id}})
            return note;
        } catch(e) {
            return e.message;
        }
    }

    async updateNote(id: number, noteDto: UpdateNoteDto) {
        if (!id) {
            throw new Error("Id not found");
        }
        try {
            const note = await this.noteRepository.update({ ...noteDto }, { where: {id}, returning: true })
            return note;
        } catch(e) {
            return e.message;
        }
    }

    
    async getNotesStats() {
        try 
        {
            const notes = await this.noteRepository.findAll();

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

        } catch(e) {return e.message;}
    }
}
