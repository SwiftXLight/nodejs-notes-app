import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './notes.model';

const reg = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

@Injectable()
export class NotesService {

    constructor(@InjectModel(Note) private noteRepository: typeof Note) {}

    async createNote(dto: CreateNoteDto) {
        try {
            const note = await this.noteRepository.create(dto);

            if (note.description) {
                note.matchDates = note.description.match(reg).join(", ");
            } else {
                note.matchDates = "";
            }

            return note;
        } catch(e) {
            return e.message;
        }
    }

    async getAllNotes() {
        try {
            const notes = await this.noteRepository.findAll();

            notes.forEach(note => {
                if (note.description) {
                    note.matchDates = note.description.match(reg).join(", ");
                } else {
                    note.matchDates = "";
                }
            })

            return notes;
        } catch(e) {
            return e.message;
        }
    }

    async getNote(id: number) {
        try {
            const note = await this.noteRepository.findOne({where: {id}});
            if (note) {

                if (note.description) {
                    note.matchDates = note.description.match(reg).join(", ");
                } else {
                    note.matchDates = "";
                }

                return note;
            } else {
                return `Can't find note with id ${id}`;
            }
        } catch(e) {
            return e.message;
        }
    }

    async deleteNote(id: number) {
        try {
            const note = await this.noteRepository.destroy({where: {id}})
            if (note === 1) {
                return `note with id ${id} was successfully deleted`
            } else if (note === 0) {
                return "Id not found";
            }
        } catch(e) {
            return e.message;
        }
    }

    async updateNote(id: number, noteDto: UpdateNoteDto) {
        try {
            const note = await this.noteRepository.update({ ...noteDto }, { where: {id}, returning: true })
            const curNote = note[1][0];

            if (curNote.description) {
                curNote.matchDates = curNote.description.match(reg).join(", ");
            } else {
                curNote.matchDates = "";
            }

            return curNote;
        } catch(e) {
            return e.message;
        }
    }
    
    async getNotesStats() {
        try {
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

        } catch(e) {
            return e.message;
        }
    }
}
