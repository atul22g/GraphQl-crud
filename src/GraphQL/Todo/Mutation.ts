import TodoService, { CreateTodoPayload, TodoPayload, updateTodoPayload } from "../../services/todo";

const createTodo = async (_: any, payload: CreateTodoPayload) => {
    const res = await TodoService.createTodo(payload);
    return res;
}

const allTodo = async () => {
    const res = await TodoService.allTodo();
    return res;
}

const deleteTodo = async (_: any, payload: TodoPayload) => {
    const res = await TodoService.deleteTodo(payload);
    return res;
}

const findTodo = async (_: any, payload: TodoPayload) => {
    const res = await TodoService.findTodo(payload);
    return res;
}

const updateTodo = async (_: any, payload: updateTodoPayload) => {
    const res = await TodoService.updateTodo(payload);
    return res;
}

export { createTodo, allTodo, deleteTodo, findTodo, updateTodo };