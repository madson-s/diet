import { PrismaClient, UserType } from '@prisma/client';
import { CryptService } from '../src/services/hash.service';


async function createUser() {
  const cryptService = new CryptService()
  const password = await cryptService.hash('12345678')
  await prisma.user.createMany({
    data: [{
      email: 'admin@email.com',
      password: password,
      name: 'ADMIN DIET',
      type: UserType.ADMIN,
    }, {
      email: 'nutritionist@email.com',
      password: password,
      name: 'NUTRITIONIST DIET',
      type: UserType.NUTRITIONIST,
    }],
  });
}

const prisma = new PrismaClient();
async function main() {
  await createUser();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
