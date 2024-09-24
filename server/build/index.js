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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
// create PrismaClient instance
const client_1 = require("@prisma/client");
const TypeDefs_1 = __importDefault(require("./GraphQL/TypeDefs"));
const prismaClient = new client_1.PrismaClient();
// Create A Apolo Server
const server = new server_1.ApolloServer({
    typeDefs: TypeDefs_1.default,
    resolvers: {
        Query: {
            hello: () => 'Hello World!',
        },
        Mutation: {
            createUsers: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { firstName, lastName, email, password }) {
                yield prismaClient.user.create({
                    data: {
                        firstName,
                        lastName,
                        email,
                        password,
                        salt: 'salt'
                    }
                });
                return true;
            })
        }
    },
});
// Start The Apolo Server
const { url } = await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
