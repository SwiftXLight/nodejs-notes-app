import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {

    constructor(private notesService: NotesService) {}

    @Post()
    create(@Body() noteDto: CreateNoteDto) {
        return this.notesService.createNote(noteDto);
    }

    @Get()
    getAll() {
        return this.notesService.getAllNotes();
    }
}
