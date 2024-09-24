const TypeDefs = `
        type Query {
            hello: String
        }
        type Mutation {
            createUsers(firstName: String!, lastName: String!, email: String, password: String!): Boolean!
        }
    `


export default TypeDefs;