import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// create PrismaClient instance
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

// Create A Apolo Server
const server = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
        }
        type Mutation {
            createUsers(firstName: String!, lastName: String!, email: String, password: String!): Boolean!
        }
    `,
    resolvers: {
        Query: {
            hello: () => 'Hello World!',
        },
        Mutation: {
            createUsers: async (_, { firstName, lastName, email , password }: { firstName: string, lastName: string, email: string, password: string }) => {
                await prismaClient.user.create({
                    data: {
                        firstName,
                        lastName,
                        email,
                        password,
                        salt: 'salt'
                    }
                });
                return true;
            }
        }
    },
});

// Start The Apolo Server
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);