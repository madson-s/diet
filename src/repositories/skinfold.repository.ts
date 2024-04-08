import { PrismaClient, Prisma, SkinFold } from "@prisma/client";

const prisma = new PrismaClient();

export class SkinFoldRepository {
  async create(data: Prisma.SkinFoldCreateInput): Promise<SkinFold> {
    const skinFold = await prisma.skinFold.create({ data });
    return skinFold;
  }

  async getAll(): Promise<SkinFold[]> {
    return await prisma.skinFold.findMany();
  }

  async getById(id: number): Promise<SkinFold | null> {
    return await prisma.skinFold.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.SkinFoldUpdateInput): Promise<SkinFold> {
    return await prisma.skinFold.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<SkinFold> {
    return await prisma.skinFold.delete({
      where: { id },
    });
  }
}
