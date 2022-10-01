import { ApiProperty } from "@nestjs/swagger";

export class UpdateNoteDto {
    @ApiProperty({example: "Title", description: "Some title"})
    readonly title: string;

    @ApiProperty({example: "Task", description: "Chosen category"})
    readonly category: string;

    @ApiProperty({example: "Description with some date like this 2000-20-20", description: "Some description"})
    readonly description: string;
}