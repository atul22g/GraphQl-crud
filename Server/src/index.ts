import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import TypeDefs from './GraphQL/TypeDefs';
import Resolvers from './GraphQL/Resolvers';
import cors from 'cors';

const server = async () => {
    // Create A Apolo Server
    const server = new ApolloServer({
        typeDefs: TypeDefs,
        resolvers: Resolvers,
    });

    // Start The Apolo Server with CORS enabled
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async ({ req, res }) => {
            // Apply CORS middleware with specific origin
            cors({ origin: '*' })(req, res, () => {});
            return { req, res };
        },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

server();