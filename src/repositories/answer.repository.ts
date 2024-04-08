import { PrismaClient, Prisma, Answer } from "@prisma/client";

const prisma = new PrismaClient();

export class AnswerRepository {
  async create(data: Prisma.AnswerCreateInput): Promise<Answer> {
    const answer = await prisma.answer.create({ data });
    return answer;
  }

  async getAll(): Promise<Answer[]> {
    return await prisma.answer.findMany();
  }

  async getById(id: number): Promise<Answer | null> {
    return await prisma.answer.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.AnswerUpdateInput): Promise<Answer> {
    return await prisma.answer.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Answer> {
    return await prisma.answer.delete({
      where: { id },
    });
  }
}