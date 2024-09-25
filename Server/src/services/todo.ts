import { PrismaClient } from "@prisma/client";

export interface CreateTodoPayload {
    Title: string;
    Description: string;
}
export interface TodoPayload {
    id: number;
}

export interface updateTodoPayload {
    id: number;
    Title: string;
    Description: string;
}

const prisma = new PrismaClient();

class TodoService {
    // Create a new todo
    public static async createTodo(payload: CreateTodoPayload) {
        const { Title, Description } = payload;

        await prisma.todo.create({
            data: {
                Title,
                Description
            },
        });
        return "Todo Created Successfully";
    }

    // Get all todos
    public static async allTodo() {
        return prisma.todo.findMany();
    }

    // Find a todo
    public static async findTodo(payload: TodoPayload) {
        const { id } = payload;
        return prisma.todo.findUnique({
            where: {
                id: id,
            },
        });
    }

    // Update a todo
    public static async updateTodo(payload: updateTodoPayload) {
        const { id, Title, Description } = payload;

        await prisma.todo.update({
            where: {
                id: id,
            },
            data: {
                Title: Title,
                Description: Description
            },
        });
        return "Todo Updated Successfully";
    }

    // delete a todos
    public static async deleteTodo(payload: TodoPayload) {
        const { id } = payload;
        await prisma.todo.delete({
            where: {
                id: id,
            },
        });
        return "Todo Deleted Successfully";
    }
}

export default TodoService;