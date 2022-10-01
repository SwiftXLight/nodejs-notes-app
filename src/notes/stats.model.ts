import { ApiProperty } from "@nestjs/swagger";
import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({tableName: "stats"})
export class Stats extends Model<Stats> {
    @ApiProperty({example: "1", description: "Number of this"})
    @Column({type: DataType.STRING})
    activeIdea: string;
    @ApiProperty({example: "1", description: "Number of this"})
    @Column({type: DataType.STRING})
    activeTask: string;
    @ApiProperty({example: "1", description: "Number of this"})
    @Column({type: DataType.STRING})
    activeRandomThought: string;
    @ApiProperty({example: "1", description: "Number of this"})
    @Column({type: DataType.STRING})
    archiveIdea: string;
    @ApiProperty({example: "1", description: "Number of this"})
    @Column({type: DataType.STRING})
    archiveTask: string;
    @ApiProperty({example: "1", description: "Number of this"})
    @Column({type: DataType.STRING})
    rchiveRandomThoughtArc: string;
}