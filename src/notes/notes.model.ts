import { ApiProperty } from "@nestjs/swagger";
import { Table, Model, Column, DataType } from "sequelize-typescript";

interface NoteCreationAtributes {
    title: string;
    category: string;
    description: string;
}

@Table({tableName: "notes"})
export class Note extends Model<Note, NoteCreationAtributes> {
    @ApiProperty({example: "1", description: "id"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "Title", description: "Some title"})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: "Task", description: "Chosen category"})
    @Column({type: DataType.STRING, allowNull: false, validate: { isIn: [["Task", "Idea", "Random Thought"]] }})
    category: string;

    @ApiProperty({example: "Description with some date like this 2000-20-20", description: "Some description"})
    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @ApiProperty({example: "2000-20-20", description: "Match dates from description"})
    @Column({type: DataType.STRING, allowNull: true})
    matchDates: string;

    @ApiProperty({example: "false", description: "Is note archived or not"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isArchived: boolean;

    @ApiProperty({example: "10-01-2022", description: "Day of creation"})
    @Column({type: DataType.STRING, defaultValue: new Date().toJSON().slice(0,10)})
    createdAt: string;
}