import { PrismaClient, Prisma, Portion } from "@prisma/client";

const prisma = new PrismaClient();

export class PortionRepository {
  async create(data: Prisma.PortionCreateInput): Promise<Portion> {
    const portion = await prisma.portion.create({ data });
    return portion;
  }

  async getAll(): Promise<Portion[]> {
    return await prisma.portion.findMany();
  }

  async getById(id: number): Promise<Portion | null> {
    return await prisma.portion.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.PortionUpdateInput): Promise<Portion> {
    return await prisma.portion.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Portion> {
    return await prisma.portion.delete({
      where: { id },
    });
  }
}
