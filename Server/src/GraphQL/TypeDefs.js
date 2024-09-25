"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeDefs = `
    type Todo {
        id: Int
        Title: String
        Description: String
    }
    type Query {
        hello: String
        allTodo: [Todo]
    }
    type Mutation {
        createTodo(Title: String, Description: String): String!
        deleteTodo(id: Int): String!
        findTodo(id: Int): Todo!
        updateTodo(id: Int, Title: String, Description: String): String!
    }
`;
exports.default = TypeDefs;
