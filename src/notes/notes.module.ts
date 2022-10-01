import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './notes.model';

@Module({
  providers: [NotesService],
  controllers: [NotesController],
  imports: [
    SequelizeModule.forFeature([Note])
  ]
})
export class NotesModule {}
