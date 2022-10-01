import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './notes.model';
import { NotesService } from './notes.service';
import { Stats } from './stats.model';

@ApiTags('Notes')
@Controller('notes')
export class NotesController {

    constructor(private notesService: NotesService) {}

    @ApiOperation({summary: "Note creation"})
    @ApiResponse({status: 200, type: Note})
    @Post()
    create(@Body() noteDto: CreateNoteDto) {
        return this.notesService.createNote(noteDto);
    }

    @ApiOperation({summary: "Getting all notes"})
    @ApiResponse({status: 200, type: [Note]})
    @Get()
    getAll() {
        return this.notesService.getAllNotes();
    }

    @ApiOperation({summary: "Getting notes stats"})
    @ApiResponse({status: 200, type: [Stats]})
    @Get("/stats")
    getStats() {
        return this.notesService.getNotesStats();
    }

    @ApiOperation({summary: "Getting certain note"})
    @ApiResponse({status: 200, type: [Note]})
    @Get("/:id")
    getOne(@Param("id") id: number) {
        return this.notesService.getNote(id);
    }

    @ApiOperation({summary: "Delete certain note"})
    @ApiResponse({status: 200, type: [Note]})
    @Delete("/:id")
    deleteOne(@Param("id") id: number) {
        return this.notesService.deleteNote(id);
    }

    @ApiOperation({summary: "Update certain note"})
    @ApiResponse({status: 200, type: [Note]})
    @Patch("/:id")
    updateOne(@Param("id") id: number, @Body() noteDto: UpdateNoteDto) {
        return this.notesService.updateNote(id, noteDto);
    }
}
