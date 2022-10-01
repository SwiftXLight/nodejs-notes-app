import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './notes.model';

@Injectable()
export class NotesService {

    constructor(@InjectModel(Note) private noteRepository: typeof Note) {
        
    }

    async createNote(dto: CreateNoteDto) {
        const note = await this.noteRepository.create(dto);
        return note;
    }

    async getAllNotes() {
        const notes = await this.noteRepository.findAll();
        return notes;
    }

}
