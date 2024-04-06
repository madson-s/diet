import { PrismaClient, Prisma, Food } from '@prisma/client';

const prisma = new PrismaClient();

export class FoodRepository {
  async create(data: Prisma.FoodCreateInput): Promise<Food> {
    const food = await prisma.food.create({ data });
    return food;
  }

  async getAll(): Promise<Food[]> {
    return await prisma.food.findMany();
  }

  async getAllSync(lastSyncDate: Date): Promise<Food[]> {
    return await prisma.food.findMany({
      where: {
        updatedAt: { gte: lastSyncDate }
      }
    });
  }

  async getById(id: number): Promise<Food | null> {
    return await prisma.food.findUnique({
      where: { id }
    });
  }

  async update(id: number, data: Prisma.FoodUpdateInput): Promise<Food> {
    return await prisma.food.update({
      where: { id },
      data
    });
  }

  async delete(id: number): Promise<Food> {
    return await prisma.food.delete({
      where: { id }
    });
  }
}
