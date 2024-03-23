import { PrismaClient, Prisma, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {
  async add(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({ data });
    return user;
  }
}