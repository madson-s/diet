import { PrismaClient, Prisma, Validation } from "@prisma/client";

const prisma = new PrismaClient();

export class ValidationRepository {
  async create(data: Prisma.ValidationCreateInput): Promise<Validation> {
    const validation = await prisma.validation.create({ data });
    return validation;
  }

  async getAll(): Promise<Validation[]> {
    return await prisma.validation.findMany();
  }

  async getById(id: number): Promise<Validation | null> {
    return await prisma.validation.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.ValidationUpdateInput): Promise<Validation> {
    return await prisma.validation.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Validation> {
    return await prisma.validation.delete({
      where: { id },
    });
  }
}
