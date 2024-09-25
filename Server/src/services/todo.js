"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TodoService {
    // Create a new todo
    static createTodo(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Title, Description } = payload;
            yield prisma.todo.create({
                data: {
                    Title,
                    Description
                },
            });
            return "Todo Created Successfully";
        });
    }
    // Get all todos
    static allTodo() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.todo.findMany();
        });
    }
    // Find a todo
    static findTodo(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = payload;
            return prisma.todo.findUnique({
                where: {
                    id: id,
                },
            });
        });
    }
    // Update a todo
    static updateTodo(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, Title, Description } = payload;
            yield prisma.todo.update({
                where: {
                    id: id,
                },
                data: {
                    Title: Title,
                    Description: Description
                },
            });
            return "Todo Updated Successfully";
        });
    }
    // delete a todos
    static deleteTodo(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = payload;
            yield prisma.todo.delete({
                where: {
                    id: id,
                },
            });
            return "Todo Deleted Successfully";
        });
    }
}
exports.default = TodoService;
