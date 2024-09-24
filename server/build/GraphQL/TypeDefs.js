"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypeDefs = `
        type Query {
            hello: String
        }
        type Mutation {
            createUsers(firstName: String!, lastName: String!, email: String, password: String!): Boolean!
        }
    `;
exports.default = TypeDefs;
