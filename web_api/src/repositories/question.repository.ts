import { PrismaClient, Prisma, Question } from "@prisma/client";

const prisma = new PrismaClient();

export class QuestionRepository {
  async create(data: Prisma.QuestionCreateInput): Promise<Question> {
    const question = await prisma.question.create({ data });
    return question;
  }

  async getAll(): Promise<Question[]> {
    return await prisma.question.findMany();
  }

  async getById(id: number): Promise<Question | null> {
    return await prisma.question.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.QuestionUpdateInput): Promise<Question> {
    return await prisma.question.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Question> {
    return await prisma.question.delete({
      where: { id },
    });
  }
}
