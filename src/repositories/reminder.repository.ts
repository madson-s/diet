import { PrismaClient, Prisma, Reminder } from "@prisma/client";

const prisma = new PrismaClient();

export class ReminderRepository {
  async create(data: Prisma.ReminderCreateInput): Promise<Reminder> {
    const reminder = await prisma.reminder.create({ data });
    return reminder;
  }

  async getAll(): Promise<Reminder[]> {
    return await prisma.reminder.findMany();
  }

  async getById(id: number): Promise<Reminder | null> {
    return await prisma.reminder.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.ReminderUpdateInput): Promise<Reminder> {
    return await prisma.reminder.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Reminder> {
    return await prisma.reminder.delete({
      where: { id },
    });
  }
}
