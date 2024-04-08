import { PrismaClient, Prisma, Anamnesis } from "@prisma/client";

const prisma = new PrismaClient();

export class AnamnesisRepository {
  async create(data: Prisma.AnamnesisCreateInput): Promise<Anamnesis> {
    const anamnesis = await prisma.anamnesis.create({ data });
    return anamnesis;
  }

  async getAll(): Promise<Anamnesis[]> {
    return await prisma.anamnesis.findMany();
  }

  async getById(id: number): Promise<Anamnesis | null> {
    return await prisma.anamnesis.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.AnamnesisUpdateInput): Promise<Anamnesis> {
    return await prisma.anamnesis.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Anamnesis> {
    return await prisma.anamnesis.delete({
      where: { id },
    });
  }
}
