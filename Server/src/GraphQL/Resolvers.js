"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mutation_1 = require("./Todo/Mutation");
const Resolvers = {
    Query: {
        hello: () => 'Hello World!',
        allTodo: Mutation_1.allTodo
    },
    Mutation: {
        createTodo: Mutation_1.createTodo,
        deleteTodo: Mutation_1.deleteTodo,
        findTodo: Mutation_1.findTodo,
        updateTodo: Mutation_1.updateTodo,
    }
};
exports.default = Resolvers;
