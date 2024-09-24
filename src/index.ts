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
        plugins: [
            // Install a landing page plugin based on NODE_ENV
            process.env.NODE_ENV === 'production'
                ? ApolloServerPluginLandingPageProductionDefault({
                    graphRef: 'my-graph-id@my-graph-variant',
                    footer: false,
                })
                : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
        ],
    });

    // Start The Apolo Server
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

server();