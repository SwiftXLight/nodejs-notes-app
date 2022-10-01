import { Table, Model, Column, DataType } from "sequelize-typescript";

interface NoteCreationAtributes {
    title: string;
    category: string;
    description: string;
}

@Table({tableName: "notes"})
export class Note extends Model<Note, NoteCreationAtributes> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    category: string;

    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @Column({type: DataType.STRING, allowNull: true})
    matchDates: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isArchived: boolean;
}