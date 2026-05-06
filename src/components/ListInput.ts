interface ListInput {
    id: number;
    text: string;
    priority?: boolean;
    createdAt: Date;
    dueDate?: Date;
}
export default ListInput;