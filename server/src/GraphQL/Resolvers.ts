import { createUsers } from "./user/Mutation";


const Resolvers = {
    Query: {
        hello: () => 'Hello World!',
    },
    Mutation: {
        createUsers: createUsers
    }
}

export default Resolvers;