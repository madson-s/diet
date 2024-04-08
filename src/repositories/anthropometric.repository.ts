import { PrismaClient, Prisma, Anthropometric } from "@prisma/client";

const prisma = new PrismaClient();

export class AnthropometricRepository {
  async create(data: Prisma.AnthropometricCreateInput): Promise<Anthropometric> {
    const anthropometric = await prisma.anthropometric.create({ data });
    return anthropometric;
  }

  async getAll(): Promise<Anthropometric[]> {
    return await prisma.anthropometric.findMany();
  }

  async getById(id: number): Promise<Anthropometric | null> {
    return await prisma.anthropometric.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.AnthropometricUpdateInput): Promise<Anthropometric> {
    return await prisma.anthropometric.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Anthropometric> {
    return await prisma.anthropometric.delete({
      where: { id },
    });
  }
}
