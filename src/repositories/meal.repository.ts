import { PrismaClient, Prisma, Meal } from "@prisma/client";

const prisma = new PrismaClient();

export class MealRepository {
  async create(data: Prisma.MealCreateInput): Promise<Meal> {
    const meal = await prisma.meal.create({ data });
    return meal;
  }

  async getAll(): Promise<Meal[]> {
    return await prisma.meal.findMany();
  }

  async getById(id: number): Promise<Meal | null> {
    return await prisma.meal.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.MealUpdateInput): Promise<Meal> {
    return await prisma.meal.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Meal> {
    return await prisma.meal.delete({
      where: { id },
    });
  }
}
