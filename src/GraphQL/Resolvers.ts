import { allTodo, createTodo, deleteTodo, findTodo, updateTodo } from "./Todo/Mutation";


const Resolvers = {
    Query: {
        hello: () => 'Hello World!',
        allTodo: allTodo
    },
    Mutation: {
        createTodo: createTodo,
        deleteTodo: deleteTodo,
        findTodo: findTodo,
        updateTodo: updateTodo,
    }
}

export default Resolvers;