import { PrismaClient, Prisma, Patient } from "@prisma/client";

const prisma = new PrismaClient();

export class PatientRepository {
  async create(data: Prisma.PatientCreateInput): Promise<Patient> {
    const patient = await prisma.patient.create({ data });
    return patient;
  }

  async getAll(): Promise<Patient[]> {
    return await prisma.patient.findMany();
  }

  async getById(id: number): Promise<Patient | null> {
    return await prisma.patient.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.PatientUpdateInput): Promise<Patient> {
    return await prisma.patient.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Patient> {
    return await prisma.patient.delete({
      where: { id },
    });
  }
}