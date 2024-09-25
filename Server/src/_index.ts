import express from 'express';
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import TypeDefs from './GraphQL/TypeDefs';
import Resolvers from './GraphQL/Resolvers';

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: TypeDefs,
        resolvers: Resolvers,
    })
    
    app.use(bodyParser.json());
    app.use(cors({ origin: '*' }));

    await server.start();

    app.use("/graphql", expressMiddleware(server));
    app.use("/" , (_, res) => {res.send("Server is Running")});

    app.listen(8000, () => console.log("Serevr Started at PORT 8000"));
}

startServer();