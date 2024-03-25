import { PrismaClient, Prisma, Measure } from "@prisma/client";

const prisma = new PrismaClient();

export class MeasureRepository {
  async create(data: Prisma.MeasureCreateInput): Promise<Measure> {
    const measure = await prisma.measure.create({ data });
    return measure;
  }

  async getAll(): Promise<Measure[]> {
    return await prisma.measure.findMany();
  }

  async getById(id: number): Promise<Measure | null> {
    return await prisma.measure.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.MeasureUpdateInput): Promise<Measure> {
    return await prisma.measure.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Measure> {
    return await prisma.measure.delete({
      where: { id },
    });
  }
}
