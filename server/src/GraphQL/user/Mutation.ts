import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

const createUsers = async (_: String, { firstName, lastName, email, password }: { firstName: string, lastName: string, email: string, password: string }) => {
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

export { createUsers };