import { PrismaClient, Prisma, Bioimpedance } from "@prisma/client";

const prisma = new PrismaClient();

export class BioimpedanceRepository {
  async create(data: Prisma.BioimpedanceCreateInput): Promise<Bioimpedance> {
    const bioimpedance = await prisma.bioimpedance.create({ data });
    return bioimpedance;
  }

  async getAll(): Promise<Bioimpedance[]> {
    return await prisma.bioimpedance.findMany();
  }

  async getById(id: number): Promise<Bioimpedance | null> {
    return await prisma.bioimpedance.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.BioimpedanceUpdateInput): Promise<Bioimpedance> {
    return await prisma.bioimpedance.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Bioimpedance> {
    return await prisma.bioimpedance.delete({
      where: { id },
    });
  }
}
