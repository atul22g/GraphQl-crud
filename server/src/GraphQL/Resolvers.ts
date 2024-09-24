import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

const Resolvers = {
    Query: {
        hello: () => 'Hello World!',
    },
    Mutation: {
        createUsers: async (_: String, { firstName, lastName, email, password }: { firstName: string, lastName: string, email: string, password: string }) => {
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
}

export default Resolvers;