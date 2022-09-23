export default interface INote {
    _id: string;
    title: string;
    category: "Task" | "Random Thought" | "Idea";
    description: string;
    createdAt: string;
    isArchived: boolean;
    datesMatch: string[];
}