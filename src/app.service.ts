import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
    getNotes() {
        return [{id: 1, title: "title1", category: "Task", description: "description1", matchDates: [], isArchived: false, createdAt: "09-30-2022"}]
    }
}