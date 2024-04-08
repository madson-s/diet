import { PrismaClient, Prisma, LateralCircumference } from "@prisma/client";

const prisma = new PrismaClient();

export class LateralCircumferenceRepository {
  async create(data: Prisma.LateralCircumferenceCreateInput): Promise<LateralCircumference> {
    const lateralCircumference = await prisma.lateralCircumference.create({ data });
    return lateralCircumference;
  }

  async getAll(): Promise<LateralCircumference[]> {
    return await prisma.lateralCircumference.findMany();
  }

  async getById(id: number): Promise<LateralCircumference | null> {
    return await prisma.lateralCircumference.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.LateralCircumferenceUpdateInput): Promise<LateralCircumference> {
    return await prisma.lateralCircumference.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<LateralCircumference> {
    return await prisma.lateralCircumference.delete({
      where: { id },
    });
  }
}
