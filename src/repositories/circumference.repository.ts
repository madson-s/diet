import { PrismaClient, Prisma, Circumference } from "@prisma/client";

const prisma = new PrismaClient();

export class CircumferenceRepository {
  async create(data: Prisma.CircumferenceCreateInput): Promise<Circumference> {
    const circumference = await prisma.circumference.create({ data });
    return circumference;
  }

  async getAll(): Promise<Circumference[]> {
    return await prisma.circumference.findMany();
  }

  async getById(id: number): Promise<Circumference | null> {
    return await prisma.circumference.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.CircumferenceUpdateInput): Promise<Circumference> {
    return await prisma.circumference.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Circumference> {
    return await prisma.circumference.delete({
      where: { id },
    });
  }
}
