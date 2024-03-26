import { PrismaClient, Prisma, Appointment } from "@prisma/client";

const prisma = new PrismaClient();

export class AppointmentRepository {
  async create(data: Prisma.AppointmentCreateInput): Promise<Appointment> {
    const appointment = await prisma.appointment.create({ data });
    return appointment;
  }

  async getAll(): Promise<Appointment[]> {
    return await prisma.appointment.findMany();
  }

  async getById(id: number): Promise<Appointment | null> {
    return await prisma.appointment.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.AppointmentUpdateInput): Promise<Appointment> {
    return await prisma.appointment.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Appointment> {
    return await prisma.appointment.delete({
      where: { id },
    });
  }
}
