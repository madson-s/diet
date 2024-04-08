import { PrismaClient, Prisma, RefreshToken } from "@prisma/client";

interface createParams {
  createParams: {
    data: Prisma.RefreshTokenCreateInput,
  }
  updateParams: {
    where: Prisma.RefreshTokenWhereInput,
    data: Prisma.RefreshTokenUpdateInput,
  }
}

const prisma = new PrismaClient();

export class RefreshTokenRepository {
  async getByToken(token: string): Promise<RefreshToken | null> {
    return await prisma.refreshToken.findUnique({
      where: { token },
    });
  }

  async create({ createParams, updateParams }: createParams): Promise<RefreshToken> {
    const [,refreshToken] = await prisma.$transaction([
      prisma.refreshToken.updateMany(updateParams),
      prisma.refreshToken.create(createParams),
    ]);
    return refreshToken;
  }

  async update(id: number, data: Prisma.RefreshTokenUpdateInput): Promise<RefreshToken> {
    return await prisma.refreshToken.update({
      where: { id },
      data,
    });
  }
}
