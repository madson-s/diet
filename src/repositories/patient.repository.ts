import { PrismaClient, Prisma, Patient } from '@prisma/client';

const prisma = new PrismaClient();

export class PatientRepository {
  async create(data: Prisma.PatientCreateInput): Promise<Patient> {
    const patient = await prisma.patient.create({ data });
    return patient;
  }

  async createMany(arrayData: Prisma.PatientCreateInput[]): Promise<{ id: number }[]> {
    const patients = await prisma.$transaction(
      arrayData.map((data) => {
        return prisma.patient.create({ data, select: { id: true } });
      })
    );
    return patients;
  }

  async getAll(): Promise<Patient[]> {
    return await prisma.patient.findMany();
  }

  async getAllSync(lastSyncDate: Date): Promise<Patient[]> {
    return await prisma.patient.findMany({
      where: {
        updatedAt: { gte: lastSyncDate }
      }
    });
  }

  async getById(id: number): Promise<Patient | null> {
    return await prisma.patient.findUnique({
      where: { id }
    });
  }

  async update(id: number, data: Prisma.PatientUpdateInput): Promise<Patient> {
    return await prisma.patient.update({
      where: { id },
      data
    });
  }

  async delete(id: number): Promise<Patient> {
    return await prisma.patient.delete({
      where: { id }
    });
  }
}
