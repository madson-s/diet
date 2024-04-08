import { PrismaClient, Prisma, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {
  async add(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({ data });
    return user;
  }

  async getById(id: number): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async getByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }
}