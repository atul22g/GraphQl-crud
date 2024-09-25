import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import TypeDefs from './GraphQL/TypeDefs';
import Resolvers from './GraphQL/Resolvers';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

const server = async () => {
    // Create A Apolo Server
    const server = new ApolloServer({
        typeDefs: TypeDefs,
        resolvers: Resolvers,
    });

    // Start The Apolo Server
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

server();