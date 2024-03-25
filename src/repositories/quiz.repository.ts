import { PrismaClient, Prisma, Quiz } from "@prisma/client";

const prisma = new PrismaClient();

export class QuizRepository {
  async create(data: Prisma.QuizCreateInput): Promise<Quiz> {
    const quiz = await prisma.quiz.create({ data });
    return quiz;
  }

  async getAll(): Promise<Quiz[]> {
    return await prisma.quiz.findMany();
  }

  async getById(id: number): Promise<Quiz | null> {
    return await prisma.quiz.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.QuizUpdateInput): Promise<Quiz> {
    return await prisma.quiz.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Quiz> {
    return await prisma.quiz.delete({
      where: { id },
    });
  }
}
