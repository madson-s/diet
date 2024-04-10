import { PrismaClient, Prisma, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
  async add(data: Prisma.UserCreateInput): Promise<any> {
    const user = await prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        type: true
      }
    });
    return user;
  }

  async getById(id: number): Promise<any | null> {
    return await prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, type: true }
    });
  }

  async getByEmail(email: string): Promise<any | null> {
    return await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true, type: true }
    });
  }
}
